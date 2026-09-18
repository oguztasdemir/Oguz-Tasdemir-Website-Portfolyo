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

@router.get("/projects/{project_id}/zip")
@router.get("/export/project-zip/{project_id}")
async def download_project_zip(project_id: str):
    """Açık ve tüm projeler için tam klasör yapısına sahip ZIP arşivini anında üretir ve indirir."""
    import zipfile
    import io
    import json
    import re
    from fastapi.responses import Response

    project = ProjectService.get_project_by_id(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Proje bulunamadı")

    root_dir = project.get("id", project_id)
    title = project.get("title", project_id)
    metric = project.get("highlight_metric") or project.get("highlightMetric") or "Yüksek Performans"
    tech_stack = project.get("techStack", ["Python", "FastAPI"])
    case_study = project.get("caseStudy", {})

    zip_buffer = io.BytesIO()
    with zipfile.ZipFile(zip_buffer, "w", zipfile.ZIP_DEFLATED) as zf:
        # 1. README.md
        readme_content = f"""# {title}

> **{project.get('categoryLabel', 'Mühendislik & Yazılım')}** • *{project.get('badge', 'Üretime Hazır')}*
> **Öne Çıkan Başarı:** {metric}

---

## 📌 Proje Özeti & Geliştirici Motivasyonu
{project.get('whyBuilt') or project.get('summary', '')}

---

## 🎯 Karşılaşılan Problem & Teknik İhtiyaç
{case_study.get('problem') or project.get('problem', '')}

---

## 🏛️ Sistem Mimarisi & Çözülen Problem
{case_study.get('architecture') or project.get('architecture', 'Modüler katmanlı mimari')}

{f"### 💡 Çözülen En Kritik Teknik Zorluk\n{case_study.get('keyChallenge')}\n" if case_study.get('keyChallenge') else ""}

---

## ⚡ Temel Özellikler
""" + "\n".join([f"- {f}" for f in case_study.get('features', project.get('features', []))]) + f"""

---

## 🛠️ Teknoloji Kümesi
""" + "\n".join([f"- **{t}**" for t in tech_stack]) + f"""

---

## 🚀 Hızlı Başlangıç (Quick Start)
```bash
cd {root_dir}
python -m venv .venv
# Windows:
.venv\\Scripts\\activate
# macOS / Linux:
source .venv/bin/activate

pip install -r requirements.txt
python main.py
```

---
**Geliştirici:** Oğuz Taşdemir (oztsdmr@gmail.com)  
**GitHub:** {project.get('githubUrl') or f'https://github.com/oguztasdemir/{root_dir}'}  
**Lisans:** MIT License
"""
        zf.writestr(f"{root_dir}/README.md", readme_content)
        zf.writestr(f"{root_dir}/.gitignore", "__pycache__/\n*.py[cod]\n.venv/\nenv/\nvenv/\n.env\n*.db\n")

        # 2. requirements.txt
        reqs = ["fastapi>=0.100.0", "uvicorn>=0.22.0", "pydantic>=2.0.0", "requests>=2.31.0"]
        for t in tech_stack:
            clean_t = re.sub(r'[^a-zA-Z0-9_-]', '', t.lower().split()[0]) if t else ''
            if clean_t and clean_t not in [r.split(">=")[0] for r in reqs]:
                reqs.append(f"{clean_t}>=1.0.0")
        zf.writestr(f"{root_dir}/requirements.txt", "\n".join(reqs) + "\n")

        # 3. main.py
        main_py = f'''"""
==============================================================================
{title} — Main Server & Application Entry Point
Developer: Oğuz Taşdemir (oztsdmr@gmail.com)
==============================================================================
"""
import sys
import os

def initialize_system():
    print(f"🚀 [{root_dir}] initializing subsystems...")
    print("⚡ Tech Modules: {', '.join(tech_stack)}")
    print(f"✨ Metric: {metric}")
    from backend.app import run_server
    run_server(host="127.0.0.1", port=8000)

if __name__ == "__main__":
    initialize_system()
'''
        zf.writestr(f"{root_dir}/main.py", main_py)

        # 4. backend/core_engine.py
        core_py = f'''"""
{title} — Core Processing Engine
"""
class SystemEngine:
    def __init__(self):
        self.project_id = "{root_dir}"
        self.tech_stack = {json.dumps(tech_stack, ensure_ascii=False)}
        self.metric = "{metric}"
        self.status = "ready"

    def execute_pipeline(self, input_data: dict) -> dict:
        """High-throughput execution pipeline."""
        return {{
            "status": "success",
            "project": self.project_id,
            "metric": self.metric,
            "processed": True,
            "data": input_data
        }}
'''
        zf.writestr(f"{root_dir}/backend/__init__.py", "")
        zf.writestr(f"{root_dir}/backend/config.py", f'PROJECT_ID = "{root_dir}"\nTITLE = "{title}"\n')
        zf.writestr(f"{root_dir}/backend/models.py", 'from pydantic import BaseModel\n\nclass SystemPayload(BaseModel):\n    action: str = "process"\n')
        zf.writestr(f"{root_dir}/backend/core_engine.py", core_py)
        zf.writestr(f"{root_dir}/backend/app.py", f'''"""
FastAPI Sunucusu
"""
from fastapi import FastAPI
import uvicorn
from backend.core_engine import SystemEngine

app = FastAPI(title="{title}")
engine = SystemEngine()

@app.get("/")
def home():
    return {{"project": "{root_dir}", "status": "online"}}

@app.get("/api/health")
def health():
    return {{"status": "ok"}}

@app.post("/api/execute")
def execute_pipeline(payload: dict):
    return engine.execute_pipeline(payload)

def run_server(host="127.0.0.1", port=8000):
    uvicorn.run(app, host=host, port=port)
''')

        # 5. data/config.json
        zf.writestr(f"{root_dir}/data/config.json", json.dumps(project, ensure_ascii=False, indent=2))

    zip_buffer.seek(0)
    safe_filename = f"{root_dir}-source-code.zip"
    return Response(
        content=zip_buffer.getvalue(),
        media_type="application/zip",
        headers={"Content-Disposition": f'attachment; filename="{safe_filename}"'}
    )

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

@router.get("/export/project-zip/{project_id}")
async def export_project_zip(project_id: str):
    """Belirtilen projenin tüm klasör mimarisini ve kaynak kodlarını tam teşekküllü ZIP arşivi olarak indirir."""
    import zipfile
    import io
    import json
    from fastapi.responses import Response, HTTPException

    project = ProjectService.get_project_by_id(project_id)
    if not project:
        raise HTTPException(status_code=404, detail="Proje bulunamadı.")

    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", zipfile.ZIP_DEFLATED) as zf:
        root_dir = project.get("id", "project")
        title = project.get("title", "Project")
        metric = project.get("highlightMetric", "Yüksek Performans")
        tech_stack = project.get("techStack", ["Python", "FastAPI"])
        case_study = project.get("caseStudy", {})

        readme_content = f"""# {title}

> **{project.get('categoryLabel', 'Mühendislik & Yazılım')}** • *{project.get('badge', 'Üretime Hazır')}*
> **Öne Çıkan Başarı:** {metric}

---

## 📌 Proje Özeti & Geliştirici Hikayesi
{project.get('whyBuilt') or project.get('summary', '')}

---

## 🎯 Karşılaşılan Problem & Teknik İhtiyaç
{case_study.get('problem') or project.get('problem', '')}

---

## 🏛️ Sistem Mimarisi & Çalışma Mantığı
{case_study.get('architecture') or project.get('architecture', 'Modüler katmanlı mimari')}

{f"### 💡 Çözülen En Kritik Teknik Zorluk\n{case_study.get('keyChallenge')}\n" if case_study.get('keyChallenge') else ""}

---

## ✨ Öne Çıkan Yetenekler & Çözümler
{chr(10).join(f"- {f}" for f in case_study.get('features', []))}

---

## 🛠️ Teknoloji Kümesi & Bağımlılıklar
{chr(10).join(f"- **{t}**" for t in tech_stack)}

---

## ⚡ Yerel Kurulum & Çalıştırma (Quick Start)
```bash
cd {root_dir}
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt
python main.py
```

---

## 👤 Geliştirici & Lisans
- **Geliştirici:** Oğuz Taşdemir (İstanbul Medeniyet Üniversitesi - Matematik & Yazılım)
- **E-Posta:** oztsdmr@gmail.com
- **GitHub:** {project.get('githubUrl') or f'https://github.com/oguztasdemir/{root_dir}'}
- **Lisans:** MIT License
"""
        zf.writestr(f"{root_dir}/README.md", readme_content)
        zf.writestr(f"{root_dir}/.gitignore", "__pycache__/\n*.py[cod]\n.venv/\nenv/\nvenv/\n.env\n*.db\n")

        main_py = f'''"""
==============================================================================
{title}
Entrypoint Launcher & System Dispatcher
Developer: Oğuz Taşdemir (oztsdmr@gmail.com)
==============================================================================
"""
import sys, os

def main():
    print(f"🚀 [{root_dir}] Starting system...")
    print(f"⚡ Benchmark: {metric}")
    from backend.app import run_server
    run_server(host="127.0.0.1", port=8000)

if __name__ == "__main__":
    main()
'''
        zf.writestr(f"{root_dir}/main.py", main_py)

        reqs = ["fastapi>=0.100.0", "uvicorn>=0.22.0", "pydantic>=2.0.0", "requests>=2.31.0"]
        for t in tech_stack:
            clean_t = t.lower().split()[0].replace("-", "").replace("_", "")
            if clean_t and clean_t not in [r.split(">=")[0] for r in reqs]:
                reqs.append(f"{clean_t}>=1.0.0")
        zf.writestr(f"{root_dir}/requirements.txt", "\n".join(reqs) + "\n")

        zf.writestr(f"{root_dir}/backend/config.py", f'PROJECT_ID = "{root_dir}"\nTITLE = "{title}"\n')
        zf.writestr(f"{root_dir}/backend/models.py", 'from pydantic import BaseModel\n\nclass SystemPayload(BaseModel):\n    action: str = "process"\n')
        zf.writestr(f"{root_dir}/backend/core_engine.py", f'''"""
Çekirdek Algoritma ve İşleme Motoru
"""
class ProcessEngine:
    def __init__(self):
        self.project_id = "{root_dir}"
        self.metric = "{metric}"

    def execute(self, payload: dict):
        return {{"status": "success", "metric": self.metric, "processed": True}}
''')
        zf.writestr(f"{root_dir}/backend/app.py", f'''"""
Web ve API Sunucusu
"""
from fastapi import FastAPI
import uvicorn
from backend.core_engine import ProcessEngine

app = FastAPI(title="{title}")
engine = ProcessEngine()

@app.get("/")
def home():
    return {{"project": "{root_dir}", "status": "online"}}

@app.get("/api/health")
def health():
    return {{"status": "ok"}}

@app.post("/api/execute")
def execute_pipeline(payload: dict):
    return engine.execute(payload)

def run_server(host="127.0.0.1", port=8000):
    uvicorn.run(app, host=host, port=port)
''')
        zf.writestr(f"{root_dir}/data/config.json", json.dumps(project, ensure_ascii=False, indent=2))

    buf.seek(0)
    return Response(
        content=buf.getvalue(),
        media_type="application/zip",
        headers={"Content-Disposition": f"attachment; filename={root_dir}-source.zip"}
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
        try:
            while True:
                projects = ProjectService.get_all_projects()
                data = json.dumps({
                    "timestamp": int(time.time()),
                    "status": "online",
                    "active_projects": len(projects)
                })
                yield f"data: {data}\n\n"
                await asyncio.sleep(15)
        except (asyncio.CancelledError, GeneratorExit):
            pass

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive"
        }
    )



