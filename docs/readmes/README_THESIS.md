# 📈 Borsa İstanbul'da Çeyreklik Bilanço Verilerinden Makine Öğrenmesi ile Kârlılık Yönü ve Net Kâr Değişiminin Sektörel Bazda Öngörülmesi

> **İstanbul Medeniyet Üniversitesi — Mühendislik ve Doğa Bilimleri Fakültesi / Matematik Bölümü**  
> **Lisans Bitirme Tezi**  
> **Yazarlar:** Oğuz TAŞDEMİR, Ali Baran AKDOĞAN, Ertuğrul AKKUŞ  
> **Danışman:** Prof. Dr. Ali DİNLER  

---

## 🎯 1. Giriş ve Problem Tanımı

Günümüz finans piyasalarında, yüksek enflasyon ve döviz kurundaki sert dalgalanmalar gibi belirsiz ekonomik koşullar altında BIST şirketlerinin gelecek dönemlere yönelik doğru finansal tahminler yapabilmesi zorlaşmıştır. Şirketlerin yoğun veri ve karmaşık finansal göstergeler içinde kaybolmasını engellemek, sahte enflasyonist büyümeleri USD bazında arındırmak ve piyasa koşullarına uygun akıllı bir tahmin modeli sunmak amacıyla bu proje geliştirilmiştir.

Geliştirilen bu model sayesinde, BIST şirketlerinin finansal performanslarına yönelik kararlı, güvenilir ve yüksek doğrulukta tahminler üretilerek yatırımcılar ve yöneticiler için belirsizliğin yüksek olduğu ortamlarda rehberlik edecek güçlü bir karar destek yapısı sağlanmıştır.

---

## 🔬 2. Veri Kümesi ve Metodoloji

Çalışmada **2016–2025** yıllarını kapsayan dönemde Borsa İstanbul'da (BIST) işlem gören **612 şirketin** kapsamlı finansal verileri kullanılmıştır.

```text
[1. Otonom Veri Çekme (Scraping)] 
        ↓ 
[2. Birleştirme, Temizleme & Zaman Serisi Hizalama] 
        ↓ 
[3. Dolarizasyon (TCMB USD Kuru ile Enflasyondan Arındırma)] 
        ↓ 
[4. Çok Aşamalı Özellik Seçimi (Varyans Eşiği + Pearson + VIF)] 
        ↓ 
[5. Makine Öğrenmesi Modelleme (Random Forest, CatBoost & Hibrit Sentez)] 
        ↓ 
[6. Açıklanabilir Yapay Zeka (SHAP/PDP) & Web Dashboard Arayüzü]
```

---

## 📊 3. Sektörel Tahmin Başarı Karnesi

Geliştirilen makine öğrenmesi modelinde, şirketlerin dönemsel kâr-zarar durumu ve kâr değişim yönü analiz edilmiştir:
- **BIST Genelinde Kâr-Zarar Durumu Öngörüsü:** **%79.5 Doğruluk**
- **BIST Genelinde Kâr Değişim Yönü Öngörüsü:** **%68.8 Doğruluk**

| Sektör | Sınıflandırma Yön Başarısı (%) | Sınıflandırma Kâr-Zarar Başarısı (%) |
|---|:---:|:---:|
| **Sanayi ve İmalat** | %65.6 | **%80.6** |
| **Finans ve Yatırım** | **%74.7** | **%80.1** |
| **İnşaat ve Gayrimenkul** | %71.9 | %76.6 |
| **Teknoloji ve Hizmet** | %67.7 | **%80.8** |
| **Enerji ve Hammadde** | %64.7 | %78.8 |
| **Gıda ve Tarım** | %69.3 | %79.9 |
| **Ticaret ve Pazarlama** | %67.8 | %79.6 |
| **GENEL ORTALAMA** | **%68.8** | **%79.5** |

---

## 💻 4. Web Dashboard & Karar Destek Arayüzü

Sistem, arka plandaki karmaşık makine öğrenmesi modellerini Flask tabanlı modern ve dinamik bir web arayüzü ile sunar:
- **Gerekçeli Kâr Öngörü Paneli:** Hisse kodu girilen şirketin gelecek dönem net kâr/zarar ve yön tahminini finansal rasyo gerekçeleriyle açıklar.
- **Sektörel Rakip Analiz Modülü:** Seçilen firmayı sektördeki rakipleriyle mali rasyolar üzerinden kıyaslar.
- **Tarihsel Trend Analizi:** Şirketlerin çeyrekler bazındaki tarihsel mali gidişatını ve nakit akışını USD bazında zaman serisi olarak grafiklere döker.
- **Sektörel Başarı Analiz Paneli:** 7 ana sektördeki tahmin tutarlılıklarını şeffaf biçimde görselleştirir.

---

## 📁 5. Proje Klasör Mimarisi

```text
├── 0_Veri Çekme/                          # KAP ve finans portallarından veri kazıma botları
├── 1_Veri Manipulasyonu/                  # Tablo birleştirme ve eksik veri doldurma
├── 2_Kur Hesaplama ve Veriyi Hazırlama/    # TCMB USD kuru endeksleme ve dolarizasyon
├── 3_Özellik Seçimi/                      # Varyans eşiği, Pearson korelasyonu ve VIF analizi
├── 4_ Veri Son Hazırlık/                  # Sektörel akran kıyaslama ve nihai matris
├── 5_Makine Öğrenmesi_v1/                 # Temel Random Forest & CatBoost modelleri
├── 6_Makine Öğrenmesi_v2/                 # Özellik seçimi (FS) uygulanmış optimize modeller
├── 7_Makine Öğrenmesi_hibrit/             # Sektörel Şampiyon Model hibrit sentezi
├── 8_Arayuz/                              # Flask tabanlı interaktif Web Dashboard
├── 9_Kıyaslama_ve_Başarı_Skorları/        # Akademik metrikler, testler ve başarı çıktıları
├── Gorseller/                             # Analiz, radar ve pasta grafikleri
├── Tez_Dokumanlari/                       # Tez Makalesi, Özet Rapor ve Poster PDF'leri
└── README.md                              # Proje ana dokümantasyonu
```

---

## 🚀 Kurulum ve Çalıştırma

### 1. Bağımlılıkları Yükleyin

```bash
pip install flask pandas numpy scikit-learn catboost openpyxl
```

### 2. Web Dashboard'u Başlatın

```bash
cd 8_Arayuz
python main.py
```

Tarayıcınızda açın: `http://localhost:5000`

---

## 📄 Lisans & Telif

Bu çalışma **İstanbul Medeniyet Üniversitesi Mühendislik ve Doğa Bilimleri Fakültesi Matematik Bölümü Lisans Bitirme Tezi** kapsamında geliştirilmiştir. Tüm akademik ve yazılım hakları saklıdır.
