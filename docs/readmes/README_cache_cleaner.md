# 🧹 Cortex Cache & System Privacy Cleaner

Windows işletim sistemlerinde geliştirici araçlarının (Python pip, Node.js npm), modern web tarayıcılarının (Chrome, Edge, Brave) ve işletim sistemi geçici dizinlerinin (Temp, Prefetch, CrashDumps) oluşturduğu önbellek atıklarını analiz edip güvenle temizleyen modern masaüstü aracı.

---

## 🚀 Öne Çıkan Özellikler

- **Geliştirici Önbellekleri:** Python `pip-cache` ve Node.js `npm-cache` paket artıklarını tarama ve tek tıkla temizleme.
- **Web Tarayıcıları:** Google Chrome, Microsoft Edge ve Brave tarayıcılarının `Cache` ve `Code Cache` dizinlerini diskten arındırma.
- **Sistem & Çöp Atıkları:** Windows `Temp`, `%LocalAppData%\Temp`, `Prefetch`, Windows Hata Raporları (`WER`) ve Geri Dönüşüm Kutusu'nu temizleme.
- **Kullanıcı Dostu & Modern GUI:** CustomTkinter ile tasarlanmış koyu tema (Dark Mode) destekli, renkli ve tepkisel arayüz.
- **Güvenli Silme Mimarisi:** Kilitli sistem dosyalarını zorlamadan atlayan, hata fırlatıp çökmeyen hata toleranslı silme döngüsü.

---

## 🛠️ Teknoloji Yığını

- **Dil:** Python 3.x
- **Arayüz (GUI):** CustomTkinter (Modern Dark UI)
- **Sistem Entegrasyonu:** `os`, `shutil`, `subprocess`, `win32` API
- **Threading:** Asenkron disk tarama ve dondurmayan temizleme iş parçacığı

---

## 📦 Kurulum ve Çalıştırma

Gereksinimleri yükleyin ve uygulamayı başlatın:

```bash
# Bağımlılıkları yükleyin
pip install customtkinter

# Uygulamayı çalıştırın
python cache_cleaner.py
```

---

## 📋 Temizlenen Hedef Dizinler

| Kategori | Hedef Bileşen | Açıklama |
|---|---|---|
| **Python** | `%LocalAppData%\pip` | İndirilen `.whl` ve paket önbellekleri |
| **Node.js** | `%LocalAppData%\npm-cache` | npm modül indirme önbelleği |
| **Windows Temp** | `C:\Windows\Temp` & `%Temp%` | Çalışma anı geçici sistem dosyaları |
| **Tarayıcılar** | Chrome / Edge / Brave Cache | Web sitelerinin görsel ve kod önbellekleri |
| **Crash & Dump** | `%LocalAppData%\CrashDumps` | Uygulama çökme bellek dökümleri |

---

## 📄 Lisans

Bu proje MIT lisansı altında geliştirilmiştir.
