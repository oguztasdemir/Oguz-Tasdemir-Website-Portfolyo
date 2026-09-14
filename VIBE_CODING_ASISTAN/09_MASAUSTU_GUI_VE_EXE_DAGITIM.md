# 🖥️ 09 - MASAÜSTÜ GUI VE TEK TIKLA ÇALIŞTIRMA (EXE / BATCH)

Kullanıcının projeyi Python kurulu olmayan cihazlarda veya masaüstünde doğrudan çalıştırmak istediğinde devreye giren kurallardır.

---

### 1. Webview Tabanlı Hafif Masaüstü Uygulaması (PyWebview)
Ağır PySide6/Qt veya hantal Electron yerine, web arayüzünü masaüstü penceresi gibi açmak için `pywebview` tercih edilir:
```python
import webview
import threading
# Sunucu arka planda başlar, ardından webview penceresi açılır:
threading.Thread(target=run_server, daemon=True).start()
webview.create_window("Uygulama Adı", f"http://127.0.0.1:{port}", width=1280, height=800)
webview.start()
```

---

### 2. Tek Tıkla Başlatıcı (`baslat.bat`)
Kullanıcının terminale komut yazmak zorunda kalmadan çift tıklamayla projeyi açabilmesi için kök dizine standart `baslat.bat` eklenir:
```batch
@echo off
chcp 65001 >nul
echo [OK] Sistem baslatiliyor...
python main.py
pause
```

---

### 3. PyInstaller Tek Dosya (.exe) Paketleme
Proje bağımsız bir Windows uygulamasına dönüştürüleceğinde statik dosyaların ve şablonların kaybolmaması için şu standart kullanılır:
- **`sys._MEIPASS` Koruması:** Dosya yollarının `.exe` içinde doğru çözülmesi için:
  ```python
  import sys
  from pathlib import Path

  def get_resource_path(relative_path):
      if hasattr(sys, '_MEIPASS'):
          return Path(sys._MEIPASS) / relative_path
      return Path(__file__).parent / relative_path
  ```
- **Derleme Komutu:**
  ```bash
  pyinstaller --noconfirm --onedir --windowed --add-data "static;static" main.py
  ```
