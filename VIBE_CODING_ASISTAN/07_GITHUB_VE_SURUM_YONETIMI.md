# 🐙 07 - GITHUB VE SÜRÜM YÖNETİMİ DİSİPLİNİ

Projelerin temiz, güvenli ve GitHub'da vitrin kalitesinde tutulmasını sağlayan sürüm kontrolü kurallarıdır.

---

### 1. `.gitignore` Zırhı (Sıfır Çöp & Sıfır Sızıntı)
Yeni bir repo oluşturulurken ilk saniyede şu dosyaların Git'e girmesi engellenir:
- **Gizli Bilgiler:** `.env`, `api_keys.json`, `credentials.json`, `*.pem`, `*.key`
- **Geçici Veriler:** `__pycache__/`, `*.pyc`, `.pytest_cache/`, `.venv/`, `venv/`, `env/`
- **IDE / Editör Kalıntıları:** `.cursor/`, `.vscode/`, `.idea/`, `.DS_Store`, `Thumbs.db`
- **Ağır Veritabanı ve Medya:** `*.db-journal`, `*.sqlite-wal`, büyük video ve raw dosyalar

---

### 2. Anlamlı ve Temiz Commit Formatı (Conventional Commits)
Gelişigüzel `update`, `fix`, `asdasd` commit mesajları atılmaz. Kısa ve net tür ön ekleri kullanılır:
- `feat: [özellik adı]` -> Yeni bir özellik eklendiğinde
- `fix: [hata adı]` -> Bir hata düzeltildiğinde
- `refactor: [modül adı]` -> Kod yapısı veya klasör modülerliği düzenlendiğinde
- `docs: [dosya adı]` -> Dokümantasyon veya taslak güncellendiğinde
- `perf: [işlem adı]` -> Performans veya önbellekleme optimizasyonunda

---

### 3. README Vitrin Standartları (GitHub Showcase)
Projenin GitHub'a yüklendiğinde amatör değil, kıdemli bir mühendislik ürünü gibi görünmesi için `README.md` şu düzende kurulur:
1. **Proje Başlığı ve Tek Cümlelik Net Tanım** (Pazarlama balonu olmadan).
2. **Öne Çıkan Özellikler** (Madde madde, net işlevler).
3. **Ekran Görüntüsü veya Mimari Şema** (Opsiyonel ama önerilen).
4. **Tek Komutla Hızlı Başlangıç:**
   ```bash
   git clone https://github.com/...
   cd proje-adi
   pip install -r requirements.txt
   python main.py
   ```
5. **Klasör Hiyerarşisi** (Projenin modüler mimarisini gösteren ağaç şeması).
