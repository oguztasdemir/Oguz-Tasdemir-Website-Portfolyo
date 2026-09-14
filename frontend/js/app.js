/**
 * Uygulama Başlatıcı ve Olay Koordinatörü (frontend/js/app.js)
 * 3-Panelli Mühendislik Çalışma İstasyonu standardı:
 * 1. Sol Panel (Rail) Menü ve Çalışma Alanı Geçişleri
 * 2. Orta Panel (Browser) Arama, Çip Filtresi ve Klavye Kısayolları (Ctrl+K, Ok Tuşları)
 * 3. Sağ Panel (Stage) Derin Vaka Analizi ve TSV / CSV Dışa Aktarımı
 * 4. F5 Veri Kaybı Korumalı SQLite WAL İletişim Formu
 * 5. SSE Canlı Telemetri ve Güvenli Sunucu Kapatma
 * 6. Çift Tema Yönetimi (Obsidian Koyu / Yumuşak Açık)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DOM Referansları
  const railMenuBtns = document.querySelectorAll('.rail-menu-btn');
  const workspaceViews = document.querySelectorAll('.workspace-view');

  // Split View DOM Elemanları (Panel 02 & Panel 03)
  const splitProjectsList = document.getElementById('splitProjectsList');
  const projectDetailContainer = document.getElementById('projectDetailContainer');
  const searchInput = document.getElementById('projectSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const categoryChips = document.querySelectorAll('.chip-filter');
  const searchResultCount = document.getElementById('searchResultCount');
  const railProjectsCountBadge = document.getElementById('railProjectsCountBadge');

  // Hızlı Aksiyonlar & Bildirim Toast
  const sidebarCopyEmailBtn = document.getElementById('sidebarCopyEmailBtn');
  const copyContactEmailBtn = document.getElementById('copyContactEmailBtn');
  const toastBar = document.getElementById('toastBar');
  const toastText = document.getElementById('toastText');

  // Durum Yönetimi
  let currentCategory = 'all';
  let currentTier = 'all'; // all, public, private
  let searchQuery = '';
  let activeProjectId = 'bist-bilanco-karlilik-tahmini';
  let allLoadedProjects = [];

  // 2. Sekme / Panel Geçişleri
  function switchWorkspaceView(viewId, updateState = true) {
    railMenuBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-panel') === viewId);
    });

    workspaceViews.forEach(view => {
      const targetId = `view${viewId.charAt(0).toUpperCase() + viewId.slice(1)}`;
      const isTarget = view.id.toLowerCase() === targetId.toLowerCase();
      view.classList.toggle('active', isTarget);
    });

    if (updateState) {
      if (viewId === 'projects' && portfolioDetailView && portfolioDetailView.style.display !== 'none' && activeProjectId) {
        window.location.hash = `project=${activeProjectId}`;
      } else {
        window.location.hash = `view=${viewId}`;
      }
      localStorage.setItem('active_view', viewId);
    }
  }

  railMenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetPanel = btn.getAttribute('data-panel');
      if (targetPanel) switchWorkspaceView(targetPanel);
    });
  });

  // Ana Sayfa İçi Hızlı Geçiş Butonları
  const homeGoProjectsBtn = document.getElementById('homeGoProjectsBtn');
  const homeGoAboutBtn = document.getElementById('homeGoAboutBtn');
  const homeGoCertsBtn = document.getElementById('homeGoCertsBtn');
  const homeGoCertsHeroBtn = document.getElementById('homeGoCertsHeroBtn');
  const homeFeaturedGoProjectsBtn = document.getElementById('homeFeaturedGoProjectsBtn');

  if (homeGoProjectsBtn) {
    homeGoProjectsBtn.addEventListener('click', () => switchWorkspaceView('projects'));
  }
  if (homeGoAboutBtn) {
    homeGoAboutBtn.addEventListener('click', () => switchWorkspaceView('about'));
  }
  if (homeGoCertsBtn) {
    homeGoCertsBtn.addEventListener('click', () => switchWorkspaceView('certificates'));
  }
  if (homeGoCertsHeroBtn) {
    homeGoCertsHeroBtn.addEventListener('click', () => switchWorkspaceView('certificates'));
  }
  if (homeFeaturedGoProjectsBtn) {
    homeFeaturedGoProjectsBtn.addEventListener('click', () => switchWorkspaceView('projects'));
  }

  // Ana Sayfa Yatay Kaydırma (Slider) Kontrolleri: Projeler & Sertifikalar
  const homeProjectsTrack = document.getElementById('homeProjectsTrack');
  const homeProjPrevBtn = document.getElementById('homeProjPrevBtn');
  const homeProjNextBtn = document.getElementById('homeProjNextBtn');

  if (homeProjectsTrack) {
    if (homeProjPrevBtn) {
      homeProjPrevBtn.addEventListener('click', () => {
        homeProjectsTrack.scrollBy({ left: -340, behavior: 'smooth' });
      });
    }
    if (homeProjNextBtn) {
      homeProjNextBtn.addEventListener('click', () => {
        homeProjectsTrack.scrollBy({ left: 340, behavior: 'smooth' });
      });
    }
  }

  const homeCertsTrack = document.getElementById('homeCertsTrack');
  const homeCertPrevBtn = document.getElementById('homeCertPrevBtn');
  const homeCertNextBtn = document.getElementById('homeCertNextBtn');

  if (homeCertsTrack) {
    if (homeCertPrevBtn) {
      homeCertPrevBtn.addEventListener('click', () => {
        homeCertsTrack.scrollBy({ left: -290, behavior: 'smooth' });
      });
    }
    if (homeCertNextBtn) {
      homeCertNextBtn.addEventListener('click', () => {
        homeCertsTrack.scrollBy({ left: 290, behavior: 'smooth' });
      });
    }
  }

  // Öne Çıkan Proje Kartlarına Tıklandığında Doğrudan Projeler Sayfasında Detayını Açma
  const homeProjectSliderCards = document.querySelectorAll('.home-project-slider-card');
  homeProjectSliderCards.forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      if (projId) {
        switchWorkspaceView('projects');
        openProjectDetailModal(projId);
      }
    });
  });

  // Ana Sayfa Odak Kartlarına Tıklandığında İlgili Kategoriyle Projelere Geçiş
  const showcaseCards = document.querySelectorAll('.showcase-card');
  const domainCategoryMap = {
    'ai': 'ai',
    'pos': 'fintech',
    'system': 'desktop',
    'math': 'academic'
  };

  showcaseCards.forEach(card => {
    card.addEventListener('click', () => {
      const domain = card.getAttribute('data-domain');
      const targetCat = domainCategoryMap[domain] || 'all';
      
      currentCategory = targetCat;
      categoryChips.forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-category') === targetCat);
      });

      switchWorkspaceView('projects');
      loadAndRenderSplitView();
    });
  });

  // Tier (Public / Private) Butonları Dinleyicisi
  const tierTabBtns = document.querySelectorAll('.tier-tab-btn');
  tierTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tierTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTier = btn.getAttribute('data-tier') || 'all';
      loadAndRenderSplitView();
    });
  });

  // Global Sayaçları Otomatik Güncelleme (Yeni proje eklendikçe otomatik artar)
  function updateGlobalProjectCounters(allProjects) {
    if (!allProjects || !Array.isArray(allProjects)) return;
    const totalCount = allProjects.length;
    const publicCount = allProjects.filter(p => p.visibility === 'public' || p.githubUrl).length;
    const privateCount = allProjects.filter(p => p.visibility === 'private' || !p.githubUrl).length;

    // 0. Tier Sayaç Hapları
    const tierCountAll = document.getElementById('tierCountAll');
    const tierCountPublic = document.getElementById('tierCountPublic');
    const tierCountPrivate = document.getElementById('tierCountPrivate');
    if (tierCountAll) tierCountAll.textContent = totalCount;
    if (tierCountPublic) tierCountPublic.textContent = publicCount;
    if (tierCountPrivate) tierCountPrivate.textContent = privateCount;

    // 1. Sol Panel Menü Rozeti
    if (railProjectsCountBadge) {
      railProjectsCountBadge.textContent = totalCount;
    }

    // 2. Ana Sayfa Hero Butonu: "Projeleri Keşfet (X)"
    const heroGoProjectsBtnText = document.getElementById('heroGoProjectsBtnText');
    if (heroGoProjectsBtnText) {
      heroGoProjectsBtnText.textContent = `Projeleri Keşfet (${totalCount})`;
    }

    // 3. Ana Sayfa Hero Metni Kalın Vurgu
    const heroProjectsCountStrong = document.getElementById('heroProjectsCountStrong');
    if (heroProjectsCountStrong) {
      heroProjectsCountStrong.textContent = `${totalCount} özgün projeyi`;
    }

    // 4. Ana Sayfa Telemetri Şeridi
    const telemetryProjectCount = document.getElementById('telemetryProjectCount');
    if (telemetryProjectCount) {
      telemetryProjectCount.textContent = totalCount;
    }

    // 5. Ana Sayfa Öne Çıkanlar Butonu: "Projelerime Git (X)"
    const featuredGoProjectsBtnText = document.getElementById('featuredGoProjectsBtnText');
    if (featuredGoProjectsBtnText) {
      featuredGoProjectsBtnText.textContent = `Projelerime Git (${totalCount})`;
    }

    // 6. Ana Sayfa Öne Çıkanlar Alt Başlık Açıklaması
    const featuredSliderCountText = document.getElementById('featuredSliderCountText');
    if (featuredSliderCountText) {
      featuredSliderCountText.textContent = `${totalCount} özgün projeden`;
    }

  // Kategori Filtre Çiplerindeki Sayıları Aktif Kademe (Tümü / Public / Private) Seçimine Göre Dinamik Hesapla
  function updateCategoryChipCounts(allProjects) {
    if (!allProjects || !Array.isArray(allProjects)) return;

    // Aktif kademeye (currentTier) göre filtrelenmiş temel havuz
    let scopedProjects = allProjects;
    if (currentTier && currentTier !== 'all') {
      scopedProjects = allProjects.filter(p => {
        const pVis = p.visibility || (p.githubUrl ? 'public' : 'private');
        return pVis === currentTier;
      });
    }

    const hasCat = (p, cat) => {
      const cats = Array.isArray(p.categories) ? p.categories : [p.category];
      if (cat === 'ai' || cat === 'nlp_data') {
        return cats.includes('ai') || cats.includes('nlp_data') || p.category === 'ai' || p.category === 'nlp_data';
      }
      return cats.includes(cat) || p.category === cat;
    };

    const countMap = {
      all: scopedProjects.length,
      academic: scopedProjects.filter(p => hasCat(p, 'academic')).length,
      ai: scopedProjects.filter(p => hasCat(p, 'ai')).length,
      nlp_data: scopedProjects.filter(p => hasCat(p, 'ai')).length,
      fintech: scopedProjects.filter(p => hasCat(p, 'fintech')).length,
      desktop: scopedProjects.filter(p => hasCat(p, 'desktop')).length,
      web: scopedProjects.filter(p => hasCat(p, 'web')).length
    };

    document.querySelectorAll('.chip-count').forEach(span => {
      const cat = span.getAttribute('data-count-cat');
      if (cat && countMap[cat] !== undefined) {
        span.textContent = countMap[cat];
      }
    });
  }

  // 3. Projeleri Yükleme ve Split-View Render Etme
  async function loadAndRenderSplitView() {
    // 1. Tüm projelerin tam ham listesini her zaman al (Tier sayaçları ve global sayaçlar için)
    if (!window._cachedFullProjectsList) {
      window._cachedFullProjectsList = await ApiService.fetchProjects('all', '', 'all');
      updateGlobalProjectCounters(window._cachedFullProjectsList);
    }

    // 2. Kategori sayaçlarını aktif tier'a göre dinamik güncelle
    updateCategoryChipCounts(window._cachedFullProjectsList);

    // 3. Aktif filtrelere göre listelenecek projeleri al
    allLoadedProjects = await ApiService.fetchProjects(currentCategory, searchQuery, currentTier);

    // Lisans tezini her zaman en başta göster
    if (Array.isArray(allLoadedProjects) && allLoadedProjects.length > 0) {
      const tezIdx = allLoadedProjects.findIndex(p => p.id === 'bist-bilanco-karlilik-tahmini');
      if (tezIdx > 0) {
        const [tezItem] = allLoadedProjects.splice(tezIdx, 1);
        allLoadedProjects.unshift(tezItem);
      }
    }

    // Aktif filtrelenmiş arama sayaç rozeti
    if (searchResultCount) {
      searchResultCount.textContent = `${allLoadedProjects.length} Kayıt`;
    }

    // Seçili proje listede var mı kontrol et, yoksa ilk projeyi al
    if (allLoadedProjects.length > 0) {
      const exists = allLoadedProjects.some(p => p.id === activeProjectId);
      if (!exists) {
        activeProjectId = allLoadedProjects[0].id;
      }
    } else {
      activeProjectId = null;
    }

    // Projeler Listesini Render Et
    UI.renderProjectsList(allLoadedProjects, splitProjectsList, (selectedId) => {
      activeProjectId = selectedId;
      openProjectDetailModal(selectedId);
    }, activeProjectId);
  }

  const portfolioMainStream = document.getElementById('portfolioMainStream');
  const portfolioDetailView = document.getElementById('portfolioDetailView');
  const btnBackToPortfolio = document.getElementById('btnBackToPortfolio');

  function openProjectDetailModal(projectId, updateHash = true) {
    const selectedProject = allLoadedProjects.find(p => p.id === projectId || p.id.toLowerCase() === String(projectId).toLowerCase());
    if (!selectedProject || !projectDetailContainer) return;

    activeProjectId = selectedProject.id;
    UI.renderProjectDetail(selectedProject, projectDetailContainer);
    
    // Listeyi gizle, tam ekran bilgi sayfasını göster
    if (portfolioMainStream) portfolioMainStream.style.display = 'none';
    if (portfolioDetailView) {
      portfolioDetailView.style.display = 'flex';
      portfolioDetailView.scrollTo({ top: 0 });
    }

    if (updateHash) {
      window.location.hash = `project=${projectId}`;
      localStorage.setItem('active_project_id', projectId);
    }

    // Dışa Aktarma Popover Bağlantısı
    bindExportActions(selectedProject);
  }

  function closeProjectDetailModal(updateHash = true) {
    // Bilgi sayfasını gizle, listeyi geri getir
    if (portfolioDetailView) portfolioDetailView.style.display = 'none';
    if (portfolioMainStream) portfolioMainStream.style.display = 'block';

    if (updateHash) {
      window.location.hash = `view=projects`;
      localStorage.removeItem('active_project_id');
    }
  }

  if (btnBackToPortfolio) {
    btnBackToPortfolio.addEventListener('click', closeProjectDetailModal);
  }

  // ESC tuşuyla projeler listesine geri dönme
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && portfolioDetailView && portfolioDetailView.style.display !== 'none') {
      closeProjectDetailModal();
    }
  });

  // 4. Kategori Çip Filtreleme
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.getAttribute('data-category');
      loadAndRenderSplitView();
    });
  });

  // 5. Canlı Arama ve Klavye Kısayolları (Ctrl+K, Ok Tuşları, Escape)
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery.trim().length > 0 ? 'flex' : 'none';
      }
      loadAndRenderSplitView();
    });
  }

  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      searchInput.focus();
      loadAndRenderSplitView();
    });
  }

  // Küresel Klavye Kısayolları
  document.addEventListener('keydown', (e) => {
    // Ctrl + K veya Cmd + K: Aramaya Odaklan
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      switchWorkspaceView('projects');
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }

    // Escape: Arama temizle veya dışa aktar dropdown'ı kapat
    if (e.key === 'Escape') {
      const menu = document.getElementById('exportDropdownMenu');
      if (menu) menu.classList.remove('active');
      if (document.activeElement === searchInput && searchInput.value) {
        searchInput.value = '';
        searchQuery = '';
        if (searchClearBtn) searchClearBtn.style.display = 'none';
        loadAndRenderSplitView();
      }
    }

    // Arama kutusundayken Aşağı / Yukarı ok tuşlarıyla projeler arasında geçiş yapma
    if (document.activeElement === searchInput && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
      e.preventDefault();
      if (!allLoadedProjects.length) return;
      const currentIndex = allLoadedProjects.findIndex(p => p.id === activeProjectId);
      let nextIndex = e.key === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
      if (nextIndex >= allLoadedProjects.length) nextIndex = 0;
      if (nextIndex < 0) nextIndex = allLoadedProjects.length - 1;
      activeProjectId = allLoadedProjects[nextIndex].id;
      updateActiveDetail();

      // İlgili kartı görünür alana kaydır
      const targetCard = splitProjectsList ? splitProjectsList.querySelector(`[data-id="${activeProjectId}"]`) : null;
      if (targetCard) {
        targetCard.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  });

  // 6. Dışa Aktarma (Export) ve Popover Yönetimi
  function bindExportActions(project) {
    const toggleBtn = document.getElementById('exportDropdownToggle');
    const menu = document.getElementById('exportDropdownMenu');
    const btnTsv = document.getElementById('btnCopyProjectTsv');

    if (!toggleBtn || !menu) return;

    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('active');
    });

    if (btnTsv && project) {
      btnTsv.addEventListener('click', () => {
        const tsvText = [
          ["Proje Adı", project.title],
          ["Kategori", project.categoryLabel],
          ["Durum", project.badge],
          ["Özet", project.summary],
          ["Öne Çıkan Metrik", project.highlightMetric],
          ["Teknoloji Kümesi", (project.techStack || []).join(', ')],
          ["Problem", (project.caseStudy && project.caseStudy.problem) || ''],
          ["Mimari", (project.caseStudy && project.caseStudy.architecture) || ''],
          ["Kritik Zorluk", (project.caseStudy && project.caseStudy.keyChallenge) || ''],
          ["Öne Çıkan Çözümler", ((project.caseStudy && project.caseStudy.features) || []).join('; ')]
        ].map(row => row.join('\t')).join('\n');

        navigator.clipboard.writeText(tsvText).then(() => {
          UI.showToast('Proje verisi panoya TSV (Excel) formatında kopyalandı.', toastBar, toastText);
        }).catch(() => {
          UI.showToast('Panoya kopyalama başarısız oldu.', toastBar, toastText);
        });
        menu.classList.remove('active');
      });
    }
  }

  document.addEventListener('click', () => {
    const menu = document.getElementById('exportDropdownMenu');
    if (menu) menu.classList.remove('active');
  });

  // 7. E-Posta Kopyalama Eylemleri
  function bindCopy(btn) {
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'oguztasdemir@example.com';
      navigator.clipboard.writeText(email).then(() => {
        UI.showToast(`E-posta panoya kopyalandı: ${email}`, toastBar, toastText);
      }).catch(() => {
        UI.showToast(`E-posta: ${email}`, toastBar, toastText);
      });
    });
  }

  bindCopy(sidebarCopyEmailBtn);
  bindCopy(copyContactEmailBtn);

  // 8. İletişim / E-Posta Kopyalama
  const aboutMailLink = document.getElementById('aboutMailLink');
  if (aboutMailLink) {
    aboutMailLink.addEventListener('click', (e) => {
      // Varsayılan mailto çalışırken panoya da kopyalar
      navigator.clipboard.writeText('oguztasdemir0@gmail.com').then(() => {
        UI.showToast('E-Posta adresi panoya kopyalandı.', toastBar, toastText);
      }).catch(() => {});
    });
  }

  // 9. Canlı SSE Akışı & Nabız Takibi (Live Stream)
  const systemPulseDot = document.getElementById('systemPulseDot');
  const systemPulseLabel = document.getElementById('systemPulseLabel');

  function initLiveSSE() {
    if (!window.EventSource) return;
    try {
      const eventSource = new EventSource('/api/stream');

      eventSource.onopen = () => {
        if (systemPulseDot) systemPulseDot.classList.remove('offline');
        if (systemPulseLabel) systemPulseLabel.textContent = 'Sunucu Aktif';
      };

      eventSource.onmessage = () => {
        if (systemPulseDot) systemPulseDot.classList.remove('offline');
      };

      eventSource.onerror = () => {
        if (systemPulseDot) systemPulseDot.classList.add('offline');
        if (systemPulseLabel) systemPulseLabel.textContent = 'Bağlantı Kesildi';
      };
    } catch {}
  }
  initLiveSSE();

  // 10. Sunucuyu Güvenle Kapatma
  const sidebarShutdownBtn = document.getElementById('sidebarShutdownBtn');
  if (sidebarShutdownBtn) {
    sidebarShutdownBtn.addEventListener('click', async () => {
      if (confirm('Portfolyo yerel sunucusunu güvenle kapatmak istediğinizden emin misiniz?')) {
        try {
          UI.showToast('Sunucu güvenle kapatılıyor...', toastBar, toastText);
          await fetch('/api/system/shutdown', { method: 'POST' });
        } catch {}
        setTimeout(() => {
          window.close();
        }, 900);
      }
    });
  }

  // 11. Çift Tema Değiştirici (Obsidian Koyu / Yumuşak Açık)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeModeLabel = document.getElementById('themeModeLabel');

  function applyTheme(theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('portfolio_theme', 'light');
      if (themeModeLabel) themeModeLabel.textContent = 'Açık Mod';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('portfolio_theme', 'dark');
      if (themeModeLabel) themeModeLabel.textContent = 'Obsidian';
    }
  }

  const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      UI.showToast(`Görünüm değiştirildi: ${nextTheme === 'dark' ? 'Obsidian Slate' : 'Sıcak Parşömen'}`, toastBar, toastText);
    });
  }

  // 12. Sertifika Büyütme Modalı (Lightbox)
  const certModal = document.getElementById('certModal');
  const certModalImg = document.getElementById('certModalImg');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalCloseBtn = document.getElementById('certModalCloseBtn');

  function openCertModal(imgSrc, title) {
    if (!certModal || !certModalImg) return;
    certModalImg.src = imgSrc;
    if (certModalTitle) certModalTitle.textContent = title || 'Sertifika Önizleme';
    certModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    if (!certModal) return;
    certModal.style.display = 'none';
    if (certModalImg) certModalImg.src = '';
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.getAttribute('data-cert-img');
      const title = card.getAttribute('data-cert-title');
      if (imgSrc) openCertModal(imgSrc, title);
    });
  });

  if (certModalCloseBtn) {
    certModalCloseBtn.addEventListener('click', closeCertModal);
  }

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal && certModal.style.display === 'flex') {
      closeCertModal();
    }
  });



  // 12. Sol Panel (Rail) Aç / Kapa (Collapse / Expand)
  const panelRail = document.getElementById('panelRail');
  const railCollapseToggle = document.getElementById('railCollapseToggle');

  function toggleRail(forceState) {
    if (!panelRail || !railCollapseToggle) return;
    const isCurrentlyCollapsed = panelRail.classList.contains('collapsed');
    const willCollapse = typeof forceState === 'boolean' ? forceState : !isCurrentlyCollapsed;

    panelRail.classList.toggle('collapsed', willCollapse);
    railCollapseToggle.classList.toggle('collapsed-state', willCollapse);
    localStorage.setItem('panel_rail_collapsed', willCollapse ? '1' : '0');
  }

  if (railCollapseToggle) {
    railCollapseToggle.addEventListener('click', () => toggleRail());
  }

  // 13. Başlat ve Durumu Geri Yükle (F5 Koruması)
  async function initApp() {
    // Sol panel durumunu geri yükle
    const savedRailCollapsed = localStorage.getItem('panel_rail_collapsed') === '1';
    if (savedRailCollapsed) {
      toggleRail(true);
    }

    await loadAndRenderSplitView();

    // URL Hash veya LocalStorage'dan son durumu oku
    const hash = window.location.hash.replace('#', '');
    const savedView = localStorage.getItem('active_view') || 'projects';
    const savedProject = localStorage.getItem('active_project_id');

    if (hash.startsWith('project=')) {
      const pId = hash.replace('project=', '');
      switchWorkspaceView('projects', false);
      openProjectDetailModal(pId, false);
    } else if (hash.startsWith('view=')) {
      const vId = hash.replace('view=', '');
      switchWorkspaceView(vId, false);
    } else if (savedProject) {
      switchWorkspaceView('projects', false);
      openProjectDetailModal(savedProject, false);
    } else {
      switchWorkspaceView(savedView, false);
    }
  }

  initApp();
});
