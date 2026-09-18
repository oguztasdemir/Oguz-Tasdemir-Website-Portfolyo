# ⚡ Oğuz Taşdemir — Kişisel Portfolyo Web Sitesi

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Python 3.10+](https://img.shields.io/badge/Python-3.10%2B-blue?logo=python)](https://python.org)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI%200.110%2B-teal?logo=fastapi)](https://fastapi.tiangolo.com)
[![Modern CSS](https://img.shields.io/badge/Frontend-Vanilla%20CSS%20Design%20System-orange)](frontend/css/style.css)
[![Bilingual](https://img.shields.io/badge/i18n-TR%20%7C%20EN%20Live-green)](frontend/js/i18n.js)

Bu repo; matematik lisans tezi araştırmalarından perakende kasa sistemlerine, yerel yapay zeka ajanlarından tersine mühendislik ve sistem otomasyonlarına kadar geliştirdiğim **26 özgün mühendislik projesini** interaktif bir çalışma konsolu şeklinde sunan portföy platformunun kaynak kodlarını içerir.

---

## 🌟 Temel Özellikler & Mimari Yaklaşım

- **🎯 26 Özgün Proje & Geliştirici Hikayeleri:** Her proje için yapay dolgu ifadelerden arındırılmış gerçek hayat motivasyonları (`01 - Neden Bu Projeyi Geliştirdim?`).
- **🔀 4 Adımlı Sistem Akış Şeması:** Her sistemin veri hattını, algoritmalarını ve çalışma mantığını teknik terim karmaşasına boğulmadan aktaran interaktif akış diyagramları.
- **🌐 %100 Canlı Çift Dil Desteği (TR / EN):** Sol menüden tek tıkla arayüzü, proje hikayelerini, vaka analizlerini ve mimari blokları Türkçe veya İngilizceye anlık çeviren i18n motoru.
- **📊 5 Temel Mühendislik Alanı:**
  - 🎓 **Akademik & Tez (Mathematical Modeling & Thesis):** BIST kârlılık tahminleri, zaman serileri, enflasyon düzeltmeli finansal modeller.
  - 🤖 **Yapay Zeka & RAG (AI, NLP & Agent Workflows):** Yerel LLM asistanları, AST analizli kod ajanları, YouTube transkript sentezi.
  - 💳 **FinTech & SaaS (Enterprise POS & Retail Automation):** SQLite WAL destekli perakende kasa yazılımları, otonom e-fatura botları.
  - 🖥️ **Masaüstü & Sistem (Low-Level Win32 & File I/O):** Ham sektör disk tarayıcıları, P2P yerel ağ aktarımları, çoklu thread önbellek temizleyiciler.
  - 🌐 **Web & Otomasyon (Fullstack & Headless Automation):** Test suitleri, klan script motorları, HuggingFace model indiriciler.
- **⚡ Sıfır Bağımlılık & Yüksek Performanslı Frontend:** Tailwind veya ağır framework'ler yerine doğrudan optimize edilmiş Vanilla CSS Design System ve modüler JavaScript yapısı.
- **🔌 FastAPI Backend & Statik JSON Veri Modeli:** `data/projects/*.json` üzerinden bağımsız proje kayıtları ve yerel API entegrasyonu.

---

## 📂 Proje Dizin Yapısı

```
Oğuz Taşdemir Website Portfolyo/
├── backend/
│   └── app.py                      # FastAPI API sunucusu ve statik dosya sağlayıcı
├── data/
│   └── projects/                   # 26 projenin detaylı JSON veri kaynakları
│       ├── bist-bilanco-karlilik.json
│       ├── oymapos.json
│       ├── cortex.json
│       ├── portfolio-console.json
│       ├── Airdrop-Local.json
│       └── ...
├── frontend/
│   ├── css/
│   │   └── style.css               # Modern koyu/açık tema Vanilla CSS tasarım sistemi
│   ├── js/
│   │   ├── app.js                  # Ana uygulama yöneticisi, filtreleme ve olay dinleyiciler
│   │   ├── ui.js                   # Dinamik bileşen oluşturucu (5 sekme, akış şeması, modallar)
│   │   ├── zip-builder.js          # İstemci tarafı PKZip arşivleme ve dışa aktarım motoru
│   │   ├── api.js                  # REST API ve yerel veri iletişim katmanı
│   │   ├── i18n.js                 # Çift dilli (TR / EN) sözlük ve dil anahtarlama
│   │   ├── projects-data.js        # Türkçe proje veri seti
│   │   └── projects-en.js          # Tam İngilizce proje veri seti & geliştirici hikayeleri
│   └── index.html                  # Ana interaktif portföy konsolu
├── main.py                         # Yerel geliştirme başlatıcı (otomatik tarayıcı açılışı)
├── requirements.txt                # Python bağımlılıkları
├── .gitignore                      # Git temizlik kuralları
└── LICENSE                         # MIT Lisansı
```

---

## 🚀 Hızlı Başlangıç & Kurulum

Projeyi yerel makinenizde çalıştırmak için Python 3.10+ kurulu olması yeterlidir:

### 1. Depoyu Klonlayın veya İndirin
```bash
git clone https://github.com/oguztasdemir/portfolio.git
cd portfolio
```

### 2. Gerekli Paketleri Yükleyin
```bash
pip install -r requirements.txt
```

### 3. Uygulamayı Başlatın
```bash
python main.py
```

Uygulama başladığında tarayıcınızda otomatik olarak **`http://127.0.0.1:8000`** adresi açılacaktır.

---

## 🛠️ Teknoloji Yığını

| Katman | Teknolojiler |
| :--- | :--- |
| **Backend** | Python 3.10+, FastAPI, Uvicorn, Pydantic |
| **Frontend** | HTML5, Modern Vanilla CSS3 (Custom Properties, Grid & Flexbox), Vanilla JavaScript (ES6+) |
| **Veri Katmanı** | Modüler JSON Proje Kayıtları (`data/projects/*.json`) |
| **Çoklu Dil (i18n)** | Canlı DOM Etiketleme & Olay Güdümlü Çeviri Motoru (`TR` / `EN`) |
| **Tasarım & UI** | Dark / Light Temalar, Glassmorphism, Responsive Split View, Mikro Etkileşimler |

---

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında açık kaynak olarak lisanslanmıştır.
