/**
 * UI ve DOM Render Motoru (frontend/js/ui.js)
 * 3-Panel Konsol Mimarisi:
 * Panel 2: Taranabilir Proje Kartları Listesi
 * Panel 3: Derin Vaka Analizi Sahnesi (4 Ayrı Kutulu Modüler Blok)
 */

const UI = {
  renderProjectsList(projects, container, onSelectProject, activeId) {
    if (!container) return;

    if (!projects || projects.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 16px; color: var(--text-muted); font-size: 0.9rem;">
          Aranan kriterlere uygun proje bulunamadı.
        </div>
      `;
      return;
    }

    container.innerHTML = projects.map(project => {
      const techs = (project.techStack || []).slice(0, 4);
      const isPrivate = project.visibility === 'private' || !project.githubUrl;
      return `
        <article class="portfolio-wide-card ${isPrivate ? 'card-tier-private' : 'card-tier-public'}" data-id="${project.id}" tabindex="0" role="button">
          <div class="wide-card-top-meta">
            <div class="wide-card-categories-row">
              <span class="wide-card-category">${project.categoryLabel}</span>
              ${Array.isArray(project.categories) && project.categories.includes('academic') ? `
                <span class="wide-card-academic-pill" title="Akademik / Tez Projesi">🎓 Akademik</span>
              ` : ''}
            </div>
            <div class="wide-card-meta-right">
              ${!isPrivate ? `
                <span class="wide-card-public-badge" title="Açık Kaynak Kod Deposu">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>Açık Kaynak</span>
                </span>
              ` : `
                <span class="card-private-badge" title="Özel Ar-Ge / Tamamlandığında Açık Kaynak Yapılacak">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span>Özel Ar-Ge</span>
                </span>
              `}
              <span class="wide-card-badge">&bull; ${project.badge}</span>
            </div>
          </div>

          <h3 class="wide-card-title">${project.title}</h3>
          <p class="wide-card-summary">${project.summary}</p>

          <!-- Kart İçi Teknoloji Etiketleri -->
          <div class="wide-card-tech-list">
            ${techs.map(t => `<span class="wide-card-tech-tag">${t}</span>`).join('')}
            ${(project.techStack && project.techStack.length > 4) ? `<span class="wide-card-tech-tag">+${project.techStack.length - 4}</span>` : ''}
          </div>

          <div class="wide-card-footer">
            <div class="wide-card-metric">
              <span>${project.highlightMetric || ''}</span>
            </div>
            <div class="wide-card-actions-right">
              ${!isPrivate ? `
                <a href="${project.githubUrl}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="card-direct-github-btn" 
                   title="GitHub reposunu doğrudan aç"
                   onclick="event.stopPropagation()">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>GitHub'da Gör</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ` : `
                <span class="card-footer-private-pill" title="Bu proje aktif geliştirme aşamasında olup tamamlandığında açık kaynak olarak yayınlanacaktır">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span>Geliştirme / Ar-Ge</span>
                </span>
              `}
              <span class="wide-card-detail-btn">
                Mimarisi & Detay
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('.portfolio-wide-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        onSelectProject(id);
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const id = card.getAttribute('data-id');
          onSelectProject(id);
        }
      });
    });
  },

  renderProjectDetail(project, container) {
    if (!container) return;

    if (!project) {
      container.innerHTML = `
        <div style="display: flex; height: 100%; align-items: center; justify-content: center; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.85rem;">
          [Seçim Bekleniyor] İncelemek istediğiniz sistemi ortadaki listeden seçiniz.
        </div>
      `;
      return;
    }

    const isPrivate = project.visibility === 'private' || !project.githubUrl;
    const caseStudy = project.caseStudy || {};
    const features = caseStudy.features || [];

    // Dinamik Mimari Akış Boru Hattı Adımları (Mühendislik Akışı)
    const pipelineSteps = project.techStack && project.techStack.length >= 3 
      ? [
          { num: "01", title: "Veri Girişi & Arayüz", desc: project.techStack[0] || "Client" },
          { num: "02", title: "İşlem & Servis Motoru", desc: project.techStack[1] || "Core Engine" },
          { num: "03", title: "Çekirdek Algoritma / ML", desc: project.techStack[2] || "Backend / Logic" },
          { num: "04", title: "Depolama / Çıktı", desc: project.techStack[3] || project.techStack[project.techStack.length - 1] }
        ]
      : null;

    container.innerHTML = `
      <div class="stage-content-wrapper">
        
        <!-- Üst Başlık ve Aksiyon Kartı -->
        <div class="stage-hero-banner">
          <div class="stage-meta-tags">
            <span class="stage-tag-category">${project.categoryLabel}</span>
            <span class="stage-tag-status">&bull; ${project.badge}</span>
          </div>

          <h2 class="stage-main-title">${project.title}</h2>
          <p class="stage-lead-summary">${project.summary}</p>

          <div class="stage-metric-ribbon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            <span>${project.highlightMetric}</span>
          </div>

          <div class="stage-actions-bar">
            ${!isPrivate && project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="stage-action-link github-btn" title="GitHub'da Açık Kaynak İncele">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub Reposunu Aç (<strong>${project.id}</strong>)</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : `
              <span class="stage-private-badge" title="Bu proje aktif geliştirme ve Ar-Ge aşamasında olup tamamlandığında açık kaynak olarak yayınlanacaktır">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>🔒 Özel Ar-Ge (Geliştirme Tamamlandığında Açık Kaynak Olacak)</span>
              </span>
            `}

            ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="stage-action-link outline">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                Canlı Önizleme / Demo
              </a>
            ` : ''}

            <!-- Dışa Aktarma Dropdown Menüsü -->
            <div class="export-menu-wrapper">
              <button class="stage-action-link outline" id="exportDropdownToggle" aria-haspopup="true" aria-expanded="false" title="Veri Dışa Aktar">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Dışa Aktar
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="export-dropdown-popover" id="exportDropdownMenu">
                <button class="export-popover-item" id="btnCopyProjectTsv">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  Panoya Kopyala (TSV)
                </button>
                <a href="/api/export/csv" download="oguz_tasdemir_projeler.csv" class="export-popover-item" id="btnDownloadCsv">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                  Excel (.csv) İndir
                </a>
                <a href="/api/export/json" download="oguz_tasdemir_projeler.json" class="export-popover-item" id="btnDownloadJson">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  JSON İndir
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Gerçek Mühendislik Hikayesi ve Proje Detayı -->
        <div class="case-blocks-quad-column">
          
          <!-- 1. HİKAYE VE ÇÖZÜLEN PROBLEM -->
          <div class="case-study-box">
            <div class="case-box-title-row">
              <span class="case-box-num">01</span>
              <h3 class="case-box-header">Bu Projeyi Neden Yaptım ve Ne Çözüyor?</h3>
            </div>
            <p class="case-box-text">${caseStudy.problem || project.summary}</p>
          </div>

          <!-- 2. TEKNİK MİMARİ VE UYGULAMA MANTIĞI -->
          <div class="case-study-box">
            <div class="case-box-title-row">
              <span class="case-box-num">02</span>
              <h3 class="case-box-header">Nasıl İnşa Ettim? (Mimari ve Tercihler)</h3>
            </div>
            <p class="case-box-text">${caseStudy.architecture || ''}</p>
            
            ${pipelineSteps ? `
              <div class="system-pipeline-container">
                <div class="system-pipeline-header">⚡ Sistem & Veri İşlem Hattı (Pipeline):</div>
                <div class="system-pipeline-steps">
                  ${pipelineSteps.map((step, idx) => `
                    <div class="pipeline-step-node">
                      <span class="pipeline-step-num">Aşama ${step.num}</span>
                      <strong class="pipeline-step-title">${step.title}</strong>
                      <span style="font-family: var(--font-mono); font-size: 0.68rem; color: #38bdf8;">${step.desc}</span>
                    </div>
                    ${idx < pipelineSteps.length - 1 ? `<span class="pipeline-arrow">&rarr;</span>` : ''}
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${caseStudy.keyChallenge ? `
              <div class="case-box-subdetail">
                <div class="case-subdetail-tag">Mühendislik Detayı & Karşılaşılan Zorluk</div>
                <p class="case-box-text">${caseStudy.keyChallenge}</p>
              </div>
            ` : ''}
          </div>

          <!-- 3. ÖNE ÇIKAN YETENEKLER & ÇÖZÜMLER -->
          ${features.length > 0 ? `
            <div class="case-study-box">
              <div class="case-box-title-row">
                <span class="case-box-num">03</span>
                <h3 class="case-box-header">Öne Çıkan Özellikler & Fonksiyonlar</h3>
              </div>
              <ul class="features-check-stack">
                ${features.map(feat => `
                  <li>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${feat}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- 4. KULLANILAN TEKNOLOJİLER & KÜTÜPHANELER -->
          <div class="case-study-box">
            <div class="case-box-title-row">
              <span class="case-box-num">04</span>
              <h3 class="case-box-header">Kullanılan Teknolojiler & Kütüphaneler</h3>
            </div>
            <div class="tech-pills-row" style="margin-top: 10px;">
              ${project.techStack.map(t => `<span class="tech-bubble">${t}</span>`).join('')}
            </div>
          </div>

          <!-- 5. DAHİLİ DOKÜMANTASYON & README (Varsa) -->
          ${caseStudy.readme ? `
            <div class="case-study-box">
              <div class="case-box-title-row">
                <span class="case-box-num">05</span>
                <h3 class="case-box-header">README & Teknik Dokümantasyon</h3>
              </div>
              <div class="case-readme-block">
                <pre class="case-readme-pre"><code>${caseStudy.readme}</code></pre>
              </div>
            </div>
          ` : ''}

        </div>

      </div>
    `;

    container.scrollTo({ top: 0, behavior: 'smooth' });
  },

  showToast(message, toastBar, toastText) {
    if (!toastBar || !toastText) return;
    toastText.textContent = message;
    toastBar.classList.add('visible');
    setTimeout(() => {
      toastBar.classList.remove('visible');
    }, 2500);
  }
};
