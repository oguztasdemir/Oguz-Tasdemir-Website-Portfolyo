# Oğuz Taşdemir — Kapsamlı GitHub & Yerel Proje Denetim Raporu

Bu rapor; GitHub profilinizdeki tüm repoların (`Public` & `Private`), masaüstünüzdeki yerel proje klasörlerinin, `README.md` dokümantasyon durumlarının, commit/push senkronizasyonunun ve **güvenlik / veri sızıntısı (API Keys, Token, Şifre)** analizinin tam özetidir.

---

## 1. GitHub Profil Repoları Genel Durumu

GitHub hesabınızda toplam **26 adet kişisel depo (repo)** bulunmaktadır:
- **Public (Herkese Açık) Repolar:** 19 Adet
- **Private (Gizli) Repolar:** 7 Adet

### A. Public (Herkese Açık) Repolarınız — 19 Adet

| # | Repo Adı | GitHub URL | Açıklama (Description) Durumu | README Durumu |
|---|---|---|---|:---:|
| 1 | **Airdrop-Local** | `oguztasdemir/Airdrop-Local` |  Mevcut (P2P Local Drop) |  Var (2.8 KB) |
| 2 | **Akademik-Ingilizce** | `oguztasdemir/Akademik-Ingilizce` |  Mevcut (YÖKDİL & YDS Kelime Kampi) |  Var (4.1 KB) |
| 3 | **Altyapi** *(Yeni Açıldı)* | `oguztasdemir/Altyapi` | ⚠️ Açıklama Boş |  Var (1.8 KB) |
| 4 | **Bil101-202** | `oguztasdemir/Bil101-202` |  Mevcut (Akademik Kod Arşivi) |  Var (0.9 KB) |
| 5 | **Disk-Kurtarma-Araci** | `oguztasdemir/Disk-Kurtarma-Araci` |  Mevcut (Adli Bilişim & Ham Disk) |  Var (3.5 KB) |
| 6 | **EA-FIFA-Fikstur** | `oguztasdemir/EA-FIFA-Fikstur` |  Mevcut (Turnuva Dinamik Fikstür) |  Var (3.1 KB) |
| 7 | **Gardrops-Otomasyon-Botu** | `oguztasdemir/Gardrops-Otomasyon-Botu` |  Mevcut (Gardrops Pazaryeri Botu) |  Var (4.6 KB) |
| 8 | **GDSC_Medeniyet** | `oguztasdemir/GDSC_Medeniyet` |  Mevcut (GDSC Medeniyet Arşivi) |  Var (1.2 KB) |
| 9 | **Hugging-face-Downloader** | `oguztasdemir/Hugging-face-Downloader` |  Mevcut (HuggingFace CLI Downloader) |  Var (3.2 KB) |
| 10 | **KPSS-Lisans-Hazirlik** *(Yeni Açıldı)*| `oguztasdemir/KPSS-Lisans-Hazirlik` | ⚠️ Açıklama Boş |  Var (2.4 KB) |
| 11 | **Kredi-Notu-Siniflandirmasi-Tahmin-Modeli** | `oguztasdemir/Kredi-Notu-Siniflandirmasi-Tahmin-Modeli` |  Mevcut (Finansal Kredi Riski ML) |  Var (4.8 KB) |
| 12 | **NC-Codes** | `oguztasdemir/NC-Codes` |  Mevcut (Transformice Lua Scriptleri) |  Var (2.1 KB) |
| 13 | **Odeal-Fatura-Kesme-Otomasyonu** *(Yeni Açıldı)*| `oguztasdemir/Odeal-Fatura-Kesme-Otomasyonu` | ⚠️ Açıklama Boş |  Var (3.2 KB) |
| 14 | **oguztasdemir** | `oguztasdemir/oguztasdemir` |  Mevcut (GitHub Profil README) |  Var (1.5 KB) |
| 15 | **OYMAPOS-Barkod-Sistemi** | `oguztasdemir/OYMAPOS-Barkod-Sistemi` |  Mevcut (OymaPOS Kasa & Satış) |  Var (5.2 KB) |
| 16 | **Oymapos-Etiket-Yazdirici** | `oguztasdemir/Oymapos-Etiket-Yazdirici` |  Mevcut (OymaPOS Termal Etiket) |  Var (3.9 KB) |
| 17 | **Projelerim-ve-Oyunlarim** | `oguztasdemir/Projelerim-ve-Oyunlarim` |  Mevcut (Kişisel Proje & Oyunlar) |  Var (1.4 KB) |
| 18 | **Soru-Uygulamasi** | `oguztasdemir/Soru-Uygulamasi` |  Mevcut (KPSS Soru Bankası) |  Var (3.3 KB) |
| 19 | **Telegram-Media-Hub** | `oguztasdemir/Telegram-Media-Hub` |  Mevcut (Telegram Asenkron Hub) |  Var (3.7 KB) |

---

### B. Private (Hala Gizli Olan) Repolarınız — 7 Adet

| # | Repo Adı | URL | Durum / Açıklama |
|---|---|---|---|
| 1 | **Cortex-AI** | `oguztasdemir/Cortex-AI` | 🔒 Private (Yerel LLM ve Kodlama Asistanı) |
| 2 | **Tez-Projesi-V2** | `oguztasdemir/Tez-Projesi-V2` | 🔒 Private (BİST Bilanço Kârlılık Tahmini) |
| 3 | **Tez-Projesi** | `oguztasdemir/Tez-Projesi` | 🔒 Private (Eski Tez Versiyonu) |
| 4 | **Tez-Deneme** | `oguztasdemir/Tez-Deneme` | 🔒 Private (Tez Deneme Kodları) |
| 5 | **Barkod-Sistemi** | `oguztasdemir/Barkod-Sistemi` | 🔒 Private (`OYMAPOS-Barkod-Sistemi` public iken bu eski sürüm priv) |
| 6 | **Fare-Oyunu** | `oguztasdemir/Fare-Oyunu` | 🔒 Private (Eğlenceli mini fare oyunu) |
| 7 | **Personality** | `oguztasdemir/Personality` | 🔒 Private (Kişisel/psikolojik modelleme çalışması) |

