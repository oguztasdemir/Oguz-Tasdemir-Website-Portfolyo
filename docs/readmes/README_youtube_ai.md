# 🎬 Cortex AI YouTube Playlist Studio & Transcript Intelligence

YouTube oynatma listelerini (playlist) ve videolarını analiz eden, video transkriptlerini yerel yapay zeka (LLM / Ollama) ile semantik olarak işleyen, özet çıkaran ve yerel RAG veritabanında aranabilir kılan tam kapsamlı analiz stüdyosu.

---

## 🌟 Temel Yetenekler

- **Oynatma Listesi & Video Ayrıştırma:** YouTube playlist ve video URL'lerini anında ayrıştırma, metadata ve altyazı akışlarını çıkarma.
- **Yerel LLM Entegrasyonu (Ollama):** Buluta veri göndermeden, yerel büyük dil modelleri ile transkript analizi, soru-cevap ve bölüm özetleme.
- **Vite & Modern Frontend:** Hızlı, akıcı ve responsive modern web arayüzü.
- **Akıllı Arama & Semantik İndeksleme:** Videoların konuşma metinleri içerisinde anahtar kelime ve anlamsal semantik tarama.
- **Otomatik Yedekleme:** Analiz edilen video kayıtları ve transkript havuzunun yerel JSON formatında otomatik yedeklenmesi.

---

## 🛠️ Mimari & Teknoloji Yığını

- **Backend:** Python 3 (FastAPI / Asenkron HTTP)
- **Frontend:** JavaScript, Vite, HTML5 Canvas / Modern Web UI
- **Yapay Zeka (AI / NLP):** Yerel Ollama (Llama 3, DeepSeek vb.), Transkript Madenciliği
- **Veri Depolama:** Yerel JSON DB & SQLite

---

## 🚀 Hızlı Başlangıç

### 1. Gereksinimler
- Python 3.10+
- Node.js & npm (Frontend için)
- [Ollama](https://ollama.ai/) (Yerel AI modelleri için - İsteğe bağlı)

### 2. Kurulum ve Çalıştırma

```bash
# Proje dizinine geçin
cd "Youtube Playlist"

# Frontend bağımlılıklarını yükleyin
npm install

# Ana sunucu ve yönetim konsolunu başlatın
python main.py
```

Uygulama başladığında tarayıcınızda otomatik olarak açılacaktır.

---

## 📄 Lisans

Bu proje kişisel araştırma ve geliştirme amacıyla açık kaynak olarak sunulmuştur.
