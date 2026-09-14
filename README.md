# 💻 Oğuz Taşdemir — Kişisel Portfolyo & Mühendislik Stüdyosu

> ⚡ **FastAPI + Vanilla Modern Split-View Mimari**  
> Sistem mimarisi, yapay zeka/RAG projeleri, donanım entegrasyonları ve web otomasyonlarını sergileyen tek portlu interaktif portfolyo web platformu.

---

## 🏗️ Mimari ve Tasarım İlkeleri
- **Tek Port Standardı:** Backend (FastAPI) ve Frontend (Vanilla JS/CSS) tek bir port üzerinden (varsayılan: `8000`) sunulur.
- **2-Panel Split-View Deneyimi:** Linear / Raycast esintili minimalist arayüz; sol tarafta proje listesi, sağ tarafta detaylı teknik vaka analizi (Case Study).
- **Modüler JSON Veri Katmanı:** Tüm 19 proje `data/projects/*.json` altında bağımsız modüller halinde tutulur; dinamik olarak okunur.
- **F5 Anti-Caching Güvencesi:** Tarayıcı önbellek darboğazlarını önleyen özel HTTP başlıkları (`Cache-Control: no-cache`).
- **Vibe Coding Mühendislik Zırhı:** Windows UTF-8 zırhı, SIGINT / Ctrl+C kopyalama koruması, canlı sistem nabzı ve yerel form Auto-Save koruması.

---

## 📁 Dizin Yapısı

```text
Oğuz Taşdemir Website Portfolyo/
├── main.py                     # Tek tıkla port yönetimi, Ctrl+C zırhı, backend ve tarayıcı başlatıcı
├── baslat.bat                  # Tek tıkla masaüstü çalıştırma betiği
├── requirements.txt            # Python bağımlılıkları (fastapi, uvicorn, pydantic)
├── .gitignore                  # Sıfır sızıntı Git koruma kalkanı
├── README.md                   # Vitrin kalitesinde teknik dokümantasyon
│
├── backend/                    # FastAPI sunucu ve servis katmanı
│   ├── app.py                  # API router'ları, CORS ve statik frontend sunumu
│   ├── config.py               # Port, dizin yolları ve sabitler
│   ├── controllers/            # REST API uç noktaları (/api/projects, /api/export, /api/system)
│   ├── services/               # 19 projenin dinamik okunması ve filtreleme mantığı
│   └── models/                 # Pydantic veri modelleri
│
├── frontend/                   # Modern Web UI katmanı
│   ├── index.html              # Canlı arama, sayaç, çift tema ve yerleşik split-view
│   ├── css/style.css           # Koyu/Açık tema, tipografi ve split view ızgara stilleri
│   └── js/                     # Modüler istemci mimarisi (app.js, api.js, ui.js, projects-data.js)
│
├── data/                       # Veri havuzu
│   └── projects/               # 19 bağımsız proje JSON dosyası
│
└── VIBE_CODING_ASISTAN/        # Mimari protokol ve mühendislik zihniyeti standartları
```

---

## 🚀 Kurulum ve Çalıştırma

### 1. Bağımlılıkları Yükleyin:
```bash
pip install -r requirements.txt
```

### 2. Tek Tıkla Başlatın:
Çift tıklayarak [baslat.bat](file:///c:/Users/User/Desktop/O%C4%9Fuz%20Ta%C5%9Fdemir%20Website%20Portfolyo/baslat.bat) dosyasını çalıştırabilir veya terminalden şu komutu verebilirsiniz:
```bash
python main.py
```
*Sistem otomatik olarak boş portu tespit eder (8000 -> 8001), UTF-8 zırhını devreye alır ve varsayılan tarayıcınızda arayüzü açar.*

---

## 👨‍💻 Geliştirici
**Oğuz Taşdemir**  
*Systems Architect & Full-Stack Developer*  
- GitHub: [@oguztasdemir](https://github.com/oguztasdemir)
