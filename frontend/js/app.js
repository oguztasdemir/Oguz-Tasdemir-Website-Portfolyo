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
  let currentTech = 'all';
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

    // Projeler sekmesine basıldığında detay modalı yerine doğrudan liste açılsın
    if (viewId === 'projects') {
      if (portfolioDetailView) portfolioDetailView.style.display = 'none';
      if (portfolioMainStream) portfolioMainStream.style.display = 'block';
    }

    if (updateState) {
      window.location.hash = `view=${viewId}`;
      localStorage.setItem('active_view', viewId);
      localStorage.removeItem('active_project_id');
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
  const homePublicGoProjectsBtn = document.getElementById('homePublicGoProjectsBtn');
  const homePrivateGoProjectsBtn = document.getElementById('homePrivateGoProjectsBtn');

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
  if (homePublicGoProjectsBtn) {
    homePublicGoProjectsBtn.addEventListener('click', () => {
      currentTier = 'public';
      document.querySelectorAll('.tier-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tier') === 'public');
      });
      switchWorkspaceView('projects');
      loadAndRenderSplitView();
    });
  }
  if (homePrivateGoProjectsBtn) {
    homePrivateGoProjectsBtn.addEventListener('click', () => {
      currentTier = 'private';
      document.querySelectorAll('.tier-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tier') === 'private');
      });
      switchWorkspaceView('projects');
      loadAndRenderSplitView();
    });
  }

  // Ana Sayfa Yatay Kaydırma (Slider) Kontrolleri: Public Projeler, Private Projeler & Sertifikalar
  const homePublicProjectsTrack = document.getElementById('homePublicProjectsTrack');
  const homePublicProjPrevBtn = document.getElementById('homePublicProjPrevBtn');
  const homePublicProjNextBtn = document.getElementById('homePublicProjNextBtn');

  if (homePublicProjectsTrack) {
    if (homePublicProjPrevBtn) {
      homePublicProjPrevBtn.addEventListener('click', () => {
        homePublicProjectsTrack.scrollBy({ left: -340, behavior: 'smooth' });
      });
    }
    if (homePublicProjNextBtn) {
      homePublicProjNextBtn.addEventListener('click', () => {
        homePublicProjectsTrack.scrollBy({ left: 340, behavior: 'smooth' });
      });
    }
  }

  const homePrivateProjectsTrack = document.getElementById('homePrivateProjectsTrack');
  const homePrivProjPrevBtn = document.getElementById('homePrivProjPrevBtn');
  const homePrivProjNextBtn = document.getElementById('homePrivProjNextBtn');

  if (homePrivateProjectsTrack) {
    if (homePrivProjPrevBtn) {
      homePrivProjPrevBtn.addEventListener('click', () => {
        homePrivateProjectsTrack.scrollBy({ left: -340, behavior: 'smooth' });
      });
    }
    if (homePrivProjNextBtn) {
      homePrivProjNextBtn.addEventListener('click', () => {
        homePrivateProjectsTrack.scrollBy({ left: 340, behavior: 'smooth' });
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
      checkFilterState();
      loadAndRenderSplitView();
    });
  });

  // Global Sayaçları Otomatik Güncelleme (Yeni proje eklendikçe otomatik artar)
  function updateGlobalProjectCounters(allProjects) {
    if (!allProjects || !Array.isArray(allProjects)) return;
    const isEn = (window.i18n && window.i18n.getLang() === 'en');
    const totalCount = allProjects.length;
    const publicCount = allProjects.filter(p => p.visibility === 'public').length;
    const privateCount = allProjects.filter(p => p.visibility === 'private').length;
    const liveCount = allProjects.filter(p => !!p.demoUrl).length;

    // 0. Tier Sayaç Hapları
    const tierCountAll = document.getElementById('tierCountAll');
    const tierCountPublic = document.getElementById('tierCountPublic');
    const tierCountPrivate = document.getElementById('tierCountPrivate');
    const tierCountLive = document.getElementById('tierCountLive');
    if (tierCountAll) tierCountAll.textContent = totalCount;
    if (tierCountPublic) tierCountPublic.textContent = publicCount;
    if (tierCountPrivate) tierCountPrivate.textContent = privateCount;
    if (tierCountLive) tierCountLive.textContent = liveCount;

    // 1. Sol Panel Menü Rozeti
    if (railProjectsCountBadge) {
      railProjectsCountBadge.textContent = totalCount;
    }

    // 2. Ana Sayfa Hero Butonu
    const heroGoProjectsBtnText = document.getElementById('heroGoProjectsBtnText');
    if (heroGoProjectsBtnText) {
      heroGoProjectsBtnText.textContent = isEn ? `Explore Projects (${totalCount})` : `Projeleri Keşfet (${totalCount})`;
    }

    // 3. Ana Sayfa Hero Metni Kalın Vurgu
    const heroProjectsCountStrong = document.getElementById('heroProjectsCountStrong');
    if (heroProjectsCountStrong) {
      heroProjectsCountStrong.textContent = isEn ? `${totalCount} engineered systems` : `${totalCount} özgün projeyi`;
    }

    // 4. Ana Sayfa Telemetri Şeridi
    const telemetryProjectCount = document.getElementById('telemetryProjectCount');
    if (telemetryProjectCount) {
      telemetryProjectCount.textContent = totalCount;
    }
  }

  // Ana Sayfa Proje Kaydırıcılarını (Sliders) Mevcut Dile Göre Yenile
  function refreshHomeSliders() {
    const isEn = (window.i18n && window.i18n.getLang() === 'en');
    document.querySelectorAll('.home-project-slider-card').forEach(card => {
      const projId = card.getAttribute('data-project-id');
      if (!projId) return;
      const raw = (window._cachedFullProjectsList || (typeof PROJECTS_DATA !== 'undefined' ? PROJECTS_DATA : [])).find(p => p.id === projId || p.id.toLowerCase() === projId.toLowerCase());
      if (!raw) return;
      const p = UI.resolveProjectData ? UI.resolveProjectData(raw) : raw;

      const titleEl = card.querySelector('.slider-card-title');
      const descEl = card.querySelector('.slider-card-desc');
      const catEl = card.querySelector('.slider-card-cat');
      const badgeEl = card.querySelector('.slider-card-badge');
      const actionEl = card.querySelector('.slider-card-action');
      const metricSpan = card.querySelector('.slider-card-metric span');

      if (titleEl) titleEl.textContent = p.title;
      if (descEl) descEl.textContent = p.summary;
      if (catEl) catEl.textContent = p.categoryLabel;
      if (badgeEl) badgeEl.textContent = p.badge;
      if (actionEl) actionEl.innerHTML = isEn ? 'View Details &rarr;' : 'Detay İncele &rarr;';
      if (metricSpan && p.highlightMetric) metricSpan.textContent = p.highlightMetric;
    });
  }

  // Kategori Filtre Çiplerindeki Sayıları Aktif Kademe (Tümü / Public / Private) Seçimine Göre Dinamik Hesapla
  function updateCategoryChipCounts(allProjects) {
    if (!allProjects || !Array.isArray(allProjects)) return;

    // Aktif kademeye (currentTier) göre filtrelenmiş temel havuz
    let scopedProjects = allProjects;
    if (currentTier && currentTier !== 'all') {
      if (currentTier === 'live') {
        scopedProjects = allProjects.filter(p => !!p.demoUrl);
      } else {
        scopedProjects = allProjects.filter(p => (p.visibility || 'public') === currentTier);
      }
    }

    const countMap = {
      all: scopedProjects.length,
      academic: scopedProjects.filter(p => p.category === 'academic').length,
      ai: scopedProjects.filter(p => p.category === 'ai' || p.category === 'nlp_data').length,
      nlp_data: scopedProjects.filter(p => p.category === 'ai' || p.category === 'nlp_data').length,
      fintech: scopedProjects.filter(p => p.category === 'fintech').length,
      desktop: scopedProjects.filter(p => p.category === 'desktop').length,
      web: scopedProjects.filter(p => p.category === 'web').length
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

    // Teknoloji Filtresi (Tech Stack Pill)
    if (currentTech && currentTech !== 'all') {
      const qTech = currentTech.toLowerCase();
      allLoadedProjects = allLoadedProjects.filter(p => {
        return (p.techStack || []).some(t => t.toLowerCase().includes(qTech));
      });
    }

    // Lisans tezini her zaman en başta göster (eğer sonuç listesinde varsa)
    if (Array.isArray(allLoadedProjects) && allLoadedProjects.length > 0) {
      const tezIdx = allLoadedProjects.findIndex(p => p.id === 'bist-bilanco-karlilik-tahmini');
      if (tezIdx > 0) {
        const [tezItem] = allLoadedProjects.splice(tezIdx, 1);
        allLoadedProjects.unshift(tezItem);
      }
    }

    // Aktif filtrelenmiş arama sayaç rozeti
    if (searchResultCount) {
      const isEn = (window.i18n && window.i18n.getLang() === 'en');
      searchResultCount.textContent = isEn ? `${allLoadedProjects.length} Systems` : `${allLoadedProjects.length} Kayıt`;
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
    }, activeProjectId, (selectedTech) => {
      // Tıklanan teknoloji hapını aktif filtre yap
      currentTech = selectedTech;
      document.querySelectorAll('.tech-filter-pill').forEach(p => {
        const pTech = p.getAttribute('data-tech');
        p.classList.toggle('active', pTech && pTech.toLowerCase() === selectedTech.toLowerCase());
      });
      checkFilterState();
      loadAndRenderSplitView();
      UI.showToast(`Teknoloji filtresi uygulandı: ${selectedTech}`, toastBar, toastText);
    });
  }

  let lastListScrollTop = 0;

  function openProjectDetailModal(projectId, updateHash = true, targetTab = null) {
    const selectedProject = allLoadedProjects.find(p => p.id === projectId || p.id.toLowerCase() === String(projectId).toLowerCase());
    if (!selectedProject || !projectDetailContainer) return;

    // Mevcut liste kaydırma pozisyonunu kaydet
    if (portfolioMainStream) {
      lastListScrollTop = portfolioMainStream.scrollTop;
    }

    activeProjectId = selectedProject.id;
    const initialTabToUse = targetTab || 'overview';

    UI.renderProjectDetail(selectedProject, projectDetailContainer, (targetProjectId) => {
      openProjectDetailModal(targetProjectId, true, 'overview');
    }, allLoadedProjects, initialTabToUse);
    
    // Listeyi gizle, tam ekran bilgi sayfasını göster
    if (portfolioMainStream) portfolioMainStream.style.display = 'none';
    if (portfolioDetailView) {
      portfolioDetailView.style.display = 'flex';
      portfolioDetailView.scrollTo({ top: 0 });
    }

    if (updateHash) {
      window.location.hash = `project=${projectId}&tab=${initialTabToUse}`;
      localStorage.setItem('active_project_id', projectId);
      localStorage.setItem('active_project_tab', initialTabToUse);
    }

    // Dışa Aktarma Popover Bağlantısı
    bindExportActions(selectedProject);
  }

  function closeProjectDetailModal(updateHash = true) {
    // Bilgi sayfasını gizle, listeyi geri getir
    if (portfolioDetailView) portfolioDetailView.style.display = 'none';
    if (portfolioMainStream) {
      portfolioMainStream.style.display = 'block';
      portfolioMainStream.scrollTop = lastListScrollTop;

      // Son incelenen kartı odakla ve hafifçe vurgula
      if (activeProjectId) {
        const lastCard = splitProjectsList ? splitProjectsList.querySelector(`[data-id="${activeProjectId}"]`) : null;
        if (lastCard) {
          document.querySelectorAll('.portfolio-wide-card').forEach(c => c.classList.remove('last-focused-card'));
          lastCard.classList.add('last-focused-card');
          lastCard.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          setTimeout(() => {
            lastCard.classList.remove('last-focused-card');
          }, 2400);
        }
      }
    }

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

  // Filtreleri Sıfırlama Butonu
  const resetAllFiltersBtn = document.getElementById('resetAllFiltersBtn');
  function checkFilterState() {
    const isFiltered = currentCategory !== 'all' || currentTier !== 'all' || currentTech !== 'all' || searchQuery.trim().length > 0;
    if (resetAllFiltersBtn) {
      resetAllFiltersBtn.style.display = isFiltered ? 'inline-flex' : 'none';
    }
  }

  if (resetAllFiltersBtn) {
    resetAllFiltersBtn.addEventListener('click', () => {
      currentCategory = 'all';
      currentTier = 'all';
      currentTech = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';

      // UI Çiplerini ve Sekmelerini 'all' olarak güncelle
      document.querySelectorAll('.chip-filter').forEach(c => c.classList.toggle('active', c.getAttribute('data-category') === 'all'));
      document.querySelectorAll('.tier-tab-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-tier') === 'all'));
      document.querySelectorAll('.tech-filter-pill').forEach(p => p.classList.toggle('active', p.getAttribute('data-tech') === 'all'));

      checkFilterState();
      loadAndRenderSplitView();
    });
  }

  // 4. Kategori Çip Filtreleme
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.getAttribute('data-category');
      checkFilterState();
      loadAndRenderSplitView();
    });
  });

  // 4.1 Hızlı Teknoloji Filtresi (Tech Filter Pills)
  const techFilterPills = document.querySelectorAll('.tech-filter-pill');
  techFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      techFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentTech = pill.getAttribute('data-tech');
      checkFilterState();
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
      checkFilterState();
      loadAndRenderSplitView();
    });
  }

  if (searchClearBtn && searchInput) {
    searchClearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.style.display = 'none';
      searchInput.focus();
      checkFilterState();
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
    // UI.renderProjectDetail tüm dışa aktarma ve ZIP indirme olaylarını doğrudan bağlar
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
      const email = btn.getAttribute('data-email') || 'oztsdmr@gmail.com';
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
  const contactViewMailLink = document.getElementById('contactViewMailLink');

  function bindMailCopy(linkEl) {
    if (!linkEl) return;
    linkEl.addEventListener('click', (e) => {
      navigator.clipboard.writeText('oztsdmr@gmail.com').then(() => {
        UI.showToast('E-Posta adresi panoya kopyalandı: oztsdmr@gmail.com', toastBar, toastText);
      }).catch(() => {});
    });
  }

  bindMailCopy(aboutMailLink);
  bindMailCopy(contactViewMailLink);

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

  // 12.1 Dil Değiştirici (i18n Switcher: TR / EN)
  const langBtnTr = document.getElementById('langBtnTr');
  const langBtnEn = document.getElementById('langBtnEn');

  if (langBtnTr) {
    langBtnTr.addEventListener('click', () => {
      if (window.i18n) window.i18n.setLang('tr');
    });
  }

  if (langBtnEn) {
    langBtnEn.addEventListener('click', () => {
      if (window.i18n) window.i18n.setLang('en');
    });
  }

  // 12.2 Tema Değiştirici (Dark / Light Theme Toggle)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeModeLabel = document.getElementById('themeModeLabel');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site_theme', theme);
    if (themeModeLabel && window.i18n) {
      themeModeLabel.textContent = theme === 'light' ? window.i18n.t('theme_light') : window.i18n.t('theme_dark');
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }

  // Dil değiştiğinde çalışacak olay dinleyicisi
  window.addEventListener('languageChanged', (e) => {
    const savedTheme = localStorage.getItem('site_theme') || 'dark';
    if (themeModeLabel && window.i18n) {
      themeModeLabel.textContent = savedTheme === 'light' ? window.i18n.t('theme_light') : window.i18n.t('theme_dark');
    }
    if (window._cachedFullProjectsList) {
      updateGlobalProjectCounters(window._cachedFullProjectsList);
      updateCategoryChipCounts(window._cachedFullProjectsList);
    }
    refreshHomeSliders();
    loadAndRenderSplitView();

    // Detay sayfası açıksa, yeni dildeki verilerle tekrar çiz
    if (portfolioDetailView && portfolioDetailView.style.display !== 'none' && activeProjectId) {
      openProjectDetailModal(activeProjectId, false);
    }
  });

  // Hash çözümleme yardımcı fonksiyonu
  function parseStateFromHash() {
    const rawHash = window.location.hash.replace(/^#/, '').trim();
    if (!rawHash) return null;

    // Format: project=xyz&tab=quickstart VEYA view=certs
    const params = new URLSearchParams(rawHash);
    const projectId = params.get('project');
    const tabId = params.get('tab');
    const viewId = params.get('view');

    return { projectId, tabId, viewId };
  }

  // 13. Başlat ve Durumu Geri Yükle (F5 Koruması & İlk Açılış Standardı)
  async function initApp() {
    // 1. Dil Sistemini Uygula
    if (window.i18n) {
      window.i18n.applyTranslations();
    }

    // 2. Tema Durumunu Uygula
    const savedTheme = localStorage.getItem('site_theme') || 'dark';
    applyTheme(savedTheme);

    // 3. Sol panel varsayılan olarak açık gelsin (açık panel standardı)
    const savedRailCollapsed = localStorage.getItem('panel_rail_collapsed') === '1';
    if (savedRailCollapsed) {
      toggleRail(true);
    } else {
      toggleRail(false);
    }

    await loadAndRenderSplitView();

    // 4. Sistemi ilk açtığımızda veya F5 atıldığında her zaman tertemiz Ana Sayfa (Home) açılsın
    localStorage.removeItem('active_project_id');
    localStorage.removeItem('active_project_tab');
    localStorage.removeItem('active_view');
    
    // URL'de hash varsa temizle ve ana sayfaya geç
    if (window.location.hash) {
      try {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
      } catch (e) {}
    }
    switchWorkspaceView('home', false);
  }

  // Tarayıcı İleri/Geri ve Hash Değişimi Dinleyicisi
  window.addEventListener('hashchange', () => {
    const state = parseStateFromHash();
    if (state && state.projectId) {
      switchWorkspaceView('projects', false);
      openProjectDetailModal(state.projectId, false, state.tabId);
    } else if (state && state.viewId) {
      switchWorkspaceView(state.viewId, false);
    }
  });

  initApp();
});
