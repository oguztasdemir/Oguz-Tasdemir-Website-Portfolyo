# ⚙️ 01 - SUNUCU, PORT, TERMINAL VE LIFECYCLE DİSİPLİNİ

Sunucunun terminal kirliliği yaratmadan, port çakışmalarında çökmeden, Ctrl+C kazalarından korunarak tek tıkla ayağa kalkmasını sağlayan kesin standarttır.

---

### 1. Tek Komutla Hayat (Single Command Boot)
- Proje tek noktadan (`python main.py`) ayağa kalkar.
- Sunucu başladığı an kullanıcının varsayılan tarayıcısını otonom açar (`webbrowser.open(f"http://127.0.0.1:{port}")`).

---

### 2. Otomatik Port Kurtarıcı (Dynamic Port Fallback)
- Sunucu asla sabit porta (`8000` / `5000`) körü körüne bağlanıp çökmez.
- Soket kontrolü ile port meşgulse otomatik `8001`, `8002`... şeklinde ilk boş porta geçer ve tarayıcıyı o yeni portla açar.

---

### 3. 🛑 KESİN KURAL: CTRL+C İLE SUNUCU KAPANMASI YASAKTIR!
- **Kullanıcı İradesi:** Terminalden metin, link veya log kopyalamak isterken `Ctrl + C` basıldığında sunucunun **kapanması KESİNLİKLE YASAKTIR.**
- **Mekanizma:** `SIGINT` sinyali tamamen yakalanır ve yok sayılır. Ekrana kopyalama yapıldığına dair bilgi basılır ve sunucu kesintisiz çalışmaya devam eder.
- **Sunucu Nasıl Durur?** 
  - Yalnızca terminal penceresi doğrudan kapatıldığında (`X` butonu),
  - Veya web arayüzündeki manuel **"Sunucuyu Kapat"** butonuna basıldığında durur.

#### 🛡️ Zorunlu Uygulama Kodu:
```python
import signal
import sys
import os

def block_ctrl_c(signum, frame):
    # Ctrl+C basılınca sunucu KAPANMAZ, sadece kopyalama güvenliği bilgisi verir
    print("\n[🛡️ Zırh] Ctrl+C kopyalama koruması devrede. Sunucu çalışmaya devam ediyor...")
    print("[İpucu] Kapatmak için terminal penceresini kapatın veya arayüzdeki 'Kapat' butonunu kullanın.\n")

# Ctrl+C sinyalini tamamen sustur
signal.signal(signal.SIGINT, block_ctrl_c)

# Web arayüzü için manuel kapatma endpoint'i örneği
# @app.post("/api/system/shutdown")
# def shutdown():
#     os._exit(0)
```

---

### 4. Sessiz ve Temiz Terminal (Zero Log Spam)
- `GET /static/... 200 OK`, `GET /favicon.ico 200 OK` gibi log çöplüğü tamamen kapatılır (`access_log=False`).
- Terminalde sadece temiz tek satır bilgi kalır:
  ```text
  [OK] Sunucu aktif: http://127.0.0.1:8000
  ```

---

### 5. F5 / Önbellek Tazeliği (Cache-Busting)
- Kod güncellendiğinde tarayıcının eski JS/CSS'i önbellekten okuyup kullanıcıyı yanıltmasını önlemek için statik dosyalara `Cache-Control: no-store, no-cache, must-revalidate` başlıkları eklenir.

---

### 6. Evrensel Taşınabilirlik (No Hardcoded Paths)
- Asla `C:\Users\...` gibi sabit yollar yazılmaz; `pathlib.Path(__file__).parent.resolve()` ile dinamik yollar kullanılır.
