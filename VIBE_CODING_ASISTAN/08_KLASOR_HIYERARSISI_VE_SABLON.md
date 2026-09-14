# 📁 08 - KLASÖR HİYERARŞİSİ VE KOD LİMİTİ STANDARTLARI

Projeye başlandığı anda dosyaların ana dizine çöp gibi yığılmasını engelleyen, modüler mimariyi ve dosya satır limitlerini belirleyen kesin kurallardır.

---

### 📏 1. KESİN KURAL: MAKSİMUM 1000 SATIR LİMİTİ
- **Hiçbir dosya (Python, JS, HTML, CSS fark etmeksizin) 1000 SATIRI GEÇEMEZ.**
- Bir dosya 500-600 satırı aştığında yapay zeka hemen alarm durumuna geçer ve dosyayı alt modüllere bölmeye başlar:
  - Tek bir devasa `app.py` yerine -> `routers/` (API rotaları) ve `services/` (iş mantığı).
  - Tek bir devasa `app.js` yerine -> `components/`, `api.js`, `utils.js`.
  - Tek bir devasa `style.css` yerine -> CSS değişkenleri (`theme.css`), bileşenler (`components.css`).
- **Sıfır Kod Budama (No Truncation):** Kodlar bölünürken asla `// geri kalanı aynı` veya `# TODO: burayı sen doldur` denmez; her parçalanan modül eksiksiz teslim edilir.

---

### 🗂️ 2. Standart Web / Fullstack Proje Hiyerarşisi
Yeni bir fullstack projede yapay zeka doğrudan şu yapıyı kurmalıdır:

```text
[PROJE_KOKU]/
│
├── main.py                     # Tek giriş noktası (sunucu başlatma, port seçimi, tarayıcı açma)
├── baslat.bat                  # Tek tıkla çalıştırma scripti
├── requirements.txt            # Sadece gerekli Python bağımlılıkları
├── README.md                   # Vitrin kalitesinde proje dokümantasyonu
├── .gitignore                  # API key, venv ve çöp dosya zırhı
│
├── static/                     # Frontend dosyaları (Aynı porttan sunulur)
│   ├── index.html              # Ana sayfa
│   ├── css/
│   │   └── style.css           # Obsidian Slate renkleri, tipografi, toast stilleri
│   └── js/
│       ├── app.js              # Ana frontend mantığı (Auto-save, modal kontrolleri, arama)
│       └── api.js              # Fetch / SSE bağlantı istekleri
│
├── backend/                    # Sunucu ve iş mantığı
│   ├── app.py                  # FastAPI / Flask app tanımlaması ve CORS ayarları
│   ├── routers/                # Modüler API endpointleri (Her biri < 500 satır)
│   │   └── api_routes.py
│   ├── services/               # Veri işleme, scraper, LLM veya hesaplama fonksiyonları
│   └── db.py                   # SQLite WAL bağlantısı ve tablo şemaları
│
├── data/                       # Veritabanı ve yerel JSON depoları
│   └── app.db                  # SQLite veritabanı
│
└── VIBE_CODING_ASISTAN/        # Bu yardımcı kurallar paketi
```

---

### 🤖 3. Standart Otomasyon / Masaüstü / Script Proje Hiyerarşisi
```text
[PROJE_KOKU]/
│
├── main.py                     # Tek çalıştırma noktası
├── baslat.bat
├── requirements.txt
├── README.md
├── .gitignore
│
├── core/                       # Temel işlemler (bot, scraper, analiz, veri çıkarma)
│   ├── engine.py
│   └── helpers.py
│
├── storage/                    # Çıktı dosyaları (CSV, JSON, Excel, İndirilenler)
│
└── VIBE_CODING_ASISTAN/
```

---

### 🛡️ 4. Klasör Disiplini Kuralları
1. **Kök Dizini Temiz Tut:** Kök dizinde yalnızca `main.py`, `baslat.bat`, `README.md`, `requirements.txt` ve `.gitignore` bulunabilir.
2. **Geçici Dosyalar:** Scriptlerin ürettiği çıktılar, resimler ve loglar ana dizine saçılamaz; daima `data/` veya `storage/` içine yazılır.
3. **Alt Modül Bağımsızlığı (Single Responsibility):** `routers/` sadece HTTP isteklerini karşılar, asıl iş mantığı `services/` içine yazılır.
