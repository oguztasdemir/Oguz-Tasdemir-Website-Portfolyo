/**
 * Statik / Çevrimdışı Proje Veri Havuzu (frontend/js/projects-data.js)
 * data/projects/*.json klasöründeki 25 özgün projenin senkronize listesidir.
 */
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
    "githubUrl": "https://github.com/oguztasdemir/Borsa-Istanbul-Bilanco-Karlilik-Tahmini-Bitirme-Tezi",
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
    "githubUrl": "https://github.com/oguztasdemir/OYMAPOS-Barkod-Sistemi",
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
    "githubUrl": "https://github.com/oguztasdemir/Cortex-LLM-IDE-RAG",
    "visibility": "private"
  },
  {
    "id": "portfolio-console",
    "title": "Kişisel Portfolyo Web Sitesi",
    "category": "fullstack",
    "categoryLabel": "Fullstack & Sistem Mimarisi",
    "badge": "Canlı Yayında / Portfolyo Çekirdeği",
    "summary": "25+ mühendislik projesini, matematik tezini ve düşük seviyeli sistem çözümlerini harici UI kütüphanesi kullanmadan %100 Vanilla CSS ve canlı çift dil motoruyla sunan interaktif çalışma konsolu.",
    "highlightMetric": "⚡ %100 Vanilla CSS & Canlı Çift Dilli i18n Motoru",
    "techStack": [
      "Python",
      "FastAPI",
      "Vanilla JS (ES6+)",
      "Vanilla CSS3",
      "i18n Engine",
      "Uvicorn",
      "Modüler JSON Şeması"
    ],
    "githubUrl": "https://github.com/oguztasdemir/Oguz-Tasdemir-Website-Portfolyo",
    "demoUrl": "https://oguztasdemir.github.io/Oguz-Tasdemir-Website-Portfolyo/",
    "caseStudy": {
      "problem": "Geleneksel portfolyo siteleri çoğunlukla yüzeysel ekran görüntüleri ve statik metinlerden ibarettir. Ağır JavaScript framework'leri (React, Next.js vb.) ve büyük CSS paketleri (Tailwind, Bootstrap) sayfa yüklenme süresini artırır ve arka plandaki mühendislik mantığını şeffaf bir şekilde sergilemekte yetersiz kalır.",
      "architecture": "Uygulama, hafif ve asenkron bir Python FastAPI arka ucu ile sıfır bağımlılıklı saf Vanilla HTML5/CSS3/JavaScript ön ucundan oluşur. Veri katmanında her proje bağımsız bir JSON şeması olarak saklanır. Arayüzde özel CSS değişkenleri (Design Tokens), modüler olay güdümlü (event-driven) i18n çeviri motoru ve 4 adımlı dinamik SVG/DOM akış şeması derleyicisi bulunur.",
      "keyChallenge": "Sayfa yenilemeye ihtiyaç duymadan tüm projenin açık modallarını, filtreleme çiplerini ve arama sonuçlarını canlı olarak Türkçe/İngilizce arasında senkronize tutmak ve hiçbir harici CSS kütüphanesi olmadan modern, mikro etkileşimli bir IDE hissi sunmak.",
      "features": [
        "Sıfır UI bağımlılığı ile modern koyu/açık tema Vanilla CSS tasarım sistemi",
        "Olay güdümlü (Event-Driven) canlı çift dil (TR / EN) çeviri motoru",
        "25+ proje için interaktif 4 adımlı sistem akış şeması derleyicisi",
        "Proje detaylarını kod ağaçları ve test komutlarıyla gösteren 5 sekmeli inceleme paneli",
        "Modüler JSON şema mimarisi ve FastAPI REST API veri servisleri"
      ]
    },
    "visibility": "public"
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
    "githubUrl": "https://github.com/oguztasdemir/Kredi-Notu-Siniflandirmasi-Tahmin-Modeli",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Bankacılık ve finans kuruluşlarında bireysel kredi ve kredi kartı başvurularının değerlendirilmesi geleneksel yöntemlerle günlerce sürebilmekte veya manuel değerlendirme yapan personelin öznel kararlarına maruz kalabilmektedir. Üstelik finansal veri setlerinde gelir dağılımları, gecikmiş ödeme gün sayıları ve kredi geçmişi yoğun gürültü ve eksik veriler içerir. Bankanın kredi riskini en aza indiren, müşterinin borcunu ödeyip ödeyemeyeceğini başvuru anında saniyeler içinde nesnel kriterlerle sınıflandıran bir makine öğrenmesi modeli geliştirdim.",
      "architecture": "Model geliştirme sürecinde 100.000+ satırlık gerçek finansal kayıt içeren veri seti kullanıldı. İlk aşamada veri bilimi hattı (Pandas, Seaborn) ile öznitelik dağılımları incelendi; gelir ve kredi limiti gibi çarpık (skewed) değişkenlere Log Dönüşümü uygulandı. Eksik değerler Medyan ve İteratif Doldurucu (IterativeImputer) ile tamamlandı. Sınıflandırma motorunda Lojistik Regresyon, Random Forest, LightGBM ve CatBoost algoritmaları çapraz doğrulama (Stratified 5-Fold Cross-Validation) ile test edildi. En yüksek genelleme başarısını gösteren LightGBM modeli seçilerek hiperparametreleri GridSearch ile optimize edildi.",
      "keyChallenge": "Finansal veri setlerindeki en kritik engel olan Temerrüt (ödenmeyen kredi) sınıfının azınlıkta olması (%5-10) durumunu çözmek için SMOTE ve Class Weight dengelemesi uyguladım. Modelin Yanlış Negatif maliyetini minimize edecek şekilde karar eşiği (decision threshold) ayarlandı.",
      "features": [
        "Uçtan uca veri temizleme ve öznitelik mühendisliği boru hattı",
        "Dengesiz veri setlerine özel SMOTE optimizasyonu",
        "Detaylı karmaşıklık matrisi ve ROC-AUC analizi",
        "Yeni müşteri verisi için tek satırda tahmin üretme"
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
    "githubUrl": "https://github.com/oguztasdemir/webtoon-lora-suite",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Webtoon ve dijital çizgi roman yaratıcıları, dikey kaydırmalı devasa bölümlerin hikaye ritmini, sahne geçişlerini ve karakter devamlılığını analiz ederken büyük zorluk yaşar. Ayrıca mevcut çizim tarzını veya karakteri yapay zeka (LoRA / Diffusion) ile yeniden üretmek istediklerinde; binlerce piksellik dikey şeritlerden konuşma balonlarını temizlemek, sahneleri hikaye sırasına göre ayrıştırmak ve eğitim verisi hazırlamak haftalarca manuel Photoshop emeği gerektirir. Bu süreci hikaye analizi ve üretken yapay zeka aşamalarıyla otomatize eden bir sistem geliştirdim.",
      "architecture": "Sistem iki ana eksende çalışır: 1) Hikaye & Panel Segmentasyonu: Dikey webtoon şeritlerindeki sahne geçişlerini, renk paleti değişimlerini ve anlatı yoğunluğunu kontur/histogram analiziyle tespit ederek hikaye akış sırasına göre panelleri dilimler. 2) Balon Tespiti & AI Inpainting: Konuşma balonları morfolojik filtrelerle tespit edilip maskelenir; ardından LaMa (Large Mask Inpainting) derin öğrenme modeliyle metnin altındaki orijinal çizim ve arka plan pürüzsüzce yeniden çizilir. 3) Üretken Model Eğitimi (LoRA): Elde edilen temiz sahneler otomatik olarak etiketlenerek (captioning) karakterin veya sahne tarzının yeni hikaye bölümlerinde üretilebilmesi için LoRA eğitim boru hattına sokulur.",
      "keyChallenge": "Farklı webtoon türlerinde arka planın karmaşık illüstrasyonlar veya degradeli renk geçişleriyle dolu olduğu panellerde sınırların ve konuşma balonlarının çizimle karışmasını önlemek için adaptif eşikleme ve kenar yoğunluğu filtreleri kurguladım.",
      "features": [
        "Dikey webtoon akışını sahne ve hikaye bloklarına ayıran akıllı segmentasyon",
        "Morfolojik konuşma balonu tespiti ve LaMa ile otomatik çizim tamamlama (inpainting)",
        "Karakter ve stil tutarlılığı sağlayan LoRA eğitim veri seti hazırlığı",
        "Görsel hikaye anlatımı ve yeni sahne türetimi için üretken yapay zeka boru hattı"
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
      "problem": "Farklı işletim sistemlerine sahip cihazlar (Android telefon, Windows masaüstü, macOS laptop) arasında gigabaytlarca boyuttaki 4K videoları, veri setlerini veya proje arşivlerini aktarmak büyük bir çiledir. Bluetooth transferi saniyede 1-2 MB ile aşırı yavaş kalırken; Google Drive, WeTransfer veya Telegram gibi bulut çözümleri internet kotasını tüketir, yerel ağda yan yana duran iki cihaz arasındaki veri için dakikalarca buluta yükleme ve buluttan indirme süresi bekletir. Bu sorunu kökten çözmek için, internet bağlantısına hiç ihtiyaç duymadan, yalnızca aynı yerel Wi-Fi/Ethernet ağı üzerinden cihazların birbirini anında bulduğu ve LAN bant genişliğinin son sınırına kadar (100-300 Mbps) P2P dosya akıttığı bu aracı geliştirdim.",
      "architecture": "Uygulama Python asyncio ve Zero-Configuration Networking (mDNS / Zeroconf) protokolleri üzerine kurulmuştur. Ağdaki cihazlar açıldığı anda UDP çok noktaya yayın (multicast) sinyali göndererek birbirlerinin IP adreslerini ve portlarını el sıkışarak doğrular. Dosya transferi başlatıldığında, RAM bellek şişmesini engellemek için dosyalar 4 MB boyutunda ikili parçalara (binary chunk stream) bölünür ve asenkron TCP soketi üzerinden hedefe pompalanır. Alıcı tarafta SHA-256 hash doğrulaması yapılarak dosyanın eksiksiz ve bozulmadan indiği matematiksel olarak teyit edilir.",
      "keyChallenge": "Büyük 20 GB+ dosyalar aktarılırken Wi-Fi sinyalindeki anlık dalgalanmalarda bağlantının kopması tüm aktarımın boşa gitmesine sebep oluyordu. Bu sorunu aşmak için soket seviyesinde parça onaylı (chunk ACK) ve otomatik yeniden bağlanabilir (resumable stream) bir ara katman protokolü geliştirdim.",
      "features": [
        "Ağdaki cihazları otomatik keşfetme (Sıfır IP yapılandırması)",
        "Tarayıcıdan sürükle-bırak dosya paylaşımı",
        "Donanım hızlandırmalı yerel aktarım",
        "Hiçbir verinin internete çıkmadığı %100 yerel güvenlik"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/Airdrop-Local",
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
      "problem": "Aklıma gelen yeni bir yazılım fikrini kodlamaya başlamadan önce hangi parçalardan başlayacağımı planlamak, görevleri küçük adımlara bölmek ve GitHub issue/proje tahtasına aktarmak çok vakit alıyordu. Çoğu zaman planlama yapılmadığında geliştirme sürecinde kayboluyor veya mimari adımları atlıyordum. Yazmak istediğim sistemin amacını serbestçe anlattığımda bunu doğrudan uygulanabilir adımlara ve GitHub görevlerine dönüştüren bir planlama motoru kurdum.",
      "architecture": "Platform, geliştiricinin serbestçe yazdığı proje tanımını ve gereksinimlerini yerel dil modeliyle analiz eder. Sistemin çalışması için gereken temel modülleri, veritabanı şemasını ve arayüz gereksinimlerini adım adım görev listelerine ve öncelik sıralarına ayırır. SQLite WAL veritabanında saklanan bu plan, geliştirici onay verdiğinde tek tıkla GitHub Projects panosuna issue olarak otomatik açılır.",
      "keyChallenge": "Görevlerin mantıksal sırasını (önce veritabanı kurulmalı, sonra API yazılmalı) bozmadan doğru bağımlılık zincirini (DAG) otomatik kurmak için şema doğrulama kuralları geliştirdim.",
      "features": [
        "Serbest dille yazılan proje fikirlerini alt görevlere ve önceliklere ayırma",
        "Geliştirme adımlarının mantıksal sıralamasını ve bağımlılıklarını belirleme",
        "Oluşturulan görevleri tek tıkla GitHub Projects tahtasına eşzamanlama",
        "Tamamen yerelde çalışan hafif ve pratik planlama paneli"
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
      "problem": "Yanlışlıkla biçimlendirilen (quick format), dosya sistemi tablosu (FAT32/NTFS MFT) çöken veya elektrik kesintisi yüzünden RAW formata dönüşüp Windows Explorer tarafından 'Diski biçimlendirmeniz gerekiyor' uyarısı veren depolama aygıtlarındaki kritik verilere standart yöntemlerle ulaşılamaz. Piyasada satılan ticari adli bilişim yazılımları ise binlerce dolarlık lisanslar talep eder veya demo sürümlerinde dosyaları kurtarmayı kısıtlar. Dosya sistemi hiyerarşisi tamamen silinmiş olsa dahi doğrudan manyetik/flaş sektörleri bayt bayt tarayarak dosyaları yeniden inşa eden yerel bir kurtarma yazılımı geliştirdim.",
      "architecture": "Yazılım, düşük seviyeli Windows API çağrıları (CreateFileW ile PhysicalDrive erişimi) üzerinden doğrudan ham disk sektörlerine salt-okunur (read-only) güvenlik modunda bağlanır. Dosya sistemi çökmüş olduğu için File Carving (dosya oyma) tekniğini kullanır: Sektörler blok blok okunurken JPEG, PNG, PDF, ZIP, MP4 gibi dosya türlerinin sihirli baytları (Magic Bytes / File Signatures - örn. JPEG için 0xFFD8FFE0) aranır. Başlangıç imzası yakalandığında dosya yapısı ayrıştırılır, bitiş baytına (EOF) kadar olan sektörler hafızada birleştirilir ve veri bozulmadan yeni bir diske yazılır.",
      "keyChallenge": "Parçalanmış (fragmented) sektörlerde dosyaların sıralı dizilmemesi kurtarılan resim veya belgelerin yarım çıkmasına neden olabiliyordu. Dosya iç başlıklarındaki boyut meta-verilerini (Exif, PDF xref tablosu) dinamik okuyan doğrulama algoritmaları entegre ederek bozuk dosya oranını %85 azalttım.",
      "features": [
        "Doğrudan ham sektör seviyesinde derinlemesine tarama",
        "İmza tabanlı dosya kurtarma (Görsel, Belge, Video ve Arşivler)",
        "Diski 100 bloğa bölerek seçmeli sektör taraması",
        "Kurtarılan dosyaların bütünlük testi"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/Disk-Kurtarma-Araci",
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
      "problem": "Kripto para piyasalarında RSI veya MACD gibi salt matematiksel göstergeler tek başına yetersiz kalır; çünkü ani düşüşlerde veya yükselişlerde piyasa yönünü yatırımcıların psikolojik refleksleri (panik satışları, FOMO, açgözlülük) belirler. Geleneksel analiz araçları ise piyasadaki bu davranışsal kırılmaları hesaba katmaz. Kendi yatırımlarımda ve piyasa takiplerimde hem teknik emir defteri verilerini hem de farklı yatırımcı psikolojilerinin olası senaryo tepkilerini tek bir ekranda test etmek için bu motoru geliştirdim.",
      "architecture": "Sistem CCXT kütüphanesi üzerinden canlı borsa emir defterlerini (Order Book) ve hacim ağırlıklı ortalama fiyatları (VWAP) asenkron olarak çeker. Arka planda farklı yatırımcı profillerine göre (kısa vadeli scalper, uzun vadeli biriktirici, panik yapan acemi yatırımcı) tanımlanmış karar modelleri çalışır. Bu modeller anlık piyasa şoklarına karşı olası senaryoları analiz eder ve portföyün maksimum kayıp (Drawdown) riskini hesaplar.",
      "keyChallenge": "Canlı borsa veri akışı sırasında birden fazla analiz modelinin eşzamanlı çalışırken gecikme üretmesini engellemek için olay güdümlü (event-driven) kuyruk mimarisi ve yerel bellek önbelleği kurdum.",
      "features": [
        "Farklı risk iştahına sahip yatırımcı davranışlarının analizi ve stres testi",
        "Canlı emir defteri (Order Book) derinliği ve hacim profili takibi",
        "Geriye dönük strateji doğrulama (Backtesting) ve risk modelleme motoru",
        "WebSocket ile anlık veri beslemeli sade kontrol paneli"
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
      "problem": "Farklı şehirlerdeki arkadaşlarla birlikte aynı web sitesini incelemek, ortak bir videoyu sıfır senkron kaymasıyla izlemek veya bir web araştırmasını tek bir tarayıcı penceresi üzerinden birlikte yönetmek istiyorduk. Klasik ekran paylaşım araçları (Discord, Zoom) fare ve klavye kontrolünü gecikmesiz paylaşmaya izin vermiyor ve yüksek internet bant genişliği harcıyordu. Sunucuda tek bir tarayıcı çalıştırıp herkesin aynı anda tıklayıp yazabileceği hafif bir sanal oda kurdum.",
      "architecture": "Sunucu tarafında headless/headed Chromium ve Puppeteer çalışır. Tarayıcının ekran çıktısı optimize edilmiş kareler halinde WebSocket üzerinden istemcilere aktarılır. Odadaki herhangi bir kullanıcının fare tıklaması veya klavye tuş basımı sunucuya anında iletilerek tarayıcı üzerinde işletilir. Böylece herkes ayrı bir tarayıcı açmadan aynı sekmeyi gerçek zamanlı olarak ortaklaşa yönetir.",
      "keyChallenge": "Birden fazla kullanıcının aynı anda fareyi hareket ettirmesi veya yazı yazması durumunda oluşan girdi çakışmalarını çözmek ve video oynatırken gecikmeyi 100ms altına çekmek için ikili (binary) kare sıkıştırması uyguladım.",
      "features": [
        "Tek bir tarayıcı oturumunu birden fazla kişiyle canlı paylaşma ve ortak kontrol",
        "Kullanıcı tarafında tarayıcı kurmaya gerek kalmadan sadece web üzerinden bağlanma",
        "Video ve ses senkronizasyonunu tek merkezden yönetme",
        "Düşük gecikmeli WebSocket olay ve ekran senkronizasyonu"
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
      "problem": "Market operasyonlarında tedarikçilerden yeni ürünler geldikçe veya enflasyonist dönemlerde fiyatlar değiştikçe reyonlardaki yüzlerce ürünün raf etiketlerinin acilen yenilenmesi gerekir. Piyasadaki hazır etiket yazdırma programları ise karmaşık sürücüler gerektiriyor, şablon ayarlamak saatler alıyor ve Excel/CSV listesinden toplu etiket basarken barkod çizgilerini bulanık çıkartarak el terminallerinin okuyamamasına yol açıyordu. Reyon görevlilerinin Excel listesini yükleyip tek tuşla 500 etiketi net ve standart boyutta basabileceği bir araç ihtiyacını çözdüm.",
      "architecture": "Uygulama doğrudan termal etiket yazıcıların diline (TSPL ve ESC/POS) uygun vektörel rasterlaştırma motoru üzerine kuruldu. Kullanıcı arayüzünde dinamik şablon düzenleyici yer alır (ürün adı, birim fiyatı, indirimli fiyat, menşei ve EAN-13 barkod görseli). Barkod üretimi python-barcode kütüphanesiyle pikseller arası bozulma olmadan net çözünürlükte oluşturulur. Toplu baskı modülü, binlerce satırlık Excel veya CSV dosyasını okuyarak yazıcının tampon belleğini şişirmeden kuyruk yönetimiyle etiketleri kağıt israfı yapmadan ardı ardına basar.",
      "keyChallenge": "Farklı marka termal yazıcıların (Argox, Xprinter, Zebra) baskı kafası DPI çözünürlük farklarından kaynaklanan kayma ve taşma problemlerini aşmak için dinamik DPI kalibrasyon matrisi geliştirdim.",
      "features": [
        "Görsel etiket tasarım alanı (Logo, Fiyat, Barkod)",
        "Excel/CSV veya Barkod POS veritabanından toplu etiket basımı",
        "EAN-13, Code-128 ve QR Kod standartları için dahili doğrulayıcı",
        "Bağımsız tek parça taşınabilir .exe yapısı"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/Oymapos-Etiket-Yazdirici",
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
    "githubUrl": "https://github.com/oguztasdemir/Odeal-Fatura-Kesme-Otomasyonu",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Perakende operasyonlarında ve çok şubeli işletmelerde Ödeal yazar kasa/pos portalına her gün yüzlerce e-fatura ve e-arşiv belgesi düşmektedir. Muhasebe personelinin bu portala her gün elle giriş yapması, yüzlerce faturayı tek tek tıklayıp PDF ve XML olarak indirmesi, şubelere göre isimlendirip klasörlemesi saatler süren ve insan hatasına son derece açık bir iş yüküydü. Ayrıca portalın 5 dakikada bir oturumu sonlandırması indirme işlemlerinin yarıda kalmasına sebep oluyordu. Bu süreci tamamen insansızlaştırmak ve tek tıkla yüzlerce faturayı hatasız arşivlemek için bu otonom botu yazdım.",
      "architecture": "Sistemi Playwright ve Python arka plan servis mimarisi üzerine kurdum. Bot, şifreli kimlik bilgileriyle Ödeal kurumsal portalına headless olarak bağlanır, dinamik oturum tokenlarını (JWT/Session Cookie) yakalar ve portaldaki e-fatura/e-arşiv tablolarını DOM üzerinden ayrıştırır. İndirme aşamasında portalın indirme kısıtlarına takılmamak için paralel indirme havuzu (asyncio worker pool) devreye girer. İndirilen her fatura, üzerindeki VKN, Müşteri Ünvanı, Tarih ve Fatura Numarasına göre otomatik ayrıştırılarak Yıl/Ay/Şube formatındaki yerel klasör hiyerarşisine arşivlenir.",
      "keyChallenge": "Portalın rastgele aralıklarla fırlattığı oturum düşmelerini ve reCAPTCHA/güvenlik kontrollerini aşmak için akıllı oturum yenileyici (session-keeper) ve indirme kaldığı yerden devam ettirme (resumable queue) mekanizması geliştirdim. Ağ kopsa dahi faturalar eksiksiz indirildi.",
      "features": [
        "Tarih aralığına göre toplu e-fatura sorgulama ve tek tıkla indirme",
        "Kesintiye uğrayan indirmeleri kaldığı yerden devam ettirme",
        "İndirilen faturaları müşteri unvanı bazında otomatik klasörleme",
        "Excel ve muhasebe uyumlu CSV dökümü üretme"
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
    }
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
      "problem": "Geliştirdiğim web ve masaüstü projelerinde yeni bir özellik eklediğimde veya CSS/DOM yapısını güncellediğimde, farkında olmadan eski formların, buton tıklamalarının veya sayfa yönlendirmelerinin bozulup bozulmadığını elle tek tek kontrol etmek çok zaman alıyordu. Geleneksel test araçları ise arayüzdeki en ufak bir class veya ID değişiminde hemen hata verip testi yarıda kesiyordu. Bu süreci dayanıklı ve kendi kendine çalışan bir regresyon test döngüsüne bağlamak için bu aracı geliştirdim.",
      "architecture": "Araç, Python Playwright ve masaüstü otomasyon kütüphanelerini birleştirir. Tanımlanan test adımları (giriş yap, butona tıkla, formu doldur, veriyi doğrula) sırayla yürütülür. Sayfada beklenmeyen bir hata, eksik görsel veya çökme yaşanırsa OpenCV ile ekran görüntüsü alınır, hatanın meydana geldiği koordinat işaretlenir ve geliştiricinin anında inceleyebileceği detaylı bir PDF test raporu oluşturulur.",
      "keyChallenge": "Yavaş yüklenen sayfalarda veya animasyonlu butonlarda zaman aşımı (timeout) kaynaklı sahte hata almamak için akıllı bekleme ve DOM durum kontrol mekanizmaları geliştirdim.",
      "features": [
        "Web (Playwright) ve masaüstü formlarını adım adım otomatik test etme",
        "Hata anında otomatik ekran görüntüsü yakalama ve hata kutucuğu çizme",
        "Yazılım sürümleri arasında görsel bozulmaları tespit eden regresyon kontrolü",
        "Test sonuçlarını özetleyen, paylaşılabilir PDF doğrulama raporu"
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
    "githubUrl": "https://github.com/oguztasdemir/youtube-ai-assistant",
    "demoUrl": null,
    "caseStudy": {
      "problem": "2-3 saatlik yazılım eğitimleri, konferanslar veya akademik seminer videolarında belirli bir konunun tam olarak nerede anlatıldığını bulmak için videoyu baştan sona izlemek veya rastgele ileri geri sarmak büyük bir zaman israfıdır. Klasik video özetleme araçları ise sadece yüzeysel genel özetler sunar; kullanıcının sorduğu spesifik bir soruya yanıt verirken videonun tam hangi saniyesinde bu konunun geçtiğini kanıtıyla gösteremez. Bu sorunu çözmek için videonun tüm içeriğini anlamsal olarak tarayıp saniye damgalı yanıt üreten interaktif bir arama motoru geliştirdim.",
      "architecture": "Mimari asenkron bir Python ve NLP boru hattından oluşur. Kullanıcı bir YouTube bağlantısı girdiğinde sistem önce YouTube Transcript API ve gerektiğinde yerel Faster-Whisper konuşma tanıma motorunu devreye sokarak konuşmaları zaman damgalı metin bloklarına döker. Metinler 60 saniyelik örtüşen (sliding window) pencerelere ayrılır ve FAISS / ChromaDB vektör motorunda semantik olarak indekslenir. Kullanıcı bir soru sorduğunda vektör benzerlik araması en alakalı konuşma anlarını bulur, LLM yanıtı oluşturur ve istemciye doğrudan YouTube Player API ile tıklanabilir zaman damgaları (örneğin [14:28 - Algoritma Karmaşıklığı Analizi]) döner.",
      "keyChallenge": "YouTube otomatik altyazılarında noktalama işaretlerinin bulunmaması cümle sınırlarının kaymasına ve vektör aramasının alakasız sonuçlar üretmesine yol açıyordu. Deepmultilingualpunctuation derin öğrenme modelini araya koyarak transkripti önce dilbilgisi kurallarına göre noktalayıp ardından anlamsal parçalara böldüm.",
      "features": [
        "Geliştirme sürecinde olan akıllı video asistanı",
        "Yerel Ollama modelleriyle gizlilik odaklı doğal dil anlama",
        "Sağ panelde bölünmüş ekran (Split-View) canlı video önizlemesi",
        "Oynatma listesi ve video transkript analiz yeteneği"
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
    "githubUrl": "https://github.com/oguztasdemir/Hugging-face-Downloader",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Modern açık kaynak büyük dil modelleri (Llama, Mistral, DeepSeek) ve görsel üretim modelleri (Stable Diffusion checkpoints) 10 GB ile 60 GB arasında devasa dosya boyutlarına sahiptir. Bu modelleri HuggingFace web arayüzünden tarayıcı üzerinden indirmeye çalışırken internet bağlantısındaki anlık bir kopmada dosya bozulmakta ve tarayıcı indirmeyi en baştan başlatmaktadır. Resmi Git LFS yöntemleri ise Windows makinelerde bellek sızıntısına ve tıkanmalara sebep olmaktadır. Geliştiricilerin model indirme süreçlerini kesintisiz, hızlı ve güvenli kılan terminal tabanlı bir indirme yöneticisi kodladım.",
      "architecture": "Araç, HuggingFace Hub REST API ile doğrudan haberleşir. Kullanıcı model adını girdiğinde model deposunun tüm dosya ağacı ve dosya hashleri anında çekilir. İndirme motoru, HTTP Range isteklerini kullanarak dosyayı paralel iş parçacıklarına böler ve çok kanallı (multi-threaded chunk streaming) indirme yapar. Her bir parça diske yazılırken anlık hız, kalan süre ve transfer edilen bayt miktarı zengin bir CLI progress-bar arayüzüyle terminale yansıtılır. Bağlantı kesilse bile indirilen baytlar korunur ve bağlantı geldiğinde 1 bayt bile kaybetmeden kaldığı yerden devam eder.",
      "keyChallenge": "Devasa 50 GB safetensors dosyalarının indirilmesi tamamlandığında, indirilen dosyanın bozuk olup olmadığını anlamak için HuggingFace SHA-256 sağlama toplamı doğrulaması yapıldı; böylece bozuk ağırlıklarla model başlatıp hata alma riski tamamen ortadan kaldırıldı.",
      "features": [
        "Kesintiye uğrayan indirmeleri sıfırdan başlamadan devam ettirme",
        "Doğrudan repo adı girerek tüm ağırlıkları tek komutla çekme",
        "Canlı hız, kalan süre ve transfer ilerleme çubuğu",
        "Düşük bellek (RAM) tüketimi"
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
      "problem": "YÖKDİL, YDS ve TOEFL gibi ileri düzey akademik yabancı dil sınavlarına hazırlanan adaylar, binlerce kelime içeren standart sözlükleri alfabetik sırayla ezberlemeye çalışarak aylarını heba ederler. Oysa akademik sınavlarda kelimeler izole halde değil, bağlam içinde, akademik edat öbekleriyle (collocations) ve belirli soru şablonları içinde sorulur. Klasik flashcard uygulamaları ise sınavın gerçek soru metinlerinden beslenmez ve adayın zayıf olduğu kök kelimeleri tespit edemez. Bu ihtiyaca binaen, gerçek sınav corpus verisini analiz eden ve kişiye özel adaptif kelime çalışma programı çıkaran bu platformu geliştirdim.",
      "architecture": "Sistemin çekirdeğinde Python ve NLTK/spaCy tabanlı bir NLP metin madenciliği motoru yer alır. Geçmiş akademik sınav metinleri ve bilimsel makaleler taranarak morfolojik kök ayrıştırma (lemmatization) ve TF-IDF (Terim Frekansı - Ters Belge Frekansı) analizi yapılır; böylece sınavlarda en yüksek ayırt ediciliğe sahip kelimeler puanlanır. Kullanıcı arayüzünde ise Leitner 5 kutulu aralıklı tekrar algoritması (Spaced Repetition System - SRS) çalışır. Sistem adayın yanlış yaptığı kelimeleri daha sık periyotlarla önüne getirirken, kalıcı hafızaya aktarılanları daha uzun aralıklarla test eder.",
      "keyChallenge": "İngilizce düzensiz fiillerin ve türemiş köklerin öğrenciye parçalanmadan bir bütün kelime ailesi olarak sunulması gerekiyordu. WordNet ontolojisini bağlayarak ilişkili kelime ağaçlarını otomatik türeten bir semantik haritalama algoritması kurguladım.",
      "features": [
        "Fen, Sağlık ve Sosyal alanlarına özel kelime kampları",
        "PDF sınavlarından otonom soru ve cevap anahtarı ayrıştırma",
        "Kişiselleştirilmiş eksik analizi raporu",
        "PDF karne çıktısı ve zamana karşı sınav simülasyonu"
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
    "demoUrl": null
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
      "problem": "Kamu Personel Seçme Sınavı'na (KPSS) hazırlanan binlerce aday, kalın soru bankaları arasında kaybolmakta, hangi derslerde ve hangi konu başlıklarında (Tarih, Coğrafya, Vatandaşlık, Matematik, Türkçe) net kaybettiğini analitik olarak görememektedir. Soru çözüm platformları ise genellikle ağır üyelikler, reklamlar ve yavaş sayfa geçişleriyle adayın odaklanmasını engeller. Bu sorunu çözmek için sıfır gecikmeli, akıllı yanlış havuzu oluşturan ve gerçek sınav süresini simüle eden modern bir web platformu geliştirdim.",
      "architecture": "Platform, Edge Serverless ve CDN mimarisi üzerinde sıfır sunucu maliyetiyle global ağ üzerinden dağıtılmaktadır. Ön yüzde hiçbir ağır framework kullanılmadan saf Vanilla JavaScript ve modern CSS Glassmorphism mimarisi tercih edilmiştir. Kullanıcının çözdüğü her soru yerel LocalStorage üzerinde indekslenir; yanlış yapılan sorular 'Akıllı Hata Havuzu'na aktarılarak adayın sınav öncesi sadece eksiklerine odaklanması sağlanır.",
      "keyChallenge": "Binlerce resimli ve açıklamalı sorunun mobil cihazlarda kotayı tüketmeden, milisaniyeler içinde anında ekrana gelmesi için dinamik JSON chunking ve tarayıcı önbellekleme katmanı geliştirildi.",
      "features": [
        "Canlı web yayını ve hızlı mobil/masaüstü erişim",
        "Geçmiş yılların KPSS GY-GK çıkmış soru havuzu ve detaylı çözümler",
        "Akıllı hata havuzu: Sadece yanlış yapılan soruları tekrar çözebilme",
        "Gerçek sınav süre simülatörü ve anlık net / başarı analitiği",
        "Koyu / Açık tema desteği ve mobil uyumlu responsive arayüz"
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
      "problem": "Üniversite lisans ve yüksek lisans düzeyinde İş Sağlığı ve Güvenliği (İSG), Makine Öğrenmesi (ML), Üretken Yapay Zeka (GAI) ve Dijital Sürdürülebilirlik (DS) gibi geniş teknik kapsama sahip derslerin final sınavlarına hazırlanırken yüzlerce soruyu pratik bir şekilde hem bilgisayardan hem de mobilden çözmek, yanlışları anında görüp pekiştirmek gerekiyordu. Mevcut bulut test siteleri internet gerektiriyordu ve özel soru setlerini özelleştirmeye izin vermiyordu. Bu ihtiyacı çözmek için sıfır bağımlılıkla yerelde çalışan ve PWA ile mobilden tam ekran kullanılabilen bir sınav motoru geliştirdim.",
      "architecture": "Proje hafif ve bağımsız bir mimariye sahiptir: 1) Yerel Sunucu & QR Motoru: Python'ın gömülü HTTP modülü üzerinden yerel IP adresini tespit eder ve terminalde mobil bağlantı için anlık QR kod üretir. 2) PWA & Çevrimdışı Katmanı: Service Worker önbelleklemesiyle internet olmasa bile mobil cihazda uygulama gibi çalışır. 3) Modüler Ders Yapısı: İSG mevzuatı, Makine Öğrenmesi teorik/pratik soruları, Üretken Yapay Zeka ve Dijital Sürdürülebilirlik (yeşil bilişim, sürdürülebilir teknoloji) müfredatı modüler JSON veri tabanında ayrıştırılmıştır.",
      "keyChallenge": "Kullanıcının ekstra bir uygulama indirmesine gerek kalmadan, sadece terminaldeki QR kodu kamerayla okutarak yerel ağ üzerinden responsive ve tam ekran (PWA) çalışan interaktif bir soru çözüm arayüzüne saniyeler içinde bağlanabilmesini sağlamaktı.",
      "features": [
        "İSG, Makine Öğrenmesi, Üretken AI ve Dijital Sürdürülebilirlik çoklu final ders havuzu",
        "Terminal üzerinden otomatik LAN IP tespiti ve dinamik QR kodlu mobil erişim",
        "PWA (Progressive Web App) desteği ile mobil ana ekrana eklenebilme",
        "Service Worker ile %100 çevrimdışı (offline) soru çözebilme",
        "Anlık doğru/yanlış geribildirimi ve konu bazlı test modları"
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
      "problem": "Amatör spor kulüpleri ve futbol akademilerinde onlarca farklı yaş grubundaki yüzlerce oyuncunun fiziksel gelişim metrikleri, antrenman devam durumları, sakatlık rehabilitasyon süreçleri ve maç taktikleri dağınık Excel tablolarında, defterlerde veya WhatsApp gruplarında kayboluyordu. Antrenörlerin bir oyuncunun 6 aylık kondisyon eğrisini görmesi veya velilere somut gelişim raporu sunması imkansızdı. Bu projeyi, kulüplerin hiçbir bulut bağımlılığı olmadan, yerel veri gizliliğiyle tüm altyapı operasyonunu tek ekrandan bilimsel metriklerle yönetebilmesi amacıyla geliştirdim.",
      "architecture": "Mimariyi Python FastAPI arka yüzü, yerel SQLite WAL veritabanı motoru ve modern responsive arayüz katmanı üzerine oturttum. Oyuncuların maç başına koşu mesafeleri, pas başarı yüzdeleri ve kondisyon testleri JSON tabanlı esnek metrik şemasıyla depolanır. Taktik tahtası modülünde antrenörlerin sahaya oyuncu sürükleyip diziliş ve set hücumu kurgulayabilmesi için HTML5 Canvas tabanlı interaktif bir taktik motoru geliştirdim. Raporlama servisi ise periyodik gelişim eğrilerini otomatik hesaplayıp PDF çıktısı üretir.",
      "keyChallenge": "Farklı yaş grupları (U12, U15, U19) için değişkenlik gösteren 50+ farklı performans metriğini ilişkisel tabloları şişirmeden, esnek JSON alanlarıyla indeksleyip anlık sorgularda sıfır gecikmeyle grafiklere dökebilmek için özel sorgu filtreleme mekanizması kurguladım.",
      "features": [
        "İnteraktif taktik tahtası & dinamik pas/koşu yolu simülasyonu",
        "Ayrıntılı oyuncu karnesi ve sakatlık takibi",
        "Kulüp içi doğal dil sorgulama (RAG tabanlı veri asistanı)",
        "Tek tıkla PDF rapor çıktısı alma"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/Altyapi",
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
    "githubUrl": "https://github.com/oguztasdemir/Telegram-Media-Hub",
    "demoUrl": null,
    "caseStudy": {
      "problem": "Telegram üzerindeki büyük akademik arşiv, yazılım ve veri kanallarında yüzlerce gigabayt boyutunda kaynak kitaplar, PDF ders notları, video serileri ve veri setleri paylaşılır. Kullanıcıların bu kanallardaki dosyaları tek tek elle indirmeye çalışması günlerce sürer; ayrıca Telegram masaüstü istemcisi indirilen dosyaları tek bir karmaşık klasöre rastgele fırlatır. Daha da kötüsü Telegram API'sinin katı hız kısıtlamaları (FloodWait Exception) yüzünden indirme işlemleri dakikalarca kilitlenir. Kanallardaki medyaları otonom olarak türüne göre tasnif edip indiren bir medya hub'ı geliştirdim.",
      "architecture": "Sistem Python Telethon ve Pyrogram asenkron kütüphaneleriyle Telegram MTProto protokolü üzerinden doğrudan haberleşir. Kullanıcı hedef kanal veya sohbeti seçtiğinde bot kanal geçmişini geriye doğru asenkron olarak tarar. Medyalar MIME türüne, dosya boyutuna ve isim desenine göre filtreleme kuyruğuna alınır. İndirme motoru, paralel chunk transferi yaparak Telegram'ın tek bağlantı hız limitini aşar. İndirilen dosyalar 'Belgeler/PDF', 'Videolar/1080p', 'Veri-Setleri/ZIP' gibi mantıksal bir klasör hiyerarşisine otomatik taşınır.",
      "keyChallenge": "Telegram'ın aşırı dosya indirme durumunda fırlattığı 300-600 saniyelik FloodWait cezalarını engellemek için akıllı kuyruk hız düzenleyici (token-bucket rate limiting) geliştirdim; ceza yemeden maksimum kararlılıkta indirme sağlandı.",
      "features": [
        "Uzantı, dosya boyutu ve tarih aralığına göre medya filtreleme",
        "Arka planda kesintisiz asenkron kuyruk işleme",
        "Kaldığı mesaj ID'sinden otomatik devam edebilme",
        "Detaylı yerel indirme günlüğü (loglama)"
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
    "githubUrl": "https://github.com/oguztasdemir/cache-cleaner",
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
    "githubUrl": "https://github.com/oguztasdemir/Gardrops-Otomasyon-Botu",
    "demoUrl": null,
    "caseStudy": {
      "problem": "İkinci el e-ticaret ve pazaryeri platformlarında (Gardrops vb.) satıcıların ürünlerini öne çıkarması, mağaza trafiği çekmesi ve düzenli satış yapabilmesi için platformdaki potansiyel alıcı kitleyi aktif olarak takip etmesi ve etkileşim kurması gerekir. Binlerce profili her gün manuel olarak aramak, son aktif kullanıcıları tek tek bulup takip butonuna basmak saatler süren ve insanı tüketen bir operasyondur. Ayrıca aynı kullanıcıları tekrar tekrar takip edip bırakmak veya platformun anti-spam hız kısıtlamalarına takılarak hesap banı yemek büyük bir risktir. Bu süreci tamamen güvenli ve otonom hale getiren bir bot geliştirdim.",
      "architecture": "Sistemi Selenium WebDriver ve Python mimarisi üzerine, tespit edilemez tarayıcı (undetected-chromedriver) teknikleriyle inşa ettim. Bot, hedef kategorilerdeki vitrinleri ve en son satın alma yapan aktif profilleri DOM üzerinden filtreleyerek potansiyel müşteri havuzu oluşturur. Platformun bot koruma algoritmalarını tetiklememek için insan davranış modelleri simüle edilir: rastgele bekleme aralıkları (Gaussian noise timing), fare hareketleri ve pencereler arası yumuşak kaydırma (smooth scroll). Gerçekleştirilen tüm işlemler yerel SQLite veritabanına loglanarak mükerrer takip kesin olarak engellenir.",
      "keyChallenge": "Platformun belirli sayıda ardışık takip işleminden sonra devreye soktuğu gizli hız sınırlarını (rate-limit) aşmak amacıyla dinamik dinlenme döngüleri ve istek frekansını otomatik ayarlayan adaptif geri çekilme (exponential backoff) algoritması entegre ettim.",
      "features": [
        "2022 döneminde geliştirilen arşivlik e-ticaret otomasyonu",
        "Hedef mağaza takipçilerini BS4 ile hafif ve hızlı kazıma",
        "Diferansiyel kontrolle mükerrer takip isteklerini %100 engelleme",
        "Kullanıcı dostu konfigürasyon ve liste dışa aktarım desteği"
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
      "problem": "Arkadaş grupları veya e-spor toplulukları arasında düzenlenen EA FC / FIFA turnuvalarında kağıt kalemle kura çekmek, maç skorlarını girmek, puan tablosunu güncellemek, genel averajın yanı sıra ikili averaj kurallarını hatasız hesaplamak ve eleme turları eşleşmelerini kurgulamak büyük bir organizasyonel karmaşa yaratır. Bir maçın sonucunun yanlış yazılması veya averaj eşitliğinde hatalı takımı üst tura çıkarma tartışmaları turnuva keyfini bozar. Tüm bu süreci profesyonel bir federasyon motoru hassasiyetinde dijitalleştiren otonom bir turnuva yöneticisi inşa ettim.",
      "architecture": "Uygulama modern web arayüzü ve arkasında deterministik fikstür üretim algoritmalarıyla (Berger Tables / Round Robin ve Single Elimination algoritmaları) çalışır. Katılımcı takımlar sisteme girildiğinde kura çekimi matematiksel rastgelelikle (Fisher-Yates Shuffle) yapılır ve ev sahibi / deplasman dengesi gözetilerek maç takvimi oluşturulur. Skorlar girildikçe reaktif state mimarisi sayesinde puan durumu, atılan-yenen gol, galibiyet-beraberlik-mağlubiyet serileri ve ikili averaj önceliği anlık olarak yeniden sıralanır.",
      "keyChallenge": "Üçlü veya dörtlü averaj eşitliği durumlarında (üç takımın da aynı puana sahip olup birbirlerini yendiği senaryolar) sonsuz döngüye girmeden UEFA turnuva kuralları şablonuna göre mini-lig puan tablosu üreten özel bir özyinelemeli (recursive) averaj çözücü geliştirdim.",
      "features": [
        "Otomatik kura çekimi ve görsel turnuva ağacı",
        "Grup aşaması ve tek/çift maçlı eleme turları",
        "Gerçek zamanlı puan durumu ve averaj takibi",
        "Yazdırılabilir fikstür çıktıları"
      ]
    },
    "githubUrl": "https://github.com/oguztasdemir/EA-FIFA-Fikstur",
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
    "githubUrl": "https://github.com/oguztasdemir/NC-Codes",
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
