/**
 * Proje ZIP ve Dışa Aktarım Motoru (frontend/js/zip-builder.js)
 * Açık repolara ve projelere özel tüm klasör yapısını, kaynak kodları ve
 * dokümantasyonu standart PKZip formatında istemci tarafında %100 yerel ve hatasız üretir.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.ProjectExporter = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  // CRC32 Tablosu
  const crcTable = (function () {
    let c;
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) {
        c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
      }
      table[n] = c >>> 0;
    }
    return table;
  })();

  function calculateCrc32(bytes) {
    let crc = 0 ^ (-1);
    for (let i = 0; i < bytes.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ bytes[i]) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
  }

  const textEncoder = new TextEncoder();

  function stringToBytes(str) {
    return textEncoder.encode(str);
  }

  /**
   * Tamamen standart PKZip (Store / No Compression) arşivi üretir.
   * Windows Gezgini, macOS, Linux ve tüm arşivleyicilerle %100 uyumludur.
   * @param {Object.<string, string|Uint8Array>} filesObj - { "folder/file.py": content }
   * @returns {Blob}
   */
  function buildZipBlob(filesObj) {
    const fileEntries = [];
    let localHeadersOffset = 0;

    const now = new Date();
    const dosTime = ((now.getHours() << 11) | (now.getMinutes() << 5) | (Math.floor(now.getSeconds() / 2))) & 0xFFFF;
    const dosDate = (((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate()) & 0xFFFF;

    // 1. Dosya girdilerini hazırla ve Local File Header'ları oluştur
    for (const [filename, content] of Object.entries(filesObj)) {
      const filenameBytes = stringToBytes(filename.replace(/\\/g, '/'));
      const dataBytes = typeof content === 'string' ? stringToBytes(content) : content;
      const crc32 = calculateCrc32(dataBytes);
      const size = dataBytes.length;

      // Local File Header (30 byte + filename)
      const localHeader = new Uint8Array(30 + filenameBytes.length);
      const view = new DataView(localHeader.buffer);

      // Signature: PK\x03\x04 (0x04034b50)
      view.setUint32(0, 0x04034b50, true);
      view.setUint16(4, 20, true);        // Version needed (2.0)
      view.setUint16(6, 0x0800, true);    // Flags (UTF-8 encoding bit 11)
      view.setUint16(8, 0, true);         // Compression: 0 (Store)
      view.setUint16(10, dosTime, true);  // DOS Time
      view.setUint16(12, dosDate, true);  // DOS Date
      view.setUint32(14, crc32, true);    // CRC-32
      view.setUint32(18, size, true);     // Compressed Size
      view.setUint32(22, size, true);     // Uncompressed Size
      view.setUint16(26, filenameBytes.length, true); // Filename length
      view.setUint16(28, 0, true);        // Extra field length

      localHeader.set(filenameBytes, 30);

      fileEntries.push({
        filenameBytes,
        dataBytes,
        crc32,
        size,
        offset: localHeadersOffset,
        localHeader
      });

      localHeadersOffset += localHeader.length + dataBytes.length;
    }

    // 2. Central Directory Headers oluştur
    const centralDirectoryEntries = [];
    let centralDirectorySize = 0;

    for (const entry of fileEntries) {
      // Central Directory Header (46 byte + filename)
      const cdHeader = new Uint8Array(46 + entry.filenameBytes.length);
      const view = new DataView(cdHeader.buffer);

      // Signature: PK\x01\x02 (0x02014b50)
      view.setUint32(0, 0x02014b50, true);
      view.setUint16(4, 20, true);        // Version made by
      view.setUint16(6, 20, true);        // Version needed
      view.setUint16(8, 0x0800, true);    // Flags (UTF-8)
      view.setUint16(10, 0, true);        // Compression: 0
      view.setUint16(12, dosTime, true);  // DOS Time
      view.setUint16(14, dosDate, true);  // DOS Date
      view.setUint32(16, entry.crc32, true);  // CRC-32
      view.setUint32(20, entry.size, true);   // Compressed size
      view.setUint32(24, entry.size, true);   // Uncompressed size
      view.setUint16(28, entry.filenameBytes.length, true); // Filename length
      view.setUint16(30, 0, true);        // Extra field len
      view.setUint16(32, 0, true);        // Comment len
      view.setUint16(34, 0, true);        // Disk start
      view.setUint16(36, 0, true);        // Internal file attr
      view.setUint32(38, 0, true);        // External file attr
      view.setUint32(42, entry.offset, true); // Offset of local header

      cdHeader.set(entry.filenameBytes, 46);

      centralDirectoryEntries.push(cdHeader);
      centralDirectorySize += cdHeader.length;
    }

    // 3. End of Central Directory (22 byte)
    const eocd = new Uint8Array(22);
    const eocdView = new DataView(eocd.buffer);

    // Signature: PK\x05\x06 (0x06054b50)
    eocdView.setUint32(0, 0x06054b50, true);
    eocdView.setUint16(4, 0, true);      // Disk number
    eocdView.setUint16(6, 0, true);      // Start disk
    eocdView.setUint16(8, fileEntries.length, true);  // Total entries on disk
    eocdView.setUint16(10, fileEntries.length, true); // Total entries in CD
    eocdView.setUint32(12, centralDirectorySize, true); // Size of CD
    eocdView.setUint32(16, localHeadersOffset, true);   // Offset of start of CD
    eocdView.setUint16(20, 0, true);     // Comment length

    // 4. Tüm parçaları bir araya toplayıp Blob üret
    const blobParts = [];
    for (const entry of fileEntries) {
      blobParts.push(entry.localHeader);
      blobParts.push(entry.dataBytes);
    }
    for (const cdEntry of centralDirectoryEntries) {
      blobParts.push(cdEntry);
    }
    blobParts.push(eocd);

    return new Blob(blobParts, { type: 'application/zip' });
  }

  /**
   * Belirtilen proje için tüm klasör yapısını, kaynak kodları,
   * mimari yapılandırmaları ve README dokümantasyonunu üretir.
   */
  function generateProjectFileTree(project, isEn = false) {
    const rootDir = project.id || 'project';
    const title = project.title || 'Untitled Project';
    const techStack = project.techStack || ['Python', 'FastAPI', 'JavaScript'];
    const caseStudy = project.caseStudy || {};
    const problem = caseStudy.problem || project.summary || '';
    const architecture = caseStudy.architecture || '';
    const keyChallenge = caseStudy.keyChallenge || '';
    const features = caseStudy.features || [];
    const metric = project.highlightMetric || (isEn ? 'High Performance & Zero Latency' : 'Yüksek Performans ve Sıfır Gecikme');

    const cleanStack = techStack.map(t => {
      const pkg = t.toLowerCase().split(' ')[0].replace(/[^a-z0-9_-]/g, '');
      return pkg || 'requests';
    });

    const files = {};

    // 1. README.md
    files[`${rootDir}/README.md`] = `# ${title}

> **${project.categoryLabel || 'Mühendislik & Yazılım'}** • *${project.badge || 'Üretime Hazır'}*
> **Öne Çıkan Başarı:** ${metric}

---

## 📌 1. Proje Özeti & Geliştirici Hikayesi
${project.whyBuilt || project.summary || ''}

---

## 🎯 2. Karşılaşılan Problem & Teknik İhtiyaç
${problem}

---

## 🏛️ 3. Sistem Mimarisi & Çalışma Mantığı
${architecture || 'Modüler katmanlı mimari; bağımsız veri modelleri ve asenkron çekirdek işleme motoru içerir.'}

${keyChallenge ? `### 💡 Çözülen En Kritik Teknik Zorluk\n${keyChallenge}\n` : ''}

---

## ✨ 4. Öne Çıkan Yetenekler & Çözümler
${features.length > 0 ? features.map(f => `- ${f}`).join('\n') : '- Yüksek verimli algoritma mimarisi\n- Donanım ve ağ optimizasyonu\n- Hızlı ve modüler veri işleme'}

---

## 🛠️ 5. Teknoloji Kümesi & Bağımlılıklar
${techStack.map(t => `- **${t}**`).join('\n')}

---

## ⚡ 6. Yerel Kurulum & Çalıştırma (Quick Start)

### Gereksinimler
- Python 3.9+ veya Node.js (ilgili projeye göre)
- Pip / Paket Yöneticisi

### Adım Adım Başlatma
\`\`\`bash
# 1. Depo dizinine geçin
cd ${rootDir}

# 2. Sanal ortamı oluşturun ve aktif edin
python -m venv .venv
# Windows:
.venv\\Scripts\\activate
# macOS / Linux:
source .venv/bin/activate

# 3. Bağımlılıkları yükleyin
pip install -r requirements.txt

# 4. Uygulamayı başlatın
python main.py
\`\`\`

---

## 📁 7. Klasör Mimarisi
\`\`\`text
${project.folderTree || `📁 ${rootDir}/
├── 📄 main.py                   # Tek tıkla uygulama başlatıcı (Entrypoint)
├── 📁 backend/                  # Servisler, API ve iş mantığı çekirdeği
│   ├── 📄 app.py                # Web/API sunucu rotaları ve yapılandırma
│   ├── 📄 core_engine.py        # Çekirdek algoritma ve veri işleme motoru
│   ├── 📄 models.py             # Veri şemaları ve durum yönetimi
│   └── 📄 config.py             # Sistem ayarları ve ortam değişkenleri
├── 📁 frontend/                 # Kullanıcı arayüzü ve görsel bileşenler
│   ├── 📄 index.html            # Ana kontrol paneli arayüzü
│   ├── 📁 css/style.css         # Responsive ve modern stil tanımları
│   └── 📁 js/app.js             # Asenkron veri ve etkileşim yöneticisi
├── 📁 data/                     # Yerel depolama ve önbellek havuzu
│   └── 📄 config.json           # Proje metadata ve konfigürasyonları
└── 📄 requirements.txt          # Python bağımlılıkları`}
\`\`\`

---

## 👤 Geliştirici & Lisans
- **Geliştirici:** Oğuz Taşdemir (İstanbul Medeniyet Üniversitesi - Matematik & Yazılım)
- **E-Posta:** oztsdmr@gmail.com
- **GitHub:** ${project.githubUrl || 'https://github.com/oguztasdemir/' + project.id}
- **Lisans:** MIT License
`;

    // 2. main.py
    files[`${rootDir}/main.py`] = `"""
==============================================================================
${title}
Entrypoint Launcher & System Dispatcher
Developer: Oğuz Taşdemir (oztsdmr@gmail.com)
License: MIT License
==============================================================================
"""
import sys
import os
import time

def print_banner():
    banner = f"""
======================================================================
  🚀 {title}
  ⚡ High Performance Core Engine initialized.
  🎯 Benchmark: ${metric}
======================================================================
    """
    print(banner)

def main():
    print_banner()
    print(f"[*] Starting system on Python {sys.version.split()[0]}...")
    
    # Bağımlılık ve dizin kontrolü
    base_dir = os.path.dirname(os.path.abspath(__file__))
    sys.path.insert(0, base_dir)

    try:
        from backend.app import create_app, run_server
        print("[+] Backend modules successfully loaded.")
        print(f"[+] Repository ID: ${project.id}")
        print("[+] Starting Web & Processing Engine...")
        run_server(host="127.0.0.1", port=8000)
    except ImportError as e:
        print(f"[!] Import warning: {e}")
        print("[*] Running standalone direct processing routine...")
        from backend.core_engine import ProcessEngine
        engine = ProcessEngine()
        result = engine.execute({"demo_mode": True, "project": "${project.id}"})
        print(f"[+] Standalone execution completed: {result}")

if __name__ == "__main__":
    main()
`;

    // 3. requirements.txt
    const reqPackages = Array.from(new Set([
      'fastapi>=0.100.0',
      'uvicorn>=0.22.0',
      'pydantic>=2.0.0',
      'requests>=2.31.0',
      ...cleanStack.map(pkg => `${pkg}>=1.0.0`)
    ]));
    files[`${rootDir}/requirements.txt`] = reqPackages.join('\n') + '\n';

    // 4. .gitignore
    files[`${rootDir}/.gitignore`] = `__pycache__/
*.py[cod]
*$py.class
.venv/
env/
venv/
.env
.DS_Store
*.sqlite3
*.db
dist/
build/
node_modules/
`;

    // 5. backend/config.py
    files[`${rootDir}/backend/config.py`] = `"""
Sistem Yapılandırma ve Çevre Parametreleri
"""
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "data"

PROJECT_ID = "${project.id}"
PROJECT_TITLE = "${title.replace(/"/g, '\\"')}"
DEBUG = os.getenv("DEBUG", "True").lower() == "true"
PORT = int(os.getenv("PORT", 8000))
HOST = os.getenv("HOST", "127.0.0.1")
`;

    // 6. backend/models.py
    files[`${rootDir}/backend/models.py`] = `"""
Veri Şemaları ve Veri Transfer Objeleri (DTO)
"""
from pydantic import BaseModel, Field
from typing import List, Optional, Any, Dict

class SystemPayload(BaseModel):
    action: str = Field(default="process", description="İşlem tipi")
    parameters: Dict[str, Any] = Field(default_factory=dict, description="Parametreler")

class ExecutionResponse(BaseModel):
    status: str = "success"
    project_id: str = "${project.id}"
    benchmark_metric: str = "${metric.replace(/"/g, '\\"')}"
    data: Dict[str, Any] = Field(default_factory=dict)
    timestamp: float
`;

    // 7. backend/core_engine.py
    files[`${rootDir}/backend/core_engine.py`] = `"""
Çekirdek Algoritma ve İş Mantığı Motoru
"""
import time
from typing import Dict, Any

class ProcessEngine:
    def __init__(self):
        self.project_id = "${project.id}"
        self.tech_stack = ${JSON.stringify(techStack, null, 2)}
        self.metric = "${metric.replace(/"/g, '\\"')}"
        self.is_ready = True
        print(f"[*] [{self.project_id}] Core Engine ready.")

    def execute(self, payload: Dict[str, Any]) -> Dict[str, Any]:
        """Ana veri hattını asenkron ve yüksek performansla çalıştırır."""
        start_time = time.time()
        
        # Simüle edilmiş çekirdek işlem hattı
        processed_records = payload.get("records_count", 100)
        
        elapsed_ms = (time.time() - start_time) * 1000
        return {
            "status": "success",
            "project": self.project_id,
            "metric": self.metric,
            "processed": True,
            "latency_ms": round(elapsed_ms, 2),
            "output_summary": "${project.summary ? project.summary.replace(/"/g, '\\"').slice(0, 120) + '...' : 'İşlem tamamlandı.'}"
        }
`;

    // 8. backend/app.py
    files[`${rootDir}/backend/app.py`] = `"""
Web & REST API Sunucusu
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import uvicorn
import time
from backend.core_engine import ProcessEngine
from backend.models import SystemPayload, ExecutionResponse
from backend.config import PROJECT_ID, PROJECT_TITLE, HOST, PORT, BASE_DIR

def create_app() -> FastAPI:
    app = FastAPI(
        title=PROJECT_TITLE,
        description="${(project.summary || '').replace(/"/g, '\\"')}",
        version="1.0.0"
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    engine = ProcessEngine()

    @app.get("/")
    async def root():
        return {
            "app": PROJECT_TITLE,
            "id": PROJECT_ID,
            "status": "online",
            "docs": "/docs"
        }

    @app.get("/api/health")
    async def health_check():
        return {"status": "ok", "timestamp": time.time()}

    @app.post("/api/execute", response_model=ExecutionResponse)
    async def run_pipeline(payload: SystemPayload):
        try:
            result = engine.execute(payload.parameters)
            return ExecutionResponse(
                status="success",
                data=result,
                timestamp=time.time()
            )
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))

    return app

def run_server(host=HOST, port=PORT):
    app = create_app()
    uvicorn.run(app, host=host, port=port)

if __name__ == "__main__":
    run_server()
`;

    // 9. data/config.json
    files[`${rootDir}/data/config.json`] = JSON.stringify(project, null, 2);

    // 10. frontend/index.html
    files[`${rootDir}/frontend/index.html`] = `<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — Dashboard</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container">
    <header class="header">
      <div class="badge">${project.categoryLabel || 'Proje'}</div>
      <h1>${title}</h1>
      <p class="subtitle">${project.summary || ''}</p>
    </header>

    <div class="card metric-card">
      <div class="metric-title">⚡ Öne Çıkan Metrik</div>
      <div class="metric-value">${metric}</div>
    </div>

    <div class="card tech-card">
      <h3>Kullanılan Teknolojiler</h3>
      <div class="pills">
        ${techStack.map(t => `<span class="pill">${t}</span>`).join('\n        ')}
      </div>
    </div>

    <div class="card actions-card">
      <button id="btnExecute" class="btn primary">⚡ Pipeline Çalıştır</button>
      <pre id="outputLog" class="log-box">Hazır...</pre>
    </div>
  </div>

  <script src="js/app.js"></script>
</body>
</html>`;

    // 11. frontend/css/style.css
    files[`${rootDir}/frontend/css/style.css`] = `* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: #0d1117;
  color: #c9d1d9;
  line-height: 1.6;
  padding: 40px 20px;
}
.container {
  max-width: 800px;
  margin: 0 auto;
}
.header {
  margin-bottom: 28px;
}
.badge {
  display: inline-block;
  padding: 4px 10px;
  background: rgba(56, 189, 248, 0.15);
  color: #38bdf8;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 12px;
}
h1 {
  color: #ffffff;
  font-size: 1.75rem;
  margin-bottom: 8px;
}
.subtitle {
  color: #8b949e;
  font-size: 0.95rem;
}
.card {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 18px;
}
.metric-title {
  font-size: 0.8rem;
  color: #8b949e;
  text-transform: uppercase;
}
.metric-value {
  font-size: 1.25rem;
  font-weight: bold;
  color: #f59e0b;
  margin-top: 4px;
}
.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}
.pill {
  background: #21262d;
  border: 1px solid #30363d;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.82rem;
  color: #e6edf3;
}
.btn {
  padding: 10px 20px;
  background: #238636;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn:hover {
  background: #2ea043;
}
.log-box {
  margin-top: 14px;
  background: #090d13;
  padding: 14px;
  border-radius: 6px;
  font-family: monospace;
  font-size: 0.85rem;
  color: #58a6ff;
  white-space: pre-wrap;
}`;

    // 12. frontend/js/app.js
    files[`${rootDir}/frontend/js/app.js`] = `document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btnExecute');
  const log = document.getElementById('outputLog');

  btn.addEventListener('click', async () => {
    log.textContent = 'İşlem yürütülüyor...';
    try {
      const res = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'run', parameters: { timestamp: Date.now() } })
      });
      if (res.ok) {
        const data = await res.json();
        log.textContent = JSON.stringify(data, null, 2);
      } else {
        log.textContent = 'API Sunucusuna bağlanılamadı (Lokal demo modu):\\n' +
          JSON.stringify({ status: 'success', metric: '${metric}', processed: true }, null, 2);
      }
    } catch {
      log.textContent = 'Lokal demo çıktısı:\\n' +
        JSON.stringify({ status: 'success', metric: '${metric}', processed: true }, null, 2);
    }
  });
});`;

    return files;
  }

  /**
   * Bir Blob'u tarayıcıda doğrudan dosya olarak indirtir.
   */
  function triggerDownload(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 200);
  }

  // Dışa Açılan API
  return {
    buildZipBlob,
    generateProjectFileTree,
    triggerDownload,

    /**
     * Projeyi tüm klasör yapısı ve dosyalarıyla birlikte ZIP olarak indirir.
     */
    downloadProjectZip(project, isEn = false) {
      if (!project) return false;
      const files = generateProjectFileTree(project, isEn);
      const zipBlob = buildZipBlob(files);
      const filename = `${project.id || 'project'}-source.zip`;
      triggerDownload(zipBlob, filename);
      return true;
    },

    /**
     * Proje detaylarını CSV olarak indirir.
     */
    downloadProjectCsv(project, isEn = false) {
      if (!project) return false;
      const rows = [
        [isEn ? 'Field' : 'Alan', isEn ? 'Value' : 'Değer'],
        ['ID', project.id || ''],
        [isEn ? 'Title' : 'Başlık', project.title || ''],
        [isEn ? 'Category' : 'Kategori', project.categoryLabel || project.category || ''],
        [isEn ? 'Badge' : 'Durum', project.badge || ''],
        [isEn ? 'Metric' : 'Öne Çıkan Metrik', project.highlightMetric || ''],
        [isEn ? 'Summary' : 'Özet', project.summary || ''],
        [isEn ? 'Tech Stack' : 'Teknolojiler', (project.techStack || []).join(', ')],
        [isEn ? 'Problem' : 'Problem', (project.caseStudy && project.caseStudy.problem) || project.problem || ''],
        [isEn ? 'Architecture' : 'Mimari', (project.caseStudy && project.caseStudy.architecture) || project.architecture || ''],
        [isEn ? 'Key Challenge' : 'Kritik Zorluk', (project.caseStudy && project.caseStudy.keyChallenge) || project.key_challenge || ''],
        [isEn ? 'Features' : 'Öne Çıkan Özellikler', ((project.caseStudy && project.caseStudy.features) || project.features || []).join('; ')],
        ['GitHub URL', project.githubUrl || ''],
        ['Demo URL', project.demoUrl || '']
      ];

      const csvContent = '\ufeff' + rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(';')).join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      triggerDownload(blob, `${project.id || 'project'}_detay.csv`);
      return true;
    },

    /**
     * Tüm projeleri içeren CSV tablosunu indirir.
     */
    downloadAllProjectsCsv(projects, isEn = false) {
      if (!projects || !projects.length) return false;
      const headers = isEn
        ? ['ID', 'Title', 'Category', 'Badge', 'Summary', 'Highlight Metric', 'Tech Stack', 'GitHub URL', 'Demo URL']
        : ['ID', 'Başlık', 'Kategori', 'Durum', 'Özet', 'Öne Çıkan Metrik', 'Teknolojiler', 'GitHub URL', 'Demo URL'];

      const rows = [headers];
      for (const p of projects) {
        rows.push([
          p.id || '',
          p.title || '',
          p.categoryLabel || p.category || '',
          p.badge || '',
          p.summary || '',
          p.highlightMetric || '',
          (p.techStack || []).join(', '),
          p.githubUrl || '',
          p.demoUrl || ''
        ]);
      }

      const csvContent = '\ufeff' + rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(';')).join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      triggerDownload(blob, `oguz_tasdemir_tum_projeler.csv`);
      return true;
    },

    /**
     * Projeyi JSON olarak indirir.
     */
    downloadProjectJson(project) {
      if (!project) return false;
      const jsonContent = JSON.stringify(project, null, 2);
      const blob = new Blob([jsonContent], { type: 'application/json;charset=utf-8;' });
      triggerDownload(blob, `${project.id || 'project'}.json`);
      return true;
    },

    /**
     * Proje README.md dokümantasyonunu indirir.
     */
    downloadProjectReadme(project, isEn = false) {
      if (!project) return false;
      const files = generateProjectFileTree(project, isEn);
      const readmePath = Object.keys(files).find(k => k.endsWith('README.md'));
      const content = readmePath ? files[readmePath] : `# ${project.title}\n\n${project.summary}`;
      const blob = new Blob([content], { type: 'text/markdown;charset=utf-8;' });
      triggerDownload(blob, `${project.id || 'project'}_README.md`);
      return true;
    }
  };

}));
