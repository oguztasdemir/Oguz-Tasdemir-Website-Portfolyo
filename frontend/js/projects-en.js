/**
 * English Translations for All 25 Projects (frontend/js/projects-en.js)
 * Full English mapping for titles, categories, badges, metrics, stories, case studies, and flow steps.
 */

window.PROJECTS_EN_DATA = {
  "bist-bilanco-karlilik-tahmini": {
    title: "Borsa Istanbul (BIST) Quarterly Balance Sheet Profitability & Net Income Forecast System",
    categoryLabel: "Academic & Thesis",
    badge: "B.Sc. Graduation Thesis",
    summary: "B.Sc. Graduation Thesis at Istanbul Medeniyet University, Mathematics Department. An autonomous decision-support system aggregating 10-year (2016–2025) quarterly financial statements of 612 BIST companies, deflating TL inflation via central bank exchange rates (dollarization), and forecasting profit direction (68.8%) and net profit/loss (79.5%) across 7 core sectors using machine learning.",
    highlightMetric: "🎯 79.5% Net Income Accuracy, 612 Companies & 10-Year Data",
    whyStory: "My B.Sc. graduation thesis at Istanbul Medeniyet University, Department of Mathematics. In Turkey's high-inflation environment, nominal TL-based balance sheets produce misleading profit spikes that mask actual operational health. I constructed a dollarized financial pipeline using daily central bank rates, processed 10 years of quarterly statements from 612 BIST firms, and mathematically modeled profit direction weeks before official disclosures on the Public Disclosure Platform (KAP).",
    problem: "Financial reports of BIST companies contain hundreds of noisy financial ratios, and high domestic inflation creates artificial TL profit increases that disguise actual corporate growth. Traditional ratio analysis fails to objectively forecast future profitability. My thesis deflates financial statements across 10 years and accurately forecasts profit direction prior to official disclosures through an interactive decision-support web platform.",
    architecture: "The engineering architecture consists of 8 sequential phases and an integrated Flask web workspace:\n1) Autonomous Data Harvester: Quarterly reports of 612 BIST firms from 2016 to 2025 were collected with zero manual intervention.\n2) Dollarization & Alignment: All financials were converted to USD using daily central bank rates to eliminate inflation distortion.\n3) Feature Engineering & Selection: Applied Variance Threshold, Pearson Correlation, and VIF multicollinearity filters to isolate the most predictive indicators, boosting accuracy by 5% to 18%.\n4) 7 Sector-Specific Models: Trained dedicated CatBoost, LightGBM, and Random Forest models across Manufacturing (80.6%), Finance (80.1%), Real Estate (76.6%), Tech (80.8%), Energy (78.8%), Food (79.9%), and Retail (79.6%).\n5) Web Decision Console: Interactive Flask dashboard providing explainable predictions, peer comparisons, and historical trend charts.",
    keyChallenge: "Severe multicollinearity across hundreds of financial indicators and deceptive TL currency fluctuations. Resolved via VIF multicollinearity elimination, sector clustering, and time-series cross-validation, increasing model accuracy from 68.5% to 81.4% over progressive time horizons.",
    features: [
      "10-year (2016–2025) quarterly balance sheet depth across 612 BIST companies",
      "USD-based inflation adjustment using daily central bank currency rates",
      "Specialized machine learning models trained across 7 major sector clusters",
      "79.5% Profit/Loss and 68.8% Profit Trend Direction accuracy across BIST",
      "Explainable AI decision console with sectoral competitor benchmarking"
    ],
    pipelineSteps: [
      { num: "01", title: "Data Harvesting & Dollarization", desc: "Central Bank Rates & KAP", detail: "Extracts quarterly balance sheets and converts them to USD to remove inflation bias." },
      { num: "02", title: "Feature Selection & VIF", desc: "Financial Ratios", detail: "Scans leverage, gross margin, and quarterly growth metrics while eliminating collinear noise." },
      { num: "03", title: "Predictive Modeling", desc: "Machine Learning", detail: "Forecasts profit direction and net income weeks before official regulatory disclosure." },
      { num: "04", title: "Decision Dashboard", desc: "Profitability Verification", detail: "Provides investors and analysts with clear, explainable decision matrices." }
    ]
  },

  "oymapos-barkod-sistemi": {
    title: "OymaPOS — Retail Barcode POS & Inventory Management System",
    categoryLabel: "FinTech & POS",
    badge: "In Active Production",
    summary: "Engineered after commercial POS software repeatedly froze and caused long queues during evening peak hours in our family-run grocery store. A hardened desktop POS system communicating directly with barcode scanners and ESC/POS thermal printers with SQLite WAL zero-lock concurrency.",
    highlightMetric: "⚡ 80ms Receipt Printing & Zero Data Loss",
    whyStory: "Developed for our family-run grocery store after commercial POS software repeatedly froze at checkout during peak evening hours, causing long customer queues. I engineered a lightweight desktop POS system that communicates directly with barcode scanners and ESC/POS thermal receipt printers using SQLite WAL mode to guarantee zero database locks even during power outages.",
    problem: "Commercial retail POS systems suffer from high CPU bloat, sluggish search response, and crash-prone database locks during concurrent barcode scanning and receipt cutting. When internet connections drop, cloud-reliant POS software halts transactions, disrupting store checkout.",
    architecture: "Built with Python, lightweight UI webview, and SQLite in WAL (Write-Ahead Logging) mode. Reads barcode inputs via low-latency serial/USB hooks, queries local cached product indices in sub-millisecond time, and sends raw byte buffers directly to ESC/POS thermal printers via hardware ports.",
    keyChallenge: "Preventing UI lockups and SQLite database write contention during high-speed sequential barcode reading. Resolved by employing SQLite WAL journal mode with separate asynchronous writer threads.",
    features: [
      "Sub-80ms thermal receipt printing via direct ESC/POS hardware buffer",
      "100% offline functionality with zero reliance on cloud connectivity",
      "SQLite WAL concurrency ensuring zero database locks during peak sales",
      "Instant barcode scanner and numpad rapid hotkey workflow",
      "Comprehensive inventory tracking, daily cash register reconciliation, and profit analytics"
    ],
    pipelineSteps: [
      { num: "01", title: "Barcode Scan / Input", desc: "USB Scanner & Numpad", detail: "Captures product barcode digits in sub-milliseconds without UI lag." },
      { num: "02", title: "Memory & Inventory Check", desc: "SQLite WAL Database", detail: "Queries cached product price and stock instantaneously without table locks." },
      { num: "03", title: "Transaction & Journal Commit", desc: "Zero Data Loss", detail: "Safely writes the sale to disk even in the event of sudden power cuts." },
      { num: "04", title: "Direct Thermal Printing", desc: "ESC/POS Raw Stream", detail: "Sends raw print bytes directly to the thermal printer port in 80ms." }
    ]
  },

  "cortex": {
    title: "Cortex — Local AI Coding Assistant & AST Code Analyzer IDE",
    categoryLabel: "AI & NLP",
    badge: "Air-Gapped & Secure",
    summary: "A private, 100% air-gapped developer workspace running local LLMs via Ollama/Llama.cpp. Combines Tree-Sitter AST code parsing, hierarchical ChromaDB RAG, and an embedded Monaco Editor for zero-leakage code refactoring and technical documentation querying.",
    highlightMetric: "🧠 Multi-Modal RAG, Code Indexing & Local IDE",
    whyStory: "Engineered to eliminate the risk of leaking proprietary codebase logic or confidential technical PDFs to third-party cloud APIs. I built a private developer environment running on local GPUs/CPUs that performs AST-level code parsing, embeds documents into ChromaDB vector memory, and streams context-aware answers into an embedded Monaco editor without ever touching the public internet.",
    problem: "Commercial AI coding tools require uploading proprietary source code and confidential documentation to external cloud servers, violating data security compliance and presenting recurring API subscription costs.",
    architecture: "Executes quantized DeepSeek, Qwen, and Llama-3 models locally via Ollama/Llama.cpp. Employs Tree-Sitter for AST-level code symbol extraction and ChromaDB for dense document embeddings. Streams tokens through FastAPI Server-Sent Events (SSE) directly into an embedded Monaco editor with live diff capabilities.",
    keyChallenge: "Bridging diverse data modalities (AST code structures and long-form PDF manuals) within a single unified vector space. Solved with hybrid dense-sparse search and AST-aware semantic reranking.",
    features: [
      "100% offline, air-gapped operation with zero external data telemetry",
      "Tree-Sitter AST parser extracting functions, classes, and dependency graphs",
      "ChromaDB local vector memory for instant semantic code indexing",
      "Integrated Monaco Editor with syntax highlighting and diff viewers",
      "Multi-model support for local Ollama and GGUF quantization runtimes"
    ],
    pipelineSteps: [
      { num: "01", title: "Project Folder Selection", desc: "Local Code Repository", detail: "Loads the target repository directly from local disk into the workspace." },
      { num: "02", title: "AST & Syntax Analysis", desc: "Syntax Tree Parsing", detail: "Parses function dependencies and class hierarchies into structured graphs." },
      { num: "03", title: "Local LLM Inference", desc: "100% Air-Gapped", detail: "Answers queries and writes refactored code entirely on your machine." },
      { num: "04", title: "Integrated Code Editor", desc: "Monaco Editor & Chat", detail: "Applies edits and previews code diffs in a seamless developer UI." }
    ]
  },

  "portfolio-console": {
    title: "Personal Portfolio Website",
    categoryLabel: "Fullstack & Systems",
    badge: "Live in Production / Portfolio Core",
    summary: "An interactive engineering workspace showcasing 25+ software systems, thesis research, and low-level tools with 100% Vanilla CSS, zero UI library bloat, and an event-driven live TR/EN i18n engine.",
    highlightMetric: "⚡ 100% Vanilla CSS & Live Bilingual i18n Engine",
    whyStory: "Commercial portfolio templates and bulky React/Next.js frameworks failed to articulate the architectural depth, low-level mechanics, and authentic field case studies of my systems. I engineered an independent, zero-dependency engineering console from scratch that runs with sub-millisecond response times, provides instant TR/EN language switching, and renders 4-step interactive flow diagrams natively.",
    problem: "Typical developer portfolio sites are static, bloated with heavy CSS frameworks, and lack technical depth. They often hide underlying system architectures behind generic cards and struggle with live multilingual synchronization without full page reloads.",
    architecture: "Composed of an asynchronous Python FastAPI backend and a zero-dependency Vanilla HTML5/CSS3/JavaScript frontend. Every project is stored as an independent JSON schema. The interface features custom CSS design tokens, an event-driven i18n translation engine, and dynamic DOM flow diagram generators.",
    keyChallenge: "Synchronizing open project modals, active split views, category filter chips, and search metrics instantly between English and Turkish without reloading the DOM or causing layout shift.",
    features: [
      "Custom Vanilla CSS design system with zero external UI library dependencies",
      "Event-driven live bilingual (TR / EN) translation runtime",
      "Interactive 4-step system architecture and logic flow diagram generator",
      "5-tab inspection modal with file trees, terminal commands, and case studies",
      "Modular JSON schema architecture powered by FastAPI asynchronous services"
    ],
    pipelineSteps: [
      { num: "01", title: "JSON Schema Harvester", desc: "FastAPI Async Reader", detail: "Reads modular project files from disk asynchronously and supplies structured data streams." },
      { num: "02", title: "Client State & i18n Resolution", desc: "Memory Mappings", detail: "Maps requested language tokens and theme variables into client memory." },
      { num: "03", title: "Vanilla DOM & Flow Compilation", desc: "Zero-Library Render", detail: "Constructs cards, filter tallies, and 4-step flow diagrams natively via DOM APIs." },
      { num: "04", title: "Live Dual-Language Interaction", desc: "Reactive UI Updates", detail: "Updates active views, modals, and telemetry metrics instantaneously with micro-transitions." }
    ]
  },

  "airdrop-local": {
    title: "Local Drop — High-Speed Cross-Platform P2P File Transfer",
    categoryLabel: "Desktop & System",
    badge: "High-Speed Gigabit",
    summary: "A zero-configuration, cross-platform local network file transfer engine connecting Apple (iOS/macOS), Android, and Windows devices via QR code, transferring large 4K videos and files at 100+ MB/s over local Wi-Fi without consuming internet quota.",
    highlightMetric: "🚀 100+ MB/s Local Network Gigabit Transfer Speed",
    whyStory: "Created to eliminate the friction and restrictions of using USB cables or cloud storage to transfer large files between Apple devices (iPhone/Mac) and Windows PCs. I built a local network transfer engine that connects in seconds via QR code over Wi-Fi, pumping files at 100+ MB/s gigabit speeds without consuming internet quota.",
    problem: "Transferring files between iOS, macOS, Android, and Windows requires cables, proprietary cloud drives, or slow messaging apps that compress media and consume external bandwidth.",
    architecture: "Spawns a local HTTP/WebSocket streaming server. Generates a dynamic local QR code for mobile devices to join instantly, initiating direct chunked binary streams over the local Wi-Fi subnet.",
    keyChallenge: "Maintaining high-throughput streaming on unreliable Wi-Fi networks without memory buffering overflow. Solved with asynchronous chunked disk streaming and memory-mapped file buffers.",
    features: [
      "100+ MB/s gigabit local Wi-Fi transfer speeds with zero internet data usage",
      "Instant pairing via camera QR scan across iOS, Android, macOS, and Windows",
      "Drag-and-drop web interface supporting multi-gigabyte files and folders",
      "End-to-end local network encryption and temporary session tokens",
      "Lossless transfer preserving full original resolution and metadata"
    ],
    pipelineSteps: [
      { num: "01", title: "QR Code Instant Pairing", desc: "Local Wi-Fi Network", detail: "Connects phone camera to PC server in seconds with zero app installation." },
      { num: "02", title: "File Selection", desc: "Drag & Drop Interface", detail: "Queues 4K videos, zip files, and documents without size restrictions." },
      { num: "03", title: "Local Subnet Stream", desc: "100+ MB/s Speed", detail: "Streams binary chunks directly between devices over local router bandwidth." },
      { num: "04", title: "Integrity & Delivery", desc: "Lossless Download", detail: "Saves files directly into target device storage with full checksum verification." }
    ]
  },

  "nc-codes": {
    title: "Transformice Lua Mini-Game & Custom Physics Script Suite",
    categoryLabel: "Open Source & Gaming",
    badge: "Community Classic (2013)",
    summary: "My first open-source Lua script suite written in 2013 for the Transformice gaming community. Enabled tribe houses to host automated tournaments, minigames, custom physics engines, and team management systems used across hundreds of active player rooms.",
    highlightMetric: "🎮 100+ Community Rooms & Lua Physics Scripts",
    whyStory: "My first open-source Lua script collection written in 2013 for the Transformice community. It enabled tribe houses to run competitive minigames, custom physics, and interactive team tournaments instead of just standard chat rooms, serving hundreds of gaming rooms and sparking my software journey.",
    problem: "Transformice tribe houses were originally static chat environments lacking interactive gameplay, automated mini-tournaments, or custom physics mechanics for player communities.",
    architecture: "Built in pure Lua running inside the game's event-driven sandbox. Employs lightweight state machines, physics vector calculations, timer queues, and command parsing engines.",
    keyChallenge: "Operating within strict sandbox memory limits and per-tick CPU execution budgets without causing client-side stuttering. Solved with object pooling and optimized string parsing.",
    features: [
      "Automated tournament brackets, team mechanics, and live scoreboards",
      "Custom gravity, bounce, and momentum physics modifiers",
      "In-game admin console with role-based command permissions",
      "Modular Lua architecture allowing community customizations",
      "Served as the cornerstone of my algorithmic and software engineering journey"
    ],
    pipelineSteps: [
      { num: "01", title: "Tribe Room Initialization", desc: "Transformice Sandbox", detail: "Initializes custom room parameters and map layout." },
      { num: "02", title: "Lua Script Injection", desc: "Open Source Engine", detail: "Pastes and compiles event-driven Lua game scripts into the room console." },
      { num: "03", title: "Tournament & Gameplay", desc: "Community Interaction", detail: "Automates multiplayer mini-games, scoring, and team competitions." },
      { num: "04", title: "The First Coding Spark", desc: "Open Source Legacy", detail: "Building for real communities laid the foundation of my coding journey." }
    ]
  },

  "fatura-odeal": {
    title: "Ödeal E-Invoice Automation & Retail Accounting Bot",
    categoryLabel: "Automation & FinTech",
    badge: "Production Bot",
    summary: "An autonomous desktop integration bot developed to streamline retail operations by fetching e-invoices and receipts from the Ödeal merchant portal, automating bulk invoice generation, and archiving documents into structured folders.",
    highlightMetric: "📄 100% Automated Invoicing & Zero Manual Entry",
    whyStory: "An autonomous integration bot developed to streamline retail operations by automatically fetching e-invoices from the Ödeal vendor portal, archiving receipts, and automating bulk invoice issuance.",
    problem: "Manual retrieval and reconciliation of daily commercial e-invoices from merchant portals is repetitive, error-prone, and consumes hours of staff time every month.",
    architecture: "Combines Selenium WebDriver automation with Python PDF parsing and filesystem hierarchy organizers. Securely authenticates, extracts invoice metadata, and synchronizes financial records.",
    keyChallenge: "Handling portal layout changes, CAPTCHA sessions, and network timeouts gracefully. Solved with resilient selector heuristics and automatic session recovery.",
    features: [
      "Autonomous login, two-factor support, and scheduled session management",
      "Automated extraction and PDF/XML downloading of issued e-invoices",
      "Structured local archiving by customer, date, and tax identification number",
      "Bulk automated invoice creation and dispatch workflow",
      "Detailed audit logging and CSV export for retail accounting"
    ],
    pipelineSteps: [
      { num: "01", title: "Portal Authentication", desc: "Secure Login Module", detail: "Establishes a resilient automated connection to the merchant portal." },
      { num: "02", title: "Invoice Harvesting", desc: "Date & Client Filters", detail: "Scans all incoming e-invoices and fiscal receipt records." },
      { num: "03", title: "Download & Issuance", desc: "Batch Queue", detail: "Downloads official PDF/XML files and submits new queued invoices." },
      { num: "04", title: "Structured Archiving", desc: "Client / Month Hierarchy", detail: "Organizes documents into structured folders on local disk." }
    ]
  },

  "disk-kurtarma-araci": {
    title: "Hard Drive & USB Raw Sector Forensic File Recovery Tool",
    categoryLabel: "Desktop & Forensics",
    badge: "Low-Level System",
    summary: "A zero-write, 100% read-only forensic disk carving tool engineered after an external hard drive was formatted by a console. Directly scans raw sector bytes to reconstruct lost images, videos, and documents without touching damaged disk tables.",
    highlightMetric: "🔍 Raw Block Signature Scanning & Zero-Write Safety",
    whyStory: "Built after my portable external hard drive was accidentally formatted by an Xbox console, wiping my entire personal archive. Instead of risking disk sector corruption with closed-source commercial tools, I created a zero-write, 100% read-only forensic tool that scans raw sector bytes (file carving) and safely recovers files to a destination drive.",
    problem: "When file partition tables (FAT32/NTFS/exFAT) are wiped or corrupted, standard OS utilities cannot access files. Many commercial recovery tools perform unverified writes or charge steep licensing fees.",
    architecture: "Communicates directly with Windows storage devices via Win32 `CreateFileW` (`\\\\.\\PhysicalDriveX`) with `GENERIC_READ` flags only. Scans raw sector blocks against known byte signatures (magic bytes) to carve and assemble contiguous data streams.",
    keyChallenge: "Preventing accidental disk writes while maintaining multi-gigabyte scanning speed across USB 3.0 interfaces. Solved with strict read-only handles and multi-threaded ring buffers.",
    features: [
      "100% read-only physical sector access ensuring zero risk of further disk damage",
      "Raw file carving supporting JPEG, PNG, MP4, PDF, ZIP, and Office documents",
      "Partition-table-independent recovery capable of reading unallocated space",
      "Real-time visual block progress map and recovered file preview gallery",
      "Custom sector offset ranges and corrupted block skip logic"
    ],
    pipelineSteps: [
      { num: "01", title: "Read-Only Connection", desc: "Win32 API (Zero-Write)", detail: "Opens direct physical drive handle with guaranteed zero-write safety." },
      { num: "02", title: "Magic Byte Scanning", desc: "File Signature Carving", detail: "Scans sector-by-sector for binary file headers even with deleted tables." },
      { num: "03", title: "Buffer Reconstruction", desc: "Bad Sector Handling", detail: "Assembles contiguous sector clusters into complete file streams in memory." },
      { num: "04", title: "Safe Export", desc: "Target Drive Destination", detail: "Writes recovered files to a safe secondary storage drive." }
    ]
  },

  "kpss-sinav-hazirlik": {
    title: "KPSS Exam Prep Platform — Digital Question Bank & Analytics",
    categoryLabel: "Academic & Exam",
    badge: "Live Web App",
    summary: "A modern, responsive digital exam preparation platform deployed on the web, replacing bulky physical test books with interactive timed tests, smart mistake tracking, and visual performance analytics.",
    highlightMetric: "📱 Live Web App & Mobile Optimized Study Engine",
    whyStory: "A live digital test platform deployed on the web, developed to replace bulky physical test books for KPSS exam preparation and allow interactive group study sessions with fellow university peers.",
    problem: "Carrying multiple thick test books during exam prep is cumbersome, and paper tests make it difficult to track recurring weaknesses or analyze historical net score trends.",
    architecture: "Built with modern HTML5, CSS3, and JavaScript, bundled and deployed for edge performance. Stores question banks and test histories in local storage and client-side state engines.",
    keyChallenge: "Ensuring zero-latency rendering of hundreds of formatted questions with instant answer validation and error categorization on mobile viewports.",
    features: [
      "Comprehensive question banks for History, Geography, and Math",
      "Timed exam simulation mode replicating official test pressure",
      "Smart mistake pool automatically archiving incorrect answers for spaced review",
      "Progressive net score charts and category-based mastery analytics",
      "100% responsive interface optimized for mobile and desktop screens"
    ],
    pipelineSteps: [
      { num: "01", title: "Subject Selection", desc: "Question Bank Pool", detail: "Selects targeted test modules across History, Geography, or Math." },
      { num: "02", title: "Timed Test Session", desc: "Real Exam Timer", detail: "Simulates actual exam conditions with countdown timers and instant marking." },
      { num: "03", title: "Smart Mistake Pool", desc: "Weakness Tracking", detail: "Automatically logs wrong answers into a targeted revision pool." },
      { num: "04", title: "Performance Analytics", desc: "Mastery Graphs", detail: "Displays visual net score trends and topic mastery breakdowns." }
    ]
  },

  "akademik-ingilizce": {
    title: "Academic English (YDS / YÖKDİL) Spaced Repetition Vocabulary Camp",
    categoryLabel: "Academic & Language",
    badge: "Spaced Repetition (SRS)",
    summary: "An interactive exam preparation camp designed for academic language exams (YDS/YÖKDİL), focusing on high-frequency root words and collocations extracted from past official exams with spaced repetition algorithms.",
    highlightMetric: "🧠 Spaced Repetition (SRS) & Academic Corpus",
    whyStory: "An interactive exam preparation camp designed for academic language exams (YDS/YÖKDİL), focusing on high-frequency root words and collocations extracted from past official exams with spaced repetition.",
    problem: "Rote memorization of alphabetical word lists leads to rapid forgetting. Exam takers need contextual sentences, collocations, and adaptive spaced repetition.",
    architecture: "Implements a SuperMemo-2 (SM-2) inspired spaced repetition algorithm on client-side state, tracking recall confidence and dynamically scheduling review intervals.",
    keyChallenge: "Balancing review queues so that struggling words appear frequently without overwhelming the learner during daily practice sessions.",
    features: [
      "Curated vocabulary banks categorized into Science, Health, and Social Sciences",
      "Contextual sample sentences and preposition collocation drills",
      "Adaptive Spaced Repetition System (SRS) preventing memory decay",
      "Audio pronunciation integration and mnemonic flashcard studio",
      "Daily retention metrics and long-term memory mastery tracking"
    ],
    pipelineSteps: [
      { num: "01", title: "Category Selection", desc: "YDS / YÖKDİL Corpus", detail: "Selects specialized vocabulary banks for Science, Health, or Social tracks." },
      { num: "02", title: "Root Word & Collocation", desc: "Contextual Sentences", detail: "Presents target words within authentic academic past-exam sentences." },
      { num: "03", title: "Spaced Repetition (SRS)", desc: "Memory Retention", detail: "Re-schedules challenging words at mathematically calculated intervals." },
      { num: "04", title: "Mastery Report", desc: "Retention Analytics", detail: "Tracks long-term memory progress and vocabulary retention metrics." }
    ]
  },

  "gardrops-otomasyon-botu": {
    title: "Gardrops Social Commerce Automation & State Management Bot",
    categoryLabel: "Automation & Web",
    badge: "Bug-Proof Bot",
    summary: "Developed during boutique sales on Gardrops to overcome a platform UI bug where page refreshes reverted follow buttons to 'Follow', causing accidental unfollows. Employs local state memory to safely automate engagement without false unfollows.",
    highlightMetric: "🛡️ Local State Tracking & Anti-Ban Human Simulation",
    whyStory: "Developed in 2022 during boutique sales on Gardrops to overcome a platform UI bug where following a user and refreshing reverted the button state to 'Follow', accidentally triggering an unfollow when clicked again. This bot maintains local state memory to safely automate engagement without false unfollows.",
    problem: "E-commerce platform UI inconsistencies caused accidental unfollow actions upon page refresh. Manual following of targeted buyers was time-consuming and prone to rate limits.",
    architecture: "Combines Selenium automation with a persistent SQLite state cache. Simulates randomized human mouse trajectories, delays, and verifies follow status against local history.",
    keyChallenge: "Preventing account rate-limiting while maintaining high throughput. Solved with Gaussian-distributed randomized delays and daily engagement quotas.",
    features: [
      "Persistent state memory preventing duplicate actions and false unfollows",
      "Humanized timing curves and realistic scrolling simulation",
      "Target audience scraper by niche category and follower activity",
      "Auto-recovery on network disconnections and session token refresh",
      "Comprehensive execution logs and daily follower growth metrics"
    ],
    pipelineSteps: [
      { num: "01", title: "Audience Discovery", desc: "Active Buyer Profiles", detail: "Scrapes targeted active buyer lists in relevant product categories." },
      { num: "02", title: "Local State Verification", desc: "SQLite State DB", detail: "Checks local state cache to avoid UI glitch re-triggers." },
      { num: "03", title: "Humanized Interaction", desc: "Gaussian Delay Engine", detail: "Executes follow actions using randomized, human-like timings." },
      { num: "04", title: "Persistent History Commit", desc: "Zero Redundancy", detail: "Marks profile as engaged in local database to prevent future duplicate clicks." }
    ]
  },

  "oymapos-etiket-yazdirici": {
    title: "OymaPOS Wi-Fi Shelf Label & Thermal Barcode Server",
    categoryLabel: "FinTech & Hardware",
    badge: "Wi-Fi Print Server",
    summary: "Decoupled label printing from our store's low-spec POS register into a dedicated Wi-Fi print server on a powerful PC, allowing staff to update prices and print crisp barcode shelf labels from mobile phones or PCs.",
    highlightMetric: "🏷️ Wi-Fi Network Printing & Instant EAN-13 Rendering",
    whyStory: "Since our retail store's checkout computer was low-spec, rendering complex label templates locally caused system freezes. I decoupled the label printing service into a dedicated Wi-Fi print server on a more powerful workstation, allowing price updates and bulk thermal barcode printing directly from mobile phones or PCs.",
    problem: "Rendering graphical barcode label templates directly on slow checkout registers caused severe lag and freezes. Staff needed a way to print labels while walking down grocery aisles.",
    architecture: "Runs a lightweight Python FastAPI server on the back-office PC connected to the thermal label printer. Serves a responsive mobile web interface over the store's Wi-Fi network.",
    keyChallenge: "Generating crisp, high-contrast 1D EAN-13 barcodes without graphical blur on 203 DPI thermal heads. Solved with vector rasterization tuned to printer dot pitch.",
    features: [
      "Wireless mobile shelf labeling directly from phone cameras down store aisles",
      "High-precision 203 DPI raster rendering for instant barcode scanner readability",
      "Bulk Excel and CSV price list import for rapid whole-store price updates",
      "Customizable label templates (pricing, unit cost, origin, expiration)",
      "Zero CPU load on main checkout counter POS systems"
    ],
    pipelineSteps: [
      { num: "01", title: "Price / SKU Input", desc: "Mobile Phone / Excel", detail: "Staff inputs updated product pricing from phone or spreadsheet." },
      { num: "02", title: "Wi-Fi Server Broadcast", desc: "Local Subnet API", detail: "Sends render payload across store Wi-Fi to the dedicated print workstation." },
      { num: "03", title: "Vector Barcode Raster", desc: "EAN-13 203 DPI", detail: "Generates crisp, scanner-ready barcode bitmaps without blur." },
      { num: "04", title: "Direct Thermal Batch", desc: "Hardware Port Stream", detail: "Prints hundreds of shelf labels in seconds without paper waste." }
    ]
  },

  "kredi-notu-siniflandirmasi-tahmin-modeli": {
    title: "Credit Score Classification & Risk Assessment ML Pipeline",
    categoryLabel: "FinTech & ML",
    badge: "Machine Learning",
    summary: "A complete machine learning pipeline featuring SMOTE imbalance optimization, advanced feature engineering, and ensemble modeling to classify banking customer credit risk with high precision.",
    highlightMetric: "🎯 88%+ F1-Score & SMOTE Class Balancing",
    whyStory: "Term project and coursework for my 4th-year Machine Learning class. Implemented a machine learning pipeline featuring SMOTE imbalance optimization and domain-specific feature engineering to classify banking credit risk levels with high precision.",
    problem: "Real-world financial datasets suffer from extreme class imbalances between default and non-default customers, leading standard ML models to produce misleading accuracy metrics.",
    architecture: "Builds a full Scikit-Learn / XGBoost / LightGBM pipeline. Incorporates automated outlier filtering, Yeo-Johnson transforms, SMOTE synthetic oversampling, and Optuna hyperparameter tuning.",
    keyChallenge: "Preventing data leakage during synthetic oversampling. Solved by applying SMOTE strictly inside cross-validation folds.",
    features: [
      "88%+ weighted F1-Score across Good, Standard, and Poor risk categories",
      "SMOTE oversampling pipeline addressing real-world loan default imbalances",
      "Feature importance evaluation using SHAP values and correlation matrices",
      "Automated pipeline with Scikit-Learn ColumnTransformers and Pipelines",
      "Interactive prediction console for instant credit score assessment"
    ],
    pipelineSteps: [
      { num: "01", title: "Financial Data Ingestion", desc: "Customer Records", detail: "Loads debt ratios, payment histories, and credit inquiry logs." },
      { num: "02", title: "Data Cleaning & SMOTE", desc: "Imbalance Optimization", detail: "Synthetically balances minority risk classes inside validation folds." },
      { num: "03", title: "Ensemble Training", desc: "Feature Engineering", detail: "Weights key predictive financial ratios via XGBoost and CatBoost." },
      { num: "04", title: "Risk Assessment & Score", desc: "Explainable Output", detail: "Produces calibrated creditworthiness scores with SHAP attribution." }
    ]
  },

  "ea-fifa-fikstur": {
    title: "EA FC / FIFA Automated Tournament Fixture & Goal-Difference Engine",
    categoryLabel: "Desktop & Gaming",
    badge: "Tournament Engine",
    summary: "An automated tournament scheduling, live scoring, and goal-difference engine developed for evening EA FC / FIFA gaming sessions with friends, eliminating manual bracket setup and tiebreak arguments.",
    highlightMetric: "⚽ Round-Robin Fixture & Real-Time Goal Difference",
    whyStory: "An automated tournament fixture and goal-difference engine developed for evening EA FC / FIFA gaming sessions with friends, eliminating manual scheduling disputes and automating bracket progression.",
    problem: "Organizing tournaments manually on paper or spreadsheets causes scheduling disputes, human arithmetic errors in goal difference, and unfair home/away matches.",
    architecture: "Built with Python desktop GUI using the Berger round-robin algorithm. Tracks live goal entries, calculates goal difference, head-to-head records, and dynamically updates standings.",
    keyChallenge: "Handling odd numbers of players with fair bye rounds while strictly balancing home and away jersey rotations.",
    features: [
      "Berger round-robin fixture generator ensuring perfectly balanced schedules",
      "Real-time standings table updating goal difference, goals scored, and form",
      "Knockout bracket generation seeding top group finishers into quarterfinals/semis",
      "Historical head-to-head statistics and trophy archive",
      "Clean dark UI designed for quick TV/monitor score entry"
    ],
    pipelineSteps: [
      { num: "01", title: "Team & Player Entry", desc: "Participants List", detail: "Registers players and selected football clubs." },
      { num: "02", title: "Automated Fixture Draw", desc: "Berger Algorithm", detail: "Generates fair home/away schedules in a single click." },
      { num: "03", title: "Live Score Entry", desc: "Instant Standings", detail: "Recalculates points, goal difference, and head-to-head tables instantly." },
      { num: "04", title: "Knockout Tree & Trophy", desc: "Visual Bracket", detail: "Seeds group leaders directly into knockout finals." }
    ]
  },

  "cache-cleaner": {
    title: "Developer SSD Dependency & Deep Learning Cache Optimization Tool",
    categoryLabel: "Desktop & Optimization",
    badge: "SSD Optimizer",
    summary: "A system optimization utility built when bloated pip, npm, HuggingFace, and PyTorch caches consumed dozens of gigabytes on my SSD, safely reclaiming disk space without breaking project virtual environments.",
    highlightMetric: "🧹 50+ GB Reclaimed SSD Space & Zero Virtualenv Damage",
    whyStory: "A system optimization utility built when bloated pip, npm, HuggingFace, and PyTorch caches consumed dozens of gigabytes on my SSD, safely reclaiming disk space without breaking project virtual environments.",
    problem: "Modern AI and web development tools store massive cached wheel packages, pre-trained weights, and node modules across obscure app data directories, filling SSDs quickly.",
    architecture: "Scans designated OS cache registries (pip cache, npm cache, HuggingFace hub cache, torch hub). Calculates directory sizes, identifies orphaned artifacts, and performs safe multi-threaded deletions.",
    keyChallenge: "Distinguishing between active virtual environments and orphaned cache trash. Solved with safe path matching and user confirmation safeguards.",
    features: [
      "Deep scan across pip, npm, yarn, HuggingFace, PyTorch, and Gradle caches",
      "Visual gigabyte breakdown chart showing storage hogs at a glance",
      "Safe deletion routines preserving active environment integrity",
      "One-click batch cleaning with instant reclaimed space reporting",
      "Zero administrative installation required (standalone portable executable)"
    ],
    pipelineSteps: [
      { num: "01", title: "System Cache Audit", desc: "Dependency Registries", detail: "Scans pip, npm, HuggingFace, and PyTorch cache stores." },
      { num: "02", title: "Storage Usage Analysis", desc: "Gigabyte Detection", detail: "Calculates reclaimable space across all development directories." },
      { num: "03", title: "Safe Deletion Routine", desc: "One-Click Execution", detail: "Clears orphaned caches without touching active virtual environments." },
      { num: "04", title: "Reclaimed Space Report", desc: "SSD Optimization", detail: "Displays freed storage summary and disk health metrics." }
    ]
  },

  "telegram-media-hub": {
    title: "Telegram Educational Archive & High-Performance Batch Downloader",
    categoryLabel: "Automation & Media",
    badge: "Batch Downloader",
    summary: "A high-performance batch downloader developed to organize and archive massive educational datasets and media files shared across Telegram channels without manual one-by-one downloads.",
    highlightMetric: "📥 Multi-Threaded Telegram API Downloader & Auto-Sorting",
    whyStory: "A high-performance batch downloader developed to organize and archive massive educational datasets and media files shared across Telegram channels without manual one-by-one downloads.",
    problem: "Downloading hundreds of technical PDFs, video lectures, and project datasets from Telegram channels manually is tedious, prone to incomplete downloads, and unorganized.",
    architecture: "Uses Telethon API with MTProto protocol. Spawns asynchronous worker threads to stream binary file parts directly from Telegram datacenters with resume capability.",
    keyChallenge: "Handling Telegram API FloodWait rate limits during large batch transfers. Solved with exponential backoff retry queues and chunk rate limiting.",
    features: [
      "Multi-threaded batch downloading supporting multi-gigabyte video and archive files",
      "Automatic file sorting into PDFs, Videos, Datasets, and Audio folders",
      "Interrupted download resume capability with SHA-256 chunk validation",
      "Channel message history scraping with file type and size filters",
      "Dark desktop UI with live download speed meters and completion alerts"
    ],
    pipelineSteps: [
      { num: "01", title: "Channel / Chat Selection", desc: "Telegram API Session", detail: "Connects via MTProto to inspect target channel message history." },
      { num: "02", title: "File Filter Criteria", desc: "Type & Size Matching", detail: "Filters for desired formats (PDF, MP4, ZIP) within size thresholds." },
      { num: "03", title: "Chunked Stream Download", desc: "FloodWait Handling", detail: "Downloads file chunks with automatic rate limit backoff." },
      { num: "04", title: "Organized Local Archive", desc: "Categorized Storage", detail: "Sorts completed files into structured local directory trees." }
    ]
  },

  "soru-uygulamasi": {
    title: "Local Network Mobile Quiz & Final Exam Study System",
    categoryLabel: "Academic & Exam",
    badge: "QR-Linked Quiz",
    summary: "An offline-capable local network quiz system created for university final exam preparation, allowing classmates to join via QR code from their mobile devices and review performance analytics instantly.",
    highlightMetric: "📶 Zero-Internet Local Wi-Fi Quiz & Real-Time Analytics",
    whyStory: "An offline-capable local network quiz system created for university final exam preparation, allowing classmates to join via QR code from their mobile devices and review performance analytics instantly.",
    problem: "Studying for final exams in study halls with poor internet access requires a lightweight, offline way for peers to test each other simultaneously.",
    architecture: "Hosts a lightweight web quiz server on the developer laptop. Peers scan an on-screen QR code to join over local Wi-Fi, solving test banks with instant score feedback.",
    keyChallenge: "Managing simultaneous WebSocket submissions over ad-hoc local Wi-Fi without dropped answers. Solved with client-side retry queues and in-memory session stores.",
    features: [
      "Instant multi-user quiz participation via local QR code scan",
      "100% functional without internet connectivity on local hotspot networks",
      "Live answer evaluation, scoreboards, and instant explanation popups",
      "Topic-based mistake analysis helping study groups identify weak subjects",
      "Modular JSON question bank format for rapid course additions"
    ],
    pipelineSteps: [
      { num: "01", title: "Exam Setup & QR Spawn", desc: "Host PC Server", detail: "Launches local server and renders join QR code on screen." },
      { num: "02", title: "Mobile Pairing", desc: "Local Network", detail: "Classmates scan QR code to enter exam session on their phones." },
      { num: "03", title: "Interactive Quiz Session", desc: "Instant Feedback", detail: "Validates answers in real time with explanatory solution keys." },
      { num: "04", title: "Scorecard & Analytics", desc: "Topic Breakdown", detail: "Summarizes class performance and highlights weak topics." }
    ]
  },

  "hugging-face-downloader": {
    title: "HuggingFace AI Model Resumable Downloader & Hardware Verifier",
    categoryLabel: "AI & Tools",
    badge: "Hardware Aware",
    summary: "A CLI/GUI utility engineered to download large language and diffusion models from HuggingFace with live speed metrics, hardware RAM/VRAM compatibility checks, and resume-capable multi-threaded chunking.",
    highlightMetric: "⚡ Multi-Threaded Chunking & VRAM Compatibility Engine",
    whyStory: "A CLI/GUI utility engineered to download large language and diffusion models from HuggingFace with live speed metrics, hardware RAM/VRAM compatibility checks, and resume-capable multi-threaded chunking.",
    problem: "Downloading 10GB–50GB LLM models over unstable connections frequently corrupts files. Many users download models their local GPU VRAM cannot actually run.",
    architecture: "Queries HuggingFace API metadata, computes required VRAM/RAM for various quantization levels (Q4, Q8, FP16), and downloads weights using parallel HTTP range requests.",
    keyChallenge: "Resuming broken multi-part GGUF and safetensors downloads without re-downloading existing chunks. Solved with byte-range offset tracking and sha256 checksums.",
    features: [
      "Automated system VRAM and RAM hardware check against target model size",
      "Multi-threaded chunked downloads with robust resume on network dropouts",
      "Direct GGUF, Safetensors, and diffusers repository filtering",
      "Live throughput monitoring and estimated time to completion",
      "Automatic symlink setup for standard local LLM runtime directories"
    ],
    pipelineSteps: [
      { num: "01", title: "Model Search & Input", desc: "HuggingFace Hub", detail: "Takes repository handle or model name to inspect available files." },
      { num: "02", title: "Hardware Compatibility", desc: "VRAM & RAM Audit", detail: "Checks if target model quantization fits system hardware resources." },
      { num: "03", title: "Multi-Threaded Download", desc: "Range Requests", detail: "Downloads binary model shards in parallel with live speed meters." },
      { num: "04", title: "Integrity & Ready State", desc: "Resume Capable", detail: "Validates checksums and registers model for immediate local inference." }
    ]
  },

  "webtoon-lora-suite": {
    title: "Webtoon AI LoRA Training Pipeline & YOLO Panel Segmenter",
    categoryLabel: "AI & Computer Vision",
    badge: "LoRA & YOLO Pipeline",
    summary: "An end-to-end pipeline developed to train custom LoRA and YOLO models on digital comics, isolating speech bubbles, cleaning artwork, and generating consistent comic panel illustrations.",
    highlightMetric: "🎨 YOLO Bubble Detection & LoRA Character Consistency",
    whyStory: "An end-to-end pipeline developed to train custom LoRA and YOLO models on digital comics, isolating speech bubbles, cleaning artwork, and generating consistent comic panel illustrations.",
    problem: "Training diffusion models on raw comic strips fails because speech bubbles and text corrupt character embeddings, leading to distorted generations.",
    architecture: "Trained a custom YOLOv8 model to detect and segment speech bubbles. Uses inpainting to restore clean background art, generating high-quality image-caption pairs for SDXL LoRA fine-tuning.",
    keyChallenge: "Accurately segmenting irregular, semi-transparent speech bubbles across varying art styles without removing character hair or expressions.",
    features: [
      "Custom YOLOv8 detector trained to isolate speech balloons and SFX text",
      "Automated inpainting removal producing pristine text-free training imagery",
      "Automated JoyCaption/BLIP tagging generating rich descriptive prompts",
      "Optimized Kohya_ss LoRA training configuration for character consistency",
      "Visual inspection studio for rapid dataset curation and tagging"
    ],
    pipelineSteps: [
      { num: "01", title: "Vertical Strip Ingestion", desc: "Webtoon Panels", detail: "Loads digital comic chapters into the segmentation pipeline." },
      { num: "02", title: "Bubble Detection (YOLO)", desc: "Text & Effect Masking", detail: "Accurately isolates speech bubbles and sound effect lettering." },
      { num: "03", title: "Inpainting Artwork Clean", desc: "Pristine Training Set", detail: "Fills in background artwork behind speech bubbles cleanly." },
      { num: "04", title: "LoRA Model Training", desc: "Consistent Generation", detail: "Fine-tunes diffusion weights on clean character poses for publishing." }
    ]
  },

  "altyapi-manager": {
    title: "Sports Academy Management & Tactical Roster Workstation",
    categoryLabel: "Desktop & Management",
    badge: "Commercial Client",
    summary: "My first commercial client contract, developed for a neighbor opening a sports academy while awaiting license approval. Engineered a Football Manager-style dashboard unifying player cards, attendance, fee tracking, and tactical formation boards.",
    highlightMetric: "📋 Commercial Contract & Football Manager Style UI",
    whyStory: "My first commercial client contract, developed for a neighbor opening a sports academy while awaiting license approval. Engineered a Football Manager-style dashboard unifying player cards, attendance, fee tracking, and tactical formation boards.",
    problem: "Sports academies manage hundreds of youth players using loose paper notebooks, resulting in lost attendance logs, unpaid subscription fees, and disorganized tactical sheets.",
    architecture: "Built as a modular desktop management suite. Combines an interactive tactical pitch board, player attribute visualizers, attendance calendars, and SQLite financial ledgers.",
    keyChallenge: "Delivering an intuitive, non-technical interface suitable for coaching staff without requiring cloud subscriptions or complex IT setups.",
    features: [
      "Interactive drag-and-drop tactical board with custom formation presets",
      "Player development cards tracking physical, technical, and mental attributes",
      "Monthly membership fee and attendance logging with automated debt alerts",
      "Injury history, medical notes, and match performance reporting",
      "Offline-first desktop architecture with one-click Excel export"
    ],
    pipelineSteps: [
      { num: "01", title: "Player Profile & Squad", desc: "U12-U19 Age Groups", detail: "Enters player skills, positions, and physical growth statistics." },
      { num: "02", title: "Tactical Formation Board", desc: "Drag & Drop Pitch", detail: "Coaches draw match tactics and position lineups visually." },
      { num: "03", title: "Attendance & Fee Tracking", desc: "Roll Call & Debt Ledger", detail: "Logs training attendance and tracks monthly academy dues." },
      { num: "04", title: "Club Report & Overview", desc: "Unified Dashboard", detail: "Provides a complete paperless management overview of the academy." }
    ]
  },

  "youtube-ai-assistant": {
    title: "YouTube Video AI Synthesis, Transcript Miner & Bibliography Engine",
    categoryLabel: "AI & NLP",
    badge: "NLP Synthesis",
    summary: "An AI assistant that ingests YouTube URLs, extracts timestamped transcripts, summarizes core thesis points, and generates structured academic bibliographies and revision notes.",
    highlightMetric: "📚 Timestamped Transcript Mining & Academic Bibliography",
    whyStory: "An AI assistant that ingests YouTube URLs, extracts timestamped transcripts, summarizes core thesis points, and generates structured academic bibliographies and revision notes.",
    problem: "Long technical lectures and documentaries contain valuable insights, but taking comprehensive notes and formatting academic citations manually takes hours.",
    architecture: "Pulls YouTube subtitle streams via YouTube Transcript API. Chunks long texts, runs summarization prompts via LLM APIs, and formats academic citations (APA, MLA, IEEE).",
    keyChallenge: "Processing multi-hour video transcripts that exceed standard LLM context windows. Solved with hierarchical map-reduce chunking.",
    features: [
      "Instant transcript extraction with second-by-second timestamps",
      "Structured executive summary, core arguments, and key takeaways",
      "Automatic academic bibliography generator in APA, MLA, and IEEE formats",
      "Export directly to Markdown, Notion-ready text, and PDF study sheets",
      "Interactive Q&A allowing users to chat with the video content"
    ],
    pipelineSteps: [
      { num: "01", title: "Video URL Ingestion", desc: "YouTube Link", detail: "Pastes target technical lecture or conference video URL." },
      { num: "02", title: "Transcript Mining", desc: "Timestamped Text", detail: "Extracts complete spoken dialogue aligned to video seconds." },
      { num: "03", title: "AI Synthesis & Summary", desc: "LLM Processing", detail: "Extracts core themes, definitions, and technical takeaways." },
      { num: "04", title: "Bibliography & Study Notes", desc: "Markdown / PDF", detail: "Generates formatted academic citations and organized revision notes." }
    ]
  },

  "crypto-analytics-engine": {
    title: "Crypto Market Predictive Analytics, Sentiment & Backtesting Engine",
    categoryLabel: "FinTech & Data",
    badge: "Research & Simulation",
    summary: "A research and backtesting framework exploring machine learning price trend predictions by combining historical market time-series with live web financial sentiment simulations.",
    highlightMetric: "📈 Real-Time Sentiment & Algorithmic Backtesting",
    whyStory: "A research and backtesting framework exploring machine learning price trend predictions by combining historical market time-series with live web financial sentiment simulations.",
    problem: "Cryptocurrency price movements are highly volatile and driven by retail sentiment, rendering traditional technical indicators alone insufficient.",
    architecture: "Aggregates exchange candle streams via CCXT. Extracts market sentiment from news feeds, engineers momentum/volatility indicators, and tests predictive models with vector backtesting.",
    keyChallenge: "Preventing lookahead bias and overfitting in non-stationary financial time series. Addressed with purged cross-validation.",
    features: [
      "Historical time-series backtester computing Sharpe ratio and max drawdown",
      "Multi-exchange live price ticker and volume flow analysis",
      "News sentiment scoring integrating NLP sentiment models",
      "Machine learning directional probability forecasting",
      "Interactive charting with customizable technical indicators"
    ],
    pipelineSteps: [
      { num: "01", title: "Market Data & Sentiment Feed", desc: "Exchange Candles & News", detail: "Streams live price action and financial news headlines." },
      { num: "02", title: "Behavioral Modeling", desc: "Sentiment Simulation", detail: "Models retail trader psychology and panic/momentum thresholds." },
      { num: "03", title: "Backtesting & Validation", desc: "Historical Testing", detail: "Validates strategy performance against historical market drawdowns." },
      { num: "04", title: "Trend & Risk Probability", desc: "Risk / Reward Metric", detail: "Reports directional probability and maximum downside exposure." }
    ]
  },

  "ai-image-studio": {
    title: "Local GPU AI Image Synthesis Studio & Prompt Workspace",
    categoryLabel: "AI & Creative",
    badge: "Local GPU",
    summary: "A streamlined local studio GUI designed to bypass ComfyUI node complexity, leveraging local GPU hardware with preset parameter templates for rapid image synthesis and archiving.",
    highlightMetric: "🎨 Streamlined GUI & Low VRAM GPU Optimization",
    whyStory: "A streamlined local studio GUI designed to bypass ComfyUI node complexity, leveraging local GPU hardware with preset parameter templates for rapid image synthesis and archiving.",
    problem: "Complex node-based tools like ComfyUI are overwhelming for rapid prototyping, while cloud generation tools cost credits and restrict privacy.",
    architecture: "Builds a sleek desktop UI connecting to a local Stable Diffusion / SDXL backend. Manages prompt templates, sampler presets, seed control, and gallery metadata.",
    keyChallenge: "Ensuring smooth UI responsiveness during heavy GPU compute cycles. Handled via background worker threads and asynchronous image decoding.",
    features: [
      "Clean, intuitive studio layout eliminating confusing spaghetti node graphs",
      "Curated style presets (Cinematic, Anime, Photorealistic, Cyberpunk)",
      "Local gallery with embedded prompt, seed, and sampler metadata recall",
      "Low VRAM optimization mode for 6GB–8GB consumer graphics cards",
      "Batch generation queue with high-resolution upscale workflows"
    ],
    pipelineSteps: [
      { num: "01", title: "Prompt & Preset Selection", desc: "Studio Control Panel", detail: "Selects curated aesthetic presets and parameters without node clutter." },
      { num: "02", title: "VRAM GPU Optimization", desc: "Memory Protection", detail: "Efficiently allocates local GPU resources to prevent out-of-memory crashes." },
      { num: "03", title: "Diffusion Synthesis", desc: "SD / SDXL Engine", detail: "Renders high-resolution creative outputs in seconds." },
      { num: "04", title: "Local Metadata Gallery", desc: "Archived Storage", detail: "Stores all images alongside full reproducible prompt recipes." }
    ]
  },

  "cortex-planner": {
    title: "Cortex Planner — GitHub Synced Developer Roadmap & LLM Brainstormer",
    categoryLabel: "AI & Productivity",
    badge: "Roadmap Engine",
    summary: "An intelligent planner and project manager integrating GitHub APIs with local LLMs to brainstorm feature roadmaps, manage issues, and generate step-by-step implementation milestones.",
    highlightMetric: "🗺️ GitHub API Sync & Autonomous Feature Brainstorming",
    whyStory: "An intelligent planner and project manager integrating GitHub APIs with local LLMs to brainstorm feature roadmaps, manage issues, and generate step-by-step implementation milestones.",
    problem: "Managing multiple software projects across GitHub repositories makes it difficult to maintain structured architectural roadmaps and brainstorm next engineering iterations.",
    architecture: "Integrates GitHub GraphQL/REST APIs with local LLM agents. Pulls commit logs and issues, analyzing the codebase to propose concrete modular enhancement tasks.",
    keyChallenge: "Structuring open-ended LLM brainstorming suggestions into actionable, prioritized engineering backlog tickets.",
    features: [
      "Live synchronization with GitHub repositories, issues, and commit history",
      "AI-powered feature brainstorming proposing high-value next modules",
      "Interactive drag-and-drop Kanban roadmap with sprint milestones",
      "Automated technical issue generator with markdown specifications",
      "Local privacy mode storing roadmap databases completely offline"
    ],
    pipelineSteps: [
      { num: "01", title: "Project Scope & Idea", desc: "Developer Input", detail: "Inputs project vision, target features, and engineering constraints." },
      { num: "02", title: "GitHub Sync", desc: "API Integration", detail: "Aggregates open issues, branches, and commit milestones." },
      { num: "03", title: "LLM Brainstorming", desc: "Module Recommendations", detail: "Generates 'What should we build next?' feature breakdowns." },
      { num: "04", title: "Roadmap Milestones", desc: "Actionable Backlog", detail: "Organizes proposals into step-by-step implementation sprints." }
    ]
  },

  "hyperbeam-browser": {
    title: "Virtual Browser Room Orchestration & Collaborative Web Session",
    categoryLabel: "Web & Networking",
    badge: "Multiplayer Room",
    summary: "A low-latency shared virtual browser room allowing remote peers to connect via a single link for synchronized video streaming, collaborative research, and multiplayer web games.",
    highlightMetric: "🌐 Ultra Low Latency WebRTC & Co-Browsing Room",
    whyStory: "A low-latency shared virtual browser room allowing remote peers to connect via a single link for synchronized video streaming, collaborative research, and multiplayer web games.",
    problem: "Screen sharing over conventional video call apps suffers from high latency, poor frame rates, and only allows one user to interact at a time.",
    architecture: "Spawns headless Chromium instances inside server containers, streaming video and audio via WebRTC. Accepts concurrent keyboard and mouse inputs from authorized room participants.",
    keyChallenge: "Minimizing input lag to sub-50ms levels for fast-paced interactive multiplayer web games like Fireboy & Watergirl.",
    features: [
      "Shared virtual browser room accessible via a simple shareable link",
      "Sub-50ms low-latency WebRTC interactive screen and audio streaming",
      "Simultaneous dual keyboard and mouse input pass-through for co-op gaming",
      "Integrated text chat and permission delegation controls",
      "Zero local browser installation required for joining guests"
    ],
    pipelineSteps: [
      { num: "01", title: "Room Creation & Link Share", desc: "One-Click Join", detail: "Spawns virtual browser room and generates shareable invitation link." },
      { num: "02", title: "Virtual Host Stream", desc: "Low-Latency WebRTC", detail: "Broadcasts server-side Chromium display stream in real time." },
      { num: "03", title: "Shared Control Input", desc: "Concurrent Interaction", detail: "Enables multiple users to control mouse and keyboard simultaneously." },
      { num: "04", title: "Co-op Browsing & Gaming", desc: "Multiplayer Session", detail: "Allows remote peers to co-watch media and play multiplayer web games." }
    ]
  },

  "ui-test-automation": {
    title: "Autonomous UI & Desktop Application Test Automation & QA Engine",
    categoryLabel: "Automation & QA",
    badge: "Automated QA",
    summary: "An automated QA framework that inspects desktop (.exe) and web applications, executes user journeys, and captures visual crash screenshots into consolidated PDF reports.",
    highlightMetric: "🤖 Automated Crash Detection & Visual PDF Bug Reports",
    whyStory: "An automated QA framework that inspects desktop (.exe) and web applications, executes user journeys, and captures visual crash screenshots into consolidated PDF reports.",
    problem: "Manual testing of complex desktop forms and web buttons is tedious, repetitive, and misses edge-case UI regressions before production deployment.",
    architecture: "Combines Playwright, Selenium, and PyAutoGUI. Inspects DOM structures and Windows UI Automation handles, executing automated test scripts and taking screenshot logs upon errors.",
    keyChallenge: "Reliably locating dynamically rendered desktop UI elements across different monitor resolutions and scaling factors.",
    features: [
      "Automated cross-platform UI journey test runner for Web and Desktop (.exe)",
      "Instant visual failure capture highlighting exact crash coordinates",
      "Automated PDF bug report generator with timestamps and stack traces",
      "Headless execution mode for background CI/CD test automation",
      "Smart retry mechanisms reducing flaky test false alarms"
    ],
    pipelineSteps: [
      { num: "01", title: "Target App Selection", desc: "Web or Desktop .EXE", detail: "Selects target web URL or compiled desktop application window." },
      { num: "02", title: "Automated Journey Run", desc: "Form & Button Audit", detail: "Executes end-to-end user workflows and boundary input tests." },
      { num: "03", title: "Crash & Error Capture", desc: "Visual Highlight", detail: "Instantly captures screenshots and logs exact failure coordinates." },
      { num: "04", title: "Consolidated PDF Report", desc: "Quality Audit Sheet", detail: "Compiles a clean technical PDF bug report for developers." }
    ]
  }
};
