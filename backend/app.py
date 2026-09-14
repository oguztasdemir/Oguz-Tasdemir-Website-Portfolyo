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

# F5 Anti-Caching Middleware (Taslak Standardı)
@app.middleware("http")
async def add_anti_cache_headers(request: Request, call_next):
    response: Response = await call_next(request)
    if request.url.path.startswith("/css") or request.url.path.startswith("/js") or request.url.path == "/":
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
    return response

# API Router Bağlantısı
app.include_router(api_router)

# Statik Dosyalar (Frontend)
if FRONTEND_DIR.exists():
    app.mount("/", StaticFiles(directory=str(FRONTEND_DIR), html=True), name="frontend")
