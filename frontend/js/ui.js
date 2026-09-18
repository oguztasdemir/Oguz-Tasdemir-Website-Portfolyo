/**
 * UI ve DOM Render Motoru (frontend/js/ui.js)
 * Çoklu Dil (TR / EN) Destekli 3-Panel Konsol Mimarisi:
 * Panel 2: Taranabilir Proje Kartları Listesi
 * Panel 3: Derin Vaka Analizi Sahnesi (Zenginleştirilmiş Case Study Studio)
 */

const UI = {
  // Projeyi mevcut dile (TR / EN) göre zenginleştirme yardımcısı
  resolveProjectData(project) {
    if (!project) return null;
    const isEn = (window.i18n && window.i18n.getLang() === 'en');
    const pid = (project.id || '').toLowerCase();
    const pEn = (window.PROJECTS_EN_DATA && (window.PROJECTS_EN_DATA[pid] || window.PROJECTS_EN_DATA[project.id])) || {};

    const categoryMapEn = {
      'Akademik & Lisans Tezi': 'Academic & B.Sc. Thesis',
      'Akademik & Sınav': 'Academic & Exam',
      'Akademik & Dil': 'Academic & Language',
      'FinTech & Perakende Kasa': 'FinTech & Retail POS',
      'FinTech & Donanım': 'FinTech & Hardware',
      'FinTech & Makine Öğrenmesi': 'FinTech & Machine Learning',
      'FinTech & Veri': 'FinTech & Data Science',
      'FinTech & Kasa': 'FinTech & POS',
      'Yapay Zeka & Kodlama': 'AI & Code Intelligence',
      'Yapay Zeka & Görüntü İşleme': 'AI & Computer Vision',
      'Yapay Zeka & NLP': 'AI & NLP Synthesis',
      'Yapay Zeka & Araçlar': 'AI & Developer Tools',
      'Yapay Zeka & Üretkenlik': 'AI & Productivity',
      'Yapay Zeka & Stüdyo': 'AI & Creative Studio',
      'Masaüstü & Sistem': 'Desktop & System',
      'Masaüstü & Veri Kurtarma': 'Desktop & Forensics',
      'Masaüstü & Spor Yönetimi': 'Desktop & Sports Management',
      'Masaüstü & Oyun': 'Desktop & Gaming',
      'Masaüstü & Optimizasyon': 'Desktop & Optimization',
      'Otomasyon & Finans': 'Automation & Finance',
      'Otomasyon & E-Ticaret': 'Automation & E-Commerce',
      'Otomasyon & Medya': 'Automation & Media',
      'Otomasyon & QA': 'Automation & QA',
      'Web & Ağ': 'Web & Networking',
      'Açık Kaynak & Oyun': 'Open Source & Gaming'
    };

    const title = (isEn && pEn.title) ? pEn.title : project.title;
    const summary = (isEn && pEn.summary) ? pEn.summary : project.summary;
    const badge = (isEn && pEn.badge) ? pEn.badge : project.badge;
    const highlightMetric = (isEn && pEn.highlightMetric) ? pEn.highlightMetric : (project.highlightMetric || '');
    
    let categoryLabel = project.categoryLabel;
    if (isEn) {
      categoryLabel = pEn.categoryLabel || categoryMapEn[project.categoryLabel] || project.categoryLabel;
    }

    return {
      ...project,
      title,
      summary,
      badge,
      highlightMetric,
      categoryLabel,
      _enData: pEn
    };
  },

  renderProjectsList(rawProjects, container, onSelectProject, activeId, onSelectTech) {
    if (!container) return;
    const isEn = (window.i18n && window.i18n.getLang() === 'en');

    if (!rawProjects || rawProjects.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 16px; color: var(--text-muted); font-size: 0.9rem;">
          ${isEn ? 'No projects found matching the search criteria.' : 'Aranan kriterlere uygun proje bulunamadı.'}
        </div>
      `;
      return;
    }

    const projects = rawProjects.map(p => this.resolveProjectData(p));

    container.innerHTML = projects.map(project => {
      const techs = (project.techStack || []).slice(0, 4);
      const isPrivate = project.visibility === 'private';
      const academicLabel = isEn ? '🎓 Academic' : '🎓 Akademik';
      const publicBadgeLabel = isEn ? 'Open Source' : 'Açık Kaynak';
      const privateBadgeLabel = isEn ? 'Proprietary' : 'Özel Ar-Ge';
      const devBadgeLabel = isEn ? 'Active R&D' : 'Geliştirme / Ar-Ge';
      const detailBtnLabel = isEn ? 'Architecture & Details' : 'Mimarisi & Detay';
      const liveDemoLabel = isEn ? 'Live Demo' : 'Canlı Demo';

      return `
        <article class="portfolio-wide-card ${isPrivate ? 'card-tier-private' : 'card-tier-public'}" data-id="${project.id}" tabindex="0" role="button">
          <div class="wide-card-top-meta">
            <div class="wide-card-categories-row">
              <span class="wide-card-category">${project.categoryLabel}</span>
              ${Array.isArray(project.categories) && project.categories.includes('academic') ? `
                <span class="wide-card-academic-pill" title="${academicLabel}">${academicLabel}</span>
              ` : ''}
            </div>
            <div class="wide-card-meta-right">
              ${!isPrivate ? `
                <span class="wide-card-public-badge" title="${isEn ? 'Public Source Repository' : 'Açık Kaynak Kod Deposu'}">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>${publicBadgeLabel}</span>
                </span>
              ` : `
                <span class="card-private-badge" title="${isEn ? 'Proprietary R&D' : 'Özel Ar-Ge / Tamamlandığında Açık Kaynak Yapılacak'}">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span>${privateBadgeLabel}</span>
                </span>
              `}
              <span class="wide-card-badge">&bull; ${project.badge}</span>
            </div>
          </div>

          <h3 class="wide-card-title">${project.title}</h3>
          <p class="wide-card-summary">${project.summary}</p>

          <!-- Kart İçi Teknoloji Etiketleri -->
          <div class="wide-card-tech-list">
            ${techs.map(t => `<span class="wide-card-tech-tag clickable-tech-pill" data-tech="${t}" title="${isEn ? 'Filter ' + t + ' projects' : t + ' projelerini filtrele'}">${t}</span>`).join('')}
            ${(project.techStack && project.techStack.length > 4) ? `<span class="wide-card-tech-tag">+${project.techStack.length - 4}</span>` : ''}
          </div>

          <div class="wide-card-footer">
            <div class="wide-card-metric">
              <span>${project.highlightMetric || ''}</span>
            </div>
            <div class="wide-card-actions-right">
              ${project.demoUrl ? `
                <a href="${project.demoUrl}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="card-direct-demo-btn" 
                   title="${isEn ? 'Open live demo in a new tab' : 'Canlı uygulamayı doğrudan yeni sekmede aç'}"
                   onclick="event.stopPropagation()">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L24 21H0L12 0Z"/></svg>
                  <span>${liveDemoLabel}</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ` : ''}

              ${!isPrivate && project.githubUrl ? `
                <a href="${project.githubUrl}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="card-direct-github-btn" 
                   title="${isEn ? 'Open GitHub repository directly' : 'GitHub reposunu doğrudan aç'}"
                   onclick="event.stopPropagation()">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>GitHub</span>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ` : `
                <span class="card-footer-private-pill" title="${isEn ? 'This project is under active proprietary R&D' : 'Bu proje aktif geliştirme aşamasında olup tamamlandığında açık kaynak olarak yayınlanacaktır'}">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  <span>${devBadgeLabel}</span>
                </span>
              `}
              <span class="wide-card-detail-btn">
                ${detailBtnLabel}
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('.clickable-tech-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.stopPropagation();
        const tech = pill.getAttribute('data-tech');
        if (tech && typeof onSelectTech === 'function') {
          onSelectTech(tech);
        }
      });
    });

    container.querySelectorAll('.portfolio-wide-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (e.target.closest('.card-direct-github-btn') || e.target.closest('.card-direct-demo-btn') || e.target.closest('.clickable-tech-pill')) return;
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

  renderProjectDetail(rawProject, container, onSelectProject, allProjects = [], initialTab = null) {
    if (!container) return;
    const isEn = (window.i18n && window.i18n.getLang() === 'en');

    if (!rawProject) {
      container.innerHTML = `
        <div style="display: flex; height: 100%; align-items: center; justify-content: center; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.85rem;">
          ${isEn ? '[Awaiting Selection] Please choose a system from the list.' : '[Seçim Bekleniyor] İncelemek istediğiniz sistemi ortadaki listeden seçiniz.'}
        </div>
      `;
      return;
    }

    const project = this.resolveProjectData(rawProject);
    const isPrivate = project.visibility === 'private';
    const caseStudy = project.caseStudy || {};
    const pEn = project._enData || {};

    const problemText = (isEn && pEn.problem) ? pEn.problem : (caseStudy.problem || project.summary);
    const archText = (isEn && pEn.architecture) ? pEn.architecture : (caseStudy.architecture || (isEn ? 'A modular and lightweight software architecture is implemented.' : 'Bu projede modüler ve hafif bir yazılım yapısı uygulanmıştır.'));
    const challengeText = (isEn && pEn.keyChallenge) ? pEn.keyChallenge : caseStudy.keyChallenge;
    const features = (isEn && pEn.features && Array.isArray(pEn.features)) ? pEn.features : (caseStudy.features || []);

    // Geliştirici Hikayesi (Why Story)
    const getProjectWhyStory = () => {
      if (isEn && pEn.whyStory) return pEn.whyStory;
      
      const pid = (project.id || '').toLowerCase();
      const storiesTr = {
        'bist-bilanco-karlilik-tahmini': 'İstanbul Medeniyet Üniversitesi Matematik Bölümü Lisans Bitirme Tezi çalışmam. Türkiye’deki yüksek enflasyon döneminde şirketlerin TL bazlı bilançolarında oluşan yanıltıcı kâr artışlarını aşmak için TCMB kurlarıyla dolarize bir veri boru hattı kurdum. 612 BIST şirketinin 10 yıllık çeyreklik verisini işleyerek, bilançolar resmi olarak Kamuyu Aydınlatma Platformu’nda (KAP) açıklanmadan önce kârlılık yönünü ve kâr-zarar durumunu matematiksel modellerle tahmin etmeyi başardım.',
        'oymapos-barkod-sistemi': 'Aile işletmemiz olan marketimizde yoğun akşam saatlerinde piyasadaki hazır POS yazılımlarının kasayı kilitlemesi, fiş keserken donması ve müşterileri sırada bekletmesi üzerine geliştirdim. İnternet kesilse dahi anında tepki veren, SQLite WAL moduyla veritabanını kilitlemeyen, barkod okuyucu ve termal fiş yazıcıyla doğrudan konuşan hızlı ve hafif bir masaüstü kasa sistemi kurdum.',
        'cortex': 'Hassas şirket ve proje kodlarını bulut servislerine yüklemeden kendi bilgisayarımda güvenle incelemek için geliştirdim. İnternet bağlantısına ihtiyaç duymadan, kaynak kodları AST ile analiz eden ve belgeleri hafızaya alıp yerel yapay zeka üzerinden doğrudan yanıt veren bağımsız bir geliştirici IDE ortamı oluşturdum.',
        'airdrop-local': 'Apple (iPhone/Mac) cihazları ile Windows bilgisayarlar arasında USB kablosuyla dosya aktarmak zor ve kısıtlayıcı olduğu için geliştirdim. Kablo aramadan, yalnızca aynı Wi-Fi ağında QR kod okutarak saniyeler içinde bağlanan ve internet kotasını harcamadan 100+ MB/s hızla dosya ileten yerel bir aktarım sistemi kurdum.',
        'nc-codes': '2013 yılında Transformice oyununda kabile evlerinde oyuncuların sadece sohbet etmek yerine oda içinde yarışabilmesi, mini oyunlar oynaması ve takım kurabilmesi için yazdığım ilk açık kaynak Lua script koleksiyonumdur. O dönem yüzlerce oyuncu topluluğunda kullanıldı ve yazılıma başlama hikayemin en samimi adımı oldu.',
        'fatura-odeal': 'Perakende operasyonlarımızda Ödeal portalı üzerinden gelen e-faturaları düzenli olarak bilgisayara çekmek ve yeni fatura yazma/kesme süreçlerini otomatize etmek amacıyla geliştirdiğim otonom bir bottur.',
        'disk-kurtarma-araci': 'Kişisel taşınabilir harici diskimi Xbox konsoluna bağladığımda, konsol diski harici depolama alanı yapmak için otomatik olarak yapılandırdı ve tüm arşivim silindi. Piyasada satılan yazılımlara para vermek ya da diske kurtarma sırasında yazma yapıp sektörleri bozma riskine girmek istemedim. Diske sıfır yazma garantisiyle (%100 salt-okunur), doğrudan ham sektör (raw sector) baytlarını tarayarak silinen dosyaları yeni bir diske başarıyla kurtardım.',
        'kpss-sinav-hazirlik': 'KPSS sınavına hazırlanırken kalın test kitaplarını taşımak yerine dijital ortamda çalışabilmek; hem kendi hazırlığımda hem de sınava hazırlanan arkadaşlarımın isteği üzerine birlikte soru çözebilmemiz için geliştirdiğim web üzerinde canlı hazırlık platformudur.',
        'akademik-ingilizce': 'YDS ve YÖKDİL gibi akademik dil sınavlarına hazırlanırken kelimeleri rastgele ezberlemek yerine geçmiş sınavlarda en çok çıkan kök kelimeleri öğrenmek istiyordum. Hem kendi çalışma sürecimde odaklanmak hem de sınava hazırlanan arkadaşlarımın isteği üzerine birlikte kelime pratiği yapabileceğimiz interaktif bir sınav kampı olarak tasarladım.',
        'gardrops-otomasyon-botu': '2022 yılında Gardrops’ta butik satış yaparken platformun arayüzünde bir bug vardı: Bir kullanıcıyı takip ettikten sonra sayfayı yenilediğinizde buton tekrar "Takip Et"e dönüyor, butona tekrar basıldığında ise aslında takip edilen kullanıcıyı takipten çıkarıyordu. Bu arayüz karmaşasına aldanmamak için kullanıcı adlarını yerel hafızaya kaydedip takip durumunu kendi algoritmasıyla hatasız yöneten bir otomasyon geliştirdim.',
        'oymapos-etiket-yazdirici': 'Marketimizdeki ana kasa bilgisayarı eski ve donanım olarak zayıf olduğu için etiket yazdırma ve şablon hesaplama işlemlerini kasaya yüklemek kilitlenmelere yol açıyordu. Bu yüzden etiketleme sürecini kasadan tamamen ayırarak dükkandaki daha güçlü bilgisayara Wi-Fi üzerinden bağlanan bir yerel sunucu kurdum. Rafta veya depodayken cep telefonundan mobil olarak ya da güçlü bilgisayardan yeni fiyatları bu sunucuya gönderip termal yazıcıdan tek tıkla net raf etiketleri basabildiğimiz bağımsız bir sistem oluşturdum.',
        'kredi-notu-siniflandirmasi-tahmin-modeli': 'Üniversite 4. sınıf Makine Öğrenmesi (Machine Learning) dersi dönem projem ve ödevim kapsamında geliştirdiğim modelleme çalışmasıdır. Dengesiz bankacılık veri setlerinde SMOTE optimizasyonu ve öznitelik mühendisliği uygulayarak yüksek doğrulukla kredi notu tahmini üreten bir makine öğrenmesi boru hattı inşa ettim.',
        'ea-fifa-fikstur': 'Arkadaşlarımla akşamları EA FC / FIFA oynarken turnuvalardaki eşleşmeleri ve puan durumunu elle manuel kurmaktan kurtulmak, kura çekimi ve averaj hesaplamalarındaki tartışmaları bitirmek için otomatik fikstür ve averaj motoru geliştirdim.',
        'cache-cleaner': 'Yazılım geliştirme ortamlarında zamanla şişen pip, npm, HuggingFace ve PyTorch önbelleklerinin SSD diskimde onlarca GB yer kaplaması üzerine gereksiz bağımlılık çöplerini tarayıp güvenle temizleyen bir optimizasyon aracı oluşturdum.',
        'telegram-media-hub': 'Telegram üzerindeki arşiv ve eğitim kanallarında paylaşılan büyük dosyaları tek tek uğraşmadan, bilgisayara indirmeyi kolaylaştırmak ve dosya türlerine göre düzenli arşivlemek için geliştirdiğim indirme yöneticisidir.',
        'soru-uygulamasi': 'Üniversitede final dönemlerimde test usulü yapılacak sınavlara hem kendimin hem de sınıf arkadaşlarımın rahatça çalışabilmesi için geliştirdiğim; QR kod okutarak telefondan internetsiz soru çözdüren ve başarı analitiği çıkaran sınav platformudur.',
        'hugging-face-downloader': 'HuggingFace üzerinden büyük yapay zeka modellerini indirirken anlık indirme/yükleme hızlarını görmek, modelin sistem donanımına (RAM/VRAM) uygunluğunu kontrol etmek ve internet kopsa bile baştan başlatmadan kaldığı yerden devam ettirmek için yazdığım CLI aracıdır.',
        'webtoon-lora-suite': 'Hem Doğal Dil İşleme (NLP) hem de Diffusers ile LoRA ve YOLO eğitimlerinde kendimi geliştirmek için başlattığım projemdir. Amacım YOLO ve LoRA ile webtoon panellerini ve karakterlerini tutarlı üretip özgün hikayeler oluşturarak dijital yayıncılık yapabileceğim bir altyapı kurmaktı.',
        'altyapi-manager': 'Marketimin üst katındaki komşum yeni bir spor altyapı akademisi açarken lisans beklediği dönemde bana getirdiği ilk ticari iş teklifimdi. Football Manager tarzında oyuncu gelişim kartları, aidat/devam takibi ve antrenör taktik tahtasını tek ekranda toplayan bu sistemi geliştirip başarıyla teslim ettim.',
        'youtube-ai-assistant': 'YouTube video linklerini alıp transkriptlerini otomatik çekerek içeriği özetleyen, konuyu detaylı anlatan, ek çalışma belgeleri ve akademik/teknik kaynakça (bibliyografya) üretmemi sağlayan bir asistan sistemidir.',
        'crypto-analytics-engine': 'Kripto para piyasaları üzerine kendimi eğitmek, stratejilerimi test etmek, internetteki haber akışlarını tarayıp simülasyonlar yaparak kripto paraların gelecekteki fiyat trendlerini makine öğrenmesiyle önceden tahmin edip edemeyeceğimi araştırdığım sistemdir.',
        'ai-image-studio': 'ComfyUI node kalabalığıyla vakit kaybetmeden, kendi bilgisayarımın ekran kartını (GPU) kullanarak net parametreler ve hazır şablonlarla hızlıca görsel üretip arşivlemek için tasarladığım yerel stüdyo arayüzüdür.',
        'cortex-planner': 'Geliştirdiğim projeleri derli toplu görebilmek, GitHub API anahtarımla bağlanarak depolara erişmek ve yerel LLM ler aracılığıyla "Projeye başka ne ekleyebiliriz?" diye beyin fırtınası yapıp fikir alabileceğim akıllı bir ajanda ve planlayıcıdır.',
        'hyperbeam-browser': 'Uzaktan erişimle arkadaşlarla tek bir link üzerinden aynı sanal bilgisayara bağlanıp birlikte yönetebildiğimiz; ortak film/video izleme, beraber araştırma yapma veya Ateş ve Su gibi multiplayer web oyunlarını birlikte oynayabileceğimiz sanal tarayıcı odasıdır.',
        'ui-test-automation': 'Web ve masaüstü (.exe) uygulamalarında olabilecek çökmeleri ve buton hatalarını test eden, sistemi tarayıp ne amaçla yapıldığını bilerek adımları işleten ve hata anında ekran görüntüleriyle PDF raporu oluşturan kalite güvence aracıdır.',
        'portfolio-console': 'Genel portfolyo şablonları ve hantal React/Next frameworkleri, geliştirdiğim sistemlerin mimari derinliğini, düşük seviyeli detaylarını ve gerçek hayat vaka analizlerini aktarmakta yetersiz kalıyordu. Bu yüzden harici hiçbir ağır kütüphaneye bağımlı olmadan çalışan, sıfır gecikmeli, anında TR/EN geçişi yapabilen ve 4 adımlı sistem akış şemalarını interaktif sunan bağımsız bir mühendislik konsolu geliştirdim.'
      };

      if (storiesTr[pid]) return storiesTr[pid];
      return project.summary;
    };

    const projectWhyStory = getProjectWhyStory();

    // Dil Dağılımı
    const languages = (function() {
      if (project.languages && Array.isArray(project.languages)) return project.languages;
      const pid = (project.id || '').toLowerCase();
      const pcat = (project.category || '').toLowerCase();
      if (pid.includes('bist') || pid.includes('kredi') || pid.includes('tahmin')) {
        return [
          { name: 'Python', percent: 80, color: '#3572A5' },
          { name: 'SQL / SQLite', percent: 12, color: '#e38c00' },
          { name: 'HTML / CSS', percent: 8, color: '#e34c26' }
        ];
      } else if (pid.includes('cortex') || pid.includes('llm') || pid.includes('ai') || pid.includes('lora') || pid.includes('youtube')) {
        return [
          { name: 'Python', percent: 68, color: '#3572A5' },
          { name: 'JavaScript', percent: 20, color: '#f1e05a' },
          { name: 'HTML / CSS', percent: 12, color: '#563d7c' }
        ];
      } else if (pid.includes('transformice') || pid.includes('lua') || pid.includes('nc-codes')) {
        return [
          { name: 'Lua', percent: 85, color: '#000080' },
          { name: 'Markdown / Docs', percent: 15, color: '#083fa1' }
        ];
      } else if (pid.includes('disk') || pid.includes('recovery')) {
        return [
          { name: 'Python (Win32 API)', percent: 82, color: '#3572A5' },
          { name: 'C / Raw Kernel', percent: 10, color: '#555555' },
          { name: 'PySide GUI', percent: 8, color: '#41cd52' }
        ];
      } else if (pid.includes('pos') || pid.includes('etiket') || pid.includes('fatura') || pid.includes('gardrops')) {
        return [
          { name: 'Python', percent: 72, color: '#3572A5' },
          { name: 'SQLite / ESC-POS', percent: 18, color: '#e38c00' },
          { name: 'CustomTkinter / GUI', percent: 10, color: '#2b5b84' }
        ];
      } else if (pcat === 'web' || pid.includes('hyperbeam') || pid.includes('browser') || pid.includes('pwa')) {
        return [
          { name: 'JavaScript', percent: 55, color: '#f1e05a' },
          { name: 'HTML5 / CSS3', percent: 30, color: '#e34c26' },
          { name: 'Node.js / Python', percent: 15, color: '#3572A5' }
        ];
      }
      return [
        { name: 'Python', percent: 65, color: '#3572A5' },
        { name: 'JavaScript', percent: 22, color: '#f1e05a' },
        { name: 'HTML / CSS', percent: 13, color: '#563d7c' }
      ];
    })();

    // Dinamik Klasör Ağacı Şeması
    const folderTree = project.folderTree || `📁 ${project.id}/
├── 📄 main.py                   # ${isEn ? 'Single-click entrypoint launcher' : 'Tek tıkla uygulama başlatıcı (Entrypoint)'}
├── 📁 backend/                  # ${isEn ? 'Core services, API routes & business logic' : 'Servisler, API ve iş mantığı çekirdeği'}
│   ├── 📄 app.py                # ${isEn ? 'Web/API server router and configuration' : 'Web/API sunucu rotaları ve yapılandırma'}
│   ├── 📄 core_engine.py        # ${isEn ? 'Core algorithm and data processing engine' : 'Çekirdek algoritma ve veri işleme motoru'}
│   └── 📄 models.py             # ${isEn ? 'Data schemas and state management' : 'Veri şemaları ve durum yönetimi'}
├── 📁 frontend/                 # ${isEn ? 'User interface and visual components' : 'Kullanıcı arayüzü ve görsel bileşenler'}
│   ├── 📄 index.html            # ${isEn ? 'Main dashboard interface' : 'Ana kontrol paneli'}
│   ├── 📁 css/                  # ${isEn ? 'Responsive and modern styling' : 'Responsive ve modern stil tanımları'}
│   └── 📁 js/                   # ${isEn ? 'Async data & socket manager' : 'Asenkron veri ve soket yöneticisi'}
├── 📁 data/                     # ${isEn ? 'Local persistent storage and cache' : 'Yerel depolama ve önbellek havuzu'}
└── 📄 requirements.txt          # ${isEn ? 'Python dependencies & packages' : 'Paket ve kütüphane bağımlılıkları'}`;

    // Akış Adımları (4 Step Pipeline)
    const pipelineSteps = (function() {
      if (isEn && pEn.pipelineSteps && Array.isArray(pEn.pipelineSteps)) {
        return pEn.pipelineSteps;
      }
      
      const pid = (project.id || '').toLowerCase();
      const flowsTr = {
        'bist-bilanco-karlilik-tahmini': [
          { num: "01", title: "Veri Çekme & Dolarizasyon", desc: "TCMB Kurları & KAP", detail: "TL bilançolardaki enflasyon yanılsamasını gidermek için veriler dolarize edilir." },
          { num: "02", title: "Öznitelik Analizi", desc: "Finansal Rasyolar", detail: "Borçluluk, brüt marj ve çeyreklik büyüme oranları taranır." },
          { num: "03", title: "Tahmin Modeli", desc: "Makine Öğrenmesi", detail: "Bilançolar resmi açıklanmadan önce kârlılık yönü hesaplanır." },
          { num: "04", title: "Sonuç & Rapor Ekranı", desc: "Kârlılık Doğrulaması", detail: "Yatırımcının tek bakışta anlayabileceği başarı tablosu sunulur." }
        ],
        'oymapos-barkod-sistemi': [
          { num: "01", title: "Barkod Okuma / Giriş", desc: "USB Barkod & Numpad", detail: "Ürün barkodu okutulduğu anda veri milisaniyede yakalanır." },
          { num: "02", title: "Hafıza & Stok Kontrolü", desc: "SQLite WAL Veritabanı", detail: "Kasa kilitlenmeden ürün fiyatı ve stok anında doğrulanır." },
          { num: "03", title: "İşlem & Satış Kaydı", desc: "Sıfır Veri Kaybı", detail: "Elektrik kesilse dahi son işlem güvenle veritabanına yazılır." },
          { num: "04", title: "Doğrudan Fiş Baskısı", desc: "Termal Yazıcı Çıktısı", detail: "Yazıcı donmadan doğrudan net bilgi fişi basar." }
        ],
        'oymapos-etiket-yazdirici': [
          { num: "01", title: "Fiyat / Liste Girişi", desc: "Mobil Telefon / Excel", detail: "Reyonda gezerken telefondan veya PC'den güncel fiyatlar girilir." },
          { num: "02", title: "Wi-Fi Sunucu İletimi", desc: "Yerel Ağ Bağlantısı", detail: "Zayıf kasayı yormadan güçlü bilgisayardaki sunucuya aktarılır." },
          { num: "03", title: "Şablon & Barkod Çizimi", desc: "Net EAN-13 Vektörü", detail: "Bulanıklık olmadan standart raf etiketi şablonu oluşturulur." },
          { num: "04", title: "Toplu Termal Baskı", desc: "Doğrudan Yazıcı Portu", detail: "Yüzlerce etiket kağıt israfı olmadan ardı ardına basılır." }
        ],
        'disk-kurtarma-araci': [
          { num: "01", title: "Salt-Okunur Bağlantı", desc: "Win32 API (Sıfır Yazma)", detail: "Hasarlı diske hiçbir veri yazmadan ham sektörden erişilir." },
          { num: "02", title: "İmza Taraması", desc: "Dosya İmzası (Magic Bytes)", detail: "Dosya tablosu çökmüş olsa da sektör sektör dosya başlıkları aranır." },
          { num: "03", title: "Hafızada Birleştirme", desc: "Bozuk Parça Ayıklama", detail: "Başlangıçtan bitişe kadar olan sektörler bellekte toplanır." },
          { num: "04", title: "Yeni Diske Kurtarma", desc: "Hedef Depolama", detail: "Kurtarılan sağlam dosyalar doğrudan yeni bir sürücüye yazılır." }
        ],
        'gardrops-otomasyon-botu': [
          { num: "01", title: "Hedef Kitle Taraması", desc: "Aktif Kullanıcı Profilleri", detail: "İlgili kategorideki potansiyel alıcıların listesi çıkarılır." },
          { num: "02", title: "Yerel İsim Doğrulama", desc: "Durum Takip Veritabanı", detail: "F5 bug'ına aldanmamak için kullanıcının takip durumu kontrol edilir." },
          { num: "03", title: "Doğal Takip İsteği", desc: "İnsansı Zamanlama", detail: "Platform kurallarına uygun rastgele aralıklarla işlem yapılır." },
          { num: "04", title: "Kalıcı Durum Kaydı", desc: "Mükerrer İstek Engeli", detail: "Kullanıcı takip edildi olarak işaretlenir, yanlış çıkma önlenir." }
        ],
        'airdrop-local': [
          { num: "01", title: "QR Kod ile Eşleşme", desc: "Yerel Wi-Fi Ağı", detail: "Kablo aramadan telefon kamerasından QR okutularak bağlanılır." },
          { num: "02", title: "Dosya Seçimi", desc: "Sürükle-Bırak Arayüzü", detail: "4K videolar ve büyük dosyalar kota harcamadan seçilir." },
          { num: "03", title: "Yerel Ağ Transferi", desc: "100+ MB/s Hız", detail: "Doğrudan iki cihaz arasında yerel Wi-Fi üzerinden pompalanır." },
          { num: "04", title: "Bütünlük & Teslimat", desc: "Kayıpsız İndirme", detail: "Dosya hedef cihazın indirme klasörüne eksiksiz kaydedilir." }
        ]
      };

      if (flowsTr[pid]) return flowsTr[pid];

      const stack = project.techStack || [];
      return [
        { num: "01", title: isEn ? "Input & Request Ingestion" : "Girdi & İstek Yakalama", desc: stack[0] || (isEn ? "User Interface" : "Kullanıcı Arayüzü"), detail: isEn ? "Receives user parameters and payloads with rapid validation." : "Kullanıcı komutları veya veri girişleri sade ve hızlı şekilde karşılanır." },
        { num: "02", title: isEn ? "Logic & Processing Layer" : "İşlem & Mantık Katmanı", desc: stack[1] || (isEn ? "Core Engine" : "Arka Plan Motoru"), detail: isEn ? "Filters data, executes sanity checks, and stages queued operations." : "Veriler ayıklanır, gerekli kontroller yapılır ve işlem sırasına alınır." },
        { num: "03", title: isEn ? "Algorithm & Execution" : "Çekirdek Çözüm & Algoritma", desc: stack[2] || (isEn ? "Pipeline" : "Algoritma / Veri Hattı"), detail: isEn ? "Runs specialized core routines (forecasting, download, test, generation)." : "Sistemin asıl işlevi (tahmin, indirme, test, dosya üretimi) işletilir." },
        { num: "04", title: isEn ? "Output & Delivery" : "Sonuç & Çıktı Üretimi", desc: stack[3] || (isEn ? "Persistent Storage" : "Kalıcı Kayıt / Rapor"), detail: isEn ? "Presents results in the UI and commits persistent state to disk safely." : "İşlenen sonuç ekrana yansıtılır veya güvenle yerel hafızaya kaydedilir." }
      ];
    })();

    // Önceki ve Sonraki Proje Tespiti
    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    const prevProjectRaw = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProjectRaw = (currentIndex >= 0 && currentIndex < allProjects.length - 1) ? allProjects[currentIndex + 1] : null;
    const prevProject = prevProjectRaw ? this.resolveProjectData(prevProjectRaw) : null;
    const nextProject = nextProjectRaw ? this.resolveProjectData(nextProjectRaw) : null;

    // Hızlı Başlatma Terminal Komutları
    const cloneCmd = project.githubUrl 
      ? `git clone ${project.githubUrl}.git\ncd ${project.id}\npython -m venv .venv\n.venv\\Scripts\\activate\npip install -r requirements.txt\npython main.py`
      : `# ${isEn ? 'Proprietary Project (Local Dev)' : 'Özel Ar-Ge Projesi (Lokal / Kapalı Kaynak Geliştirme)'}\ncd ${project.id}\npython -m venv .venv\n.venv\\Scripts\\activate\npip install -r requirements.txt\npython main.py`;

    const zipDownloadUrl = project.githubUrl 
      ? `${project.githubUrl}/archive/refs/heads/main.zip` 
      : null;

    // Projeye Özgü Mock Dosya İçerikleri
    const sampleFiles = {
      'main.py': `# ==============================================================================
# ${project.title} — ${isEn ? 'Entrypoint Launcher' : 'Tek Tıkla Başlatıcı'}
# Developer: Oğuz Taşdemir (Istanbul Medeniyet University)
# ==============================================================================
import sys
import os

def initialize_system():
    print("🚀 [${project.id}] Initializing...")
    print("🛡️ Environment: Python %s" % sys.version.split()[0])
    
    # Core server dispatch
    from backend.app import start_server
    start_server(host="127.0.0.1", port=8000)

if __name__ == "__main__":
    initialize_system()
`,
      'backend/app.py': `# ==============================================================================
# ${project.title} — ${isEn ? 'API & Core Router' : 'API ve Çekirdek Yönlendirici'}
# ==============================================================================
from backend.core_engine import ProcessEngine

class ApplicationServer:
    def __init__(self):
        self.engine = ProcessEngine()
        print("⚡ [Engine] Core algorithms & pipelines initialized.")

    def handle_request(self, payload: dict):
        return self.engine.execute(payload)

def start_server(host="127.0.0.1", port=8000):
    app = ApplicationServer()
    print(f"🌐 Server listening on http://{host}:{port}")
    return app
`,
      'backend/core_engine.py': `# ==============================================================================
# ${project.title} — ${isEn ? 'Core Processing Engine' : 'Çekirdek İşleme Motoru & Matematiksel Modelleme'}
# ==============================================================================
class ProcessEngine:
    def __init__(self):
        self.tech_stack = ${JSON.stringify(project.techStack || [])}
        self.metric = "${project.highlightMetric || (isEn ? 'Optimization Active' : 'Optimizasyon Aktif')}"

    def execute(self, data):
        # High throughput asynchronous algorithm execution
        return {
            "status": "success",
            "benchmark": self.metric,
            "processed": True
        }
`,
      'requirements.txt': (project.techStack || ['fastapi', 'uvicorn', 'pandas', 'numpy'])
        .map(t => {
          const pkg = t.toLowerCase().split(' ')[0].replace(/[^a-z0-9_-]/g, '');
          return `${pkg || 'core-engine'} >= 1.0.0`;
        }).join('\n')
    };

    container.innerHTML = `
      <div class="stage-content-wrapper">
        
        <!-- Breadcrumb Navigasyon -->
        <div class="stage-breadcrumb-row">
          <span class="breadcrumb-item">${isEn ? 'Portfolio' : 'Portfolyo'}</span>
          <span class="breadcrumb-sep">&gt;</span>
          <span class="breadcrumb-item">${project.categoryLabel}</span>
          <span class="breadcrumb-sep">&gt;</span>
          <span class="breadcrumb-item current">${project.title}</span>
        </div>

        <!-- 1. Üst Başlık, Rozetler ve Aksiyon Konsolu -->
        <div class="stage-hero-banner">
          <div class="stage-meta-tags">
            <span class="stage-tag-category">${project.categoryLabel}</span>
            <span class="stage-tag-status">&bull; ${project.badge}</span>
            <span class="stage-tag-license">🛡️ MIT License</span>
            ${!isPrivate ? `<span class="stage-tag-open">🟢 ${isEn ? 'Open Source (Public)' : 'Açık Kaynak (Public)'}</span>` : `<span class="stage-tag-private">🔒 ${isEn ? 'Proprietary (Private)' : 'Özel Ar-Ge'}</span>`}
            <span class="stage-tag-version">⚡ v1.4 ${isEn ? 'Stable' : 'Kararlı'}</span>
          </div>

          <h1 class="stage-main-title">${project.title}</h1>
          <p class="stage-lead-summary">${project.summary}</p>

          <!-- 3'lü Mimari Metrik / İstatistik Kartları Grid (KPI Konsolu) -->
          <div class="stage-stats-triad">
            <div class="stat-triad-card highlight-glow">
              <span class="stat-triad-label">${isEn ? 'Highlight Metric / Speed' : 'Öne Çıkan Başarı / Hız'}</span>
              <span class="stat-triad-value" style="color: var(--accent-amber); font-size: 1.05rem;">${project.highlightMetric ? project.highlightMetric.split(',')[0] : (isEn ? '⚡ High Performance' : '⚡ Yüksek Performans')}</span>
              <span class="stat-triad-desc">${isEn ? 'Verified in Production & Testing' : 'Sahada & Test Ortamında Doğrulandı'}</span>
            </div>
            <div class="stat-triad-card">
              <span class="stat-triad-label">${isEn ? 'Tech Modules' : 'Teknoloji Kümesi'}</span>
              <span class="stat-triad-value">${project.techStack ? project.techStack.length : 0} ${isEn ? 'Modules' : 'Modül'}</span>
              <span class="stat-triad-desc">${project.techStack ? project.techStack.slice(0, 3).join(', ') : 'Python, JS'}</span>
            </div>
            <div class="stat-triad-card">
              <span class="stat-triad-label">${isEn ? 'System Architecture' : 'Sistem Mimarisi'}</span>
              <span class="stat-triad-value">${isPrivate ? (isEn ? 'Proprietary' : 'Özel Ar-Ge') : (isEn ? 'Open Source' : 'Açık Kaynak')}</span>
              <span class="stat-triad-desc">${isPrivate ? (isEn ? 'Active R&D Pipeline' : 'Aktif Geliştirme Havuzu') : (isEn ? 'Production Ready & Stable' : 'Üretime Hazır & Kararlı')}</span>
            </div>
          </div>

          <!-- Aksiyon Butonları Çubuğu -->
          <div class="stage-actions-bar">
            ${!isPrivate ? `
              ${project.githubUrl ? `
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="stage-action-link github-btn" title="${isEn ? 'View Open Source Code on GitHub' : 'GitHub\'da Açık Kaynak Kodları İncele'}">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <span>${isEn ? 'View on GitHub' : 'GitHub\'da İncele'}</span>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              ` : ''}

              <button class="stage-action-link zip-btn" id="btnStageDownloadZip" title="${isEn ? 'Download Project Folder Tree & Source Code (.ZIP)' : 'Projenin tüm klasör yapısını ve kaynak kodlarını ZIP olarak indir'}">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>${isEn ? 'Download ZIP' : 'ZIP İndir'}</span>
              </button>
            ` : `
              <span class="stage-private-badge" title="${isEn ? 'Proprietary project under active R&D' : 'Bu proje aktif geliştirme ve Ar-Ge aşamasındadır'}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <span>🔒 ${isEn ? 'Proprietary' : 'Özel Ar-Ge'}</span>
              </span>
            `}

            ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="stage-action-link demo-live-btn" title="${isEn ? 'Open live demo in a new tab' : 'Canlı uygulamayı yeni sekmede aç'}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L24 21H0L12 0Z"/></svg>
                <span>${isEn ? 'Live Web Demo' : 'Canlı Web Demo'}</span>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            ` : ''}

            <!-- Dışa Aktarma Dropdown Menüsü -->
            <div class="export-menu-wrapper">
              <button class="stage-action-link outline" id="exportDropdownToggle" aria-haspopup="true" aria-expanded="false" title="${isEn ? 'Export Project Data' : 'Proje Verilerini Dışa Aktar'}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                <span>${isEn ? 'Export' : 'Dışa Aktar'}</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="export-dropdown-popover" id="exportDropdownMenu">
                ${!isPrivate ? `
                  <button class="export-popover-item export-zip-highlight" id="btnExportProjectZip">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>${isEn ? 'Project Folder Tree (.ZIP)' : 'Klasör Yapısı & Kaynak Kod (.ZIP)'}</span>
                  </button>
                ` : `
                  <button class="export-popover-item disabled" disabled title="${isEn ? 'Proprietary R&D' : 'Özel Ar-Ge'}">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    <span>🔒 ${isEn ? 'Source Code (Proprietary)' : 'Kaynak Kod (Özel Ar-Ge)'}</span>
                  </button>
                `}
                <button class="export-popover-item" id="btnCopyProjectTsv">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span>${isEn ? 'Copy to Clipboard (TSV)' : 'Panoya Kopyala (TSV)'}</span>
                </button>
                <button class="export-popover-item" id="btnDownloadCsv">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                  <span>${isEn ? 'Download Excel (.csv)' : 'Excel (.csv) İndir'}</span>
                </button>
                <button class="export-popover-item" id="btnDownloadJson">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                  <span>${isEn ? 'Download Project JSON' : 'Proje JSON İndir'}</span>
                </button>
                <button class="export-popover-item" id="btnDownloadReadme">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  <span>${isEn ? 'Download README (.md)' : 'Dokümantasyon (README.md)'}</span>
                </button>
                <button class="export-popover-item" id="btnDownloadAllCsv">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  <span>${isEn ? 'All Projects (.csv)' : 'Tüm Projeler (Excel .csv)'}</span>
                </button>
              </div>
            </div>

            <!-- Proje Doğrudan Bağlantısını Kopyala Butonu -->
            <button class="stage-action-link outline" id="btnShareProjectLink" title="${isEn ? 'Copy direct link to this project' : 'Bu projenin doğrudan bağlantısını kopyala'}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
              <span>${isEn ? 'Copy Link' : 'Linki Kopyala'}</span>
            </button>
          </div>
        </div>

        <!-- 2. MODERN SEKME (TAB) NAVİGASYON ŞERİDİ -->
        <div class="stage-tabs-nav-bar" role="tablist">
          <button class="stage-tab-btn active" data-tab="overview" title="${isEn ? 'Overview & Problem' : 'Genel Bakış & Problem'}">
            <span class="tab-icon">📊</span>
            <span class="tab-title">${isEn ? 'Overview' : 'Genel Bakış'}</span>
          </button>
          <button class="stage-tab-btn" data-tab="flow" title="${isEn ? 'System Flow & Execution Steps' : 'Sistem Akış Şeması & Adım Adım Çalışma'}">
            <span class="tab-icon">🔄</span>
            <span class="tab-title">${isEn ? 'Flow Diagram' : 'Akış Şeması'}</span>
          </button>
          <button class="stage-tab-btn" data-tab="architecture" title="${isEn ? 'System Architecture & Solutions' : 'Sistem Mimarisi & Çözülen Problem'}">
            <span class="tab-icon">🏛️</span>
            <span class="tab-title">${isEn ? 'Architecture' : 'Sistem Mimarisi'}</span>
          </button>
          <button class="stage-tab-btn" data-tab="quickstart" title="${isEn ? 'Quick Start & Local Setup' : 'Hızlı Başlat & Kurulum'}">
            <span class="tab-icon">⚡</span>
            <span class="tab-title">${isEn ? 'Quick Start' : 'Hızlı Başlat'}</span>
            <span class="tab-pill-badge">${isEn ? 'Guide' : 'Rehber'}</span>
          </button>
          <button class="stage-tab-btn" data-tab="code" title="${isEn ? 'Code Explorer & Directory Tree' : 'Kod Gezgini & Dizin Mimarisi'}">
            <span class="tab-icon">📁</span>
            <span class="tab-title">${isEn ? 'Code Explorer' : 'Kod Gezgini'}</span>
          </button>
        </div>

        <!-- 3. SEKME İÇERİKLERİ (TABS CONTAINER) -->
        <div class="stage-tabs-viewport">
          
          <!-- ================= TAB 1: GENEL BAKIŞ & PROBLEM ================= -->
          <div class="stage-tab-pane active" id="tabPane-overview">
            
            <!-- Dil Dağılım Çubuğu -->
            <div class="lang-breakdown-card">
              <div class="lang-breakdown-header">
                <span class="lang-breakdown-title">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  ${isEn ? 'Technologies Used & Language Breakdown' : 'Kullanılan Teknolojiler & Dil Ağırlığı'}
                </span>
                <span class="lang-breakdown-total">${languages.length} ${isEn ? 'Core Components' : 'Temel Bileşen'}</span>
              </div>
              <div class="lang-distribution-bar">
                ${languages.map(l => `<div class="lang-segment" style="width: ${l.percent}%; background-color: ${l.color};" title="${l.name}: %${l.percent}"></div>`).join('')}
              </div>
              <div class="lang-distribution-legend">
                ${languages.map(l => `
                  <div class="lang-legend-item">
                    <span class="lang-legend-dot" style="background-color: ${l.color};"></span>
                    <span class="lang-legend-name">${l.name}</span>
                    <span class="lang-legend-pct">%${l.percent}</span>
                  </div>
                `).join('')}
              </div>
              <div class="tech-pills-row" style="margin-top: 14px;">
                ${(project.techStack || []).map(t => `<span class="tech-bubble">${t}</span>`).join('')}
              </div>
            </div>

            <!-- Neden Geliştirdim? Doğal Geliştirici Hikayesi -->
            <div class="case-study-box developer-story-card">
              <div class="case-box-title-row">
                <span class="case-box-num">01</span>
                <h3 class="case-box-header">${isEn ? 'Why Did I Build This Project? (Developer Story)' : 'Neden Bu Projeyi Geliştirdim? (Geliştirici Hikayesi)'}</h3>
              </div>
              <p class="case-box-text">${projectWhyStory}</p>
            </div>

            <!-- Çözülen Problem & Teknik İhtiyaç -->
            <div class="case-study-box">
              <div class="case-box-title-row">
                <span class="case-box-num">02</span>
                <h3 class="case-box-header">${isEn ? 'Problem Encountered & Technical Need' : 'Karşılaşılan Problem & Teknik İhtiyaç'}</h3>
              </div>
              <p class="case-box-text">${problemText}</p>
            </div>

            <!-- Öne Çıkan Yetenekler & Çözümler -->
            ${features.length > 0 ? `
              <div class="case-study-box">
                <div class="case-box-title-row">
                  <span class="case-box-num">03</span>
                  <h3 class="case-box-header">${isEn ? 'Key Features & Solutions' : 'Öne Çıkan Özellikler & Çözümler'}</h3>
                </div>
                <ul class="features-check-stack">
                  ${features.map(feat => `
                    <li>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>${feat}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}

          </div>

          <!-- ================= TAB 2: SİSTEM AKIŞ ŞEMASI ================= -->
          <div class="stage-tab-pane" id="tabPane-flow">
            
            <div class="case-study-box">
              <div class="case-box-title-row">
                <span class="case-box-num">01</span>
                <h3 class="case-box-header">${isEn ? '01. System Flow & Step-by-Step Architecture' : '01. Sistem Akış Şeması & Adım Adım İşleyiş'}</h3>
              </div>
              <p class="case-box-text">${isEn ? 'The end-to-end data processing and execution steps of this system are summarized in the 4-stage pipeline below:' : 'Bu sistemin baştan sona veri işleme ve işlem yürütme adımları aşağıdaki 4 aşamalı akışta özetlenmiştir:'}</p>
              
              ${pipelineSteps ? `
                <div class="system-pipeline-container" style="margin-top: 20px;">
                  <div class="system-pipeline-header">⚡ ${isEn ? 'Step-by-Step Execution Pipeline:' : 'Adım Adım Çalışma Akışı:'}</div>
                  <div class="system-pipeline-steps">
                    ${pipelineSteps.map((step, idx) => `
                      <div class="pipeline-step-node">
                        <span class="pipeline-step-num">${isEn ? 'Step' : 'Adım'} ${step.num}</span>
                        <strong class="pipeline-step-title">${step.title}</strong>
                        <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #38bdf8;">${step.desc}</span>
                        <p style="font-size: 0.76rem; color: var(--text-muted); margin-top: 6px; line-height: 1.35;">${step.detail}</p>
                      </div>
                      ${idx < pipelineSteps.length - 1 ? `<span class="pipeline-arrow">&rarr;</span>` : ''}
                    `).join('')}
                  </div>
                </div>
              ` : ''}
            </div>

          </div>

          <!-- ================= TAB 3: SİSTEM MİMARİSİ & ÇÖZÜLEN PROBLEM ================= -->
          <div class="stage-tab-pane" id="tabPane-architecture">
            
            <div class="case-study-box">
              <div class="case-box-title-row">
                <span class="case-box-num">01</span>
                <h3 class="case-box-header">${isEn ? '01. How Does the System Work? (Core Logic)' : '01. Sistem Nasıl Çalışıyor? (Temel Çalışma Mantığı)'}</h3>
              </div>
              <p class="case-box-text">${archText}</p>
              
              ${challengeText ? `
                <div class="case-box-subdetail" style="margin-top: 24px;">
                  <div class="case-subdetail-tag">💡 ${isEn ? 'Most Critical Technical Challenge Solved' : 'Çözülen En Kritik Teknik Zorluk'}</div>
                  <p class="case-box-text">${challengeText}</p>
                </div>
              ` : ''}
            </div>

          </div>

          <!-- ================= TAB 4: HIZLI BAŞLAT & KURULUM ================= -->
          <div class="stage-tab-pane" id="tabPane-quickstart">
            
            <div class="case-study-box">
              <div class="case-box-title-row">
                <span class="case-box-num">01</span>
                <h3 class="case-box-header">${isEn ? '01. Local Installation & Setup Guide' : '01. Yerel Kurulum & Çalıştırma Rehberi'}</h3>
              </div>
              <p class="case-box-text">${isEn ? 'You can follow the steps below to set up and run this project in your local development environment:' : 'Bu projeyi yerel geliştirme ortamınızda çalıştırmak ve test etmek için aşağıdaki adımları kullanabilirsiniz:'}</p>
              
              <ol class="qs-steps-list" style="margin-top: 18px;">
                <li>
                  <strong>${isEn ? '1. Clone or Download Repository' : '1. Depoyu Klonlayın veya İndirin'}</strong>
                  <code>git clone ${project.githubUrl || 'https://github.com/oguztasdemir/' + project.id}.git</code>
                </li>
                <li>
                  <strong>${isEn ? '2. Enter Project Directory & Activate Virtualenv' : '2. Proje Dizinine Geçin ve Sanal Ortamı Aktif Edin'}</strong>
                  <code>cd ${project.id} &amp;&amp; python -m venv .venv &amp;&amp; .venv\\Scripts\\activate</code>
                </li>
                <li>
                  <strong>${isEn ? '3. Install Package Dependencies' : '3. Gerekli Paket Bağımlılıklarını Yükleyin'}</strong>
                  <code>pip install -r requirements.txt</code>
                </li>
                <li>
                  <strong>${isEn ? '4. Launch the Application' : '4. Uygulamayı Başlatın'}</strong>
                  <code>python main.py</code>
                </li>
              </ol>

              <div class="qs-shortcuts-row" style="margin-top: 24px;">
                <button class="qs-copy-btn" id="btnCopyFullQuickstart">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span>${isEn ? 'Copy All Installation Commands' : 'Tüm Kurulum Komutlarını Kopyala'}</span>
                </button>
                ${!isPrivate ? `
                  <button class="qs-zip-btn" id="btnQsDownloadZip" title="${isEn ? 'Download Project Folder Tree & Source Code (.ZIP)' : 'Projenin tüm klasör yapısını ve kaynak kodlarını ZIP olarak indir'}">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    <span>${isEn ? 'Source Code (.ZIP Download)' : 'Kaynak Kod (.ZIP İndir)'}</span>
                  </button>
                ` : ''}
              </div>
            </div>

          </div>

          <!-- ================= TAB 5: KOD GEZGİNİ & PAKETLER ================= -->
          <div class="stage-tab-pane" id="tabPane-code">
            
            <div class="code-explorer-layout">
              
              <!-- Sol: Dosya Listesi Ağacı -->
              <div class="code-file-tree-sidebar">
                <div class="code-tree-header">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                  <span>${isEn ? 'Project Files' : 'Proje Dosyaları'}</span>
                </div>
                <div class="code-tree-items-list" id="codeTreeItemsList">
                  <button class="code-tree-file-btn active" data-file="main.py">
                    <span class="file-icon">🐍</span>
                    <span class="file-name">main.py</span>
                  </button>
                  <button class="code-tree-file-btn" data-file="backend/app.py">
                    <span class="file-icon">⚙️</span>
                    <span class="file-name">backend/app.py</span>
                  </button>
                  <button class="code-tree-file-btn" data-file="backend/core_engine.py">
                    <span class="file-icon">🧠</span>
                    <span class="file-name">backend/core_engine.py</span>
                  </button>
                  <button class="code-tree-file-btn" data-file="requirements.txt">
                    <span class="file-icon">📦</span>
                    <span class="file-name">requirements.txt</span>
                  </button>
                </div>

                <!-- Klasör Hiyerarşisi Özeti -->
                <div class="code-tree-ascii-wrap">
                  <div class="code-tree-ascii-title">${isEn ? 'Full Directory Hierarchy:' : 'Tam Dizin Hiyerarşisi:'}</div>
                  <pre class="code-tree-ascii-pre"><code>${folderTree}</code></pre>
                </div>
              </div>

              <!-- Sağ: Kod Önizleme Penceresi -->
              <div class="code-preview-pane">
                <div class="code-preview-header">
                  <span class="code-preview-filename" id="codePreviewFilename">📄 main.py</span>
                  <button class="code-copy-btn" id="btnCopyActiveCode">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <span>${isEn ? 'Copy Code' : 'Kodu Kopyala'}</span>
                  </button>
                </div>
                <pre class="code-preview-pre"><code id="codePreviewContent">${sampleFiles['main.py']}</code></pre>
              </div>

            </div>

          </div>

        </div>

        <!-- Projeler Arası Hızlı Alt Navigasyon (Prev / Next Bar) -->
        <div class="stage-bottom-nav-bar">
          ${prevProject ? `
            <button class="stage-nav-project-btn prev" data-target-id="${prevProject.id}" title="${isEn ? 'Previous: ' + prevProject.title : 'Önceki Proje: ' + prevProject.title}">
              <div class="stage-nav-arrow-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              </div>
              <div class="stage-nav-btn-meta">
                <span class="stage-nav-btn-sub">&larr; ${isEn ? 'PREVIOUS PROJECT' : 'ÖNCEKİ PROJE'} &bull; ${prevProject.categoryLabel || (isEn ? 'System' : 'Sistem')}</span>
                <span class="stage-nav-btn-title">${prevProject.title}</span>
              </div>
            </button>
          ` : '<div class="stage-nav-placeholder"></div>'}

          ${nextProject ? `
            <button class="stage-nav-project-btn next" data-target-id="${nextProject.id}" title="${isEn ? 'Next: ' + nextProject.title : 'Sonraki Proje: ' + nextProject.title}">
              <div class="stage-nav-arrow-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
              <div class="stage-nav-btn-meta">
                <span class="stage-nav-btn-sub">${isEn ? 'NEXT PROJECT' : 'SONRAKİ PROJE'} &bull; ${nextProject.categoryLabel || (isEn ? 'System' : 'Sistem')} &rarr;</span>
                <span class="stage-nav-btn-title">${nextProject.title}</span>
              </div>
            </button>
          ` : '<div class="stage-nav-placeholder"></div>'}
        </div>

      </div>
    `;

    // ==========================================
    // ETKİLEŞİM VE OLAY DİNLEYİCİLERİ (EVENTS)
    // ==========================================

    // 1. Sekme Geçiş Mantığı (Tabs Switching)
    const tabButtons = container.querySelectorAll('.stage-tab-btn');
    const tabPanes = container.querySelectorAll('.stage-tab-pane');

    function switchTab(targetTabId, updateUrl = true) {
      if (!targetTabId) targetTabId = 'overview';
      tabButtons.forEach(btn => {
        if (btn.getAttribute('data-tab') === targetTabId) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      tabPanes.forEach(pane => {
        if (pane.id === `tabPane-${targetTabId}`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });

      if (updateUrl && project && project.id) {
        window.location.hash = `project=${project.id}&tab=${targetTabId}`;
      }
    }

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        switchTab(tab);
      });
    });

    // Hero alanındaki butonlardan sekme atlamaları
    container.querySelectorAll('.hero-jump-btn, .live-test-jump-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-target-tab');
        if (targetTab) switchTab(targetTab);
      });
    });

    // Her proje açıldığında her zaman Genel Bakış (overview) ile başla
    const defaultActiveTab = initialTab || 'overview';
    switchTab(defaultActiveTab, false);

    // 2. Hızlı Başlat Komutlarını Kopyalama
    const btnCopyFullQuickstart = container.querySelector('#btnCopyFullQuickstart');
    if (btnCopyFullQuickstart) {
      btnCopyFullQuickstart.addEventListener('click', () => {
        const fullCommands = cloneCmd;
        navigator.clipboard.writeText(fullCommands).then(() => {
          btnCopyFullQuickstart.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${isEn ? 'Copied!' : 'Kopyalandı!'}</span>
          `;
          setTimeout(() => {
            btnCopyFullQuickstart.innerHTML = `
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>${isEn ? 'Copy All Installation Commands' : 'Tüm Kurulum Komutlarını Kopyala'}</span>
            `;
          }, 2000);
        });
      });
    }

    // 3. Kod Gezgini (Code Explorer) Dosya Seçimi
    const fileButtons = container.querySelectorAll('.code-tree-file-btn');
    const codePreviewContent = container.querySelector('#codePreviewContent');
    const codePreviewFilename = container.querySelector('#codePreviewFilename');
    const btnCopyActiveCode = container.querySelector('#btnCopyActiveCode');

    fileButtons.forEach(fBtn => {
      fBtn.addEventListener('click', () => {
        fileButtons.forEach(b => b.classList.remove('active'));
        fBtn.classList.add('active');
        const fileName = fBtn.getAttribute('data-file');
        if (codePreviewFilename) codePreviewFilename.textContent = `📄 ${fileName}`;
        if (codePreviewContent && sampleFiles[fileName]) {
          codePreviewContent.textContent = sampleFiles[fileName];
        }
      });
    });

    if (btnCopyActiveCode && codePreviewContent) {
      btnCopyActiveCode.addEventListener('click', () => {
        navigator.clipboard.writeText(codePreviewContent.textContent).then(() => {
          btnCopyActiveCode.innerHTML = `<span>${isEn ? 'Copied!' : 'Kopyalandı!'}</span>`;
          setTimeout(() => {
            btnCopyActiveCode.innerHTML = `
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              <span>${isEn ? 'Copy Code' : 'Kodu Kopyala'}</span>
            `;
          }, 1800);
        });
      });
    }

    // 4. Alt Prev / Next Proje Butonlarına Tıklama Dinleyicileri
    container.querySelectorAll('.stage-nav-project-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target-id');
        if (targetId && typeof onSelectProject === 'function') {
          onSelectProject(targetId);
        }
      });
    });

    // 7. Proje Doğrudan Bağlantısını Kopyalama Dinleyicisi
    const btnShareProjectLink = container.querySelector('#btnShareProjectLink');
    if (btnShareProjectLink) {
      btnShareProjectLink.addEventListener('click', () => {
        const fullUrl = `${window.location.origin}${window.location.pathname}#project=${project.id}`;
        navigator.clipboard.writeText(fullUrl).then(() => {
          const originalContent = btnShareProjectLink.innerHTML;
          btnShareProjectLink.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>${isEn ? 'Link Copied!' : 'Bağlantı Kopyalandı!'}</span>
          `;
          setTimeout(() => {
            btnShareProjectLink.innerHTML = originalContent;
          }, 2200);
        }).catch(() => {});
      });
    }

    // 8. Dışa aktarma menüsü aç/kapa
    const exportDropdownToggle = container.querySelector('#exportDropdownToggle');
    const exportDropdownMenu = container.querySelector('#exportDropdownMenu');
    if (exportDropdownToggle && exportDropdownMenu) {
      exportDropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        exportDropdownMenu.classList.toggle('active');
      });
      document.addEventListener('click', () => {
        exportDropdownMenu.classList.remove('active');
      });
    }

    const toastBar = document.getElementById('toastBar');
    const toastText = document.getElementById('toastText');

    // 9. ZIP İndirme Eylemleri (Hero & QuickStart & Export Menüsü)
    function triggerZipExport() {
      if (typeof ProjectExporter !== 'undefined') {
        ProjectExporter.downloadProjectZip(project, isEn);
        UI.showToast(isEn ? `Downloading ${project.title} source (.ZIP)...` : `${project.title} klasör yapısı ve kaynak kodları ZIP olarak indiriliyor...`, toastBar, toastText);
      } else {
        window.location.href = `/api/export/project-zip/${project.id}`;
      }
    }

    const btnStageDownloadZip = container.querySelector('#btnStageDownloadZip');
    if (btnStageDownloadZip) {
      btnStageDownloadZip.addEventListener('click', (e) => {
        e.preventDefault();
        triggerZipExport();
      });
    }

    const btnQsDownloadZip = container.querySelector('#btnQsDownloadZip');
    if (btnQsDownloadZip) {
      btnQsDownloadZip.addEventListener('click', (e) => {
        e.preventDefault();
        triggerZipExport();
      });
    }

    const btnExportProjectZip = container.querySelector('#btnExportProjectZip');
    if (btnExportProjectZip) {
      btnExportProjectZip.addEventListener('click', (e) => {
        e.preventDefault();
        if (exportDropdownMenu) exportDropdownMenu.classList.remove('active');
        triggerZipExport();
      });
    }

    // 10. TSV Kopyalama
    const btnCopyProjectTsv = container.querySelector('#btnCopyProjectTsv');
    if (btnCopyProjectTsv) {
      btnCopyProjectTsv.addEventListener('click', (e) => {
        e.preventDefault();
        if (exportDropdownMenu) exportDropdownMenu.classList.remove('active');
        const headers = isEn 
          ? ['ID', 'Title', 'Category', 'Description', 'Metric', 'Technologies'].join('\t')
          : ['ID', 'Başlık', 'Kategori', 'Açıklama', 'Metrik', 'Teknolojiler'].join('\t');
        const tsv = [
          headers,
          [project.id, project.title, project.categoryLabel, project.summary, project.highlightMetric, (project.techStack || []).join(', ')].join('\t')
        ].join('\n');
        navigator.clipboard.writeText(tsv).then(() => {
          UI.showToast(isEn ? 'Project data copied to clipboard as TSV' : 'Proje verisi TSV olarak panoya kopyalandı', toastBar, toastText);
        });
      });
    }

    // 11. Proje CSV İndir
    const btnDownloadCsv = container.querySelector('#btnDownloadCsv');
    if (btnDownloadCsv) {
      btnDownloadCsv.addEventListener('click', (e) => {
        e.preventDefault();
        if (exportDropdownMenu) exportDropdownMenu.classList.remove('active');
        if (typeof ProjectExporter !== 'undefined') {
          ProjectExporter.downloadProjectCsv(project, isEn);
          UI.showToast(isEn ? 'Project CSV report downloaded' : 'Proje Excel (.csv) raporu indirildi', toastBar, toastText);
        } else {
          window.location.href = `/api/export/csv`;
        }
      });
    }

    // 12. Proje JSON İndir
    const btnDownloadJson = container.querySelector('#btnDownloadJson');
    if (btnDownloadJson) {
      btnDownloadJson.addEventListener('click', (e) => {
        e.preventDefault();
        if (exportDropdownMenu) exportDropdownMenu.classList.remove('active');
        if (typeof ProjectExporter !== 'undefined') {
          ProjectExporter.downloadProjectJson(project);
          UI.showToast(isEn ? 'Project JSON downloaded' : 'Proje JSON dosyası indirildi', toastBar, toastText);
        } else {
          window.location.href = `/api/export/json`;
        }
      });
    }

    // 13. README.md İndir
    const btnDownloadReadme = container.querySelector('#btnDownloadReadme');
    if (btnDownloadReadme) {
      btnDownloadReadme.addEventListener('click', (e) => {
        e.preventDefault();
        if (exportDropdownMenu) exportDropdownMenu.classList.remove('active');
        if (typeof ProjectExporter !== 'undefined') {
          ProjectExporter.downloadProjectReadme(project, isEn);
          UI.showToast(isEn ? 'Project README.md downloaded' : 'Proje README.md dokümantasyonu indirildi', toastBar, toastText);
        }
      });
    }

    // 14. Tüm Projeler CSV İndir
    const btnDownloadAllCsv = container.querySelector('#btnDownloadAllCsv');
    if (btnDownloadAllCsv) {
      btnDownloadAllCsv.addEventListener('click', (e) => {
        e.preventDefault();
        if (exportDropdownMenu) exportDropdownMenu.classList.remove('active');
        if (typeof ProjectExporter !== 'undefined') {
          ProjectExporter.downloadAllProjectsCsv(allProjects, isEn);
          UI.showToast(isEn ? 'All projects CSV downloaded' : 'Tüm projelerin Excel tablosu indirildi', toastBar, toastText);
        } else {
          window.location.href = `/api/export/csv`;
        }
      });
    }

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
