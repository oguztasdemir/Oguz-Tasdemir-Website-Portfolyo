/**
 * API İletişim Katmanı (frontend/js/api.js)
 * Backend REST uç noktalarıyla konuşur; file:// veya statik açılışta yerel veri motoruna otomatik düşer.
 */

const ApiService = {
  async fetchProjects(category = 'all', searchQuery = '') {
    // 1. HTTP/Backend üzerinden REST çağrısı dene (Klasördeki en güncel projeleri dinamik alır)
    try {
      const params = new URLSearchParams();
      if (category && category !== 'all') params.append('category', category);
      if (searchQuery) params.append('q', searchQuery);

      const res = await fetch(`/api/projects?${params.toString()}`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Backend erişilemezse (örneğin dosya çift tıklanıp file:// ile açılmışsa) fallback'e geç
    }

    // 2. Fallback: Doğrudan yerel JavaScript veri kaynağını filtrele (file:// protokolünde %100 çalışır)
    if (typeof PROJECTS_DATA !== 'undefined' && Array.isArray(PROJECTS_DATA) && PROJECTS_DATA.length > 0) {
      return this.filterLocal(PROJECTS_DATA, category, searchQuery);
    }

    // 3. Veri bulunamadıysa boş liste dön
    return [];
  },

  async fetchProjectById(id) {
    if (typeof PROJECTS_DATA !== 'undefined' && Array.isArray(PROJECTS_DATA)) {
      return PROJECTS_DATA.find(p => p.id === id) || null;
    }

    try {
      const res = await fetch(`/api/projects/${id}`);
      if (res.ok) return await res.json();
    } catch {}

    return null;
  },

  filterLocal(data, category, q) {
    const query = (q || '').toLowerCase().trim();
    return data.filter(p => {
      let matchesCat = false;
      if (category === 'all') {
        matchesCat = true;
      } else if (category === 'nlp_data') {
        matchesCat = (p.category === 'nlp_data' || p.category === 'ai');
      } else {
        matchesCat = (p.category === category);
      }

      const matchesSearch = !query ||
        p.title.toLowerCase().includes(query) ||
        p.summary.toLowerCase().includes(query) ||
        (p.techStack && p.techStack.some(t => t.toLowerCase().includes(query)));
      return matchesCat && matchesSearch;
    });
  }
};
