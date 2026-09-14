# 🏛️ Oğuz Taşdemir — Profesyonel Portfolyo & Mühendislik Vitrini
## Mimari Taslak, Anti-AI Tasarım Sistemi ve Görev Planı (`docs/taslak.md`)

---

## 1. Projenin Amacı ve Temel Vizyonu
Bu web sitesi; **Oğuz Taşdemir'in geliştirdiği sistemleri, derin mühendislik vaka analizlerini (Case Studies) ve teknik yetkinliklerini uluslararası standartlarda sergilemek, CV/özgeçmişe eklenebilecek üst düzey bir referans vitrini oluşturmak** amacıyla geliştirilmektedir.

### 🚫 Anti-AI Tasarım & Kusursuz İşçilik Taahhüdü:
* **Asla Yapay Zeka Şablonu Hissi Vermeyecektir:** Mor-cyan jenerik degradeler, anlamsız glow efektleri, ezbere 3 kutulu yerleşimler, robot/sihirli değnek (🤖, ✨) emojileri tamamen yasaktır.
* **İlham Kaynağı & Duruş:** *Linear.app*, *Stripe*, *Vercel* ve modern editoryal tasarım dilinin birleşimi; rafine tipografi, dokunsal mikro etkileşimler, fizik temelli akıcı animasyonlar (`cubic-bezier`), yüksek kontrastlı mat yüzeyler ve derinlik hiyerarşisi.
* **Performans:** Sıfır harici kütüphane şişkinliği, 100/100 Lighthouse hedefi, 60fps akıcı geçişler.

---

## 2. Tasarım Sistemi & Estetik Temeller

### A. Tipografi (Editoryal & Mühendislik Disiplini)
* **Başlıklar (Headings):** `Plus Jakarta Sans` — Sıkı harf aralığı (`letter-spacing: -0.025em`), kendinden emin, editoryal ağırlık (600 - 800).
* **Gövde Metinleri (Body):** `Inter` — Yüksek okunabilirlik, ferah satır aralıkları (`line-height: 1.65`).
* **Teknik Kod & Metrikler:** `JetBrains Mono` — Veri noktaları, süreler ve parametreler için monospaced mimari estetik.

### B. Renk Mimarisi (Obsidian Studio & Mat Titanyum)
* **Taban Katman (Canvas):** `#090a0f` (Ultra derin, nötr kömür tonu; saf siyah değil, mat editoryal zemin).
* **Yüzey Panelleri (Cards / Elevators):** `#11141c` ve `#161b26` (Zarif ayrım).
* **Sınırlar & Ayrım Çizgileri:** `rgba(255, 255, 255, 0.07)` ve üzerine gelindiğinde `rgba(255, 255, 255, 0.16)`.
* **Vurgu & Odak Renkleri:** 
  * *Mühendislik Mavisi:* `#38bdf8` (Sakin ve odaklı).
  * *Canlılık Yeşili:* `#10b981` (Üretimde / Aktif rozeti).
  * *Mat Kehribar:* `#f59e0b` (Öne çıkan vaka analizi rozeti).
  * *Metin:* Birincil `#f8fafc`, İkincil `#94a3b8`, Yardımcı `#64748b`.

### C. Geçişler, Efektler & Mikro Etkileşimler (Tactile Polish)
1. **İnteraktif Aydınlatma / Spotlight Kartlar (Cursor Spotlight):** Kullanıcının faresi kart üzerinde gezinirken, kartın sınırlarında çok zarif, yumuşak bir ışık takibi (`radial-gradient` spotlight) — mat fırçalanmış metal etkisi.
2. **Fizik Temelli Butonlar:** Tıklama esnasında `transform: scale(0.98)` mikro basılma hissi ve klavye odak halkaları (`focus-visible`).
3. **Akıcı Filtre Animasyonları:** Kategori butonlarına tıklandığında yumuşak `fade-in-up` (180ms) akışı.
4. **Editoryal Vaka Analizi Çekmecesi / Modalı:** Arkada `backdrop-filter: blur(16px)` mat cam dokusu, pürüzsüz yukarı süzülüş ve klavye `ESC` kontrolü.
5. **Klavye Dostu Kısayollar:** `Ctrl + K` ile anında arama kutusuna odaklanma (`<kbd>` rozetiyle gösterim).

---

## 3. Sayfa Yapısı ve Modüler İçerik Mimarisi

### 1. Header (Ultra İnce ve Sabit Navigasyon)
* Sol: Geometrik monokrom logo (`OT` / Oğuz Taşdemir).
* Orta: Sade linkler (`Projeler`, `Mühendislik Kültürü`, `Özgeçmiş`, `İletişim`).
* Sağ: `CV İndir (PDF)` butonu (Zarif vektör ikon eşliğinde).