---

## 2. Masaüstündeki Yerel Klasörlerin Durumu (GitHub'da Olmayanlar & README Analizi)

### A. Yerel Olarak Geliştirilen Ama GitHub'a Yüklenmemiş (No Remote) Projeler
Aşağıdaki projeler yerel sisteminizde mevcuttur ancak GitHub'a henüz push edilmemiştir:

1. **Webtoon** (`C:\Users\User\Desktop\Webtoon`):
   - **Git:** Var (Yerel repo)
   - **Remote:** Yok (GitHub'a bağlı değil)
   - **README:** Eksik (README.md yok)
   - **Web Sitesinde:** `webtoon-lora-suite` adıyla listeleniyor.

2. **Önbellek Temizleyici** (`C:\Users\User\Desktop\önbellek temizleyici`):
   - **Git:** Var (Yerel repo)
   - **Remote:** Yok (GitHub'a bağlı değil)
   - **README:** Eksik (README.md yok)
   - **Web Sitesinde:** `cache-cleaner` adıyla listeleniyor.

3. **Modelling (3D AI)** (`C:\Users\User\Desktop\Modelling`):
   - **Git:** Var (Yerel repo)
   - **Remote:** Yok (GitHub'a bağlı değil)
   - **README:** Eksik (README.md yok)
   - **Web Sitesinde:** `3d-modelleme-ai` adıyla listeleniyor.

4. **YouTube Playlist / YouTube AI** (`C:\Users\User\Desktop\Youtube Playlist`):
   - **Git:** Yok
   - **README:** Eksik
   - **Web Sitesinde:** `youtube-ai-assistant` adıyla listeleniyor.

5. **PDF Bağlam Kurma (RAG)** (`C:\Users\User\Desktop\PDF bağlam kurma`):
   - **Git:** Var (Yerel)
   - **README:** Eksik
   - **Web Sitesinde:** Henüz ayrı olarak listelenmedi.

6. **Discord DNS** (`C:\Users\User\Desktop\Discord DNS`):
   - **Git:** Var (Yerel)
   - **README:** Eksik

7. **Kripto Projesi / Hyperbeam Projesi / Kaçak Dizi / Proje Planlayıcı**:
   - **Git:** Var (Yerel)
   - **README:** Eksik

---

## 3. Güvenlik & Veri Sızıntısı Taraması (Security & Secret Leak Audit)

Masaüstündeki tüm projeler, `.env` dosyaları, Python ve JavaScript kaynak kodları; API anahtarları, şifreler, özel anahtarlar ve oturum çerezleri için taranmıştır:

###  Bulgular & Alınması Gereken Önlemler:
1. **Hardcoded Şifreler / Veritabanı:**
   - **OymaPOS / Barkod:** Yerel SQLite veritabanı yolları ve yerel hash mekanizmaları içeriyor. Herhangi bir harici hassas bulut şifresi içermiyor.
   - **Ödeal Fatura Kesme:** Kullanıcı giriş bilgileri (`username/password`) kod içine doğrudan gömülmemeli; `.env` veya kullanıcı giriş ekranı üzerinden alınmalıdır.

2. **Git Ignore Kontrolü:**
   - Yeni açtığımız `Odeal-Fatura-Kesme-Otomasyonu`, `Altyapi` ve `KPSS-Lisans-Hazirlik` repolarında `.gitignore` dosyalarının `.env`, `credentials.json`, `app.db`, `downloads/` ve kişisel oturum loglarını yok saydığından emin olunmalıdır.

3. **Token / API Key:**
   - Kod tabanlarında aktif hardcoded OpenAI/Anthropic prodüksiyon tokenı veya AWS secret key sızıntısı tespit edilmemiştir.

---

## 4. Aksiyon Planı & Yapılması Gerekenler

1. **GitHub Açıklamalarının Güncellenmesi:**
   - `Altyapi`, `KPSS-Lisans-Hazirlik` ve `Odeal-Fatura-Kesme-Otomasyonu` repolarına kısa ve profesyonel "Description" (açıklama) ve Topics (etiketler) eklenmeli.

2. **Eksik Projelerin GitHub'a Yüklenmesi:**
   - Web sitesinde yer alan ama GitHub'da henüz reposu olmayan **`cache-cleaner` (Önbellek Temizleyici)**, **`3d-modelleme-ai` (Modelling)** ve **`webtoon-lora-suite` (Webtoon)** için GitHub'da yeni repolar oluşturulup kodlar push edilmeli.

3. **Eksik `README.md` Dosyalarının Oluşturulması:**
   - Yükleyeceğimiz 3 yeni projeye ve yerel scriptlere standart, modern bir `README.md` (Özellikler, Mimari, Kurulum) eklenmeli.

4. **Web Sitesi Proje Bağlantılarının (GitHub URL) Birebir Eşitlenmesi:**
   - Portfolyo arayüzündeki tüm GitHub butonlarının gerçek, çalışan repo linkleriyle %100 örtüşmesi sağlanmalı.
