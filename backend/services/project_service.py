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
        """data/projects/ klasöründeki her ayrı .json dosyasını okur ve mühendislik ağırlığına göre sıralar."""
        if not PROJECTS_DIR.exists():
            return []
        
        # Mülakat & Mühendislik Ağırlıklı Sıralama
        PRIORITY_ORDER = [
            # 1. Flagship / Akademik Tez & Gerçek Saha Sistemleri
            "bist-bilanco-karlilik-tahmini",   # 1. Lisans Bitirme Tezi (FinTech & ML)
            "OYMAPOS-Barkod-Sistemi",          # 2. OymaPOS (Saha Kullanımı & FinTech)
            "cortex",                          # 3. Cortex (Yerel AI, RAG & IDE)
            "portfolio-console",               # 4. İnteraktif Sistem Mimarisi & Mühendislik Konsolu (Bu Portfolyo)
            "Kredi-Notu-Siniflandirmasi-Tahmin-Modeli", # 5. Kredi Notu Risk Tahmini (ML)
            "webtoon-lora-suite",              # 6. Webtoon Hikaye & LoRA Hattı (CV & ML)
            "Airdrop-Local",                   # 6. Local Drop (Ağ & Sistem)
            "cortex-planner",                  # 7. CorPlanner (DAG & Görev Motoru)
            "Disk-Kurtarma-Araci",             # 8. Win32 Raw Carving & Adli Bilişim
            "crypto-analytics-engine",         # 9. Kripto Analiz & AI Persona Motoru
            "hyperbeam-browser",               # 10. CoBrowser (Sanal Tarayıcı Odası)
            "Oymapos-Etiket-Yazdirici",        # 11. OymaPOS Dinamik Raf Yazdırıcı
            "fatura-odeal",                    # 12. Ödeal e-Fatura Otomasyonu
            "ai-image-studio",                 # 13. Yerel AI Görsel Üretim Stüdyosu
            "ui-test-automation",              # 14. Otonom Arayüz & Test Motoru
            "youtube-ai-assistant",            # 15. YouTube Transkript Analiz Motoru
            "Hugging-face-Downloader",          # 16. HuggingFace Model İndirici
            "Akademik-Ingilizce",              # 17. NLP Sınav Kelime Kampı
            "KPSS-Sinav-Hazirlik",             # 18. KPSS Lisans Hazırlık Platformu
            "Soru-Uygulamasi",                 # 19. PWA Sınav Çözüm Platformu
            "altyapi-manager",                 # 20. Spor Kulübü Taktik & Oyuncu Yönetimi
            "Telegram-Media-Hub",              # 21. Telegram Medya Arşiv Yöneticisi
            "cache-cleaner",                   # 22. Geliştirici Disk Temizleme
            "Gardrops-Otomasyon-Botu",         # 23. Pazaryeri Otomasyonu (2022)
            "EA-FIFA-Fikstur",                 # 24. Turnuva & Fikstür Motoru
            "NC-Codes"                         # 25. Transformice Lua Script Paketi (2013)
        ]

        projects_dict = {}
        for file_path in PROJECTS_DIR.glob("*.json"):
            try:
                with open(file_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    if isinstance(data, dict) and "id" in data:
                        projects_dict[data["id"]] = data
            except Exception:
                continue

        ordered_projects = []
        # Önce belirlenen ağırlıklı sıra
        for p_id in PRIORITY_ORDER:
            if p_id in projects_dict:
                ordered_projects.append(projects_dict.pop(p_id))

        # Listede belirtilmeyen yeni bir dosya varsa sona ekle
        for remaining_p in projects_dict.values():
            ordered_projects.append(remaining_p)

        return ordered_projects

    @staticmethod
    def get_all_projects(category: Optional[str] = None, search: Optional[str] = None, visibility: Optional[str] = None) -> List[dict]:
        # Doğrudan data/projects/*.json klasöründen oku
        projects = ProjectService._read_all_from_folder()

        # Görünürlük / Canlı Dağıtım filtresi (public / private / live)
        if visibility and visibility != "all":
            if visibility == "live":
                projects = [p for p in projects if p.get("demoUrl")]
            else:
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
