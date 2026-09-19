/**
 * Uluslararasılaştırma (i18n) & Çoklu Dil Yöneticisi (TR / EN)
 * frontend/js/i18n.js
 */

const I18N_DICTIONARY = {
  tr: {
    // Sol Panel (Rail)
    profile_name: "Oğuz Taşdemir",
    profile_role: "Yazılım Geliştirici & Matematik",
    menu_group_label: "MENÜ",
    tab_home: "Ana Sayfa",
    tab_projects: "Portfolyo & Projeler",
    tab_portfolio: "Portfolyo",
    tab_about: "Hakkımda",
    tab_certificates: "Sertifikalar",
    tab_contact: "İletişim",
    btn_cv_download: "CV İndir (PDF)",
    theme_dark: "Tema: Koyu Mod",
    theme_light: "Tema: Açık Mod",
    lang_tr: "Türkçe",
    lang_en: "English",
    rail_collapse_title: "Sol Paneli Gizle/Göster",

    // Ana Sayfa (Home Hero)
    hero_pulse_text: "İstanbul • Matematik Lisans Mezunu • Aktif Geliştirici",
    hero_title_sub: "Sistem Mimarisi · Veri Bilimi · Yapay Zeka",
    hero_desc: "Bu platform; geliştirdiğim projeleri, çözülen gerçek saha problemlerini, düşük seviyeli donanım protokollerini ve otonom yapay zeka ajanlarını teknik şeffaflıkla sunan interaktif bir çalışma konsoludur. Geliştirilen yeni projeler ve sistem mimarileri düzenli olarak buraya dahil edilir.",
    hero_btn_projects: "Projeleri Keşfet",
    hero_btn_about: "Gelişim Hikayesi & Biyografi",
    hero_btn_certs: "Sertifikalarım (9 Belge)",

    // Telemetri Şeridi
    telemetry_projects_lbl: "Geliştirilen Proje",
    telemetry_certs_val: "9 Belge",
    telemetry_certs_lbl: "Yapay Zeka & Fintek Sertifikası",
    telemetry_status_val: "Aktif",
    telemetry_status_lbl: "Saha & Üretim Dağıtımı",

    // Odak Yetkinlik Alanları (Showcase Grid)
    domain_ai_tag: "Ajan & RAG",
    domain_ai_title: "Üretken Yapay Zeka & Otonom Ajanlar",
    domain_ai_desc: "Yerel LLM motorları (Llama-3, DeepSeek), ChromaDB RAG hafızası, YouTube video transkript madenciliği ve çok katmanlı otonom kodlama asistanları.",
    domain_pos_tag: "Saha & FinTech",
    domain_pos_title: "Perakende & Satış Otomasyonu (POS)",
    domain_pos_desc: "Kendi işlettiğimiz markette 7/24 kesintisiz çalışan, sıfır veri kaybı garantili SQLite WAL mimarili ve donanım protokol entegreli masaüstü sistemler.",
    domain_sys_tag: "Sistem & Ağ",
    domain_sys_title: "Düşük Seviye Donanım & Ağ Sistemleri",
    domain_sys_desc: "Ham disk sektör taraması (raw carving) ile adli veri kurtarma, Wi-Fi üzerinden P2P yüksek hızlı yerel transfer ve CNC G-Code ayrıştırıcıları.",
    domain_math_tag: "Matematik & ML",
    domain_math_title: "Matematiksel Modelleme & Makine Öğrenmesi",
    domain_math_desc: "Lisans matematik analitik altyapısıyla geliştirilen kredi risk sınıflandırması, Optuna hiperparametre optimizasyonu ve parametrik 3D yüzey üretimi.",

    // Vitrin Şeritleri (Sliders)
    home_public_tag: "🌐 Açık Kaynak & Saha Çalışmaları",
    home_public_title: "Açık Kaynak Projelerim (Public)",
    home_public_subtitle: "GitHub üzerinde kodları ve mimarisi incelenebilir, sahada aktif kullanılan veya akademik olarak test edilmiş açık kaynak çözümler.",
    home_public_btn: "Açık Kaynak Projelere Git",

    home_private_tag: "🔒 Özel Sistemler & Ar-Ge",
    home_private_title: "Özel Ar-Ge & Geliştirme Projelerim (Private)",
    home_private_subtitle: "Yerel yapay zeka ajanları, çok modlu RAG mimarileri, sanal tarayıcı orkestrasyonu ve tescilli derin öğrenme boru hatları.",
    home_private_btn: "Özel Ar-Ge Projelerine Git",

    home_certs_tag: "📜 Doğrulanmış Yetkinlikler",
    home_certs_title: "Akredite Sertifikalar & Başarı Belgeleri",
    home_certs_subtitle: "Yapay zeka ajanları, LLM mimarileri, veri bilimi ve kurumsal bulut alanlarında tamamladığım resmi belgeler. Sağa-sola kaydırarak inceleyebilirsiniz.",
    btn_view_all_certs: "Tümünü Gör (9 Belge)",

    // Projeler Görünümü
    projects_view_title: "Projeler & Sistem Mimarileri",
    projects_view_subtitle: "Açık kaynak yazılımlar ve geliştirme aşamasındaki özel yapay zeka & sistem mimarileri.",
    search_placeholder: "Proje adı, sistem veya teknoloji ara... (Ctrl+K)",
    tier_all: "Tüm Sistemler",
    tier_public: "🌐 Açık Kaynak (Public)",
    tier_private: "🔒 Özel Ar-Ge / Geliştirme (Private)",
    tier_live: "▲ Canlı Web Demoları",
    cat_all: "Tüm Kategoriler",
    cat_academic: "🎓 Akademik & Tez",
    cat_ai: "Yapay Zeka & RAG",
    cat_fintech: "FinTech & POS",
    cat_desktop: "Masaüstü & Sistem",
    cat_web: "Web & Platform",
    btn_back_to_projects: "Projelere Geri Dön",
    detail_esc_hint: "ESC ile de çıkabilirsiniz",
    slider_card_detail: "Detay İncele →",

    // Kart & Rozet Etiketleri
    badge_public: "Açık Kaynak",
    badge_private: "Özel Ar-Ge",
    badge_live: "Canlı Demo",
    badge_academic: "🎓 Akademik",
    badge_dev_private: "Geliştirme / Ar-Ge",
    btn_card_detail: "Mimarisi & Detay",
    btn_github: "GitHub",
    btn_live_demo: "Canlı Demo",
    no_projects_found: "Aranan kriterlere uygun proje bulunamadı.",

    // Proje Detay Sahnesi
    breadcrumb_portfolio: "Portfolyo",
    tag_license_mit: "🛡️ MIT License",
    tag_public_stable: "🟢 Açık Kaynak (Public)",
    tag_private_stable: "🔒 Özel Ar-Ge",
    tag_version_stable: "⚡ v1.4 Kararlı",
    stat_highlight_label: "Öne Çıkan Başarı / Hız",
    stat_highlight_desc: "Sahada & Test Ortamında Doğrulandı",
    stat_modules_label: "Teknoloji Kümesi",
    stat_modules_suffix: "Modül",
    stat_arch_label: "Sistem Mimarisi",
    stat_arch_private_desc: "Aktif Geliştirme Havuzu",
    stat_arch_public_desc: "Üretime Hazır & Kararlı",

    btn_quickstart_jump: "⚡ Hızlı Başlat",
    btn_view_github: "GitHub'da İncele",
    btn_download_zip: "ZIP İndir",
    btn_live_web_demo: "Canlı Web Demo",
    btn_export: "Dışa Aktar",
    btn_copy_tsv: "Panoya Kopyala (TSV)",
    btn_download_csv: "Excel (.csv) İndir",
    btn_download_json: "JSON İndir",
    btn_share_link: "Linki Kopyala",
    toast_link_copied: "Bağlantı Kopyalandı!",
    toast_tsv_copied: "Proje verisi TSV olarak panoya kopyalandı",
    toast_copied_generic: "Kopyalandı!",

    // Sekmeler
    tab_overview: "Genel Bakış",
    tab_flow: "Akış Şeması",
    tab_architecture: "Sistem Mimarisi",
    tab_quickstart: "Hızlı Başlat",
    tab_code: "Kod Gezgini",
    tab_guide_badge: "Rehber",

    // Sekme İçerikleri
    lbl_tech_breakdown: "Kullanılan Teknolojiler & Dil Ağırlığı",
    lbl_core_components: "Temel Bileşen",
    box_why_title: "01. Neden Bu Projeyi Geliştirdim? (Geliştirici Hikayesi)",
    box_problem_title: "02. Karşılaşılan Problem & Teknik İhtiyaç",
    box_features_title: "03. Öne Çıkan Özellikler & Çözümler",
    box_flow_title: "01. Sistem Akış Şeması & Adım Adım İşleyiş",
    box_flow_lead: "Bu sistemin baştan sona veri işleme ve işlem yürütme adımları aşağıdaki 4 aşamalı akışta özetlenmiştir:",
    box_flow_subheading: "⚡ Adım Adım Çalışma Akışı:",
    step_label_prefix: "Adım",
    box_arch_title: "01. Sistem Nasıl Çalışıyor? (Temel Çalışma Mantığı)",
    box_arch_fallback: "Bu projede modüler ve hafif bir yazılım yapısı uygulanmıştır.",
    box_challenge_tag: "💡 Çözülen En Kritik Teknik Zorluk",
    box_quickstart_title: "01. Yerel Kurulum & Çalıştırma Rehberi",
    box_quickstart_lead: "Bu projeyi yerel geliştirme ortamınızda çalıştırmak ve test etmek için aşağıdaki adımları kullanabilirsiniz:",
    qs_step_1: "1. Depoyu Klonlayın veya İndirin",
    qs_step_2: "2. Proje Dizinine Geçin ve Sanal Ortamı Aktif Edin",
    qs_step_3: "3. Gerekli Paket Bağımlılıklarını Yükleyin",
    qs_step_4: "4. Uygulamayı Başlatın",
    btn_copy_all_qs: "Tüm Kurulum Komutlarını Kopyala",
    btn_qs_zip: "Kaynak Kod (.ZIP İndir)",
    code_files_title: "Proje Dosyaları",
    code_tree_title: "Tam Dizin Hiyerarşisi:",
    btn_copy_code: "Kodu Kopyala",
    nav_prev_project: "ÖNCEKİ PROJE",
    nav_next_project: "SONRAKİ PROJE",

    // Hakkımda Görünümü
    about_tag_badge: "Biyografi & Yazılım Yolculuğu",
    about_person_subtitle: "İstanbul Medeniyet Üniversitesi Matematik Bölümü mezunuyum (2026). Küçük yaşlarda oyun minigameleri kodlayarak başladığım yazılım yolculuğuma; donanım devreleri, veri otomasyonu, optimize masaüstü sistemleri ve ağırlıklı olarak <strong>Yapay Zeka & Makine Öğrenmesi</strong> çözümleri geliştirerek devam ediyorum.",
    about_story_heading: "Nasıl Başladım?",
    about_story_p1: "Yazılıma ilk olarak <strong>2013 yılında Lua</strong> diliyle oyun minigameleri kodlayarak başladım. Yazdığım kodun oyunda doğrudan çalıştığını görmek çok hoşuma gitmişti; algoritma mantığını ve kod yapısını bu sayede küçük yaşta öğrendim.",
    about_story_p2: "<strong>2018'de lise 3. sınıftayken</strong> okulumuza Türk-Alman Üniversitesi Mekatronik Bölümü'nden iki abla gelip bize robotik kodlama eğitimi verdi. <strong>Arduino ve devrelerle</strong> ilk defa o zaman tanıştım. Sensörler, motorlar ve devre kartlarıyla çalışarak yazılımın fiziksel parçalarla nasıl haberleştiğini gördüm.",
    about_story_p3: "Daha sonra <strong>İstanbul Medeniyet Üniversitesi Matematik Bölümü</strong>'ne girdim. Burada aldığım matematik eğitimi, yazılım tarafında özellikle veri yapılarını ve algoritmaları daha mantıklı ve sağlam kurmamı sağladı.",
    about_story_p4: "<strong>2021 sonrasında</strong> ise doğrudan işe yarayan somut projelere odaklandım. Python ile web scraping ve veri otomasyonları geliştirmenin yanı sıra; veri tabanı mimarisi, donanım entegrasyonları, termal yazıcı protokolleri (ESC/POS, ZPL) ve yüksek performanslı masaüstü sistemleri geliştirmeye ağırlık verdim.",
    about_story_p5: "Zamanla sistem ve yazılım tecrübemi matematik altyapımla birleştirerek <strong>Yapay Zeka ve Makine Öğrenmesi</strong> alanına yöneldim. Özellikle internete kapalı (offline) yerel ortamlarda çalışan açık kaynak dil modelleri (LLM), semantik arama ve RAG mimarileri, veri sınıflandırma ve makine öğrenmesi modelleri üzerine çalışarak kendimi bu alanda geliştirdim. Şu anda da ağırlıklı olarak yapay zeka destekli akıllı araçlar ve optimize edilmiş masaüstü sistemleri üretiyorum.",
    about_timeline_heading: "Yazılım & Dil Gelişim Çizelgem",
    timeline_2013_title: "İlk Adım: Lua & Oyun Minigameleri",
    timeline_2013_desc: "Lua diliyle çeşitli oyun minigameleri kodlayarak mantıksal algoritma kurgusunu, değişken yönetimini ve kodlama yapısını benimsedim.",
    timeline_2018_title: "Fiziksel Sistemler: Arduino & Robotik Kodlama",
    timeline_2018_desc: "Lise 3. sınıfta Türk-Alman Üniversitesi Mekatronik Bölümü öğrencilerinin okulumuzda verdiği robotik eğitimle Arduino dünyasına adım attım; sensör okuma ve mikrodenetleyici düzeyinde ilk fiziksel projelerimi ürettim.",
    timeline_2021_title: "Python, Veri Otomasyonu & Matematik Temeli",
    timeline_2021_desc: "İstanbul Medeniyet Üniversitesi Matematik lisans eğitimiyle paralel olarak; Python ile web scraping (Selenium, BeautifulSoup), veri manipülasyonu ve otomasyon botları geliştirdim.",
    timeline_2022_title: "Masaüstü Sistem Mimarisi & Donanım Entegrasyonu",
    timeline_2022_desc: "Yüksek hızlı barkodlu satış, SQLite WAL veri tabanı mimarisi, termal yazıcı protokolleri (ESC/POS) ve donanım haberleşmesine odaklanan masaüstü sistem çözümleri geliştirdim.",
    timeline_2024_title: "Yapay Zeka, Makine Öğrenmesi & Sistem Geliştirme",
    timeline_2024_desc: "Yerel açık kaynak dil modelleri (LLM), RAG (Retrieval-Augmented Generation) tabanlı bilgi sistemleri, makine öğrenmesi modelleri ve bunları destekleyen optimize kurumsal masaüstü araçları üzerine çalışıyorum.",
    about_contact_title: "İletişim & Profesyonel Bağlantılar",
    about_contact_subtitle: "İş teklifleri, projeler veya doğrudan iletişim için aşağıdaki kanallardan ulaşabilirsiniz:",
    about_contact_email_lbl: "E-Posta",

    // Sertifikalar Görünümü
    certs_page_title: "Eğitimler & Yetkinlik Sertifikaları",
    certs_page_counter: "9 Doğrulanmış Kayıt",
    certs_page_desc: "Yapay zeka, üretken dil modelleri, bulut ajanları, veri bilimi ve fintek alanlarında tamamladığım sertifikalar ve katılım belgeleri. Belgeleri büyütmek ve ayrıntılarını görmek için kartların üzerine tıklayabilirsiniz.",
    certs_zoom_hint: "Büyütmek için tıkla",
    cert_modal_default_title: "Sertifika Önizleme",

    // Sertifika 1: FIN-E SUMMIT
    cert_1_issuer_short: "BORSA İSTANBUL • PARAM • ANADOLU GRUBU",
    cert_1_issuer: "ÖĞRENCİ KARİYERİ • BORSA İSTANBUL • PARAM • ANADOLU GRUBU",
    cert_1_title: "FIN-E SUMMIT Fintek & Yapay Zeka",
    cert_1_full_title: "FIN-E SUMMIT Finans & Teknoloji Zirvesi",
    cert_1_short_desc: "Finansal teknolojiler, borsa ekosistemi ve dijital dönüşüm zirvesi.",
    cert_1_desc: "3 Şubat 2026. Finansal teknolojiler, borsa ekosistemi, dijital varlıklar ve yeni nesil finansal dönüşüm oturumları katılım belgesi.",
    cert_1_modal_title: "FIN-E SUMMIT Katılım Sertifikası — Öğrenci Kariyeri",

    // Sertifika 2: TRAI Yapay Zeka Ajanları
    cert_2_issuer_short: "TRAI • AWS",
    cert_2_issuer: "TÜRKİYE YAPAY ZEKA İNİSİYATİFİ (TRAI) • AWS",
    cert_2_title: "Güvenli Ölçeklenebilir AI Ajanları",
    cert_2_full_title: "Güvenli Ölçeklenebilir Yapay Zeka Ajanları",
    cert_2_short_desc: "Kurumsal yapay zeka ajan mimarileri, güvenlik ve ölçekleme prensipleri.",
    cert_2_desc: "Eğitmen: Görkem Yöntem (Solutions Architect, AWS). Kurumsal AI agent mimarileri, güvenlik ve ölçekleme prensipleri.",
    cert_2_modal_title: "Güvenli Ölçeklenebilir Yapay Zeka Ajanları — TRAI / AWS",

    // Sertifika 3: Coderspace Veri Bilimi
    cert_3_issuer_short: "CODERSPACE • META • GOOGLE",
    cert_3_issuer: "CODERSPACE • TRAI • META • GOOGLE",
    cert_3_title: "Veri Bilimi & Yapay Zekâ Yaz Okulu",
    cert_3_full_title: "Veri Bilimi ve Yapay Zekâ Yaz Okulu",
    cert_3_short_desc: "48 saatlik kapsamlı veri bilimi, makine öğrenmesi ve sektör uygulamaları.",
    cert_3_desc: "4 hafta / 48 saatlik kapsamlı veri bilimi, makine öğrenmesi ve sektör uygulamaları eğitimi.",
    cert_3_modal_title: "Veri Bilimi ve Yapay Zekâ Yaz Okulu — Coderspace",

    // Sertifika 4: TRAI GenAI ile Oyunu Yakala
    cert_4_issuer_short: "TRAI • GOOGLE",
    cert_4_issuer: "TÜRKİYE YAPAY ZEKA İNİSİYATİFİ (TRAI) • GOOGLE",
    cert_4_title: "GenAI ile Oyunu Yakala",
    cert_4_full_title: "GenAI ile Oyunu Yakala",
    cert_4_short_desc: "Google Gemini pazarlama ve üretken yapay zeka modelleri entegrasyonu.",
    cert_4_desc: "Eğitmen: Can Franko (Google Ads & Gemini Marketing Manager). Üretken yapay zeka modelleri ve kullanım alanları.",
    cert_4_modal_title: "GenAI ile Oyunu Yakala — TRAI / Google",

    // Sertifika 5: BTK Anthropic Claude
    cert_5_issuer_short: "BTK AKADEMİ",
    cert_5_issuer: "BTK AKADEMİ • RESMİ SERTİFİKA",
    cert_5_title: "Anthropic Claude & LLM Mimarisi",
    cert_5_full_title: "Anthropic Claude",
    cert_5_short_desc: "Prompt mühendisliği, model parametreleri ve API entegrasyon prensipleri.",
    cert_5_desc: "Sertifika No: BozfxnegJv. Claude model mimarisi, prompt optimizasyonu ve büyük dil modeli entegrasyonu.",
    cert_5_modal_title: "Anthropic Claude — BTK Akademi",

    // Sertifika 6: BTK Üretken Yapay Zeka
    cert_6_issuer_short: "BTK AKADEMİ",
    cert_6_issuer: "BTK AKADEMİ • RESMİ SERTİFİKA",
    cert_6_title: "Üretken Yapay Zekâya Giriş",
    cert_6_full_title: "Üretken Yapay Zekâya Giriş",
    cert_6_short_desc: "Difüzyon modelleri, GAN mimarileri ve transformatör tabanlı üretkenlik.",
    cert_6_desc: "Sertifika No: PVghM8kNKr. Üretken derin öğrenme, difüzyon ve transformatör modelleri.",
    cert_6_modal_title: "Üretken Yapay Zekâya Giriş — BTK Akademi",

    // Sertifika 7: BTK Veri Okuryazarlığı
    cert_7_issuer_short: "BTK AKADEMİ",
    cert_7_issuer: "BTK AKADEMİ • RESMİ SERTİFİKA",
    cert_7_title: "Veri Okuryazarlığı & Madenciliği",
    cert_7_full_title: "Veri Okuryazarlığı",
    cert_7_short_desc: "Veri analitiği temelleri, analitik düşünme ve manipülasyon teknikleri.",
    cert_7_desc: "Sertifika No: VlzzCga88bv. Veri madenciliği temelleri, analitik düşünme ve veri manipülasyonu.",
    cert_7_modal_title: "Veri Okuryazarlığı — BTK Akademi",

    // Sertifika 8: İnovatim
    cert_8_issuer_short: "TİM • İNOVATİM",
    cert_8_issuer: "TÜRKİYE İHRACATÇILAR MECLİSİ (TİM) • İNOVATİM",
    cert_8_title: "Robotik Kodlama & İnovasyon",
    cert_8_full_title: "Robotik Kodlama, Yapay Zeka ve İnovasyon",
    cert_8_short_desc: "Lise döneminde Arduino, robotik ve erken dönem inovasyon sertifikası.",
    cert_8_desc: "Lise 3. sınıfta Arduino, robotik kodlama ve erken dönem teknoloji inovasyonu üzerine aldığım katılım belgesi.",
    cert_8_modal_title: "Liselerde Yapay Zeka ve İnovasyon — İnovatim / TİM",

    // Sertifika 9: Medeniyet Python
    cert_9_issuer_short: "İSTANBUL MEDENİYET ÜNİV.",
    cert_9_issuer: "İST. MEDENİYET ÜNİVERSİTESİ • GDSC",
    cert_9_title: "Python 101 Programlama",
    cert_9_full_title: "Python 101 Başarı Belgesi",
    cert_9_short_desc: "Üniversite bünyesinde temel veri yapıları, algoritmalar ve nesne yönelimli programlama.",
    cert_9_desc: "Python Medeniyeti & GDSC bünyesinde algoritma geliştirme ve teknik proje uygulamaları başarı belgesi.",
    cert_9_modal_title: "Python 101 Başarı Belgesi — İstanbul Medeniyet Üniversitesi",

    // İletişim Görünümü
    contact_tag_badge: "Doğrudan İletişim & İş Birliği",
    contact_title: "İletişime Geçin",
    contact_subtitle: "Projelerim hakkında <strong>hata bildirimi (bug)</strong>, <strong>yeni geliştirme veya mimari önerisi</strong>, iş birliği veya kariyer fırsatları için dilediğiniz zaman ulaşabilirsiniz. Tüm geri bildirim ve fikirlere açığım.",
    contact_note_title: "Açık Kaynak & Fikir Paylaşımı",
    contact_note_text: "Geliştirdiğim açık kaynak ve Ar-Ge sistemlerinde gördüğünüz bir optimizasyon açığı, algoritma iyileştirmesi veya birlikte geliştirebileceğimiz yeni bir proje fikri varsa e-posta veya LinkedIn üzerinden doğrudan yazabilirsiniz.",
    contact_email_lbl: "E-POSTA ADRESİ",
    contact_email_hint: "Tıklayarak doğrudan e-posta gönderebilir veya panoya kopyalayabilirsiniz",
    contact_linkedin_lbl: "LINKEDIN PROFİLİ",
    contact_linkedin_hint: "Profesyonel ağ, bağlantı ve mesajlaşma",
    contact_github_lbl: "GITHUB DEPOSU",
    contact_github_hint: "Açık kaynak kodlar, commit geçmişi ve issue takibi"
  },

  en: {
    // Left Sidebar (Rail)
    profile_name: "Oğuz Taşdemir",
    profile_role: "Software Developer & Mathematics",
    menu_group_label: "MENU",
    tab_home: "Home",
    tab_projects: "Portfolio & Projects",
    tab_portfolio: "Portfolio",
    tab_about: "About Me",
    tab_certificates: "Certificates",
    tab_contact: "Contact",
    btn_cv_download: "Download CV (PDF)",
    theme_dark: "Theme: Dark Mode",
    theme_light: "Theme: Light Mode",
    lang_tr: "Türkçe",
    lang_en: "English",
    rail_collapse_title: "Collapse / Expand Sidebar",

    // Home Hero
    hero_pulse_text: "Istanbul • B.Sc. Mathematics Graduate • Active Developer",
    hero_title_sub: "System Architecture · Data Science · Artificial Intelligence",
    hero_desc: "This platform is an interactive engineering workstation showcasing my software projects, real-world solutions, low-level hardware protocols, and autonomous AI agents with technical transparency. New systems and architectures are continuously integrated here.",
    hero_btn_projects: "Explore Projects",
    hero_btn_about: "Growth Story & Biography",
    hero_btn_certs: "My Certificates (9 Credentials)",

    // Telemetry Ribbon
    telemetry_projects_lbl: "Engineered Projects",
    telemetry_certs_val: "9 Credentials",
    telemetry_certs_lbl: "AI & FinTech Certifications",
    telemetry_status_val: "Active",
    telemetry_status_lbl: "Production & Field Deployment",

    // Expertise Domains
    domain_ai_tag: "Agent & RAG",
    domain_ai_title: "Generative AI & Autonomous Agents",
    domain_ai_desc: "Local LLM engines (Llama-3, DeepSeek), ChromaDB RAG memory, YouTube video transcript mining, and multi-layered autonomous coding assistants.",
    domain_pos_tag: "Field & FinTech",
    domain_pos_title: "Retail & Sales Automation (POS)",
    domain_pos_desc: "Desktop systems running 24/7 in our retail store with zero data loss guarantee, SQLite WAL architecture, and hardware protocol integrations.",
    domain_sys_tag: "System & Network",
    domain_sys_title: "Low-Level Hardware & Network Systems",
    domain_sys_desc: "Forensic data recovery via raw disk sector carving, zero-quota high-speed P2P local Wi-Fi transfer, and CNC G-Code parsers.",
    domain_math_tag: "Math & ML",
    domain_math_title: "Mathematical Modeling & Machine Learning",
    domain_math_desc: "Credit risk classification, Optuna hyperparameter optimization, and parametric 3D surface generation grounded in mathematics.",

    // Showcase Tracks (Sliders)
    home_public_tag: "🌐 Open Source & Field Deployments",
    home_public_title: "Open Source Projects (Public)",
    home_public_subtitle: "Production-proven and academically verified systems with accessible source code on GitHub.",
    home_public_btn: "Go to Open Source Projects",

    home_private_tag: "🔒 Proprietary Systems & R&D",
    home_private_title: "Proprietary R&D & Active Systems (Private)",
    home_private_subtitle: "Local AI agents, multimodal RAG architectures, virtual browser orchestration, and proprietary deep learning pipelines.",
    home_private_btn: "Go to Proprietary Projects",

    home_certs_tag: "📜 Verified Credentials",
    home_certs_title: "Accredited Certificates & Credentials",
    home_certs_subtitle: "Official credentials earned in AI agents, LLM architectures, data science, and cloud platforms. Scroll horizontally to inspect.",
    btn_view_all_certs: "View All (9 Credentials)",

    // Projects View
    projects_view_title: "Projects & System Architectures",
    projects_view_subtitle: "Open source software and proprietary AI & system architectures under active development.",
    search_placeholder: "Search project name, system or technology... (Ctrl+K)",
    tier_all: "All Systems",
    tier_public: "🌐 Open Source (Public)",
    tier_private: "🔒 Proprietary / R&D (Private)",
    tier_live: "▲ Live Web Demos",
    cat_all: "All Categories",
    cat_academic: "🎓 Academic & Thesis",
    cat_ai: "Artificial Intelligence & RAG",
    cat_fintech: "FinTech & POS",
    cat_desktop: "Desktop & System",
    cat_web: "Web & Platform",
    btn_back_to_projects: "Back to Projects",
    detail_esc_hint: "You can also press ESC to exit",
    slider_card_detail: "View Details →",

    // Card & Badge Labels
    badge_public: "Open Source",
    badge_private: "Proprietary",
    badge_live: "Live Demo",
    badge_academic: "🎓 Academic",
    badge_dev_private: "Active R&D",
    btn_card_detail: "Architecture & Details",
    btn_github: "GitHub",
    btn_live_demo: "Live Demo",
    no_projects_found: "No projects found matching the criteria.",

    // Project Detail Stage
    breadcrumb_portfolio: "Portfolio",
    tag_license_mit: "🛡️ MIT License",
    tag_public_stable: "🟢 Open Source (Public)",
    tag_private_stable: "🔒 Proprietary (Private)",
    tag_version_stable: "⚡ v1.4 Stable",
    stat_highlight_label: "Highlight Metric / Speed",
    stat_highlight_desc: "Verified in Production & Testing",
    stat_modules_label: "Tech Modules",
    stat_modules_suffix: "Modules",
    stat_arch_label: "System Architecture",
    stat_arch_private_desc: "Active R&D Pipeline",
    stat_arch_public_desc: "Production Ready & Stable",

    btn_quickstart_jump: "⚡ Quick Start",
    btn_view_github: "View on GitHub",
    btn_download_zip: "Download ZIP",
    btn_live_web_demo: "Live Web Demo",
    btn_export: "Export",
    btn_copy_tsv: "Copy to Clipboard (TSV)",
    btn_download_csv: "Download Excel (.csv)",
    btn_download_json: "Download JSON",
    btn_share_link: "Copy Link",
    toast_link_copied: "Link Copied!",
    toast_tsv_copied: "Project data copied to clipboard as TSV",
    toast_copied_generic: "Copied!",

    // Tabs
    tab_overview: "Overview",
    tab_flow: "Flow Diagram",
    tab_architecture: "Architecture",
    tab_quickstart: "Quick Start",
    tab_code: "Code Explorer",
    tab_guide_badge: "Guide",

    // Tab Contents
    lbl_tech_breakdown: "Technologies Used & Language Breakdown",
    lbl_core_components: "Core Components",
    box_why_title: "01. Why Did I Build This Project? (Developer Story)",
    box_problem_title: "02. Problem Encountered & Technical Need",
    box_features_title: "03. Key Features & Solutions",
    box_flow_title: "01. System Flow & Step-by-Step Execution",
    box_flow_lead: "The end-to-end data processing and execution steps of this system are summarized in the 4-stage pipeline below:",
    box_flow_subheading: "⚡ Step-by-Step Architecture Flow:",
    step_label_prefix: "Step",
    box_arch_title: "01. How Does the System Work? (Core Logic)",
    box_arch_fallback: "A modular, lightweight, and robust software architecture is implemented in this project.",
    box_challenge_tag: "💡 Most Critical Technical Challenge Solved",
    box_quickstart_title: "01. Local Installation & Setup Guide",
    box_quickstart_lead: "You can follow the steps below to set up and run this project in your local development environment:",
    qs_step_1: "1. Clone or Download Repository",
    qs_step_2: "2. Enter Project Directory & Activate Virtualenv",
    qs_step_3: "3. Install Package Dependencies",
    qs_step_4: "4. Launch the Application",
    btn_copy_all_qs: "Copy All Installation Commands",
    btn_qs_zip: "Source Code (Download .ZIP)",
    code_files_title: "Project Files",
    code_tree_title: "Full Directory Hierarchy:",
    btn_copy_code: "Copy Code",
    nav_prev_project: "PREVIOUS PROJECT",
    nav_next_project: "NEXT PROJECT",

    // About View
    about_tag_badge: "Biography & Engineering Journey",
    about_person_subtitle: "I am a graduate of Istanbul Medeniyet University, Department of Mathematics (2026). Starting my coding journey at an early age creating game minigames, I have evolved through hardware circuitry, data automation, optimized desktop systems, and primarily <strong>Artificial Intelligence & Machine Learning</strong> solutions.",
    about_story_heading: "How Did I Start?",
    about_story_p1: "I began programming in <strong>2013 with Lua</strong>, writing minigames for online multiplayer platforms. Seeing my code execute live in the game sparked my passion, instilling core algorithmic reasoning and clean structure at a young age.",
    about_story_p2: "<strong>In 2018 during high school</strong>, two instructors from the Turkish-German University Mechatronics Department visited our school to conduct robotics workshops. That was my first introduction to <strong>Arduino and circuits</strong>. Working with sensors, motors, and boards showed me how software interacts with physical components.",
    about_story_p3: "Later, I enrolled in the <strong>Mathematics Department at Istanbul Medeniyet University</strong>. The mathematical education I received allowed me to formulate algorithms, discrete data structures, and optimization routines on rigorous foundations.",
    about_story_p4: "<strong>From 2021 onward</strong>, I shifted entirely to concrete, high-impact projects. Alongside Python web scraping and data pipelines, I focused deeply on database architecture, hardware integration, thermal printer protocols (ESC/POS, ZPL), and high-throughput desktop software.",
    about_story_p5: "Blending deep systems programming with my mathematical background, I focused on <strong>Artificial Intelligence and Machine Learning</strong>. I specialized in offline local LLMs, semantic search, RAG architectures, classification pipelines, and hyperparameter optimization. Today, I primarily engineer AI-augmented developer tools and hardened desktop architectures.",
    about_timeline_heading: "Software & Engineering Timeline",
    timeline_2013_title: "First Step: Lua & Game Minigames",
    timeline_2013_desc: "Coded Lua minigames and custom room scripts, developing core algorithmic reasoning, event handling, and data structures.",
    timeline_2018_title: "Physical Systems: Arduino & Robotics",
    timeline_2018_desc: "Introduced to Arduino and microcontrollers via robotics training by Turkish-German University students; built sensor-driven physical projects.",
    timeline_2021_title: "Python, Data Automation & Mathematical Rigor",
    timeline_2021_desc: "Parallel to University Mathematics studies, developed Selenium/BeautifulSoup web automation bots, financial scrapers, and data manipulation pipelines.",
    timeline_2022_title: "Desktop System Architecture & Hardware Protocols",
    timeline_2022_desc: "Engineered high-speed barcode POS, SQLite WAL concurrency, ESC/POS thermal printing, and low-level Win32 hardware communications.",
    timeline_2024_title: "AI, Machine Learning & Modern Systems",
    timeline_2024_desc: "Engineering local offline LLMs, RAG knowledge engines, machine learning predictive models, and high-performance desktop developer workstations.",
    about_contact_title: "Contact & Professional Channels",
    about_contact_subtitle: "Feel free to reach out for software engineering opportunities, architecture consulting, or collaborations:",
    about_contact_email_lbl: "Email Address",

    // Certificates View
    certs_page_title: "Education & Accredited Certificates",
    certs_page_counter: "9 Verified Credentials",
    certs_page_desc: "Accredited credentials completed across Artificial Intelligence, Generative LLMs, Cloud Agents, Data Science, and FinTech. Click on cards to zoom in and inspect details.",
    certs_zoom_hint: "Click to zoom",
    cert_modal_default_title: "Certificate Preview",

    // Certificate 1: FIN-E SUMMIT
    cert_1_issuer_short: "BORSA ISTANBUL • PARAM • ANADOLU GROUP",
    cert_1_issuer: "OGRENCI KARIYERI • BORSA ISTANBUL • PARAM • ANADOLU GROUP",
    cert_1_title: "FIN-E SUMMIT FinTech & AI",
    cert_1_full_title: "FIN-E SUMMIT Finance & Technology Summit",
    cert_1_short_desc: "Financial technologies, stock exchange ecosystem, and digital transformation summit.",
    cert_1_desc: "February 3, 2026. Certificate of participation in financial technologies, digital assets, and next-generation financial transformation sessions.",
    cert_1_modal_title: "FIN-E SUMMIT Certificate of Participation — Ogrenci Kariyeri",

    // Certificate 2: TRAI AI Agents
    cert_2_issuer_short: "TRAI • AWS",
    cert_2_issuer: "TURKEY ARTIFICIAL INTELLIGENCE INITIATIVE (TRAI) • AWS",
    cert_2_title: "Secure Scalable AI Agents",
    cert_2_full_title: "Secure Scalable Artificial Intelligence Agents",
    cert_2_short_desc: "Enterprise AI agent architectures, security, and scaling principles.",
    cert_2_desc: "Instructor: Görkem Yöntem (Solutions Architect, AWS). Enterprise AI agent architectures, security, and scaling principles.",
    cert_2_modal_title: "Secure Scalable Artificial Intelligence Agents — TRAI / AWS",

    // Certificate 3: Coderspace Data Science
    cert_3_issuer_short: "CODERSPACE • META • GOOGLE",
    cert_3_issuer: "CODERSPACE • TRAI • META • GOOGLE",
    cert_3_title: "Data Science & AI Summer School",
    cert_3_full_title: "Data Science and AI Summer School",
    cert_3_short_desc: "48 hours of comprehensive data science, machine learning, and industry applications.",
    cert_3_desc: "4 weeks / 48 hours of intensive data science, machine learning algorithms, and real-world industrial case studies.",
    cert_3_modal_title: "Data Science and AI Summer School — Coderspace",

    // Certificate 4: TRAI Catch the Game with GenAI
    cert_4_issuer_short: "TRAI • GOOGLE",
    cert_4_issuer: "TURKEY ARTIFICIAL INTELLIGENCE INITIATIVE (TRAI) • GOOGLE",
    cert_4_title: "Catch the Game with GenAI",
    cert_4_full_title: "Catch the Game with GenAI",
    cert_4_short_desc: "Google Gemini marketing and generative AI model integrations.",
    cert_4_desc: "Instructor: Can Franko (Google Ads & Gemini Marketing Manager). Generative AI model capabilities and business application areas.",
    cert_4_modal_title: "Catch the Game with GenAI — TRAI / Google",

    // Certificate 5: BTK Anthropic Claude
    cert_5_issuer_short: "BTK ACADEMY",
    cert_5_issuer: "BTK ACADEMY • OFFICIAL CERTIFICATE",
    cert_5_title: "Anthropic Claude & LLM Architecture",
    cert_5_full_title: "Anthropic Claude",
    cert_5_short_desc: "Prompt engineering, model parameters, and API integration principles.",
    cert_5_desc: "Certificate ID: BozfxnegJv. Claude model architecture, prompt optimization, and large language model integration.",
    cert_5_modal_title: "Anthropic Claude — BTK Academy",

    // Certificate 6: BTK Introduction to Generative AI
    cert_6_issuer_short: "BTK ACADEMY",
    cert_6_issuer: "BTK ACADEMY • OFFICIAL CERTIFICATE",
    cert_6_title: "Introduction to Generative AI",
    cert_6_full_title: "Introduction to Generative AI",
    cert_6_short_desc: "Diffusion models, GAN architectures, and transformer-based generation.",
    cert_6_desc: "Certificate ID: PVghM8kNKr. Generative deep learning, diffusion networks, and transformer-based productivity.",
    cert_6_modal_title: "Introduction to Generative AI — BTK Academy",

    // Certificate 7: BTK Data Literacy
    cert_7_issuer_short: "BTK ACADEMY",
    cert_7_issuer: "BTK ACADEMY • OFFICIAL CERTIFICATE",
    cert_7_title: "Data Literacy & Mining",
    cert_7_full_title: "Data Literacy",
    cert_7_short_desc: "Data analytics fundamentals, analytical thinking, and manipulation techniques.",
    cert_7_desc: "Certificate ID: VlzzCga88bv. Data mining fundamentals, analytical thinking, and data manipulation techniques.",
    cert_7_modal_title: "Data Literacy — BTK Academy",

    // Certificate 8: Inovatim
    cert_8_issuer_short: "TIM • INOVATIM",
    cert_8_issuer: "TURKISH EXPORTERS ASSEMBLY (TIM) • INOVATIM",
    cert_8_title: "Robotic Coding & Innovation",
    cert_8_full_title: "Robotic Coding, Artificial Intelligence and Innovation",
    cert_8_short_desc: "High school Arduino robotics and early-stage technology innovation certificate.",
    cert_8_desc: "Certificate of participation in Arduino, robotic coding, and early technology innovation earned during 11th grade.",
    cert_8_modal_title: "AI and Innovation in High Schools — Inovatim / TIM",

    // Certificate 9: Medeniyet Python
    cert_9_issuer_short: "IST. MEDENIYET UNIV.",
    cert_9_issuer: "IST. MEDENIYET UNIVERSITY • GDSC",
    cert_9_title: "Python 101 Programming",
    cert_9_full_title: "Python 101 Certificate of Achievement",
    cert_9_short_desc: "Core data structures, algorithms, and object-oriented programming at university level.",
    cert_9_desc: "Certificate of achievement in algorithm development and technical project applications with Python Medeniyeti & GDSC.",
    cert_9_modal_title: "Python 101 Certificate of Achievement — Istanbul Medeniyet University",

    // Contact View
    contact_tag_badge: "Direct Contact & Collaboration",
    contact_title: "Get in Touch",
    contact_subtitle: "Reach out anytime for <strong>bug reports</strong>, <strong>architectural suggestions</strong>, project inquiries, or engineering roles. I welcome all feedback and technical discussions.",
    contact_note_title: "Open Source & Knowledge Sharing",
    contact_note_text: "If you notice an optimization opportunity, algorithm refinement, or want to collaborate on an open-source system, feel free to send an email or connect on LinkedIn.",
    contact_email_lbl: "EMAIL ADDRESS",
    contact_email_hint: "Click to send an email directly or copy to clipboard",
    contact_linkedin_lbl: "LINKEDIN PROFILE",
    contact_linkedin_hint: "Professional network, connections, and messaging",
    contact_github_lbl: "GITHUB REPOSITORY",
    contact_github_hint: "Open-source code repositories, commit logs, and issues"
  }
};

