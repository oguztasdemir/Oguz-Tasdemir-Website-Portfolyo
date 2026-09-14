# 🎓 Yeni Mezun Geliştirici İçin GitHub Strateji & İşe Alım Raporu

**Hedef Profil:** Oğuz Taşdemir (Matematik Mezunu, AI & Python Uygulama Geliştiricisi)  
**Bakış Açısı:** Kıdemli CTO, Teknik Mülakat Lideri & İşe Alım Yöneticisi (Hiring Manager)  
**Tarih:** 2026

---

## 📌 Giriş: Yeni Mezunun En Büyük Çıkmazı ve Gerçekler

Geleneksel şirketler genellikle *"en az 2-3 yıl tecrübe"* ister. Yeni mezunun elindeki en güçlü silah **özgeçmişindeki şirket isimleri değil, GitHub'daki somut kodlarıdır.**

Ancak burada çok ince bir çizgi vardır:
- **Çok abartırsan:** *"Bu çocuk her şeyi ben yaptım diyor, muhtemelen kopyala-yapıştır yapmış veya ChatGPT çıktısı koymuş"* diyerek elerler.
- **Çok sönük kalırsan:** *"Sadece okul ödevlerini yüklemiş, gerçek dünyadan haberi yok"* diyerek elerler.

Bir teknik liderin aradığı şey: **"Öğrenmeye aç, problemle karşılaşınca kaçmayan, kodunu temiz yazan ve kendi elleriyle bir şeyler inşa etmiş dürüst bir uygulayıcı (Builder)."**

---

## ❌ Bölüm 1: İşverenler / CTO'lar Yeni Mezunları GitHub'a Bakınca Neden Eler?

Bir teknik yönetici GitHub profilinize ortalama **45 ila 60 saniye** bakar. Aşağıdaki "kırmızı bayrakları (Red Flags)" gördüğü an sekmeyi kapatır:

### 1. "Tutorial / Bootcamp Klonu" Projeler
* **Neden elenir?** İnternette herkesin yaptığı `To-Do App`, `Hava Durumu Uygulaması`, `E-Ticaret Sepeti (Mock)` veya YouTube videosunu birebir kopyalamış projeler.
* **İşverenin Düşüncesi:** *"Bunu kendi aklıyla yapmamış, videoyu izleyip kodları aynen yazmış. Gerçek hayatta bug çıkarsa çözemez."*

### 2. Şişirilmiş ve Gerçekçi Olmayan Unvanlar (AI Kibri)
* **Neden elenir?** 0-1 yıl tecrübesi olan birinin biyografisine `Lead Systems Architect`, `Senior AI Specialist`, `Full-Stack Guru` yazması.
* **İşverenin Düşüncesi:** *"Daha junior seviyede ama kendini mimar sanıyor. Ekip içinde yönetilmesi çok zor olur, egosu yüksektir."*

### 3. Tek Commit'lik "Dosya Deposu" Görünümü
* **Neden elenir?** Proje bitmiş, tüm klasör tek seferde sürükle-bırak yapılarak `Initial commit` veya `Add files via upload` mesajıyla atılmış.
* **İşverenin Düşüncesi:** *"Bu aday Git kullanmayı bilmiyor. Branch açmamış, adım adım commit atmamış, versiyon kontrol disiplini yok."*

### 4. Boş veya Klişe README Dosyaları
* **Neden elenir?** Projenin ne işe yaradığı belli değil, nasıl çalıştırılacağı (`pip install...`) yazmıyor, ekran görüntüsü yok.
* **İşverenin Düşüncesi:** *"İletişimi zayıf. Kendi yazdığı kodu başkasına aktarma ve dokümante etme yeteneği yok."*

### 5. Hassas Veri ve Çöp Dosyalar (Clean Code İhmali)
* **Neden elenir?** Reponun içinde `__pycache__`, `.env`, şifreler, SQLite veritabanı veya geçici dosyaların unutulması.
* **İşverenin Düşüncesi:** *"Temel hijyen kurallarını bilmiyor. Yarın bir gün şirket verilerini de yanlışlıkla dışarı sızdırabilir."*

---

## ✅ Bölüm 2: İşverenler Yeni Mezunu Neden Hemen Mülakata Çağırır?

Bir CTO'nun yeni mezun bir adayda gördüğünde **"Bu genci hemen mülakata almalıyız"** dediği altın kriterler:

### 1. "Kendi Gerçek Hayatındaki Bir Sorunu Çözmüş Olması" (En Büyük Artınız!)
* Okul ödevi olmayan, piyasada veya sahada gerçekten karşılaşılan bir bug'ı çözen projeler.
* **Örnek (Sizin Profiliniz):** Gardrops'un arayüz hatasını (takipçilerin durumunun ters dönmesi ve 3030 limiti) fark edip diferansiyel önbellek yazmanız.
* **İşverenin Düşüncesi:** *"Bu çocuk teorik ezberci değil! Gözlem yeteneği var, problemi analiz etmiş ve mantıklı bir algoritma kurmuş."*

