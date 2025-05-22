// src/utils/api.js

// const DEFAULT_API_BASE_URL = 'http://localhost:5059/api';

// Ortamdan gelen baseUrl varsa onu kullan, yoksa default kullan
// export const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || process.env.REACT_APP_API_BASE_URL || DEFAULT_API_BASE_URL;



// Geliştirici hatası kontrolü: URL geçerli mi?

// if (!apiBaseUrl.startsWith('http')) {
//   console.warn('[API WARNING] apiBaseUrl tanımı geçerli bir HTTP adresi değil:', apiBaseUrl);
// }


export const apiBaseUrl = 'http://localhost:5059/api';