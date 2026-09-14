# 🤖 05 - AI, RAG, OTOMASYON VE SCRAPER DİSİPLİNİ

Projelerde LLM entegrasyonu, RAG (Retrieval-Augmented Generation) veya web otomasyonu/scraper kullanıldığında devreye giren kurallardır.

---

### 1. Yerel ve Hibrit LLM / RAG Standartları
- **Bağlam Limiti Koruması:** LLM'e gönderilen bağlamı körü körüne şişirme; metinleri anlamlı parçalara (`chunking`) böl ve yalnızca en ilgili parçaları besle.
- **Model Seçim Esnekliği:** OpenAI, Gemini veya yerel Ollama modelleri arasında kolayca geçiş yapılabilecek soyut bir `LLMClient` arayüzü kur.
- **Maliyet ve Hız:** Tekrarlanan sorgular için basit bir disk/bellek önbelleği (caching) uygula.

---

### 2. Scraper ve Bot Otomasyonu (Anti-Ban & Dayanıklılık)
- **Kullanıcı Başlıkları:** İsteklerde mutlaka gerçekçi `User-Agent` ve temel tarayıcı başlıkları (`Accept`, `Accept-Language`) kullan.
- **Rate Limit & Bekleme:** Sunucuları boğmamak ve IP engeli yememek için rastgele gecikmeler (`random jitter`: 1-3 saniye) ekle.
- **Otonom Yeniden Deneme (Retry with Backoff):** Ağ kopmalarında veya 429/503 yanıtlarında eksponansiyel geri çekilme ile otomatik 3 deneme yap.
- **HTML Değişiklik Koruması:** Veri çekerken tek bir CSS seçicisine bağımlı kalma; birden fazla alternatif seçici (fallback) tanımla.
