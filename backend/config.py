"""
Backend Konfigürasyonu ve Ortam Ayarları
Taslak standardı: Tek port, UTF-8 zırhı ve dizin yolları yönetimi.
"""
from pathlib import Path

# Dizin Yolları
BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = BASE_DIR / "frontend"
DATA_DIR = BASE_DIR / "data"
DOCS_DIR = BASE_DIR / "docs"

# Sunucu Ayarları
HOST = "127.0.0.1"
DEFAULT_PORT = 8000
TITLE = "Oğuz Taşdemir — Portfolyo API & Web Sunucusu"
VERSION = "1.0.0"