### 2. "Matematik Çıkışlı Olmak" (Muazzam Bir Avantaj)
* Bilgisayar mühendisliği piyasasında binlerce mezun var. Ancak **Matematik mezunu olup kod yazabilen insan sayısı çok azdır.**
* **İşverenin Düşüncesi:** *"Matematik mezunuysa mantıksal modelleme, algoritmik düşünme, veri analitiği ve yapay zeka optimizasyonunu çok daha sağlam kavrar. Kodlama zaten öğrenilir ama matematik kafası sonradan zor kazanılır."*

### 3. Modüler ve Okunabilir Kod Disiplini
* 5000 satırlık tek bir `main.py` yerine; `services/`, `models/`, `utils/` gibi parçalara bölünmüş modüler kodlar.
* Kodların içinde saçma sapan değişken isimleri (`a`, `b`, `asdasd`) yerine anlaşılır fonksiyon isimleri olması.

### 4. Dürüstlük ve Netlik
* *"Ben her şeyi bilirim"* demek yerine; *"Ben Python ve yerel yapay zeka entegrasyonlarına odaklanıyorum, pratik uygulamalar geliştiriyorum"* diyebilmek.

---

## 🧭 Bölüm 3: Oğuz Taşdemir Profili İçin Doğrudan Aksiyon Planı

Profilinizdeki 16 açık kaynak repoyu ve portfolyonuzu incelediğimizde **ortalamanın çok üzerinde bir pratik üretim gücünüz var.** 

Bunu işverene en etkili şekilde satmak için yapmanız gerekenler:

### 🎯 1. Profilin En Üstüne Sabitlenecek (Pinned) 6 Altın Proje
Profilinizi açan kişinin ilk 5 saniyede göreceği vitrin şu olmalıdır:

1. 🛒 **`OYMAPOS-Barkod-Sistemi`** (Donanım, Hızlı Satış, POS, SQLite WAL)  
   *Mesaj:* "Saha donanımlarıyla ve düşük gecikmeli veri tabanıyla çalışabiliyorum."
2. 🛍️ **`Gardrops-Otomasyon-Botu`** (Web Scraping, Reverse Engineering, Diferansiyel Algoritma)  
   *Mesaj:* "Platform sınırlarını ve frontend bug'larını akıllı algoritmalarla çözebiliyorum."
3. ⚡ **`Airdrop-Local`** (WebSockets, P2P Ağ, Cihazlar Arası İletişim)  
   *Mesaj:* "Ağ protokollerini ve gerçek zamanlı iletişimi anlıyorum."
4. 🎯 **`Kredi-Notu-Siniflandirmasi-Tahmin-Modeli`** (Veri Bilimi, Scikit-Learn, Finans ML)  
   *Mesaj:* "Matematik altyapımı veri bilimi ve makine öğrenmesinde uygulayabiliyorum."
5. 🛡️ **`Disk-Kurtarma-Araci`** (Düşük Seviye Dosya Kurtarma, Byte Analizi)  
   *Mesaj:* "Sadece yüksek seviye web değil, disk sektörlerine inecek kadar sistem bilgim var."
6. ⚽ **`EA-FIFA-Fikstur`** (Kombinatoryal Algoritma, FastAPI, Turnuva Motoru)  
   *Mesaj:* "Karmaşık kura ve eşleşme mantığını FastAPI ile modern servise dönüştürebiliyorum."

---

### 💬 2. Mülakatta Kendinizi Anlatma Reçetesi (30 Saniyelik Asansör Konuşması)

Bir patron veya teknik lider *"Bize biraz kendinden bahset"* dediğinde kurulacak kusursuz cümle:

> *"Matematik mezunuyum. Matematikten gelen analitik düşünme ve modelleme gücümü, Python ve yapay zeka ekosistemiyle birleştirerek doğrudan sahada işe yarayan uygulamalar geliştiriyorum.*  
> *Sadece teorik modellerle kalmıyorum; perakendede kullanılan barkodlu satış sistemlerinden (OymaPOS), e-ticaret otomasyonlarına ve yerel çalışan LLM/RAG asistanlarına kadar uçtan uca çalışan projeler inşa ettim.*  
> *Yeni mezun olarak ekibinize hem güçlü bir matematik/algoritma vizyonu hem de hızla öğrenip üreten pratik bir uygulayıcı kimliği katmak istiyorum."*

---

## 🏁 Sonuç ve Özet Tablo

| Kriter | Yapılmaması Gereken (Eleyenler) | Yapılması Gereken (Sizin Yolunuz) |
| :--- | :--- | :--- |
| **Unvan** | *Senior Systems Architect & AI Master* | **`AI & Python Developer`** |
| **Eğitim Algısı** | Diplomanın arkasına saklanmak | **"Matematik temelli analitik zeka + Python pratiği"** |
| **Projeler** | Kurslardan kalma basit To-Do uygulamaları | **OymaPOS, Gardrops, P2P Drop, Disk Kurtarma** |
| **README** | Boş veya ChatGPT'nin süslü lafları | **Problem -> Çözülen Darboğaz -> Kurulum Adımları** |
| **Saha Duruşu** | "Ben her teknolojiyi kusursuz bilirim" | **"Problem çözmeyi ve sıfırdan çalışan sistem kurmayı severim"** |

Bu stratejiyle GitHub profiliniz, bir patronun gözünde **"yeni mezunlar havuzundaki en parlak ve işe almaya en hazır ilk %5'lik dilime"** yerleşir.
