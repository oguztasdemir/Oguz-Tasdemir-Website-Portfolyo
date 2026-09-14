# 🛡️ 03 - VERİTABANI, VERİ GÜVENLİĞİ VE WINDOWS ZIRHI

Windows işletim sisteminde Türkçe karakter çöküşlerini, SQLite kilitlenmelerini ve form veri kayıplarını sıfıra indiren kurallardır.

---

### 1. Windows UTF-8 Zırhı
- Python dosyalarının başına mutlaka şu blok eklenir:
  ```python
  import sys
  if sys.platform.startswith('win'):
      try:
          sys.stdout.reconfigure(encoding='utf-8')
          sys.stderr.reconfigure(encoding='utf-8')
      except Exception:
          pass
  ```
- Tüm `open()` dosya işlemlerinde istisnasız `encoding='utf-8'` parametresi verilir.
- JSON dosyaları dışa aktarılırken `json.dump(..., ensure_ascii=False, indent=2)` yazılır.

---

### 2. Sıfır Kilitlenme: SQLite WAL Modu
SQLite kullanılan projelerde thread çakışması ve "database is locked" hatasını engellemek için bağlantı kurulur kurulmaz şu pragmalar çalıştırılır:
```python
import sqlite3

def get_db_connection(db_path="data.db"):
    conn = sqlite3.connect(db_path, timeout=10.0, check_same_thread=False)
    conn.execute("PRAGMA journal_mode=WAL;")
    conn.execute("PRAGMA busy_timeout=5000;")
    conn.execute("PRAGMA synchronous=NORMAL;")
    conn.row_factory = sqlite3.Row
    return conn
```

---

### 3. Kaza ve F5 Koruması (Auto-Save)
- Kullanıcının formlara yazdığı hiçbir metin F5 yapıldığında veya tarayıcı kazara kapandığında silinmez.
- Form giriş alanlarına `input` event'i ile anında `localStorage` taslak kaydı (`auto-save`) bağlanır. Sayfa açıldığında taslak varsa forma geri doldurulur.

---

### 4. Dışa Aktarma Cömertliği (Data Export)
- Kullanıcının veriye her an kolayca ulaşabilmesi esastır.
- Tüm veri tablolarının üzerinde varsayılan olarak şu 3 buton bulunur:
  1. **Panoya Kopyala:** Tablo verisini TSV formatında panoya kopyalar (Excel'e yapıştırmaya hazır).
  2. **Excel (.csv) İndir:** UTF-8 BOM destekli CSV dosyası indirir.
  3. **JSON İndir:** Veriyi ham JSON olarak kaydeder.
