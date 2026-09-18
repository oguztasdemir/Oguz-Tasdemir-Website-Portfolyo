"""
FastAPI Uygulama Çekirdeği
Taslak standartları: Tek port, statik dosya sunumu, anti-caching ve no-spam loglama.
"""
from fastapi import FastAPI, Request, Response
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from backend.config import TITLE, VERSION, FRONTEND_DIR
from backend.controllers.project_controller import router as api_router

from contextlib import asynccontextmanager
from backend.db import init_db

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Başlangıçta SQLite WAL tablolarını hazırla
    try:
        init_db()
    except Exception:
        pass
    yield

app = FastAPI(title=TITLE, version=VERSION, lifespan=lifespan)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# F5 Anti-Caching & Terminal Canlı Bildirim Middleware
@app.middleware("http")
async def add_anti_cache_headers(request: Request, call_next):
    path = request.url.path
    # Terminale sade ve şık durum bildirimi
    if path == "/" or path == "/index.html":
        print(f" [INFO] [Tarayici] Sayfa yenilendi / acildi (F5) -> {path}")
    elif path.startswith("/api/projects"):
        # sessiz veya tek satır
        pass

    response: Response = await call_next(request)
    if path.startswith("/css") or path.startswith("/js") or path == "/":
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
    return response

# API Router Bağlantısı
app.include_router(api_router)

# Statik Dosyalar (Frontend)
if FRONTEND_DIR.exists():
    app.mount("/", StaticFiles(directory=str(FRONTEND_DIR), html=True), name="frontend")
