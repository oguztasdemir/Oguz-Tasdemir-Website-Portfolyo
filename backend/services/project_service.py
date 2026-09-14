"""
Proje Veri Servisi (Data Access Layer)
data/projects/*.json klasöründeki her bağımsız proje dosyasını dinamik olarak okur,
arama ve filtreleme sunar.
"""
import json
from pathlib import Path
from typing import List, Optional
from backend.config import DATA_DIR

PROJECTS_DIR = DATA_DIR / "projects"

class ProjectService:
    @staticmethod
    def _read_all_from_folder() -> List[dict]:
        """data/projects/ klasöründeki her ayrı .json dosyasını sırayla okur."""
        if not PROJECTS_DIR.exists():
            return []
        
        projects = []
        for file_path in sorted(PROJECTS_DIR.glob("*.json")):
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if isinstance(data, dict) and "id" in data:
                        projects.append(data)
            except Exception:
                continue

        # Lisans Tezi projesini (bist-bilanco-karlilik-tahmini) listenin en başına taşı
        tez_project = next((p for p in projects if p.get("id") == "bist-bilanco-karlilik-tahmini"), None)
        if tez_project:
            projects = [tez_project] + [p for p in projects if p.get("id") != "bist-bilanco-karlilik-tahmini"]

        return projects

    @staticmethod
    def get_all_projects(category: Optional[str] = None, search: Optional[str] = None, visibility: Optional[str] = None) -> List[dict]:
        # Doğrudan data/projects/*.json klasöründen oku
        projects = ProjectService._read_all_from_folder()

        # Görünürlük filtresi (public / private)
        if visibility and visibility != "all":
            projects = [p for p in projects if p.get("visibility", "public") == visibility]

        # Kategori filtresi (Net ve kesin 1-e-1 eşleşme)
        if category and category != "all":
            if category in ["nlp_data", "ai"]:
                projects = [p for p in projects if p.get("category") in ["nlp_data", "ai"]]
            else:
                projects = [p for p in projects if p.get("category") == category]

        # Metin araması
        if search:
            q = search.lower().strip()
            projects = [
                p for p in projects
                if q in p.get("title", "").lower()
                or q in p.get("summary", "").lower()
                or any(q in t.lower() for t in p.get("techStack", []))
            ]

        return projects

    @staticmethod
    def get_project_by_id(project_id: str) -> Optional[dict]:
        # 1. Doğrudan dosya adı kontrolü (case-sensitive)
        single_file = PROJECTS_DIR / f"{project_id}.json"
        if single_file.exists():
            try:
                with open(single_file, "r", encoding="utf-8") as f:
                    return json.load(f)
            except Exception:
                pass

        # 2. Case-insensitive dosya adı kontrolü
        target_lower = f"{project_id.lower()}.json"
        for f in PROJECTS_DIR.glob("*.json"):
            if f.name.lower() == target_lower:
                try:
                    with open(f, "r", encoding="utf-8") as file:
                        return json.load(file)
                except Exception:
                    pass

        # 3. Yüklenen tüm projeler içinde id eşleştirmesi
        all_p = ProjectService.get_all_projects()
        pid_clean = project_id.lower().replace("-", "").replace("_", "")
        for p in all_p:
            p_id = str(p.get("id", "")).lower()
            if p_id == project_id.lower() or p_id.replace("-", "").replace("_", "") == pid_clean:
                return p
        return None
