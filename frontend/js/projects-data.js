// Auto-generated static data bundle for GitHub Pages deployment (PRIORITY_ORDER preserved)
const PROJECTS_DATA = [
  {
    "id": "bist-bilanco-karlilik-tahmini",
    "title": "Borsa İstanbul Çeyreklik Bilanço Kârlılık Yönü & Net Kâr Tahmin Sistemi",
    "category": "academic",
    "categoryLabel": "Akademik & Lisans Tezi",
    "badge": "Lisans Bitirme Tezi",
    "summary": "İstanbul Medeniyet Üniversitesi Matematik Bölümü Lisans Tezi. Borsa İstanbul'da işlem gören 612 şirketin 10 yıllık (2016–2025) çeyreklik bilançolarını otonom toplayan, TCMB kurlarıyla enflasyondan arındıran (dolarizasyon) ve 7 sektörde makine öğrenmesiyle kârlılık yönü (%68.8) ile kâr-zarar durumunu (%79.5) açıklanabilir rasyolarla önceden tahmin eden karar destek platformu.",
    "highlightMetric": "🎯 %79.5 Kâr/Zarar Doğruluğu, 612 Şirket & 10 Yıllık Veri",
    "techStack": [
      "Python",
      "Pandas & NumPy",
      "Scikit-Learn",
      "CatBoost & LightGBM",
      "Flask Web Arayüzü",
      "İstatistiksel Özellik Seçimi (VIF, Pearson, Varyans)",
      "Dolarizasyon (TCMB Enflasyon Arındırma)",
      "Zaman Serisi Çapraz Doğrulama"
    ],
    "githubUrl": "https://github.com/oguztasdemir/BIST-Bilanco-Karlilik-Tahmini-Tezi",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Borsa İstanbul'da işlem gören şirketlerin finansal tablolarında yer alan yüzlerce rasyo karmaşası ve Türkiye'deki yüksek enflasyonist ortamda TL bazlı fiktif kâr artışları şirketlerin gerçek büyüme performanslarını maskelemektedir. Şirket bilançoları açıklandıktan sonra analiz yapmak geç kalmaya yol açmakta, geleneksel rasyo analizleri ise gelecekteki kârlılık yönünü nesnel olarak öngörememektedir. Lisans bitirme tezimde; 612 şirketin 10 yıllık bilançolarını enflasyondan arındırarak, bilanço açıklanmadan haftalar önce kârlılık yönünü ve kâr-zarar durumunu yüksek doğrulukla öngören, rasyo kirliliğini eleyen ve karar vericilere interaktif web paneli sunan uçtan uca bir sistem inşa ettim.",
      "architecture": "Tez mimarisi 8 ardışık mühendislik fazından ve entegre bir Flask web arayüzünden oluşmaktadır:\n1) Otonom Veri Toplama: 2016–2025 yılları arasında BIST'teki 612 şirketin çeyreklik mali tabloları sıfır insan müdahalesiyle çekildi.\n2) Enflasyondan Arındırma & Dolarizasyon: TL enflasyonunun yarattığı yanılsamayı gidermek için tüm bilançolar TCMB günlük döviz kurları üzerinden USD bazına endekslendi ve zaman serisi hizalaması yapıldı.\n3) Gelişmiş Özellik Mühendisliği & Seçimi: Yüzlerce bilanço kalemi arasından Varyans Eşiği, Hedef Pearson Korelasyonu ve Çoklu Doğrusallık (VIF) filtreleri uygulanarak kârlılıkla en güçlü bağı olan kritik göstergeler izole edildi. Bu eleme tahmin başarımını %5-%18 artırdı.\n4) 7 Ana Sektörel Modelleme: Sanayi/İmalat (%80.6), Finans/Yatırım (%80.1), İnşaat/GMYO (%76.6), Teknoloji/Hizmet (%80.8), Enerji (%78.8), Gıda/Tarım (%79.9) ve Ticaret (%79.6) olmak üzere sektöre özel CatBoost, LightGBM ve Random Forest modelleri eğitildi.\n5) Karar Destek Arayüzü: Flask tabanlı; Açıklanabilir Kâr Öngörü Paneli (gerekçeli tahmin), Sektörel Rakip Analiz Modülü (sektör içi rasyo kıyası), Tarihsel USD Trend Grafikleri ve Model Başarı Kıyaslama modüllerini barındıran tam teşekküllü web konsolu geliştirildi.",
      "keyChallenge": "Yüzlerce finansal gösterge arasındaki yüksek çoklu doğrusallık (multicollinearity) ve enflasyonist TL bozulmalarını aşmak için; VIF analiziyle birbiriyle çelişen rasyolar ayıklandı, sektörler kendi içinde gruplandırıldı ve zaman serisi ilerledikçe modellerin doğruluk oranı %68.5'ten %81.4'e yükselen adaptif bir mimari kurgulandı.",
      "features": [
        "612 BIST şirketi ve 10 yıllık (2016–2025) çeyreklik bilanço derinliği",
        "TCMB günlük kur entegrasyonu ile USD bazlı enflasyon arındırma",
        "7 farklı sektör kümesinde özelleştirilmiş makine öğrenmesi modelleri",
        "BIST genelinde %79.5 Kâr-Zarar ve %68.8 Kâr Değişim Yönü tahmin doğruluğu",
        "Gerekçeli (açıklanabilir) kâr öngörüsü ve sektörel rakip kıyaslama web konsolu"
      ]
    },
    "visibility": "public",
    "tags": [
      "machine-learning",
      "catboost",
      "financial-data",
      "bist",
      "borsa-istanbul",
      "python",
      "pandas"
    ]
  },
  {
    "id": "OYMAPOS-Barkod-Sistemi",
    "title": "OymaPOS — Perakende Barkodlu Satış & Stok Yönetimi",
    "category": "fintech",
    "categoryLabel": "FinTech & Perakende Kasa",
    "badge": "Saha Kullanımında",
    "summary": "Kendi işlettiğimiz marketteki hazır POS programlarının sürekli kilitlenmesi ve fiş keserken kasayı dondurması üzerine geliştirdiğim, seri barkod okuyan ve termal yazıcıya anında fiş basan masaüstü satış sistemi.",
    "highlightMetric": "⚡ 80ms Fiş Basımı & Sıfır Veri Kaybı",
    "techStack": [
      "Python",
      "SQLite WAL",
      "Pywebview",
      "Thermal ESC/POS",
      "Barkod Sürücüleri"
    ],
    "caseStudy": {
      "problem": "Market ve perakende işletmemizde yoğun akşam saatlerinde ve bayram dönemlerinde kullanılan hazır ticari POS yazılımları aşırı hantal kalıyor, bellek sızıntıları nedeniyle kasada kilitleniyor veya veritabanı kilitlenmesi yaşatarak müşteriyi dakikalarca bekletiyordu. Ayrıca piyasadaki yazılımlar gereksiz karmaşık menülerle doluydu ve kasiyerin hızını kesiyordu. Kasanın en yoğun anında bile milisaniyeler içinde barkod okuyan, tek tuşla para üstünü hesaplayan ve elektrik/ağ kesintisinde dahi veri kaybı yaşamayan endüstriyel hızda yerel bir barkodlu satış sistemi inşa ettim.",
      "architecture": "Yazılım yerel donanım üzerinde sıfır gecikmeyle çalışacak şekilde Python ve SQLite WAL (Write-Ahead Logging) mimarisiyle inşa edildi. Kasiyerin klavyeden elini kaldırmaması için sistem tamamen klavye kısayolları (Numpad) ve USB/HID barkod tarayıcı olayları üzerine odaklandı. Barkod okutulduğu anda barkod verisi taranır, ürün kartı bellekteki önbellekten (in-memory hash map) mikro saniyede çekilip sepete düşürülür. Satış tamamlandığında eşzamanlı olarak ESC/POS protokolüyle termal fiş yazıcıya ham baytlar gönderilir ve kasa çekmecesi tetiklenir.",
      "keyChallenge": "Elektrik kesintileri veya beklenmedik bilgisayar kapanmalarında kasanın son açık kalan sepetini ve gün sonu Z raporu tutarlılığını korumak için SQLite ACID transaction kuralları ve WAL günlüğü ile sıfır veri kaybı garantisi sağladım.",
      "features": [
        "Seri barkod okutma ve milisaniyelik ürün eşleme motoru",
        "Çoklu sepet ve satışı beklemeye alma (Park sistemi)",
        "ESC/POS komutlarıyla doğrudan termal bilgi fişi yazdırma",
        "Gün sonu Z Raporu, kâr/zarar ve kritik stok bildirimleri"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/OYMAPOS-Market-Kasa-ve-Barkod-Sistemi",
    "visibility": "public"
  },
  {
    "id": "cortex",
    "title": "Cortex — LLM Destekli IDE & RAG",
    "category": "ai",
    "categoryLabel": "Üretken Yapay Zeka & RAG Ajanı",
    "badge": "Özel Ar-Ge / Geliştirme",
    "summary": "İnternet bağlantısına ihtiyaç duymadan yerel LLM motoruyla çalışan; kaynak kodları, teknik PDF/belgeleri semantik olarak indeksleyen, Monaco editörü ve derin RAG desteğine sahip otonom geliştirici ortamı.",
    "highlightMetric": "🧠 Çok Modlu RAG, Kod İndeksleme & Yerel IDE",
    "techStack": [
      "Python",
      "Ollama & Llama.cpp",
      "ChromaDB Vektör Motoru",
      "Tree-Sitter & Python AST",
      "FastAPI (SSE Akışı)",
      "Document Parser (PDF/MD/TXT)",
      "Monaco Code Editor",
      "Headless Browser Navigasyonu"
    ],
    "caseStudy": {
      "problem": "Geliştiriciler ve araştırmacılar hem gizli kaynak kodlarını ve özel şirket/proje belgelerini buluta sızdırmadan yerelde analiz etmek hem de aynı ekrandan teknik dokümantasyonlar arasında semantik gezinti yapmak ve internete bağlı kalmadan çok yönlü bir üretken yapay zekadan faydalanmak istiyordu. Mevcut bulut çözümleri hem maliyetliydi hem de veri sızıntısı riski taşıyordu. Cortex'i; salt bir kod tamamlayıcı olmanın ötesinde, belge okuma, AST tabanlı kod analizi, yerel IDE arayüzü ve derin RAG hafızasını tek bir yerel ajan çatısında birleştirmek için geliştirdim.",
      "architecture": "Cortex modüler ve genişletilebilir bir otonom ajan mimarisine sahiptir: 1) Yerel LLM Çekirdeği: Ollama / Llama.cpp üzerinden DeepSeek, Qwen ve Llama-3 modellerini doğrudan yerel VRAM/RAM üzerinde çalıştırır. 2) Çok Katmanlı RAG & Bilgi Tabanı: Kaynak kodları Tree-Sitter ve AST ile fonksiyon düzeyinde ayrıştırırken; PDF, Word ve Markdown teknik dokümanları hiyerarşik parçalama (hierarchical chunking) ile ChromaDB vektör uzayına gömer. 3) Akıllı IDE Editörü: Monaco Editor ile sözdizimi renklendirme, kod tamamlama ve RAG bağlamlı sohbet panelini birleştirir. 4) Akış & Arayüz: FastAPI Server-Sent Events (SSE) daktilo akışıyla tokenları gecikmesiz istemciye iletir.",
      "keyChallenge": "Kod sözdizimi ve uzun teknik dokümanlar gibi farklı veri formatlarını tek bir ortak vektör uzayında bağlam kaybı yaşamadan ilişkilendirmek ve modelin doğru dosya satırına referans vermesini sağlamak için hibrit arama (Dense Vector + BM25 Sparse Search) ve AST tabanlı kaynak atıflı bir yönlendirici geliştirdim.",
      "features": [
        "Tamamen yerel (%100 Air-Gapped) çalışma prensibiyle sıfır veri sızıntısı",
        "Gelişmiş RAG motoru: Kaynak kod, AST sözdizimi, PDF ve teknik belge analizi",
        "Entegre Monaco kod editörü ve bağlamsal yapay zeka sohbet arayüzü",
        "Teknik dokümantasyonlar üzerinde otonom tarayıcı navigasyonu ve içerik çekme",
        "Server-Sent Events (SSE) tabanlı anlık token akışı ve yüksek performans"
      ]
    },
    "githubUrl": null,
    "visibility": "private"
  },
  {
    "id": "portfolio-console",
    "title": "Kişisel Portfolyo Web Sitesi",
    "category": "fullstack",
    "tier": 1,
    "visibility": "public",
    "summary": "25+ mühendislik projesini, matematik tezini ve düşük seviyeli sistem çözümlerini harici UI kütüphanesi kullanmadan %100 Vanilla CSS ve canlı çift dil motoruyla sunan interaktif çalışma konsolu.",
    "techStack": [
      "Python",
      "FastAPI",
      "Vanilla JS (ES6+)",
      "Vanilla CSS3",
      "i18n Engine",
      "Uvicorn"
    ],
    "githubUrl": "https://github.com/oguztasdemir/Oguz-Tasdemir-Website-Portfolyo",
    "demoUrl": "https://oguztasdemir.github.io/Oguz-Tasdemir-Website-Portfolyo/",
    "highlight_metric": "%100 Vanilla CSS & Sıfır UI Kütüphane Bağımlılığı",
    "whyBuilt": "Genel portfolyo şablonları ve hantal React/Next framework'leri, geliştirdiğim sistemlerin mimari derinliğini, düşük seviyeli detaylarını ve gerçek hayat vaka analizlerini aktarmakta yetersiz kalıyordu. Bu yüzden harici hiçbir ağır kütüphaneye bağımlı olmadan çalışan, sıfır gecikmeli, anında TR/EN geçişi yapabilen ve 4 adımlı sistem akış şemalarını interaktif sunan bağımsız bir mühendislik konsolu geliştirdim.",
    "caseStudy": {
      "problem": "Geleneksel portfolyo siteleri çoğunlukla yüzeysel ekran görüntüleri ve statik metinlerden ibarettir. Ağır JavaScript framework'leri (React, Next.js vb.) ve büyük CSS paketleri (Tailwind, Bootstrap) sayfa yüklenme süresini artırır ve arka plandaki mühendislik mantığını şeffaf bir şekilde sergilemekte yetersiz kalır.",
      "architecture": "Uygulama, hafif ve asenkron bir Python FastAPI arka ucu ile sıfır bağımlılıklı saf Vanilla HTML5/CSS3/JavaScript ön ucundan oluşur. Veri katmanında her proje bağımsız bir JSON şeması olarak saklanır. Arayüzde özel CSS değişkenleri (Design Tokens), modüler olay güdümlü (event-driven) i18n çeviri motoru ve 4 adımlı dinamik SVG/DOM akış şeması derleyicisi bulunur.",
      "keyChallenge": "Sayfa yenilemeye ihtiyaç duymadan tüm projenin açık modallarını, filtreleme çiplerini ve arama sonuçlarını canlı olarak Türkçe/İngilizce arasında senkronize tutmak ve hiçbir harici CSS kütüphanesi olmadan modern, mikro etkileşimli bir IDE hissi sunmak.",
      "features": [
        "Sıfır UI bağımlılığı ile modern koyu/açık tema Vanilla CSS tasarım sistemi",
        "Olay güdümlü (Event-Driven) canlı çift dil (TR / EN) çeviri motoru",
        "26 proje için interaktif 4 adımlı sistem akış şeması derleyicisi",
        "Proje detaylarını kod ağaçları ve test komutlarıyla gösteren 5 sekmeli inceleme paneli",
        "Modüler JSON şema mimarisi ve FastAPI REST API veri servisleri"
      ]
    },
    "problem": "Geleneksel portfolyo siteleri çoğunlukla yüzeysel ekran görüntüleri ve statik metinlerden ibarettir. Ağır JavaScript framework'leri (React, Next.js vb.) ve büyük CSS paketleri (Tailwind, Bootstrap) sayfa yüklenme süresini artırır ve arka plandaki mühendislik mantığını şeffaf bir şekilde sergilemekte yetersiz kalır.",
    "architecture": "Uygulama, hafif ve asenkron bir Python FastAPI arka ucu ile sıfır bağımlılıklı saf Vanilla HTML5/CSS3/JavaScript ön ucundan oluşur. Veri katmanında her proje bağımsız bir JSON şeması olarak saklanır. Arayüzde özel CSS değişkenleri (Design Tokens), modüler olay güdümlü (event-driven) i18n çeviri motoru ve 4 adımlı dinamik SVG/DOM akış şeması derleyicisi bulunur.",
    "key_challenge": "Sayfa yenilemeye ihtiyaç duymadan tüm projenin açık modallarını, filtreleme çiplerini ve arama sonuçlarını canlı olarak Türkçe/İngilizce arasında senkronize tutmak ve hiçbir harici CSS kütüphanesi olmadan modern, mikro etkileşimli bir IDE hissi sunmak.",
    "features": [
      "Sıfır UI bağımlılığı ile modern koyu/açık tema Vanilla CSS tasarım sistemi",
      "Olay güdümlü (Event-Driven) canlı çift dil (TR / EN) çeviri motoru",
      "26 proje için interaktif 4 adımlı sistem akış şeması derleyicisi",
      "Proje detaylarını kod ağaçları ve test komutlarıyla gösteren 5 sekmeli inceleme paneli",
      "Modüler JSON şema mimarisi ve FastAPI REST API veri servisleri"
    ],
    "flowSteps": [
      {
        "step": "01",
        "title": "JSON Şema & API Ayrıştırma",
        "desc": "FastAPI arka ucu data/projects/ dizinindeki bağımsız JSON şemalarını asenkron okur ve istemciye sıralı veri akışı sağlar."
      },
      {
        "step": "02",
        "title": "İstemci Durum & i18n Çözümleme",
        "desc": "Ön uç JavaScript motoru seçili dili (TR/EN) ve tema modunu algılayarak verileri bellek içi dizinle eşleştirir."
      },
      {
        "step": "03",
        "title": "Dinamik DOM & Akış Şeması Derleme",
        "desc": "Kartlar, filtre sayaçları ve 4 adımlı interaktif sistem akışları harici kütüphane olmadan Vanilla DOM API ile çizilir."
      },
      {
        "step": "04",
        "title": "Çift Dilli Canlı Etkileşim",
        "desc": "Kullanıcı dil veya sekme değiştirdiğinde sayfa yenilenmeden tüm görünüm mikro animasyonlarla anında güncellenir."
      }
    ]
  },
  {
    "id": "Kredi-Notu-Siniflandirmasi-Tahmin-Modeli",
    "title": "Kredi Notu Sınıflandırma & Risk Tahmin Modeli",
    "category": "academic",
    "categoryLabel": "Akademik Veri & ML Modellemesi",
    "badge": "Makine Öğrenmesi",
    "summary": "Müşterilerin finansal alışkanlıklarını, borç oranlarını ve hesap hareketlerini inceleyerek kredi risk düzeyini yüksek doğrulukla tahmin eden makine öğrenmesi modeli.",
    "highlightMetric": "🎯 %88+ F1-Skoru & Dengeli Risk Tahmini",
    "techStack": [
      "Python",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Feature Engineering",
      "XGBoost"
    ],
    "githubUrl": "https://github.com/oguztasdemir/Kredi-Risk-Notu-Tahmin-Modeli",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Üniversite 4. sınıf Makine Öğrenmesi (Machine Learning) dersi dönem projem ve ödevim kapsamında geliştirdiğim bir modelleme çalışmasıdır. Bankacılık ve finans alanındaki müşteri veri setlerinde dengesiz sınıf dağılımlarını (ödenmeyen kredilerin azınlıkta olması) ele alarak, müşterilerin kredi notu ve risk düzeyini yüksek doğrulukla sınıflandıran bir makine öğrenmesi boru hattı inşa ettim.",
      "architecture": "Model geliştirme sürecinde 100.000+ satırlık gerçek finansal kayıt içeren veri seti kullanıldı. İlk aşamada veri bilimi hattı (Pandas, Seaborn) ile öznitelik dağılımları incelendi; gelir ve kredi limiti gibi çarpık (skewed) değişkenlere Log Dönüşümü uygulandı. Eksik değerler Medyan ve İteratif Doldurucu (IterativeImputer) ile tamamlandı. Sınıflandırma motorunda Lojistik Regresyon, Random Forest, LightGBM ve CatBoost algoritmaları çapraz doğrulama (Stratified 5-Fold Cross-Validation) ile test edildi. En yüksek genelleme başarısını gösteren LightGBM modeli seçilerek hiperparametreleri GridSearch ile optimize edildi.",
      "keyChallenge": "Finansal veri setlerindeki en kritik engel olan Temerrüt (ödenmeyen kredi) sınıfının azınlıkta olması (%5-10) durumunu çözmek için SMOTE ve Class Weight dengelemesi uyguladım. Modelin Yanlış Negatif maliyetini minimize edecek şekilde karar eşiği (decision threshold) ayarlandı.",
      "features": [
        "4. sınıf Makine Öğrenmesi dersi kapsamındaki kapsamlı dönem ödevi ve modelleme",
        "Uçtan uca veri temizleme ve öznitelik mühendisliği boru hattı",
        "Dengesiz veri setlerine özel SMOTE optimizasyonu",
        "Detaylı karmaşıklık matrisi ve ROC-AUC analizi"
      ]
    },
    "visibility": "public"
  },
  {
    "id": "webtoon-lora-suite",
    "title": "Webtoon Hikaye Analizi & Üretken Görsel/Panel Hattı",
    "category": "ai",
    "categoryLabel": "Görsel Analitik & LoRA Üretim Hattı",
    "badge": "Özel Ar-Ge / Geliştirme",
    "summary": "Webtoon ve çizgi hikayelerin panel akışlarını, sahne kompozisyonlarını ve anlatı yapısını analiz eden; konuşma balonlarını arındırıp LoRA ve üretken yapay zeka ile yeni görsel sahneler türeten analitik üretim boru hattı.",
    "highlightMetric": "🎨 Anlatı & Panel Analitiği, LoRA Üretim Hattı",
    "techStack": [
      "Python",
      "OpenCV",
      "Pillow",
      "PyTorch",
      "LaMa Inpainting",
      "Stable Diffusion & LoRA",
      "FastAPI"
    ],
    "githubUrl": null,
    "demoUrl": null,
    "caseStudy": {
      "problem": "Hem Doğal Dil İşleme (NLP) hem de Diffusers ile LoRA ve YOLO nesne tanıma/segmentasyon eğitimlerinde kendimi derinlemesine geliştirmek için bu projeyi başlattım. Amacım, YOLO ve LoRA ile webtoon panellerini ve karakterlerini tutarlı şekilde üretebilecek bir boru hattı kurarak, özgün webtoon hikayeleri oluşturup dijital platformlarda yayınlayarak gelir elde edebileceğim profesyonel bir içerik üretim altyapısı kurmaktı.",
      "architecture": "Boru hattı üç aşamalı çalışır: 1) YOLO tabanlı segmentasyon modeli dikey webtoon şeritlerindeki konuşma balonlarını, ses efektlerini ve panel sınırlarını tespit eder. 2) Balonların içi temizlenerek metinsiz temiz çizimler elde edilir. 3) Temizlenen bu görseller ve karakter pozları LoRA model eğitimi için etiketlenir (tagging) ve Diffusers kütüphanesiyle özel stil modelleri eğitilir.",
      "keyChallenge": "Farklı webtoon panellerinde karakterin yüz, saç ve kıyafet tutarlılığını bozmadan konuşma balonlarını altındaki çizime zarar vermeden temizleyip LoRA ağırlıklarına doğru aktarmaktı.",
      "features": [
        "NLP, Diffusers, LoRA ve YOLO modelleriyle uçtan uca kendini geliştirme projesi",
        "Özgün webtoon hikaye üretimi ve dijital yayıncılık hedefli modelleme",
        "YOLO ile konuşma balonu ve panel segmentasyonu",
        "Karakter tutarlılığını koruyan LoRA eğitim veri seti hazırlığı"
      ]
    },
    "visibility": "private"
  },
  {
    "id": "Airdrop-Local",
    "title": "Yerel Ağ Hızlı Dosya Transferi (Local Drop)",
    "category": "desktop",
    "categoryLabel": "Masaüstü & P2P Ağ Paylaşımı",
    "badge": "Yüksek Hız",
    "summary": "Aynı Wi-Fi ağındaki bilgisayar ve telefonlar arasında internet kotası tüketmeden, kablo aramadan tarayıcı üzerinden dosya transferi sağlayan yerel ağ paylaşım aracı.",
    "highlightMetric": "🚀 100+ MB/s Yerel Ağ Gigabit Hızı",
    "techStack": [
      "Python",
      "WebSockets",
      "mDNS / UDP Discovery",
      "Zero-Config",
      "Vanilla JS"
    ],
    "caseStudy": {
      "problem": "Apple (iPhone/iPad/Mac) cihazları ile Windows bilgisayarlar arasında USB kablosuyla dosya aktarımı yapmak sürücü uyumsuzlukları ve kısıtlamalar nedeniyle oldukça zor ve zahmetli bir süreçtir. İnternet üzerinden buluta yükleyip tekrar indirmek ise kotayı tüketir ve zaman kaybettirir. Bu sorunu çözmek için kabloya ihtiyaç duymadan, yalnızca aynı Wi-Fi ağı üzerinden QR kod okutarak saniyeler içinde bağlanan ve Apple ile Windows cihazlar arasında yüksek hızda doğrudan dosya aktarımı sağlayan yerel bir sistem kurdum.",
      "architecture": "Uygulama Python asyncio ve yerel HTTP/WebSocket sunucu mimarisi üzerine kurulmuştur. Windows bilgisayarda uygulama açıldığında ekranda dinamik bir QR kod üretilir. Apple veya Android cihazın kamerasıyla bu QR kod okutulduğunda tarayıcı doğrudan yerel ağdaki bağlantı arayüzüne yönlendirilir. Dosya transferi başlatıldığında dosyalar ikili parçalar (binary chunks) halinde doğrudan yerel ağ bant genişliğiyle (100+ MB/s) gönderilir ve hiçbir veri internete çıkmaz.",
      "keyChallenge": "Apple cihazların mobil tarayıcılarında arka plana geçildiğinde bağlantının kopmasını engellemek için kesintisiz aktarım tamponu ve yeniden bağlanma mekanizması geliştirdim.",
      "features": [
        "Apple (iOS/macOS) ve Windows arasında kablosuz sorunsuz köprü",
        "QR kod okutarak tek saniyede sıfır kurulumla bağlanma",
        "Yerel Wi-Fi üzerinden internet kotasını harcamadan 100+ MB/s transfer hızı",
        "Tarayıcı tabanlı, mobil cihazlara ekstra uygulama kurma zorunluluğu olmayan hafif yapı"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/Airdrop-Local-P2P",
    "visibility": "public"
  },
  {
    "id": "cortex-planner",
    "title": "Geliştirici Görev & Proje Planlama İstasyonu",
    "category": "ai",
    "categoryLabel": "Yazılım Planlama & GitHub Senkronizasyonu",
    "badge": "Özel Ar-Ge / Geliştirme",
    "visibility": "private",
    "summary": "Yeni bir projeye başlarken dağınık fikirleri mantıksal geliştirme adımlarına (görev sırası, öncelikler) bölen ve GitHub Projects ile tek tıkla eşitleyen yerel planlama aracı.",
    "highlightMetric": "📋 Proje Fikirlerini Görev Sırasına Dönüştürme & GitHub Senkronizasyonu",
    "techStack": [
      "Python",
      "FastAPI",
      "Yerel Dil Modeli",
      "GitHub API & GraphQL",
      "SQLite WAL",
      "İş Akış Şemaları"
    ],
    "githubUrl": null,
    "caseStudy": {
      "problem": "Geliştirdiğim tüm projeleri tek bir merkezde derli toplu görebilmek, GitHub API anahtarımla bağlanarak depolara doğrudan erişebilmek, projelerin yol haritasını tutmak ve yerel LLM'ler aracılığıyla 'Bu projeye başka hangi özellikleri ekleyebiliriz?' diye beyin fırtınası yapıp fikir alabileceğim akıllı bir ajanda ve planlayıcı ihtiyacımdan doğdu.",
      "architecture": "Uygulama, GitHub REST ve GraphQL API'lerine bağlanarak kullanıcının tüm depolarını, açık issue'larını ve commit geçmişini çeker. Yerel dil modeli entegrasyonu sayesinde her bir projenin README ve kod yapısı analiz edilir; geliştiriciye mimari öneriler, eklenebilecek yeni modüller ve yapılacaklar listesi (TODO) sunulur. Sistem aynı zamanda kişisel bir yazılım ajandası olarak çalışır.",
      "keyChallenge": "GitHub API hız sınırlarına takılmadan birden fazla deponun durumunu yerel SQLite veritabanında asenkron önbelleğe almak ve LLM'e verimli proje bağlamı aktarmaktı.",
      "features": [
        "Tüm yazılım projelerini tek bir ekranda derli toplu listeleme ve izleme",
        "GitHub API anahtarı ile depolara doğrudan erişim ve senkronizasyon",
        "LLM aracılığıyla 'Projeye ne eklenebilir?' beyin fırtınası ve fikir üretimi",
        "Geliştirici ajandası, görev önceliklendirme ve not tutma paneli"
      ]
    }
  },
  {
    "id": "Disk-Kurtarma-Araci",
    "title": "Harddisk & USB Veri Kurtarma Aracı",
    "category": "desktop",
    "categoryLabel": "Düşük Seviye Sistem & Veri Kurtarma",
    "badge": "Düşük Seviye Sistem",
    "summary": "Bozuk veya yanlışlıkla biçimlendirilmiş harici disk ve flaş belleklerden, doğrudan ham sektör taraması yaparak görsel ve belgeleri kurtaran adli bilişim aracı.",
    "highlightMetric": "🔍 Ham Sektör (Raw Block) İmza Taraması",
    "techStack": [
      "Python",
      "Win32 Raw Disk API",
      "File Carving Signatures",
      "PySide",
      "Thread Pool"
    ],
    "caseStudy": {
      "problem": "Kişisel taşınabilir harici diskimi Xbox konsoluna bağladığımda, konsol diski harici depolama alanı olarak kullanmak amacıyla otomatik olarak biçimlendirip yapılandırdı ve disk içindeki tüm arşivim ve dosyalarım bir anda silindi. Piyasada satılan ticari veri kurtarma yazılımları ise ya fahiş lisans ücretleri istiyor ya da diske kurtarma yaparken yeni veriler yazarak mevcut sektörleri geri dönülemez şekilde bozma riski taşıyordu. Diske kesinlikle hiçbir yazma işlemi yapmadan (%100 salt-okunur modda), doğrudan ham sektörleri (raw sectors) tarayarak dosya imzalarından silinen dosyaları yeni bir diske çıkaran kendi kurtarma aracımı geliştirdim.",
      "architecture": "Yazılım, düşük seviyeli Windows Win32 API çağrıları (CreateFileW ile PhysicalDrive erişimi) üzerinden doğrudan ham disk sektörlerine kesinlikle salt-okunur (read-only) güvenlik modunda bağlanır. Xbox yapılandırması dosya tablosunu (FAT32/NTFS) ezdiği için dosya oyma (File Carving) tekniği kullanılır: Sektörler blok blok okunurken JPEG, PNG, PDF, ZIP, MP4 gibi dosya formatlarının sihirli baytları (Magic Bytes / File Signatures - örn. JPEG için 0xFFD8FFE0) aranır. Başlangıç imzası yakalandığı anda dosya yapısı ayrıştırılır, bitiş baytına (EOF) kadar olan sektörler bellekte birleştirilir ve hasarlı diske tek bir bayt dahi yazılmadan yeni hedef sürücüye güvenle kaydedilir.",
      "keyChallenge": "Kurtarma esnasında orijinal diske yazma yapılmasını kesin olarak engelleyen salt-okunur koruma mekanizmasını sağlamak ve dosya sistemi tablosu olmadan parçalanmış sektörlerden sağlam dosyaları eksiksiz birleştirmekti.",
      "features": [
        "Orijinal diske sıfır yazma riski (%100 Salt-Okunur / Read-Only güvenlik)",
        "Xbox formatı veya çöken dosya sistemlerinden imza tabanlı (File Carving) kurtarma",
        "Doğrudan Win32 API ile ham fiziksel sektör (Raw Sector) taraması",
        "Kurtarılan dosyaları doğrudan başka bir sürücüye güvenle aktarma"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/Ham-Disk-ve-Veri-Kurtarma-Araci",
    "visibility": "public"
  },
  {
    "id": "crypto-analytics-engine",
    "title": "Kripto Varlık Analizi & Çoklu Yatırımcı Davranış Motoru",
    "category": "fintech",
    "categoryLabel": "FinTech & Davranışsal Piyasa Analitiği",
    "badge": "Özel Ar-Ge / Geliştirme",
    "visibility": "private",
    "summary": "Kripto para piyasalarında yalnızca klasik indikatörlere bağlı kalmadan, farklı yatırımcı profillerinin (panik satışı, dipten toplama, risk iştahı) piyasa tepkilerini modelleyen ve emir defteri analizi yapan yerel finansal analiz platformu.",
    "highlightMetric": "📈 Davranışsal Risk Analizi & Canlı Emir Defteri Motoru",
    "techStack": [
      "Python",
      "FastAPI",
      "Pandas & NumPy",
      "Yerel LLM Karar Katmanı",
      "WebSocket Akışı",
      "CCXT Kripto Borsa API"
    ],
    "githubUrl": null,
    "caseStudy": {
      "problem": "Kripto para piyasaları üzerine kendimi eğitmek, stratejilerimi test etmek, internetteki haber ve duyarlılık akışlarını tarayarak çoklu piyasa simülasyonları gerçekleştirmek istiyordum. Amacım, makine öğrenmesi ve veri analitiği modelleriyle kripto paraların gelecekteki fiyat hareketlerini ve trend yönlerini önceden tahmin edip edemeyeceğimi araştırmak ve kendi yatırım algoritmalarımı doğrulamaktı.",
      "architecture": "Sistem CCXT kütüphanesi üzerinden borsa verilerini, geçmiş fiyat serilerini ve internet üzerindeki finans haberlerini çeker. Makine öğrenmesi modelleri (regresyon ve sınıflandırma) ve simülasyon motoru geçmiş veriler üzerinde geriye dönük test (backtesting) yapar. Farklı piyasa koşullarında haber duyarlılığı ile fiyat hareketleri arasındaki korelasyonu matematiksel olarak analiz eder.",
      "keyChallenge": "Haber akışlarındaki gürültülü veriyi temizlemek ve anlık volatilite şoklarında simülasyon modellerinin gerçekçi kâr/zarar ve risk oranları üretmesini sağlamaktı.",
      "features": [
        "Kripto piyasalarında makine öğrenmesiyle yön tahmini ve simülasyon",
        "İnternetten finansal haber arama ve duyarlılık analizi",
        "Eğitim ve geriye dönük strateji doğrulama (Backtesting) ortamı",
        "Canlı borsa veri akışı ve senaryo stres testleri"
      ]
    }
  },
  {
    "id": "hyperbeam-browser",
    "title": "Ortak Tarayıcı Odası & Eşzamanlı Web Gezinme",
    "category": "desktop",
    "categoryLabel": "Sistem & Ortak Tarayıcı Odası",
    "badge": "Özel Ar-Ge / Geliştirme",
    "visibility": "private",
    "summary": "Sunucu üzerinde çalışan izole bir web tarayıcısını WebSocket üzerinden arkadaş ortamında aynı anda kontrol etmeyi, birlikte video izlemeyi ve web sitelerinde ortak gezinmeyi sağlayan sanal tarayıcı odası.",
    "highlightMetric": "🌐 Eşzamanlı Ortak Kontrol & Canlı Tarayıcı Yayını",
    "techStack": [
      "Node.js & Express",
      "Puppeteer Stealth",
      "WebSocket Akışı",
      "Chromium Tarayıcı Motoru",
      "HTML5 Canvas Ekranı"
    ],
    "githubUrl": null,
    "caseStudy": {
      "problem": "Uzaktan erişimle arkadaşlarla tek bir bağlantı üzerinden aynı sanal bilgisayara erişip birlikte yönetebileceğimiz bir platform kurmak istedim. Amacım; arkadaşlarla aynı anda senkronize film ve video izleyebilmek, internet üzerinde ortak araştırma yapabilmek veya Ateş ve Su gibi iki kişilik web tabanlı multiplayer oyunları tek bir sanal ekran üzerinden uzaktan birlikte oynayabilmekti.",
      "architecture": "Sunucu tarafında headless/headed Chromium ve sanal ekran ortamı çalışır. Sanal makinenin ekran ve ses akışı optimize edilmiş kareler halinde WebSocket üzerinden istemcilere aktarılır. Kullanıcıların klavye ve fare komutları anlık olarak sanal masaüstüne iletilir; böylece iki kişi aynı anda aynı klavye/fareyi paylaşıyormuş gibi birlikte oyun oynayabilir ve tarayıcıyı kontrol edebilir.",
      "keyChallenge": "Ateş ve Su gibi anlık refleks gerektiren iki kişilik oyunlarda ve video oynatımında giriş gecikmesini (input lag) 80 milisaniyenin altına indirmek için optimize ikili (binary) soket akışı geliştirdim.",
      "features": [
        "Tek bir link üzerinden ortak sanal bilgisayara bağlanma ve birlikte kontrol",
        "Eşzamanlı ortak film, video izleme ve web araştırması odası",
        "Ateş ve Su gibi web multiplayer oyunları uzaktan birlikte oynayabilme",
        "Düşük gecikmeli WebSocket ekran ve girdi senkronizasyonu"
      ]
    }
  },
  {
    "id": "Oymapos-Etiket-Yazdirici",
    "title": "OymaPOS Etiket — Dinamik Raf & Barkod Yazdırıcı",
    "category": "fintech",
    "categoryLabel": "FinTech & Termal Baskı Motoru",
    "badge": "Donanım Çözümü",
    "summary": "Market raf etiketlerini ve ürün barkodlarını termal etiket yazıcılarından (ZPL/EPL) toplu ve net şekilde basmak için geliştirdiğim bağımsız masaüstü etiket motoru.",
    "highlightMetric": "🏷️ Tek Tıkla Toplu Raf & Ürün Barkod Baskısı",
    "techStack": [
      "Python",
      "Pillow (PIL)",
      "PyInstaller (.EXE)",
      "EPL/ZPL & Raw Print",
      "Vanilla JS Canvas"
    ],
    "caseStudy": {
      "problem": "Marketimizdeki ana kasa bilgisayarı eski ve donanım olarak zayıf bir sistemdi. Kasa programının yanı sıra ağır etiket tasarım ve toplu yazdırma işlemlerini de aynı bilgisayara yüklemek kasayı kilitliyor ve satış anında gecikmelere sebep oluyordu. Bu donanım yetersizliğini aşmak için etiket basma sürecini kasadan tamamen ayırdım; dükkandaki daha güçlü bilgisayarıma Wi-Fi üzerinden bağlanan bir yerel sunucu mimarisi kurdum. Böylece rafta veya depodayken cep telefonundan (mobil entegrasyon) ya da güçlü bilgisayardan yeni fiyat güncellemelerini anında sunucuya aktarıp termal yazıcıdan etiketleri tek tıkla bastırabildiğimiz bağımsız bir sistem inşa ettim.",
      "architecture": "Sistem iki ana parçadan oluşur: Dükkandaki güçlü bilgisayarda çalışan yerel Wi-Fi sunucusu ve termal etiket yazıcıya doğrudan TSPL/EPL baytları gönderen baskı motoru. Reyonda gezerken cep telefonundan barkod okutularak veya Excel listesinden toplu fiyat güncellendiğinde, veri Wi-Fi üzerinden bu sunucuya iletilir. Sunucu anında net çözünürlüklü EAN-13 barkodlu etiket şablonlarını oluşturur ve termal yazıcının tampon belleğini yormadan sırayla basar.",
      "keyChallenge": "Zayıf kasa bilgisayarını hiçbir şekilde yormadan, dükkan içi yerel Wi-Fi ağında cep telefonu ve masaüstü bilgisayar arasında sıfır gecikmeli veri senkronizasyonu ve termal yazıcı kafa DPI kalibrasyonunu sağlamaktı.",
      "features": [
        "Zayıf kasa bilgisayarını yormayan bağımsız yerel Wi-Fi sunucu mimarisi",
        "Cep telefonundan mobil entegrasyonla rafta fiyat güncelleme ve etiket tetikleme",
        "Excel/CSV listelerinden tek tıkla toplu ve net EAN-13 barkodlu raf etiketi basımı",
        "Termal yazıcılar için (Argox, Xprinter vb.) doğrudan bayt seviyesinde sürücüsüz çıktı"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/OYMAPOS-Termal-Fis-ve-Etiket-Basici",
    "visibility": "public"
  },
  {
    "id": "fatura-odeal",
    "title": "Ödeal e-Fatura & Arşiv İndirme Otomasyonu",
    "category": "fintech",
    "categoryLabel": "FinTech & e-Fatura Otomasyonu",
    "badge": "Açık Kaynak Sistem",
    "summary": "Ödeal portalından binlerce e-fatura ve arşivi oturum kopmalarına takılmadan, tarih aralığına göre otonom sorgulayıp PDF formatında klasörleyen otomasyon aracı.",
    "highlightMetric": "⚡ %99.8 Kesintisiz Toplu Fatura Arşivleme",
    "techStack": [
      "Python",
      "Playwright Stealth",
      "Headless Chrome",
      "SQLite",
      "Excel/JSON Exporter"
    ],
    "githubUrl": "https://github.com/oguztasdemir/Odeal-eFatura-Kesme-Otomasyonu",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Perakende operasyonlarımızda Ödeal portalı üzerinden hem gelen e-faturaları düzenli olarak bilgisayara çekip arşivlemek hem de yeni faturaları hızlıca sisteme yazıp kesmek ciddi bir manuel operasyondu. Portala sürekli giriş yapmak, faturaları tek tek elle indirmek ve fatura bilgilerini girmek zaman alıyordu. Bu süreci otomatize ederek hem portaldan faturaları toplu çekip sınıflandıran hem de fatura yazma işlemlerini pratikleştiren otonom bir bot geliştirdim.",
      "architecture": "Sistemi Playwright ve Python arka plan servis mimarisi üzerine kurdum. Bot, şifreli kimlik bilgileriyle Ödeal kurumsal portalına headless olarak bağlanır, dinamik oturum tokenlarını (JWT/Session Cookie) yakalar ve portaldaki e-fatura/e-arşiv tablolarını DOM üzerinden ayrıştırır. İndirme aşamasında portalın indirme kısıtlarına takılmamak için paralel indirme havuzu (asyncio worker pool) devreye girer. İndirilen her fatura, üzerindeki VKN, Müşteri Ünvanı, Tarih ve Fatura Numarasına göre otomatik ayrıştırılarak Yıl/Ay/Şube formatındaki yerel klasör hiyerarşisine arşivlenir.",
      "keyChallenge": "Portalın rastgele aralıklarla fırlattığı oturum düşmelerini ve reCAPTCHA/güvenlik kontrollerini aşmak için akıllı oturum yenileyici (session-keeper) ve indirme kaldığı yerden devam ettirme (resumable queue) mekanizması geliştirdim. Ağ kopsa dahi faturalar eksiksiz indirildi.",
      "features": [
        "Ödeal portalından faturaları toplu çekme ve otomatik arşivleme",
        "Fatura yazma ve kesme süreçlerini hızlandıran otomasyon",
        "Kesintiye uğrayan işlemleri kaldığı yerden devam ettirme",
        "İndirilen faturaları müşteri unvanı ve tarih bazında otomatik klasörleme"
      ]
    },
    "visibility": "public",
    "tags": [
      "automation",
      "e-invoice",
      "web-scraping",
      "billing",
      "python"
    ]
  },
  {
    "id": "ai-image-studio",
    "title": "Yerel Görsel Üretim & Hızlı Stüdyo Arayüzü",
    "category": "ai",
    "categoryLabel": "Yapay Zeka & Görsel Tasarım Stüdyosu",
    "badge": "Özel Ar-Ge / Geliştirme",
    "visibility": "private",
    "summary": "Kendi bilgisayarımın ekran kartını (GPU) kullanarak, karmaşık ComfyUI node ağlarıyla vakit kaybetmeden doğrudan şablonlarla hızlı görsel üretip organize etmeyi sağlayan yerel stüdyo.",
    "highlightMetric": "🎨 Yerel GPU Optimizasyonu & Hızlı Görsel Üretimi",
    "techStack": [
      "Python",
      "Diffusers & PyTorch",
      "FastAPI",
      "Stable Diffusion & SDXL",
      "Modern Web UI",
      "CUDA Hızlandırma"
    ],
    "githubUrl": null,
    "caseStudy": {
      "problem": "Yerel ekran kartımda görsel üretirken Automatic1111 veya ComfyUI gibi popüler araçların arayüzleri aşırı kalabalık ve hantaldı; her seferinde onlarca kutuyu bağlamak ve üretilen binlerce görseli bilgisayar klasörlerinde tek tek aramak ciddi bir vakit kaybıydı. Kendi projelerimde ve tasarımlarımda hızlıca prompt yazıp temiz şablonlarla doğrudan çıktı alabileceğim, üretim geçmişini düzenli tutan hafif bir stüdyo arayüzüne ihtiyaç duydum.",
      "architecture": "Arka planda Python Diffusers ve PyTorch kütüphanelerini FastAPI ile bağladım. Ekran kartı belleğini (VRAM) tasarruflu kullanmak için FP16 hassasiyeti ve xFormers hızlandırması entegre edildi. Web ön yüzünde prompt ağırlıkları, en-boy oranları ve tohum (seed) değerleri tek tıkla ayarlanabilir; üretilen her görsel meta-verisiyle birlikte yerel arşive kaydedilir.",
      "keyChallenge": "Yüksek çözünürlüklü (1024x1024) üretimlerde ekran kartı belleğinin dolmasını (CUDA Out of Memory) önlemek için bellek boşaltma ve dilimlenmiş dikkat algoritmaları kurguladım.",
      "features": [
        "Stable Diffusion / SDXL modelleriyle yerel donanımda hızlı görsel üretimi",
        "Düşük ekran kartı belleği tüketimi (VRAM koruma modu)",
        "Üretilen görselleri parametreleriyle birlikte arşivleme ve tek tıkla çoğaltma",
        "Gözü yormayan sade ve modern stüdyo kontrol paneli"
      ]
    },
    "screenshots": [
      {
        "src": "assets/projects/ai-image-studio/screenshot_2_img2img_workspace.png",
        "caption": "Image-to-Image Stüdyo Çalışma Alanı & Canlı Çeviri",
        "captionEn": "Image-to-Image Studio Workspace & Live Translation"
      },
      {
        "src": "assets/projects/ai-image-studio/screenshot_1_projects_hub.png",
        "caption": "Proje Merkezi & Oturum Kartları",
        "captionEn": "Projects Hub & Session Management Cards"
      },
      {
        "src": "assets/projects/ai-image-studio/screenshot_3_model_selector.png",
        "caption": "Çoklu Model Seçici (SDXL, InstructPix2Pix, Inpaint)",
        "captionEn": "Multi-Model Selector (SDXL, InstructPix2Pix, Inpaint)"
      },
      {
        "src": "assets/projects/ai-image-studio/screenshot_4_hardware_telemetry.png",
        "caption": "Canlı GPU & VRAM Donanım Telemetri Monitörü",
        "captionEn": "Live GPU & VRAM Hardware Telemetry Monitor"
      },
      {
        "src": "assets/projects/ai-image-studio/screenshot_5_models_manager.png",
        "caption": "Model Ağırlıkları & VRAM Önyükleme Yöneticisi",
        "captionEn": "Model Weights & VRAM Preload Manager"
      }
    ],
    "resultsComparison": [
      {
        "modeTitle": "MOD 1: Image-to-Image (Görselden Görsele Dönüşüm #1 — Gün Batımı)",
        "modeTitleEn": "MODE 1: Image-to-Image (Transformation #1 — Golden Hour)",
        "inputImg": "assets/projects/ai-image-studio/result_img2img_input.jpg",
        "promptTr": "Sinematik altın saat gün batımı ışıklandırması, sıcak iç mekan aydınlatması ve havuz yansıması",
        "promptEn": "Cinematic golden hour sunset lighting, warm interior illumination and pool reflection, 8k architectural render",
        "meta": "Model: InstructPix2Pix / SDXL • Süre: 4.2 sn • Çözünürlük: 1024x1024",
        "metaEn": "Model: InstructPix2Pix / SDXL • Time: 4.2s • Resolution: 1024x1024",
        "outputImg": "assets/projects/ai-image-studio/result_img2img_output_dusk.jpg"
      },
      {
        "modeTitle": "MOD 1: Image-to-Image (Görselden Görsele Dönüşüm #2 — Kış & Kar Atmosferi)",
        "modeTitleEn": "MODE 1: Image-to-Image (Transformation #2 — Winter Snow)",
        "inputImg": "assets/projects/ai-image-studio/result_img2img_input.jpg",
        "promptTr": "Kış mevsimi, yoğun kar yağışı, çam ağaçları üzerinde kar ve içeride sıcak şömine ışığı",
        "promptEn": "Winter season, heavy snowfall, snow-covered pine trees and warm cozy fireplace glow inside",
        "meta": "Model: InstructPix2Pix / SDXL • Süre: 4.8 sn • Çözünürlük: 1024x1024",
        "metaEn": "Model: InstructPix2Pix / SDXL • Time: 4.8s • Resolution: 1024x1024",
        "outputImg": "assets/projects/ai-image-studio/result_img2img_output_winter.jpg"
      },
      {
        "modeTitle": "MOD 2: Text-to-Image (Metinden Sıfırdan Görsel Üretim — 1024px SDXL)",
        "modeTitleEn": "MODE 2: Text-to-Image (Synthesis from Text — 1024px SDXL)",
        "inputImg": null,
        "promptTr": "Gece vakti fütüristik Neo-Tokyo siberpunk sokak arası, parlayan mavi ve kehribar holografik tabelalar, yağmurlu taş zeminde neon yansımalar, sinematik sis, 8k gerçekçi mimari render",
        "promptEn": "Futuristic neo-Tokyo cyberpunk alleyway at night, glowing holographic signs, rain-slicked cobblestones reflecting neon blue and amber lights, cinematic volumetric fog, 8k photorealistic",
        "meta": "Model: Playground v2.5 Aesthetic (SDXL) • Süre: 3.9 sn • Çözünürlük: 1024x1024 (25 Adım)",
        "metaEn": "Model: Playground v2.5 Aesthetic (SDXL) • Time: 3.9s • Resolution: 1024x1024 (25 Steps)",
        "outputImg": "assets/projects/ai-image-studio/result_txt2img_cyberpunk.jpg"
      }
    ],
    "videoUrl": "assets/projects/ai-image-studio/demo_video.webm",
    "pipelineSteps": [
      {
        "num": "01",
        "title": "Model & Oturum Seçimi",
        "desc": "SDXL / InstructPix2Pix / Inpaint",
        "detail": "Proje oturumu açılır ve kullanılacak yerel diffüzyon modeli seçilir."
      },
      {
        "num": "02",
        "title": "Görsel & Türkçe Komut Girişi",
        "desc": "Canlı Otomatik Çeviri & Sözlük",
        "detail": "Kaynak görsel ve Türkçe prompt anlık İngilizce model girdisine çevrilir."
      },
      {
        "num": "03",
        "title": "FP16 CUDA Tensör Üretimi",
        "desc": "VRAM Koruma & Bellek Yönetimi",
        "detail": "Attention slicing ve FP16 ile 8 GB VRAM sınırını aşmadan çıktı üretilir."
      },
      {
        "num": "04",
        "title": "Yerel SQLite Arşiv & Önizleme",
        "desc": "Meta-Veri Kaydı & Tek Tıkla Tekrar",
        "detail": "Üretilen görsel tohum/adım parametreleriyle diske ve arşive kaydedilir."
      }
    ],
    "folderTree": "📁 Görsel Oluşturma/\n├── 📄 main.py                      # FastAPI sunucu başlatıcı, statik web ve endpointler\n├── 📄 BASLAT.bat                   # Tek tıkla yerel başlatma betiği\n├── 📁 app/                         # Çekirdek iş mantığı ve AI motoru\n│   ├── 📄 database.py              # SQLite WAL modu & proje/üretim geçmişi\n│   ├── 📄 image_engine.py          # Diffusers / PyTorch CUDA & VRAM yöneticisi\n│   └── 📄 translator.py            # Önbellekli + çevrimdışı sözlük destekli çevirmen\n├── 📁 web/                         # Koyu cam (glassmorphism) web arayüzü\n│   ├── 📄 index.html               # Çoklu mod ve modal iskeleti\n│   ├── 📄 style.css                # Modern stüdyo stilleri\n│   ├── 📄 app.js                   # Frontend koordinatörü\n│   └── 📁 js/\n│       ├── 📁 core/ (i18n.js, state.js, storage.js)\n│       └── 📁 services/api.js      # API istemcisi\n└── 📁 data/                        # SQLite veritabanı ve yerel çıktılar",
    "codeFiles": {
      "main.py": "import os\nimport sys\nimport time\nimport io\nimport base64\nimport webbrowser\nimport threading\nfrom pathlib import Path\nfrom fastapi import FastAPI, UploadFile, File, Form, HTTPException, Request\nfrom fastapi.staticfiles import StaticFiles\nfrom fastapi.responses import JSONResponse, Response\nfrom fastapi.middleware.cors import CORSMiddleware\nimport uvicorn\n\nfrom app.database import (\n    init_db, log_action, save_generation_record, get_generation_history, \n    delete_generation_record, clear_all_generation_history, OUTPUTS_DIR,\n    get_projects, create_project, delete_project, rename_project\n)\nfrom app.image_engine import engine\nfrom app.translator import translate_to_english\n\nBASE_DIR = Path(__file__).resolve().parent\nWEB_DIR = BASE_DIR / \"web\"\n\napp = FastAPI(title=\"Img2Img Studio\", docs_url=None, redoc_url=None)\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=[\"*\"],\n    allow_credentials=True,\n    allow_methods=[\"*\"],\n    allow_headers=[\"*\"],\n)\n\n# Custom No-Cache & Clean Log Middleware (VIBE Standards)\n@app.middleware(\"http\")\nasync def vibe_middleware(request: Request, call_next):\n    path = request.url.path\n    if path in [\"/\", \"/index.html\"]:\n        print(f\"\\n[🔄 SAYFA YENİLENDİ / F5] Web arayüzü başarıyla yenilendi -> {request.client.host if request.client else '127.0.0.1'}\")\n    \n    response = await call_next(request)\n    # F5 no-cache headers\n    response.headers[\"Cache-Control\"] = \"no-store, no-cache, must-revalidate, max-age=0\"\n    response.headers[\"Pragma\"] = \"no-cache\"\n    response.headers[\"Expires\"] = \"0\"\n    return response\n\n@app.get(\"/api/models\")\ndef get_models():\n    return engine.get_models_info()\n\n@app.get(\"/api/hardware\")\ndef get_hardware():\n    return engine.get_models_info()\n\n@app.post(\"/api/load-model\")\ndef preload_model(model_id: str = Form(...), mode: str = Form(\"img2img\")):\n    def _do_load():\n# ... (devamı repo kaynak kodunda)",
      "app/image_engine.py": "import os\nimport sys\nimport io\nimport time\nimport base64\nfrom pathlib import Path\nfrom PIL import Image, ImageOps, ImageFilter\nimport numpy as np\n\n# Dynamically ensure Roaming user site-packages are visible if needed\nroaming_site = os.path.expanduser(r\"~\\AppData\\Roaming\\Python\\Python313\\site-packages\")\nif os.path.exists(roaming_site) and roaming_site not in sys.path:\n    sys.path.insert(0, roaming_site)\n\n# E: diski öncelikli model ve cache yolu (Yarın E diski takılınca doğrudan orayı kullanır)\nMODELS_CACHE_DIR = r\"E:\\huggingface\" if os.path.exists(r\"E:\\huggingface\") else os.path.expanduser(r\"~/.cache/huggingface/hub\")\nos.environ[\"HF_HOME\"] = MODELS_CACHE_DIR\n\ndef resolve_model_path(local_subpath: str, hf_repo_id: str) -> str:\n    e_path = os.path.join(r\"E:\\huggingface\", local_subpath)\n    if os.path.exists(e_path):\n        return e_path\n    c_path = os.path.join(MODELS_CACHE_DIR, local_subpath)\n    if os.path.exists(c_path):\n        return c_path\n    return hf_repo_id\n\nAVAILABLE_MODELS = {\n    \"smart-inpaint\": {\n        \"name\": \"Zero-Shot Smart Inpaint (Fırçasız Metinle Düzenleme)\",\n        \"path\": \"runwayml/stable-diffusion-inpainting\",\n        \"type\": \"smart-inpaint\",\n        \"desc\": \"Fırça gerektirmez! 'Pantolonu kaldır', 'ceketi siyah yap' gibi komutlardaki nesneyi otomatik algılar ve düzenler.\",\n        \"default_steps\": 25,\n        \"default_guidance\": 7.5,\n        \"default_strength\": 0.85\n    },\n    \"instruct-pix2pix\": {\n        \"name\": \"InstructPix2Pix (Doğal Komut Dönüştürücü)\",\n        \"path\": resolve_model_path(r\"models--timbrooks--instruct-pix2pix\\snapshots\\31519b5cb02a7fd89b906d88731cd4d6a7bbf88d\", \"timbrooks/instruct-pix2pix\"),\n        \"type\": \"instruct-pix2pix\",\n        \"desc\": \"Orijinal kişiyi ve kıyafeti bozmadan saç, gözlük, arka plan gibi hedefli kısımları dönüştürür.\",\n        \"default_steps\": 30,\n        \"default_guidance\": 7.5,\n        \"default_image_guidance\": 1.85\n    },\n    \"sdxl-turbo\": {\n        \"name\": \"SDXL Turbo (Süper Hızlı Dönüşüm)\",\n        \"path\": resolve_model_path(r\"models--stabilityai--sdxl-turbo\\snapshots\\71153311d3dbb46851df1931d3ca6e939de83304\", \"stabilityai/sdxl-turbo\"),\n        \"type\": \"img2img\",\n        \"desc\": \"1-4 adımda anında yüksek çözünürlüklü görsel üretir.\",\n        \"default_steps\": 4,\n        \"default_guidance\": 0.0,\n        \"default_strength\": 0.5\n    },\n    \"playground-v2.5\": {\n        \"name\": \"Playground v2.5 Aesthetic (Ultra Detay 1024px)\",\n        \"path\": resolve_model_path(r\"models--playgroundai--playground-v2.5-1024px-aesthetic\\snapshots\\1e032f13f2fe6db2dc49947dbdbd196e753de573\", \"playgroundai/playground-v2.5-1024px-aesthetic\"),\n        \"type\": \"img2img\",\n        \"desc\": \"En yüksek fotoğraf gerçekçiliği ve estetik kalite sunan 1024px SDXL motoru.\",\n# ... (devamı repo kaynak kodunda)",
      "app/translator.py": "def normalize_text(text: str) -> str:\n    t = text.lower()\n    mapping = {\n        'ı': 'i', 'ğ': 'g', 'ü': 'u', 'ş': 's', 'ö': 'o', 'ç': 'c',\n        'İ': 'i', 'Ğ': 'g', 'Ü': 'u', 'Ş': 's', 'Ö': 'o', 'Ç': 'c'\n    }\n    for k, v in mapping.items():\n        t = t.replace(k, v)\n    return t\n\ndef translate_to_english(text: str) -> str:\n    if not text or not text.strip():\n        return \"\"\n    \n    text = text.strip()\n    if text in _TRANSLATION_CACHE:\n        return _TRANSLATION_CACHE[text]\n    norm = normalize_text(text)\n    \n    # Hizli kaldirma kurali kontrolu\n    if any(rm in norm for rm in [\"kaldir\", \"cikar\", \"sil\", \"yok et\"]):\n        for tr_word, en_word in FAST_DICTIONARY.items():\n            if tr_word in norm and en_word not in [\"remove\", \"turn into\", \"replace with\"]:\n                res = f\"remove {en_word}, natural background, realistic skin and texture\"\n                _TRANSLATION_CACHE[text] = res\n                return res\n    \n    try:\n        translated = GoogleTranslator(source='auto', target='en').translate(text)\n        if translated:\n            _TRANSLATION_CACHE[text] = translated\n            return translated\n    except Exception as e:\n        print(f\"Ceviri hatasi (Yerel sozluk devreye girdi): {e}\")\n        \n    # Offline / Rate-limit yerel sozluk fallback\n    out_words = norm\n    for tr_k, en_v in sorted(FAST_DICTIONARY.items(), key=lambda x: -len(x[0])):\n        out_words = out_words.replace(tr_k, en_v)\n    _TRANSLATION_CACHE[text] = out_words\n    return out_words\n\ndef parse_target_and_prompt(text: str):\n    norm = normalize_text(text)\n    en_text = translate_to_english(text).lower()\n    \n    clothing_keywords = [\n        \"pants\", \"trousers\", \"jeans\", \"shorts\", \"skirt\", \"dress\",\n        \"jacket\", \"coat\", \"hoodie\", \"shirt\", \"t-shirt\", \"sweater\",\n        \"shoes\", \"hat\", \"glasses\", \"sunglasses\", \"hair\", \"beard\"\n    ]\n    \n    target_object = None\n    for kw in clothing_keywords:\n        if kw in en_text:\n            target_object = kw\n            break\n            \n    if not target_object:\n        words = en_text.split()\n        target_object = words[-1] if words else \"object\"\n        \n    is_removal = any(r in en_text for r in [\"remove\", \"take off\", \"delete\", \"without\", \"clear\"])\n    if is_removal:\n        replacement = \"seamless natural texture, high quality, clean background, matching anatomy\"\n    else:\n        replacement = en_text\n        \n    return target_object, replacement\n",
      "web/app.js": "import { state } from './js/core/state.js';\nimport { translations } from './js/core/i18n.js';\nimport { \n  fetchProjects, createProjectApi, renameProjectApi, deleteProjectApi,\n  fetchModels, fetchHardware, preloadModel, \n  generateImage, generateTxt2Img, \n  fetchHistory, deleteHistoryItem, clearAllHistory, fetchTranslation \n} from './js/services/api.js';\nimport { saveToCache, getFromCache, removeFromCache } from './js/core/storage.js';\n\n// DOM Elements - Top Status\nconst gpuStatusEl = document.getElementById('gpuStatus');\nconst systemStatusDot = document.getElementById('systemStatusDot');\nconst topVramText = document.getElementById('topVramText');\nconst topVramBar = document.getElementById('topVramBar');\n\n// Projects Hub vs Active Workspace Elements\nconst projectsHubContainer = document.getElementById('projectsHubContainer');\nconst activeWorkspaceContainer = document.getElementById('activeWorkspaceContainer');\nconst projectsCardGrid = document.getElementById('projectsCardGrid');\nconst openNewProjectModalBtn = document.getElementById('openNewProjectModalBtn');\nconst btnBackToProjectsHub = document.getElementById('btnBackToProjectsHub');\nconst currentActiveProjectTitle = document.getElementById('currentActiveProjectTitle');\nconst clearProjectArchiveBtn = document.getElementById('clearProjectArchiveBtn');\nconst hubMainTitle = document.getElementById('hubMainTitle');\nconst hubMainSub = document.getElementById('hubMainSub');\n\n// Modals\nconst newProjectModal = document.getElementById('newProjectModal');\nconst closeProjectModalBtn = document.getElementById('closeProjectModalBtn');\nconst cancelProjectModalBtn = document.getElementById('cancelProjectModalBtn');\nconst confirmCreateProjectBtn = document.getElementById('confirmCreateProjectBtn');\nconst newProjectNameInput = document.getElementById('newProjectNameInput');\nconst newProjectDescInput = document.getElementById('newProjectDescInput');\n\nconst editProjectModal = document.getElementById('editProjectModal');\nconst closeEditProjectModalBtn = document.getElementById('closeEditProjectModalBtn');\nconst cancelEditProjectModalBtn = document.getElementById('cancelEditProjectModalBtn');\nconst confirmEditProjectBtn = document.getElementById('confirmEditProjectBtn');\nconst editProjectOldName = document.getElementById('editProjectOldName');\nconst editProjectNameInput = document.getElementById('editProjectNameInput');\nconst editProjectDescInput = document.getElementById('editProjectDescInput');\n\nconst projectDetailsModal = document.getElementById('projectDetailsModal');\nconst closeProjectDetailsModalBtn = document.getElementById('closeProjectDetailsModalBtn');\nconst detailsProjectName = document.getElementById('detailsProjectName');\nconst detailsProjectDesc = document.getElementById('detailsProjectDesc');\nconst detailsProjectCount = document.getElementById('detailsProjectCount');\nconst detailsProjectDate = document.getElementById('detailsProjectDate');\nconst btnEnterProjectFromDetails = document.getElementById('btnEnterProjectFromDetails');\n\nconst hardwareModal = document.getElementById('hardwareModal');\nconst modelsModal = document.getElementById('modelsModal');\nconst languageModal = document.getElementById('languageModal');\nconst settingsModal = document.getElementById('settingsModal');\n# ... (devamı repo kaynak kodunda)",
      "requirements.txt": "fastapi>=0.110.0\nuvicorn>=0.29.0\ntorch>=2.2.0\ndiffusers>=0.27.0\ntransformers>=4.39.0\npillow>=10.0.0\npsutil>=5.9.0\ndeep-translator>=1.11.4\n"
    },
    "qaPool": [
      {
        "q": "S1: Bu projeyi geliştirmeye neden ihtiyaç duydunuz? Çözdüğünüz asıl darboğaz neydi?",
        "qEn": "Q1: Why did you build this project? What bottleneck did it solve?",
        "a": "Mevcut hazır araçların (ComfyUI / A1111) karmaşık node yapısını ortadan kaldırmak, harici ücretli servislere veya API anahtarlarına bağımlı kalmadan doğrudan yerel donanım üzerinde hızlı sonuç üreten hafif bir stüdyo arayüzü kurguladım.",
        "aEn": "To eliminate the cluttered node graph complexity of tools like ComfyUI and run rapid local GPU synthesis without external paid API keys or cloud dependencies."
      },
      {
        "q": "S2: Neden bu mimariyi ve teknoloji yığınını tercih ettiniz?",
        "qEn": "Q2: Why did you choose this architecture and tech stack?",
        "a": "PyTorch + Diffusers motorunu FastAPI ve hafif Vanilla JS arayüzüyle bağlayarak düşük bellek tüketimi, doğrudan CUDA VRAM telemetrisi ve sıfır framework şişkinliğiyle anlık yanıt veren modüler bir yapı kurdum.",
        "aEn": "Connecting PyTorch + Diffusers via FastAPI to a lightweight Vanilla JS UI delivers low memory overhead, live CUDA VRAM telemetry, and zero frontend framework bloat."
      },
      {
        "q": "S3: Kod mimarisinde modülerliği ve sürdürülebilirliği nasıl sağladınız?",
        "qEn": "Q3: How did you structure modularity and maintainability?",
        "a": "Model yönetimi (image_engine.py), çeviri/sözlük katmanı (translator.py), SQLite WAL veritabanı (database.py) ve arayüz modülleri (state, api, i18n) tek sorumluluk prensibiyle ayrı katmanlarda izole edildi.",
        "aEn": "Model lifecycle (image_engine.py), translation fallback (translator.py), SQLite WAL storage (database.py), and UI modules are strictly separated by responsibility."
      },
      {
        "q": "S4: Geliştirme sürecinde karşılaştığınız en büyük teknik zorluk neydi ve nasıl çözdünüz?",
        "qEn": "Q4: What was the biggest technical challenge and how did you solve it?",
        "a": "8 GB VRAM sınırında yüksek çözünürlüklü SDXL modellerinin bellek taşması (CUDA OOM) yapması ve harici disk/ağ kesintilerinde sistemin tıkanmasıydı. Attention slicing, FP16 bellek boşaltma, resolve_model_path() disk fallback ve çevrimdışı çeviri sözlüğüyle çözüldü.",
        "aEn": "Preventing CUDA OOM on 8GB VRAM GPUs and avoiding missing external disk/API failures—solved via FP16 + attention slicing, dynamic path fallback, and an offline dictionary cache."
      },
      {
        "q": "S5: Veri miktarı veya eşzamanlı istek sayısı artsaydı nasıl ölçeklerdiniz?",
        "qEn": "Q5: How would you scale this for concurrent requests?",
        "a": "Tek GPU kuyruğunu Redis/Celery tabanlı asenkron işçi (worker) havuzuna taşıyıp üretim isteklerini sıralı veya çoklu GPU node'larına dağıtarak paralel ölçeklerdim.",
        "aEn": "Move single-GPU inference into a Redis/Celery worker queue to distribute generation jobs cleanly across worker nodes."
      },
      {
        "q": "S6: Veri bütünlüğü ve kaynak yönetimi adına hangi önlemleri aldınız?",
        "qEn": "Q6: What safeguards handle data integrity and resource cleanup?",
        "a": "Yeni model yüklenmeden önce aktif pipeline silinip torch.cuda.empty_cache() çağrılır; SQLite WAL modu ve timeout ayarlarıyla eşzamanlı okuma/yazma kilitlenmeleri önlenir.",
        "aEn": "Active pipelines are explicitly unloaded with torch.cuda.empty_cache() before switching models, while SQLite WAL mode prevents database lock contention."
      },
      {
        "q": "S7: Projeye bugün sıfırdan başlasaydınız neyi farklı yapardınız?",
        "qEn": "Q7: What would you do differently starting from scratch today?",
        "a": "Model çıkarım adımlarını WebSocket üzerinden gerçek zamanlı ilerleme akışıyla sunup, API şemaları ve UI sınıfları için otomatik bütünlük testlerini en baştan entegre ederdim.",
        "aEn": "Stream step-by-step diffusion progress over WebSockets and add automated UI class/API contract tests from day one."
      }
    ]
  },
  {
    "id": "ui-test-automation",
    "title": "Arayüz & Regresyon Test Otomasyon Aracı",
    "category": "ai",
    "categoryLabel": "Test Otomasyonu & Kalite Güvence",
    "badge": "Özel Ar-Ge / Geliştirme",
    "visibility": "private",
    "summary": "Web ve masaüstü arayüzlerinde yapılan kod değişikliklerinin mevcut sayfaları veya buton işlevlerini bozmadığını doğrulamak için uçtan uca testleri çalıştıran ve hata anında ekran görüntülü PDF raporu basan test aracı.",
    "highlightMetric": "🧪 Dayanıklı Uçtan Uca Test & Otomatik Hata Raporlama",
    "techStack": [
      "Python",
      "Playwright",
      "CustomTkinter",
      "OpenCV Görsel Eşleme",
      "ReportLab (PDF Raporlama)",
      "Yerel Dil Modeli (Test Yorumlayıcı)"
    ],
    "githubUrl": null,
    "caseStudy": {
      "problem": "Geliştirdiğim web ve .exe masaüstü uygulamalarında kullanıcıların karşılaşabileceği olası çökmeleri, buton hatalarını ve arayüz bug'larını önceden tespit etmek istiyordum. Sistemi baştan sona otomatik tarayan, uygulamanın ne amaçla yapıldığını ve işlevlerini bilerek test adımlarını yürüten, bir çökme veya hata anında ekran görüntüleriyle birlikte detaylı PDF raporu oluşturan kapsamlı bir test otomasyon sistemi geliştirdim.",
      "architecture": "Araç, web testleri için Playwright, masaüstü .exe uygulamaları için GUI otomasyon motorunu birleştirir. Test adımları sistem işlevlerine göre kurgulanır. Uygulama çalışırken meydana gelen çökmeler, eksik elementler ve beklenmeyen hatalar yakalandığı anda tam ekran görüntüsü alınır, hata koordinatları işaretlenir ve geliştiricinin incelemesi için anında PDF raporu basılır.",
      "keyChallenge": "Hem web hem de Windows .exe pencerelerinde arayüz çökmelerini sistem donmadan yakalamak ve ekran görüntülü PDF raporlama sürecini otomatik işletmekti.",
      "features": [
        "Web ve masaüstü (.exe) uygulamalarında olası çökmeleri ve bug'ları test etme",
        "Sistemin amacını ve fonksiyonlarını bilerek çalışan otomatik test senaryoları",
        "Hata anında otomatik ekran görüntüsü yakalama ve PDF hata raporu basma",
        "Uçtan uca kalite güvence ve dayanıklılık doğrulama"
      ]
    }
  },
  {
    "id": "youtube-ai-assistant",
    "title": "YouTube Transkript Analiz & Arama Motoru",
    "category": "ai",
    "categoryLabel": "NLP & Semantik Video Arama",
    "badge": "Özel Ar-Ge / Geliştirme",
    "summary": "YouTube videolarının transkriptlerini yerel yapay zeka modeliyle analiz eden, videoyu izlemeden kritik noktaları özetleyen ve aratan asistan.",
    "highlightMetric": "⚡ Semantik Video Özeti & Anlık Arama",
    "techStack": [
      "Python",
      "Ollama (Yerel LLM)",
      "FastAPI",
      "YouTube Data API",
      "Vanilla JS Studio"
    ],
    "githubUrl": null,
    "demoUrl": null,
    "caseStudy": {
      "problem": "YouTube linklerini girdiğimde videoların transkriptlerini otomatik çekip içeriği özetleyen, anlatılan konuyu detaylı şekilde açıklayan, ek çalışma belgeleri hazırlayan ve akademik/teknik kaynakça (bibliyografya) üretmemi sağlayan kapsamlı bir asistan ihtiyacım vardı. Saatlerce süren videoları baştan sona izlemeden aradığım kritik bilgilere ulaşmak ve projelerim için güvenilir kaynak listeleri derlemek amacıyla bu sistemi kurdum.",
      "architecture": "Uygulama YouTube Data API ve altyazı çekme modülleriyle video transkriptini zaman damgalarıyla birlikte ayrıştırır. Çekilen metin, bağlamsal dil modeli ve RAG mimarisiyle işlenir. Kullanıcı soru sorduğunda veya özet istediğinde sistem videonun ana fikrini, alt başlıklarını, öne çıkan terimleri ve referans verilen kaynakları ayrıştırarak biçimlendirilmiş Markdown ve PDF çalışma notları oluşturur.",
      "keyChallenge": "Otomatik oluşturulan transkriptlerdeki noktalama işareti eksikliklerini ve teknik terim yazım hatalarını dil modeliyle düzelterek tutarlı ve doğru bir kaynakça çıkartmaktı.",
      "features": [
        "YouTube linkinden transkript çekip konuyu özetleme ve detaylı açıklama",
        "Videoda geçen konulara dair ek çalışma belgesi ve kaynakça oluşturma",
        "Zaman damgalı doğrudan saniyeye yönlendirme ve arama",
        "Markdown ve PDF formatında çalışma notu dışa aktarımı"
      ]
    },
    "visibility": "private"
  },
  {
    "id": "Hugging-face-Downloader",
    "title": "HuggingFace Model İndirme Yöneticisi",
    "category": "ai",
    "categoryLabel": "AI Model & Veri Seti Yöneticisi",
    "badge": "Açık Kaynak CLI",
    "summary": "HuggingFace üzerindeki devasa yapay zeka modellerini ve ağırlık dosyalarını internet kopsa bile kaldığı yerden devam ettiren (resume) çok parçalı indirme CLI aracı.",
    "highlightMetric": "⚡ Kopmaya Dayanıklı Çok Kanallı İndirme",
    "techStack": [
      "Python",
      "HuggingFace Hub API",
      "Requests",
      "Tqdm Stream",
      "CLI"
    ],
    "githubUrl": "https://github.com/oguztasdemir/HuggingFace-Model-Indirme-Araci",
    "caseStudy": {
      "problem": "HuggingFace üzerindeki devasa yapay zeka modellerini indirirken anlık indirme ve yükleme hızlarını net şekilde görmek, modelin bilgisayarımdaki mevcut donanıma (VRAM, RAM, CPU/GPU) uygun olup olmadığını erkenden anlamak ve olası internet kopmalarında indirmeyi baştan başlatmadan kaldığı yerden devam ettirmek için bu aracı geliştirdim.",
      "architecture": "Araç, HuggingFace Hub REST API ile doğrudan haberleşir. Kullanıcı model adını girdiğinde model deposunun tüm dosya ağacı ve dosya hashleri anında çekilir. İndirme motoru, HTTP Range isteklerini kullanarak dosyayı paralel iş parçacıklarına böler ve çok kanallı (multi-threaded chunk streaming) indirme yapar. Her bir parça diske yazılırken anlık indirme hızı, aktarım süresi ve kalan boyut zengin bir terminal arayüzüyle gösterilir. Bağlantı kesilse bile indirilen baytlar korunur ve bağlantı geldiğinde 1 bayt bile kaybetmeden kaldığı yerden devam eder.",
      "keyChallenge": "Devasa safetensors dosyalarının indirilmesi tamamlandığında bozuk ağırlık indirilmesini önlemek için SHA-256 sağlama doğrulaması ve sistem donanım sınırlarını kontrol eden hafif doğrulayıcılar ekledim.",
      "features": [
        "Anlık indirme ve yükleme hızlarını terminalde canlı izleme",
        "Modelin mevcut donanıma (VRAM/RAM) uygunluk analizi",
        "Kesintiye uğrayan büyük model indirmelerini kaldığı yerden devam ettirme",
        "Doğrudan repo adı girerek tüm ağırlıkları tek komutla çekme"
      ]
    },
    "visibility": "public"
  },
  {
    "id": "Akademik-Ingilizce",
    "title": "Akademik İngilizce & Sınav Kelime Kampı",
    "category": "academic",
    "categoryLabel": "Akademik İngilizce & Sınav",
    "badge": "Eğitim Teknolojisi",
    "summary": "YÖKDİL ve YDS sınavlarındaki geçmiş soruları analiz ederek en kritik kelimeleri bağlamıyla öğreten ve eksikleri tespit eden interaktif sınav hazırlık platformu.",
    "highlightMetric": "📚 10.000+ Soru & Kelime Frekans Analitiği",
    "techStack": [
      "Python",
      "FastAPI",
      "PDFPlumber OCR",
      "NLP Tokenizer",
      "Vanilla JS"
    ],
    "caseStudy": {
      "problem": "YDS ve YÖKDİL gibi akademik dil sınavlarına hazırlanırken kelimeleri rastgele ezberlemek yerine geçmiş sınavlarda en çok çıkan kök kelimeleri öğrenmek istiyordum. Hem kendi sınav hazırlığımda odaklı çalışabilmek hem de sınava hazırlanan arkadaşlarımın isteği üzerine birlikte soru ve kelime pratiği yapabileceğimiz interaktif bir sınav kampı platformu geliştirdim.",
      "architecture": "Sistemin çekirdeğinde Python ve NLTK/spaCy tabanlı bir NLP metin madenciliği motoru yer alır. Geçmiş akademik sınav metinleri ve bilimsel makaleler taranarak morfolojik kök ayrıştırma (lemmatization) ve TF-IDF (Terim Frekansı - Ters Belge Frekansı) analizi yapılır; böylece sınavlarda en yüksek ayırt ediciliğe sahip kelimeler puanlanır. Kullanıcı arayüzünde ise Leitner 5 kutulu aralıklı tekrar algoritması (Spaced Repetition System - SRS) çalışır. Sistem adayın yanlış yaptığı kelimeleri daha sık periyotlarla önüne getirirken, kalıcı hafızaya aktarılanları daha uzun aralıklarla test eder.",
      "keyChallenge": "İngilizce düzensiz fiillerin ve türemiş köklerin öğrenciye parçalanmadan bir bütün kelime ailesi olarak sunulması gerekiyordu. WordNet ontolojisini bağlayarak ilişkili kelime ağaçlarını otomatik türeten bir semantik haritalama algoritması kurguladım.",
      "features": [
        "YDS ve YÖKDİL'e hazırlanan arkadaşlarla birlikte çalışma ve kelime pekiştirme platformu",
        "Fen, Sağlık ve Sosyal alanlarına özel sınav kelime kampları",
        "Geçmiş sınav metinlerinden çıkarılan kök kelime frekans analizi",
        "Aralıklı tekrar algoritmasıyla (SRS) kalıcı hafıza pekiştirme"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/Akademik-Ingilizce",
    "visibility": "public",
    "tags": [
      "education",
      "exam-prep",
      "nlp",
      "python",
      "vocabulary",
      "yds",
      "yokdil"
    ],
    "demoUrl": "https://yokdilapp.vercel.app/#/landing",
    "demoUrl2": "https://yds-quizlet.vercel.app"
  },
  {
    "id": "KPSS-Sinav-Hazirlik",
    "title": "KPSS Lisans GY-GK Hazırlık & Çıkmış Sorular Platformu",
    "category": "academic",
    "categoryLabel": "KPSS Sınav Hazırlık Platformu",
    "badge": "Canlı Web Uygulaması",
    "summary": "KPSS Genel Yetenek - Genel Kültür çıkmış sınav soruları, akıllı hata havuzu, detaylı performans analitiği ve süre simülatörlü interaktif hazırlık platformu.",
    "highlightMetric": "🚀 Canlı Web Yayında & 5000+ Soru Havuzu",
    "techStack": [
      "JavaScript (Vanilla ES6+)",
      "HTML5 & CSS3 (Glassmorphism)",
      "Edge Serverless & CDN",
      "LocalStorage & Analytics API",
      "JSON Soru Veritabanı"
    ],
    "githubUrl": "https://github.com/oguztasdemir/KPSS-Sinav-ve-Soru-Hazirlik-Platformu",
    "demoUrl": "https://kpss-lisans-hazirlik-app.vercel.app",
    "caseStudy": {
      "problem": "Kamu Personel Seçme Sınavı'na (KPSS) hazırlanırken kalın soru bankalarını taşımak yerine dijital ortamda pratik yapmak, hem kendimin hem de sınava hazırlanan arkadaşlarımın isteği üzerine birlikte verimli çalışabilmemiz için bu platformu geliştirdim. Sadece yanlış yapılan soruları biriktirip eksik analizi çıkaran, reklam ve üyelik karmaşası olmadan sınav süresiyle soru çözdüren sade bir hazırlık ortamı kurdum.",
      "architecture": "Platform, Edge Serverless ve CDN mimarisi üzerinde sıfır sunucu maliyetiyle global ağ üzerinden dağıtılmaktadır. Ön yüzde hiçbir ağır framework kullanılmadan saf Vanilla JavaScript ve modern CSS Glassmorphism mimarisi tercih edilmiştir. Kullanıcının çözdüğü her soru yerel LocalStorage üzerinde indekslenir; yanlış yapılan sorular 'Akıllı Hata Havuzu'na aktarılarak adayın sınav öncesi sadece eksiklerine odaklanması sağlanır.",
      "keyChallenge": "Binlerce resimli ve açıklamalı sorunun mobil cihazlarda kotayı tüketmeden, milisaniyeler içinde anında ekrana gelmesi için dinamik JSON chunking ve tarayıcı önbellekleme katmanı geliştirildi.",
      "features": [
        "KPSS'ye hazırlanan arkadaşlarla birlikte verimli çalışma ve soru pratiği ortamı",
        "Canlı web yayını ve hızlı mobil/masaüstü erişim",
        "Akıllı hata havuzu: Sadece yanlış yapılan soruları tekrar çözebilme",
        "Gerçek sınav süre simülatörü ve anlık net / başarı analitiği"
      ]
    },
    "visibility": "public",
    "tags": [
      "exam-prep",
      "quiz-platform",
      "question-bank",
      "javascript",
      "web-app",
      "vercel",
      "kpss"
    ]
  },
  {
    "id": "Soru-Uygulamasi",
    "title": "Akademik Sınav Hazırlık & Soru Çözüm Platformu (PWA)",
    "category": "academic",
    "categoryLabel": "Akademik Sınav Platformu (PWA)",
    "badge": "Eğitim & Sınav Platformu",
    "summary": "İş Sağlığı ve Güvenliği (İSG), Makine Öğrenmesi (ML), Üretken AI (GAI) ve Dijital Sürdürülebilirlik (DS) final sınavlarına çalışma, interaktif test çözme ve dinamik QR kodlu yerel PWA platformu.",
    "highlightMetric": "📱 PWA & Dinamik QR ile Anında Mobil Test Deneyimi",
    "techStack": [
      "Python (http.server & socket)",
      "PWA & Service Worker",
      "Vanilla JS (ES6+)",
      "QR Code Engine",
      "LocalStorage & Cache API"
    ],
    "githubUrl": "https://github.com/oguztasdemir/Akademik-Sinav-Hazirlik-Platformu",
    "demoUrl": "https://oguztasdemir.github.io/Akademik-Sinav-Hazirlik-Platformu/",
    "caseStudy": {
      "problem": "Üniversitede final dönemlerimde test usulü yapılacak sınavlara hem kendimin hem de sınıf arkadaşlarımın rahatça çalışabilmesi için bir sistem ihtiyacı vardı. Kalın notlar ve kağıtlar arasında kaybolmak yerine, internetsiz ortamda dahi QR kod okutarak telefondan veya bilgisayardan sınav sorularını interaktif şekilde çözebileceğimiz, doğru-yanlış analizini anında gösteren hafif bir platform geliştirdim.",
      "architecture": "Uygulama yerel bir Python HTTP mikro-sunucusu ve tamamen sıfır bağımlılıklı saf HTML5/JavaScript arayüzü üzerine kuruldu. Bilgisayarda sınav başlatıldığında terminalde veya pencerede yerel ağ IP'sini içeren bir QR kod basılır. Akıllı telefonla bu QR kod okutulduğunda mobil tarayıcıda doğrudan sınav ekranı açılır. Sorular çözüldükçe cevaplar yerel JSON veritabanında puanlanır ve test sonunda öğrencinin ders bazlı başarı grafiği ekrana yansıtılır.",
      "keyChallenge": "İnternet bağlantısının olmadığı veya zayıf olduğu kampüs ortamlarında yerel ağ üzerinden mobil cihazlarla sıfır gecikmeli veri akışını sağlamaktı.",
      "features": [
        "Final sınavları için arkadaşlarla birlikte soru pratiği yapma ortamı",
        "QR kod okutarak telefondan internetsiz hızlı sınav çözme",
        "Anlık doğru/yanlış analizi ve detaylı sınav karnesi",
        "Hafif, taşınabilir ve pratik mimari"
      ]
    },
    "visibility": "public",
    "tags": [
      "quiz-platform",
      "exam-system",
      "pwa",
      "javascript",
      "learning-analytics"
    ]
  },
  {
    "id": "altyapi-manager",
    "title": "Altyapı Manager — Spor Kulübü, Taktik & Oyuncu Yönetim Sistemi",
    "category": "web",
    "categoryLabel": "Web Tabanlı Spor Yönetim Platformu",
    "badge": "Açık Kaynak Sistem",
    "summary": "Spor kulüplerinde antrenörlerin taktik çizimlerini simüle ettiği, oyuncu gelişim karnelerini tuttuğu ve yapay zeka asistanıyla kulüp verilerini sorguladığı yönetim aracı.",
    "highlightMetric": "📋 İnteraktif Taktik Tahtası & Oyuncu Karnesi",
    "techStack": [
      "Python",
      "FastAPI",
      "HTML5 Canvas",
      "SQLite",
      "RAG Asistanı"
    ],
    "caseStudy": {
      "problem": "Marketimin üst katındaki komşum yeni bir spor altyapı akademisi açıyordu ve federasyon lisansını beklerken 'Bana Football Manager seviyesinde, tüm kulüp yönetimini yapabileceğim bir uygulama yapar mısın?' diyerek bana ilk ticari iş teklifini getirdi. Kağıt-defter karmaşasını bitiren; oyuncu gelişim kartlarını, aidat/devam takibini, sakatlık geçmişini ve antrenör taktik tahtasını tek ekranda toplayan bu sistemi geliştirip başarıyla teslim ettim.",
      "architecture": "Uygulama modern web teknolojileri ve hafif yerel veritabanı mimarisiyle inşa edildi. Oyuncu profilleri, yaş grupları (U12-U19), fiziksel gelişim metrikleri (hız, dayanıklılık, teknik puanlar) ve devam durumları modüler sekmelerde yönetilir. Taktik tahtası üzerinde sürükle-bırak formasyon dizilimi ve maç planlama simülasyonu çalışır.",
      "keyChallenge": "Futbol akademisinin antrenman sahasında internet olmadan da oyuncu yoklamalarını ve taktik planlarını hızlıca girebilmesi için çevrimdışı önbellek ve anlık dışa aktarma (PDF/Excel) modülü geliştirdim.",
      "features": [
        "İlk ticari yazılım projem olarak spor akademisine özel geliştirilip teslim edilen sistem",
        "Football Manager tarzı oyuncu gelişim kartları ve yetenek puanlaması",
        "Antrenörler için interaktif sürükle-bırak taktik ve formasyon tahtası",
        "Aidat, devam-devamsızlık ve sakatlık geçmişi takip paneli"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/Altyapi-Manager",
    "visibility": "public",
    "tags": [
      "desktop-app",
      "management-system",
      "club-management",
      "player-tracking",
      "sqlite"
    ]
  },
  {
    "id": "Telegram-Media-Hub",
    "title": "Telegram Medya & Dosya İndirme Yöneticisi",
    "category": "desktop",
    "categoryLabel": "Masaüstü Medya & Kuyruk Yöneticisi",
    "badge": "Otomasyon Botu",
    "summary": "Telegram kanallarındaki ve gruplarındaki büyük arşiv ve medya dosyalarını, hız limitlerine takılmadan filtrelere göre bilgisayara otonom indiren arka plan yöneticisi.",
    "highlightMetric": "📁 Asenkron Dosya & Medya Arşivleme Kuyruğu",
    "techStack": [
      "Python",
      "Telethon / Pyrogram",
      "Asyncio",
      "SQLite",
      "Rate-Limiter"
    ],
    "githubUrl": "https://github.com/oguztasdemir/Telegram-Kanal-Medya-Yonetim-Paneli",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Telegram üzerindeki kanallarda ve gruplarda paylaşılan büyük dosyaları, ders materyallerini veya arşivleri Telegram masaüstü uygulamasından tek tek elle indirmek zahmetliydi ve indirmeyi kolaylaştıracak esnek bir yapı yoktu. Dosyaları türlerine göre sınıflandırıp bilgisayara indirmeyi çok daha pratik ve hızlı hale getirmek için bu medya yöneticisini geliştirdim.",
      "architecture": "Sistem Python Telethon ve Pyrogram asenkron kütüphaneleriyle Telegram MTProto protokolü üzerinden doğrudan haberleşir. Kullanıcı hedef kanal veya sohbeti seçtiğinde bot kanal geçmişini geriye doğru asenkron olarak tarar. Medyalar MIME türüne, dosya boyutuna ve isim desenine göre filtreleme kuyruğuna alınır. İndirme motoru, paralel chunk transferi yaparak Telegram'ın tek bağlantı hız limitini aşar. İndirilen dosyalar 'Belgeler/PDF', 'Videolar/1080p', 'Veri-Setleri/ZIP' gibi mantıksal bir klasör hiyerarşisine otomatik taşınır.",
      "keyChallenge": "Telegram'ın aşırı dosya indirme durumunda fırlattığı FloodWait sınırlarına takılmadan indirme kuyruğunu dengeli ve kesintisiz şekilde yönetmekti.",
      "features": [
        "Telegram kanallarından dosya indirmeyi tek tıkla kolaylaştıran yapı",
        "Uzantı, dosya boyutu ve tarih aralığına göre medya filtreleme",
        "Arka planda kesintisiz asenkron kuyruk işleme",
        "Kaldığı mesaj ID'sinden otomatik devam edebilme"
      ]
    },
    "visibility": "public"
  },
  {
    "id": "cache-cleaner",
    "title": "Geliştirici Disk & Önbellek Temizleme Aracı",
    "category": "desktop",
    "categoryLabel": "Geliştirici Disk & Önbellek Aracı",
    "badge": "Açık Kaynak Sistem",
    "summary": "Yazılım geliştirme sırasında şişen pip, npm, HuggingFace, Gradle ve PyTorch önbelleklerini tarayıp gereksiz gigabaytlarca geçici veriyi tek tıkla temizleyen masaüstü aracı.",
    "highlightMetric": "🧹 10+ GB Disk Alanı Geri Kazanımı",
    "techStack": [
      "Python",
      "CustomTkinter",
      "Windows Shell API",
      "Multi-threading",
      "Shutil"
    ],
    "githubUrl": "https://github.com/oguztasdemir/Gelistirici-Sistem-ve-Onbellek-Temizleyici",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Yapay zeka modelleri (HuggingFace, PyTorch, Ollama), derleme artıkları (node_modules, .next, target), pip/npm önbellekleri ve Docker imaj kalıntıları geliştirici bilgisayarlarının SSD disklerini fark ettirmeden 30-50 GB seviyesinde doldurarak sistemi kilitler. Mevcut disk temizleme araçları ise (CCleaner vb.) geliştirici araçlarının önbellek yollarını tanımaz veya kullanıcıya hangi klasörün ne kadar yer kapladığını şeffafça göstermeden kritik dosyaları silme riski yaratır. Bu sistemi, yazılım geliştiricilere özel, güvenli ve derinlemesine klasör analizli bir temizleme çözümü sunmak için geliştirdim.",
      "architecture": "Mimariyi Python tabanlı eşzamanlı dosya tarama motoru ve PowerShell WMI entegrasyonu üzerine kurdum. Uygulama sistemdeki tüm sabit disklerde tanımlı 40+ kritik geliştirici önbellek rotasını (AppData, .cache, pip cache, npm cache, gradle, rust cache) asenkron iş parçacıklarıyla (multithreading) tarar. Bulunan her bir kalıntıyı boyut, son erişim tarihi ve güvenlik kategorisi (Güvenli / İncelenmeli) bazında puanlayarak geliştiriciye sunar. Silme işlemi Windows kilitli dosya izinlerini atlatabilen güvenli çöp kutusu (Recycle Bin API) üzerinden yürütülür.",
      "keyChallenge": "Milyonlarca küçük dosyadan oluşan node_modules ve pip önbellek klasörlerinin taranması klasik Python os.walk ile dakikalar sürüyordu. Windows FindFirstFile/FindNextFile düşük seviyeli Win32 API çağrılarını ctypes ile bağlayarak tarama süresini 45 saniyeden 2.8 saniyeye indirdim.",
      "features": [
        "Tek tıkla pip, npm, HuggingFace ve geçici dosya analizi",
        "Karanlık mod (Dark theme) CustomTkinter şık arayüzü",
        "Eşzamanlı arka plan taraması (Arayüz donmaz)",
        "Geri kazanılan disk alanının anlık canlı hesabı"
      ]
    },
    "visibility": "public",
    "tags": [
      "system-cleaner",
      "cache-cleaner",
      "customtkinter",
      "disk-cleanup",
      "python",
      "windows-utility"
    ]
  },
  {
    "id": "Gardrops-Otomasyon-Botu",
    "title": "Gardrops Pazaryeri & Takip Otomasyonu (2022)",
    "category": "web",
    "categoryLabel": "Pazaryeri Takip & Etkileşim Botu",
    "badge": "2022 Arşiv Projesi",
    "summary": "2022 yılında Gardrops ikinci el pazarında butik satış yaparken mağaza trafiğini artırmak için geliştirdiğim, hedef kitleyi otonom takip eden otomasyon botu.",
    "highlightMetric": "🤖 3.000+ Hedef Kitle Taraması & Diferansiyel Filtre",
    "techStack": [
      "Python",
      "Selenium WebDriver",
      "BeautifulSoup4",
      "Requests",
      "DOM Scraper"
    ],
    "githubUrl": "https://github.com/oguztasdemir/Gardrops-Pazaryeri-Otomasyon-Botu",
    "demoUrl": null,
    "caseStudy": {
      "problem": "2022 yılında Gardrops platformunda butik satış yaparken mağaza trafiğini artırmak için takipçileri takip etmek istiyordum. Ancak Gardrops'un arayüzünde ciddi bir frontend bug'ı (hatası) vardı: Bir mağazanın takipçiler listesine girip bir kullanıcıyı 'Takip Et'e bastığınızda arayüz takip edilmiş gibi gösteriyordu; ancak sayfayı yenileyip (F5) aynı listeye tekrar baktığınızda o kullanıcı yine takip edilmiyor gibi görünüyordu. Arayüzün bu yanıltıcı durumuna aldanıp butona tekrar basıldığında ise sistem aslında takip edilmiş olan kullanıcıyı 'Takipten Çıkarıyordu'. Bu kısır döngüyü ve buton karmaşasını çözmek için kullanıcı adlarını yerelde kaydedip takip durumunu kendi algoritmasıyla hatasız yöneten bir otomasyon kurdum.",
      "architecture": "Sistem Selenium WebDriver ile çalışır ancak Gardrops'un arayüzdeki hatalı takip buton durumlarına asla güvenmez. Bot, hedef mağaza profillerini ve takipçilerini tararken her bir kullanıcı adını (username) ayrıştırır ve yerel SQLite/JSON durum takipçisine kaydeder. Bir kullanıcıya takip isteği gönderildiği an o kullanıcı kalıcı hafızaya 'takip edildi' olarak işaretlenir. Sayfa yenilense veya Gardrops arayüzü hatalı olarak 'Takip Et' butonu gösterse bile algoritma yerel listedeki ismi kontrol eder ve butona tekrar basılmasını engelleyerek kullanıcının yanlışlıkla takipten çıkarılmasının önüne geçer.",
      "keyChallenge": "Gardrops'un arayüzündeki takip durum tutarsızlığını aşmak için isim bazlı yerel durum yönetimi kurmak ve platformun anti-bot sınırlarına takılmamak için rastgele gecikmeler (Gaussian timing) eklemekti.",
      "features": [
        "Gardrops arayüzündeki F5 takip tutarsızlığını aşan yerel isim eşleme algoritması",
        "Kullanıcıları yanlışlıkla takipten çıkarmayı %100 önleyen kalıcı durum kaydı",
        "Hedef mağaza takipçilerini hafif ve otonom tarama",
        "Ban riskini sıfıra indiren insansı rastgele bekleme aralıkları"
      ]
    },
    "visibility": "public"
  },
  {
    "id": "EA-FIFA-Fikstur",
    "title": "Turnuva & Dinamik Fikstür / Kura Çekim Motoru",
    "category": "web",
    "categoryLabel": "Algoritmik Kura & Fikstür Motoru",
    "badge": "Algoritmik Sistem",
    "summary": "Arkadaşlar arasında düzenlediğimiz FIFA ve PES turnuvalarında seri başı kurallarını koruyan, fikstürü otomatik çeken ve averajları hesaplayan dinamik turnuva motoru.",
    "highlightMetric": "⚽ Otomatik Kura & Anlık Averaj Tablosu",
    "techStack": [
      "Python",
      "FastAPI",
      "Vanilla JS",
      "Combinatorial Match Algoritmaları",
      "SQLite"
    ],
    "caseStudy": {
      "problem": "Arkadaşlarımla akşamları EA FC / FIFA oynarken turnuvalardaki eşleşmeleri, grup kuralarını ve puan tablosunu kağıt üzerinde veya elle manuel kurmaya çalışıyorduk. Bu durum hem zaman kaybettiriyor hem de averaj hesaplarında ve eşleşmelerde tartışmalara yol açıyordu. Bu karmaşanın önüne geçmek, takımları adil bir şekilde kuraya sokup ikili averajları ve fikstürü saniyeler içinde otomatik oluşturan hafif bir turnuva motoru yazdım.",
      "architecture": "Uygulama modern web arayüzü ve arkasında deterministik fikstür üretim algoritmalarıyla (Berger Tables / Round Robin ve Single Elimination algoritmaları) çalışır. Katılımcı takımlar sisteme girildiğinde kura çekimi matematiksel rastgelelikle (Fisher-Yates Shuffle) yapılır ve ev sahibi / deplasman dengesi gözetilerek maç takvimi oluşturulur. Skorlar girildikçe reaktif state mimarisi sayesinde puan durumu, atılan-yenen gol, galibiyet-beraberlik-mağlubiyet serileri ve ikili averaj önceliği anlık olarak yeniden sıralanır.",
      "keyChallenge": "Üçlü veya dörtlü averaj eşitliği durumlarında (üç takımın da aynı puana sahip olup birbirlerini yendiği senaryolar) sonsuz döngüye girmeden UEFA turnuva kuralları şablonuna göre mini-lig puan tablosu üreten özel bir özyinelemeli (recursive) averaj çözücü geliştirdim.",
      "features": [
        "Arkadaş ortamında akşamları hızlı kura çekimi ve görsel turnuva ağacı",
        "Grup aşaması ve tek/çift maçlı eleme turları",
        "Gerçek zamanlı puan durumu ve averaj takibi",
        "Manuel eşleşme karmaşasını ve averaj tartışmalarını sonlandıran adil motor"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/FIFA-Lig-ve-Turnuva-Fikstur-Motoru",
    "visibility": "public",
    "demoUrl": null
  },
  {
    "id": "NC-Codes",
    "title": "Transformice Lua Mini Oyun & Script Paketi (2013)",
    "category": "desktop",
    "categoryLabel": "Fizik & Lua Oyun Script Arşivi",
    "badge": "Açık Kaynak Kod",
    "summary": "2013'ten bu yana Transformice kabile evleri için geliştirilen; mini oyunlar, dinamik takım kadroları, harita kodları ve eğlence mekanikleri içeren açık kaynak Lua script koleksiyonu.",
    "highlightMetric": "🎮 10+ Bağımsız Lua Oyun & Script Modülü",
    "techStack": [
      "Lua",
      "Transformice API",
      "Game Logic",
      "Event-Driven Scripting",
      "UTF-8 Encoding"
    ],
    "githubUrl": "https://github.com/oguztasdemir/Transformice-Lua-Script-Arsivi",
    "demoUrl": null,
    "caseStudy": {
      "problem": "2013 yılında Transformice oyun topluluğunda kabile evleri ve özel odalar oyuncuların sadece sohbet ettiği durağan alanlardı. Oyuncuların oda içerisinde etkileşime girebileceği, yarışabileceği, mini oyunlar oynayabileceği veya otomatik skor tablosu tutabilecekleri esnek ve hatasız script mekanizmaları bulunmuyordu. Oyuncuları saatlerce odada tutacak, gerçek zamanlı fizik motoruyla entegre çalışan ve sunucu tarafında çökmeyen eğlenceli mini oyun sistemlerine ihtiyaç vardı. İlk programlama temellerimi attığım bu projede zengin bir script kütüphanesi inşa ettim.",
      "architecture": "Sistem Transformice Lua API motoru üzerinde olay güdümlü (event-driven) bir mimariyle kodlandı. Oyun içerisindeki oyuncu hareketleri, klavye tuş basımları (eventKeyboard), koordinat çarpışmaları ve sohbet komutları dinlenerek durum makineleri (state machines) üzerinden yönetildi. Mini oyun paketleri (Bootcamp parkurları, kabile yarışları, bomba imha, otomatik puan ve unvan dağıtıcı) birbirinden bağımsız modüller halinde yapılandırıldı. Kodlar hem Windows hem macOS işletim sistemlerinde sorunsuz çalışması için UTF-8 formatında standardize edildi.",
      "keyChallenge": "Oyun sunucusunun Lua motoruna koyduğu katı CPU döngü limiti (Lua script execution timeout) nedeniyle kalabalık odalarda (50+ oyuncu) scriptin çökmesini engellemek için tüm döngüleri ve çarpışma kontrollerini milisaniyelik zamanlayıcılarla hafifleterek optimize ettim.",
      "features": [
        "Minigames: Kabile evi içi rekabetçi mini oyun mekanikleri",
        "NC - Teams & Kadro: Otomatik oyuncu listeleme ve kabile içi rol yönetimi",
        "Night Ball & Spor: Oyun içi fizik ve top kurallı spor simülasyonları",
        "Map Codes & Fun Scripts: Özel harita tetikleyicileri ve interaktif komutlar"
      ],
      "readme": "### NC-Codes (Transformice Lua Scripts)\n\nBu depo, Oğuz Taşdemir (**Devilstrk**) tarafından 2013 yılından bu yana geliştirilen, **Transformice** oyun içi kabile evlerinde çalıştırılabilen eğlence scriptleri, mini oyunlar ve takım kadroları gibi çeşitli Lua kodlarını içerir.\n\n### 🚀 Modüller & İçerik\n- **Basit Kodlar.lua:** Kabile içi temel yönetim ve bildirim komutları.\n- **Minigames:** Özel kabile evi mini oyun senaryoları.\n- **Night Ball:** Fizik ve top tabanlı takım oyunu motoru.\n- **NC - Teams:** Dinamik takım oluşturma ve oyuncu eşleme.\n- **Map Codes & Fun Scripts:** Harita tetikleyicileri ve animasyonlu scriptler.\n\n### 🛠️ Nasıl Kullanılır?\n1. Kabile evine giderek sohbet satırına `/lua` yazın.\n2. Depodaki ilgili `.lua` dosyasının içeriğini kopyalayıp açılan kod alanına yapıştırın ve çalıştırın.\n\n*Not: Tüm scriptler UTF-8 karakter kodlamasıyla hazırlanmıştır.*"
    },
    "visibility": "public"
  }
];