class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('site_language') || 'tr';
    if (!['tr', 'en'].includes(this.currentLang)) {
      this.currentLang = 'tr';
    }
  }

  getLang() {
    return this.currentLang;
  }

  setLang(lang) {
    if (!['tr', 'en'].includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem('site_language', lang);
    this.applyTranslations();
  }

  t(key) {
    const dict = I18N_DICTIONARY[this.currentLang] || I18N_DICTIONARY.tr;
    return dict[key] || (I18N_DICTIONARY.tr ? I18N_DICTIONARY.tr[key] : key) || key;
  }

  applyTranslations() {
    const lang = this.currentLang;
    const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.tr;

    // HTML Lang attribute
    document.documentElement.lang = lang;

    // Data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Data-i18n-html (for formatted rich text)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.placeholder = dict[key];
      }
    });

    // Data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key] !== undefined) {
        el.title = dict[key];
      }
    });

    // Data-i18n-cert-title (for lightbox modals)
    document.querySelectorAll('[data-i18n-cert-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-cert-title');
      if (dict[key] !== undefined) {
        el.setAttribute('data-cert-title', dict[key]);
      }
    });

    // Update active state on language switcher buttons
    document.querySelectorAll('.lang-option-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Dispatch global event for other components (e.g. project list re-rendering)
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
}

// Global Singleton Instance
window.i18n = new I18nManager();

