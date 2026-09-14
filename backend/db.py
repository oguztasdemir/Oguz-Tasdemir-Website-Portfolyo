"""
SQLite Veritabanı ve WAL Modu Yöneticisi
VIBE_CODING_ASISTAN / 03_VERI_VE_WINDOWS_GUVENLIGI.md standardı:
- PRAGMA journal_mode=WAL;
- PRAGMA busy_timeout=5000;
- PRAGMA synchronous=NORMAL;
- check_same_thread=False
"""
import sqlite3
from pathlib import Path
from backend.config import DATA_DIR

DB_PATH = DATA_DIR / "app.db"

def get_db_connection():
    """Kilitlenmeyen SQLite WAL bağlantısı döndürür."""
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(DB_PATH), timeout=10.0, check_same_thread=False)
    conn.execute("PRAGMA journal_mode=WAL;")
    conn.execute("PRAGMA busy_timeout=5000;")
    conn.execute("PRAGMA synchronous=NORMAL;")
    conn.row_factory = sqlite3.Row
    # Tablonun var olduğundan emin ol
    with conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS contact_messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
    return conn

def init_db():
    """Gerekli tabloları oluşturur (İletişim mesajları vb.)."""
    conn = get_db_connection()
    with conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS contact_messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
    conn.close()