### 2. Hero (İlk 5 Saniye Etkisi)
* Durum Rozeti: `● Aktif Üretim & Danışmanlık İçin Müsait` (Zarif nabız efekti).
* Başlık: Güçlü, iddiası kanıtlanabilir unvan ve vizyon:
  > *"Karmaşık Mühendislik Problemleri, Yerel Yapay Zeka Mimarileri ve Yüksek Performanslı Sistemler."*
* Açıklama: Yazılım mimarlığı, yerel LLM/RAG boru hatları, perakende POS donanım entegrasyonları ve sıfır şişkinlik felsefesi.
* Hızlı Eylemler: [Seçilmiş Projeleri İncele ↓], [CV (PDF) İndir], [E-Postayı Kopyala].
* Kanıt Metrikleri Barı (Proof of Work):
  * `40+` Sistem Mimarisi & Saha Çözümü
  * `%100` Yerel Veri Gizliliği (Air-Gapped AI)
  * `<80ms` Gerçek Zamanlı Donanım/Satış Çevrimi
  * `0.0` Tolerans: Sıfır Kod Budama & Linter Hatası

### 3. Projeler Kasası (The Engineering Showcase)
Kullanıcıların ve İK liderlerinin hızla filtreleyebileceği kontrol paneli:
* **Filtre Sekmeleri:** `Tümü (5)`, `Yapay Zeka & LLM`, `FinTech & POS`, `Masaüstü & Sistem`, `Web & Platformlar`.
* **Arama & Kısayol:** `[Proje veya teknoloji ara... ⌘K]`.
* **Görünüm Seçici:** `[🔲 Grid Kartlar]` | `[☰ Kompakt Liste]`.

**Geliştirilecek 5 Çekirdek Proje:**
1. 🧠 **Cortex:** Yerel LLM / AI IDE ve Akıllı Asistan Sistemi (Ollama, ChromaDB, FastAPI, SSE).
2. 🛒 **OymaPOS:** Perakende Barkodlu Satış & Stok Yönetimi (Masaüstü GUI, SQLite WAL, ESC/POS).
3. 🏷️ **OymaPOS Etiket:** Dinamik Raf & Barkod Etiketleme Motoru (ZPL/EPL, PIL, Tek tık .EXE).
4. 📡 **P2P Local Drop:** Yerel Ağ Hızlı & Şifreli Dosya Transferi (WebSockets, mDNS, UDP Discovery).
5. ⚽ **Altyapı Manager:** Spor Kulübü Analiz & Taktik Platformu (HTML5 Canvas, Taktik Simülasyonu, RAG).

### 4. Mühendislik Standartları & Felsefe (The Craftsmanship)
* *Zero AI Slop & Rafine Estetik*
* *Kilitlenmeyen SQLite WAL & Veri Güvenliği*
* *Donmayan GUI & Worker Thread İzolasyonu*
* *Windows UTF-8 Zırhı & Tek Parça Dağıtım*

### 5. CV & İletişim Terminali
* Temiz ve doğrudan iletişim kartı, tek tıkla e-posta kopyalama ve geri bildirim bildirimleri (Toast).

---

## 4. Uygulama ve Görev Adımları (Planlama Fazları)

- [ ] **Faz 1: İskelet & Tipografi Yenilenmesi (`index.html`)**
  - Modern semantik yapı, Google Fonts (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`) ve inline SVG ikonlar.
- [ ] **Faz 2: Anti-AI Tasarım Sistemi & CSS Mimarisi (`css/style.css`)**
  - Mat obsidian renk paleti, spotlight kart efekti, dokunsal mikro geçişler (`cubic-bezier`), grid/liste stilleri.
- [ ] **Faz 3: Projeler Veri Motoru & Vaka Analizleri (`js/projects-data.js`)**
  - 5 projenin kurumsal ve teknik vaka analizleri (Problem, Mimari, Karşılaşılan Zorluk, Teknik Çözüm).
- [ ] **Faz 4: İleri Düzey Etkileşimler & JS Motoru (`js/app.js`)**
  - Canlı filtreleme ve arama (Ctrl+K), grid/liste görünüm geçişi, fare takip eden spotlight ve ESC uyumlu modal.
- [ ] **Faz 5: Doğrulama ve Görsel Kalite Kontrolü**
  - Tarayıcı alt ajanı ile test, mobil uyumluluk ve sıfır hata denetimi.
