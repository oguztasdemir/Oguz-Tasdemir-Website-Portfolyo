# 📂 Proje Dosya Envanteri ve Sözlüğü (`docs/klasor.md`)

Bu doküman, projede yer alan tüm dizin ve dosyaların katmanını ve işlevini açıklar. Taslak mimari standartlarına tam uyumludur. Hiçbir dosya 1000 satırı aşmaz, tüm sorumluluklar modüler katmanlara ayrılmıştır.

---

## 🗂️ Dosya Envanter Tablosu

| Dosya Yolu | Katman | Satır Sayısı | İşlevi ve Açıklaması |
| :--- | :--- | :--- | :--- |
| `main.py` | Başlatıcı | ~50 satır | Port yönetimini yapar (8000->8001), UTF-8 zırhını açar, backend sunucusunu sessiz modda (`access_log=False`) ve varsayılan tarayıcıyı tek tıkla başlatır. |
| `requirements.txt` | Bağımlılık | ~5 satır | FastAPI, Uvicorn ve Pydantic Python kütüphane bağımlılıkları. |
| `backend/app.py` | Sunucu | ~45 satır | FastAPI uygulamasını kurar, CORS ve F5 Anti-Caching HTTP başlıklarını ekler, API router'ını bağlar ve statik frontend'i sunar. |
| `backend/config.py` | Konfigürasyon | ~16 satır | Dizin yolları (BASE_DIR, FRONTEND_DIR, DATA_DIR), host ve port sabitleri. |
| `backend/models/project.py` | Şemalar | ~25 satır | Proje, Vaka Analizi ve İletişim için Pydantic veri tipleri. |
| `backend/controllers/project_controller.py` | Denetleyici | ~35 satır | `/api/projects`, `/api/projects/{id}` ve `/api/contact` REST uç noktaları. |
| `backend/services/project_service.py` | İş Mantığı | ~40 satır | `data/projects/*.json` modüler dosyalarından dinamik veri çekme, kategori filtreleme ve arama servisi. |
| `frontend/index.html` | Arayüz | ~190 satır | Modern 2-Panel Split View (Sol Menü + Liste + Sağ Yerleşik Vaka Analizi) ana HTML giriş noktası. |
| `frontend/css/style.css` | Tasarım | ~430 satır | Koyu tema (#090b10), Linear/Raycast minimalist estetiği, özel ince kaydırma çubuğu ve split view ızgara stilleri. |
| `frontend/js/api.js` | İstemci API | ~45 satır | Backend REST API uç noktalarıyla asenkron iletişim ve yerel fallback motoru. |
| `frontend/js/ui.js` | İstemci UI | ~130 satır | Proje listesi DOM renderı, yerleşik vaka analizi detayı ve toast bildirim yöneticisi. |
| `frontend/js/app.js` | Uygulama | ~110 satır | Split View koordinasyonu, arama/filtreleme olayları ve sol/sağ panel senkronizasyonu. |
| `data/projects/` | Veri Katmanı | 9 Dosya | Her projenin (`cortex.json`, `oymapos-barkod.json`, vb.) bağımsız, modüler JSON dosyası olarak saklandığı tekil veri kaynağı. |
| `docs/taslak.md` | Dokümantasyon | ~110 satır | Projenin onaylanan mimari taslağı ve Anti-AI standartları. |
| `docs/klasor.md` | Dokümantasyon | ~40 satır | Bu dosya; tüm dosya ve katmanların envanter sözlüğü. |
