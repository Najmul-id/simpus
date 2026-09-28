import axios from 'axios';

// Konfigurasi dasar mengarah ke backend Laravel Anda
const api = axios.create({
  baseURL: 'http://localhost:8000/api', 
});

// Otomatis menyelipkan Token Siswa jika sudah login
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;