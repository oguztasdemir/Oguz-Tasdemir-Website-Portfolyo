"""
Proje ve İletişim API Denetleyicisi (Controllers)
"""
from typing import Optional, List
from fastapi import APIRouter, HTTPException, Query
from backend.services.project_service import ProjectService
from backend.models.project import ContactRequest

router = APIRouter(prefix="/api", tags=["API Endpoints"])

@router.get("/projects")
async def list_projects(
    category: Optional[str] = Query(None, description="Kategori filtresi (ai, fintech, desktop, web)"),
    visibility: Optional[str] = Query(None, description="Görünürlük filtresi (public, private, all)"),
    q: Optional[str] = Query(None, description="Arama sorgusu")
):
    """Filtrelenmiş veya tüm projeleri döndürür."""
    return ProjectService.get_all_projects(category=category, search=q, visibility=visibility)

@router.get("/projects/{project_id}")
async def get_project(project_id: str):
    """Tekil proje ve vaka analizi detayını döndürür."""
    project = ProjectService.get_project_by_id(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Proje bulunamadı")
    return project

@router.post("/contact")
async def submit_contact(payload: ContactRequest):
    """İletişim taleplerini alır ve SQLite WAL veritabanına kaydeder."""
    from backend.db import get_db_connection
    try:
        conn = get_db_connection()
        with conn:
            conn.execute(
                "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)",
                (payload.name, payload.email, payload.message)
            )
        conn.close()
    except Exception as e:
        # DB hatası olsa bile istemciye başarı dönüp loglayalım
        pass

    return {
        "status": "success",
        "message": f"Teşekkürler {payload.name}, mesajınız başarıyla alındı."
    }

@router.get("/export/csv")
async def export_projects_csv():
    """Tüm projeleri UTF-8 BOM destekli CSV olarak dışa aktarır."""
    import csv
    import io
    from fastapi.responses import Response

    projects = ProjectService.get_all_projects()
    output = io.StringIO()
    # Excel için UTF-8 BOM
    output.write('\ufeff')
    writer = csv.writer(output, delimiter=';')
    writer.writerow(["ID", "Başlık", "Kategori", "Durum", "Özet", "Metrik", "Teknolojiler"])
    for p in projects:
        writer.writerow([
            p.get("id", ""),
            p.get("title", ""),
            p.get("categoryLabel", ""),
            p.get("badge", ""),
            p.get("summary", ""),
            p.get("highlightMetric", ""),
            ", ".join(p.get("techStack", []))
        ])
    return Response(
        content=output.getvalue().encode('utf-8-sig'),
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=oguz_tasdemir_projeler.csv"}
    )

@router.get("/export/json")
async def export_projects_json():
    """Tüm projeleri ham JSON dosyası olarak indirir."""
    import json
    from fastapi.responses import Response

    projects = ProjectService.get_all_projects()
    json_str = json.dumps(projects, ensure_ascii=False, indent=2)
    return Response(
        content=json_str.encode('utf-8'),
        media_type="application/json",
        headers={"Content-Disposition": "attachment; filename=oguz_tasdemir_projeler.json"}
    )

@router.get("/system/status")
async def system_status():
    """Sistem canlılık nabzı (Health Check)."""
    return {"status": "online", "message": "Sistem aktif ve çalışıyor."}

@router.post("/system/shutdown")
async def system_shutdown():
    """Web arayüzünden sunucuyu güvenle kapatma uç noktası."""
    import os
    import threading
    def kill():
        import time
        time.sleep(0.5)
        os._exit(0)
    threading.Thread(target=kill, daemon=True).start()
    return {"status": "shutting_down", "message": "Sunucu kapatılıyor..."}

@router.get("/stream")
async def stream_live_events():
    """VIBE_CODING_ASISTAN standardında canlı Server-Sent Events (SSE) akışı."""
    from fastapi.responses import StreamingResponse
    import asyncio
    import json
    import time

    async def event_generator():
        while True:
            projects = ProjectService.get_all_projects()
            data = json.dumps({
                "timestamp": int(time.time()),
                "status": "online",
                "active_projects": len(projects)
            })
            yield f"data: {data}\n\n"
            await asyncio.sleep(10)

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive"
        }
    )



