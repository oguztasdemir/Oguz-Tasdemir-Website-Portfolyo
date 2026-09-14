# 📱 06 - WEB BİLEŞENLERİ, MOBİL BAĞLANTI VE CANLI AKIŞ

Kullanıcının web projelerinde tekrar tekrar istediği mobil entegrasyon, canlı veri akışı ve gelişmiş UI etkileşim modelleridir.

---

### 1. QR Kod ile Yerel Ağ Mobil Eşleşmesi (Mobile Pair)
- Masaüstü web arayüzünde "Mobil Cihaz Bağla" butonu bulunur.
- Butona basıldığında bir modal içinde makinenin yerel ağ IP'sini (`http://192.168.1.X:8000/mobil`) içeren dinamik bir **QR Kod** üretilir.
- Telefon kamerasıyla okutulduğunda mobil uyumlu panel (barkod tarama, kamera ile çekim, veri girişi) açılır.
- Modal kapatılsa dahi arka planda bağlantı kesilmez.

---

### 2. SSE (Server-Sent Events) ile Canlı Veri Akışı
- Ağır ve karmaşık WebSockets yerine tek yönlü veri akışlarında hafif ve dayanıklı **SSE (`/api/stream`)** mimarisi kullanılır.
- AI metin üretimleri, işlem ilerleme yüzdeleri, barkod okutma tetikleyicileri ön yüze `EventSource` ile anında akar. Sayfayı F5 ile yenilemeye gerek kalmaz.

---

### 3. Modal / Pop-up Kapatma Ergonomisi
- Kullanıcı modal kapatmak için asla sadece sağ üstteki küçük `(X)` ikonuna mahkum edilmez.
- **ESC Tuşu:** Klavyeden `Escape` basıldığında açık modal pürüzsüzce kapanır.
- **Backdrop Tıklaması:** Modalın etrafındaki karartılmış boş alana tıklandığında kapanır.
- Modal açıldığında arka planın kaymasını engellemek için `body`'ye `overflow: hidden` verilir.

---

### 4. Canlı Arama ve Hızlı Filtreleme (Instant Search)
- Veri listelerinde veya tablolarda enter tuşuna basmayı beklemeden, kullanıcı harfleri yazdığı anda (`input` event'i ile) filtreleme yapan arama kutuları kurulur.
- Sağında tek tıkla aramayı sıfırlayan `(X)` temizleme butonu ve anlık sonuç sayacı (`12 / 150 kayıt`) yer alır.

---

### 5. Canlı Bağlantı Nabzı (Live Pulse Indicator)
- Sayfanın sağ üstünde sistemin ayakta olduğunu gösteren estetik bir nabız noktası bulunur:
  - 🟢 **Yeşil Pulse:** "Sistem Aktif / Bağlantı Hazır"
  - 🔴 **Kırmızı:** "Bağlantı Kesildi / Sunucuya Ulaşılamıyor"
