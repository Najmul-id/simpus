import { useState } from 'react';
import logoGambar from '../assets/satak.png'; // <- Buka komentar ini jika pakai logo gambar

export default function DashboardSiswa() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State baru untuk melacak menu apa yang sedang aktif
  // Pilihannya: 'dashboard', 'katalog', atau 'riwayat'
  const [menuAktif, setMenuAktif] = useState('dashboard');

  return (
    <div className="min-h-screen bg-light-blue font-sans p-4 md:p-6 lg:p-8">
      
      {/* ================= NAVBAR ================= */}
      <nav className="bg-bg-color rounded-2xl shadow-lg mb-6 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-4 z-50">
        
        {/* Kiri: Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-blue rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md shrink-0">
            <img 
                src={logoGambar} 
                alt="Logo SimPus" 
                className="w-full h-full object-contain"
                />
            {/* Jika pakai gambar, ganti huruf 'S' di atas dengan tag img Anda */}
          </div>
          <span className="font-bold text-dark-navy text-base sm:text-lg lg:text-xl truncate">
            SimPus
          </span>
        </div>

        {/* Tengah: Menu Desktop */}
        <div className="hidden md:flex space-x-1 lg:space-x-2">
          <button 
            onClick={() => setMenuAktif('dashboard')}
            className={`px-4 lg:px-5 py-2 rounded-lg font-semibold transition-all text-sm lg:text-base ${
              menuAktif === 'dashboard' ? 'bg-primary-blue text-white shadow-md' : 'text-text-sekunder hover:bg-primary-blue hover:text-white'
            }`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setMenuAktif('katalog')}
            className={`px-4 lg:px-5 py-2 rounded-lg font-semibold transition-all text-sm lg:text-base ${
              menuAktif === 'katalog' ? 'bg-primary-blue text-white shadow-md' : 'text-text-sekunder hover:bg-primary-blue hover:text-white'
            }`}
          >
            Katalog Buku
          </button>
          <button 
            onClick={() => setMenuAktif('riwayat')}
            className={`px-4 lg:px-5 py-2 rounded-lg font-semibold transition-all text-sm lg:text-base ${
              menuAktif === 'riwayat' ? 'bg-primary-blue text-white shadow-md' : 'text-text-sekunder hover:bg-primary-blue hover:text-white'
            }`}
          >
            Riwayat
          </button>
        </div>

        {/* Kanan: Profil & Tombol Mobile */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-bold text-text-utama">Najmul Rijal</p>
            <p className="text-xs text-text-sekunder">Siswa</p>
          </div>
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 border-2 border-primary-blue overflow-hidden shrink-0">
            <img src="https://ui-avatars.com/api/?name=Najmul+Rijal&background=102E68&color=fff" alt="Profil" className="w-full h-full object-cover"/>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 text-dark-navy bg-light-blue rounded-lg focus:outline-none"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-bg-color rounded-2xl shadow-lg p-4 mb-6 space-y-2">
           <button 
            onClick={() => { setMenuAktif('dashboard'); setIsMenuOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${menuAktif === 'dashboard' ? 'bg-primary-blue text-white' : 'text-text-sekunder hover:bg-light-blue'}`}>
            Dashboard
          </button>
          <button 
            onClick={() => { setMenuAktif('katalog'); setIsMenuOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${menuAktif === 'katalog' ? 'bg-primary-blue text-white' : 'text-text-sekunder hover:bg-light-blue'}`}>
            Katalog Buku
          </button>
          <button 
            onClick={() => { setMenuAktif('riwayat'); setIsMenuOpen(false); }}
            className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${menuAktif === 'riwayat' ? 'bg-primary-blue text-white' : 'text-text-sekunder hover:bg-light-blue'}`}>
            Riwayat
          </button>
        </div>
      )}

     {/* ================= AREA KONTEN ================= */}
      <main className="max-w-7xl mx-auto space-y-6">
        
 {/* === TAMPILAN 1: DASHBOARD === */}
        {menuAktif === 'dashboard' && (
          <div className="animate-fade-in space-y-6">
            
            {/* Header Profil & Pengumuman */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Sapaan (Makan 2 kolom) */}
              <div className="bg-bg-color rounded-2xl shadow-sm p-5 sm:p-6 border-l-4 border-accent flex flex-col justify-center lg:col-span-2">
                <h2 className="text-xl sm:text-2xl font-bold text-text-utama">Selamat datang kembali, Najmul! 👋</h2>
                <p className="text-sm sm:text-base text-text-sekunder mt-2">Ini adalah ringkasan keanggotaan perpustakaanmu per tanggal 27 September 2026.</p>
              </div>

              {/* Papan Pengumuman Info Perpustakaan */}
              <div className="bg-gradient-to-br from-primary-blue to-dark-navy rounded-2xl shadow-sm p-5 sm:p-6 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20 text-6xl">📢</div>
                <h3 className="font-bold text-lg mb-1 relative z-10">Info Perpustakaan</h3>
                <p className="text-sm text-light-blue relative z-10">Perpustakaan akan tutup lebih awal pada hari Jumat ini (jam 14:00 WITA) karena rapat evaluasi.</p>
              </div>
            </div>

            {/* Statistik Cepat */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-bg-color rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="p-3 bg-light-blue text-primary-blue rounded-2xl text-2xl shrink-0">📚</div>
                <div>
                  <p className="text-text-sekunder text-xs font-semibold mb-1">Sedang Dipinjam</p>
                  <h3 className="text-2xl font-black text-text-utama">2 <span className="text-xs font-normal">Buku</span></h3>
                </div>
              </div>
              
              <div className="bg-bg-color rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="p-3 bg-green-50 text-green-600 rounded-2xl text-2xl shrink-0">✅</div>
                <div>
                  <p className="text-text-sekunder text-xs font-semibold mb-1">Selesai Dibaca (Total)</p>
                  <h3 className="text-2xl font-black text-text-utama">15 <span className="text-xs font-normal">Buku</span></h3>
                </div>
              </div>

              <div className="bg-bg-color rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center space-x-4">
                <div className="p-3 bg-red-50 text-red-500 rounded-2xl text-2xl shrink-0">⚠️</div>
                <div>
                  <p className="text-text-sekunder text-xs font-semibold mb-1">Tunggakan Saat Ini</p>
                  <h3 className="text-2xl font-black text-text-utama">Rp 0</h3>
                </div>
              </div>
            </div>

            {/* AREA BAWAH: Buku Aktif & Riwayat Terakhir/Rekomendasi */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              
              {/* Kolom Kiri: Buku Aktif Dipinjam */}
              <div className="bg-bg-color rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-dark-navy">Buku Aktif Dipinjam</h3>
                </div>
                <div className="p-5 space-y-4 flex-1">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-light-blue/30 rounded-xl border border-gray-100">
                    <div className="flex space-x-4 items-center">
                      <div className="w-12 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-400 font-bold overflow-hidden">Cover</div>
                      <div>
                        <h4 className="font-bold text-text-utama text-base">Belajar Dasar Pemrograman Web</h4>
                        <p className="text-xs text-text-sekunder mt-1">Rak: B-02 | Kode: BDPW-001</p>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 flex flex-col items-start sm:items-end">
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-[10px] font-bold">Jatuh Tempo: 29 Sep</span>
                      <p className="text-[10px] text-text-sekunder mt-1 italic">Kembalikan ke meja petugas</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-light-blue/30 rounded-xl border border-gray-100">
                    <div className="flex space-x-4 items-center">
                      <div className="w-12 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-xs text-gray-400 font-bold overflow-hidden">Cover</div>
                      <div>
                        <h4 className="font-bold text-text-utama text-base">Algoritma & Struktur Data</h4>
                        <p className="text-xs text-text-sekunder mt-1">Rak: C-14 | Kode: ASD-092</p>
                      </div>
                    </div>
                    <div className="mt-3 sm:mt-0 flex flex-col items-start sm:items-end">
                      <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[10px] font-bold">Jatuh Tempo: 4 Okt</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Kolom Kanan: Baru Selesai & Koleksi Terbaru */}
              <div className="flex flex-col gap-6">
                
                {/* Kotak Buku Selesai Dibaca */}
                <div className="bg-bg-color rounded-2xl shadow-sm border border-gray-100">
                  <div className="p-5 border-b border-gray-100">
                    <h3 className="font-bold text-lg text-dark-navy">Baru Selesai Dibaca</h3>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-14 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center text-[10px] text-gray-400 font-bold">Cover</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-text-utama text-sm">Filosofi Teras</h4>
                        <p className="text-xs text-text-sekunder mt-1">Dikembalikan: 5 Sep 2026</p>
                      </div>
                      <span className="text-xl text-green-500">✅</span>
                    </div>
                  </div>
                </div>

                {/* Kotak Koleksi Terbaru */}
                <div className="bg-bg-color rounded-2xl shadow-sm border border-gray-100 flex-1">
                  <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-dark-navy">Koleksi Terbaru</h3>
                    <button onClick={() => setMenuAktif('katalog')} className="text-xs font-bold text-primary-blue hover:underline">Lihat Katalog</button>
                  </div>
                  
                  <div className="p-5 flex gap-4 overflow-x-auto pb-2">
                    <div className="w-24 shrink-0 cursor-pointer group" onClick={() => setMenuAktif('katalog')}>
                      <div className="w-24 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 font-bold mb-2 group-hover:shadow-md transition-shadow">Cover</div>
                      <p className="text-xs font-bold text-text-utama truncate group-hover:text-primary-blue">Clean Code</p>
                    </div>
                    <div className="w-24 shrink-0 cursor-pointer group" onClick={() => setMenuAktif('katalog')}>
                      <div className="w-24 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 font-bold mb-2 group-hover:shadow-md transition-shadow">Cover</div>
                      <p className="text-xs font-bold text-text-utama truncate group-hover:text-primary-blue">Design Patterns</p>
                    </div>
                    <div className="w-24 shrink-0 cursor-pointer group" onClick={() => setMenuAktif('katalog')}>
                      <div className="w-24 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-400 font-bold mb-2 group-hover:shadow-md transition-shadow">Cover</div>
                      <p className="text-xs font-bold text-text-utama truncate group-hover:text-primary-blue">Seni Berbicara</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* === TAMPILAN 2: KATALOG BUKU (HANYA INFO & STOK) === */}
        {menuAktif === 'katalog' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-bg-color p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-xl font-bold text-dark-navy">Pencarian Koleksi</h2>
              <div className="w-full md:w-96 flex">
                <input type="text" placeholder="Cari judul, ISBN, atau penulis..." className="w-full px-4 py-2 border border-gray-200 rounded-l-lg focus:outline-none focus:border-primary-blue text-sm"/>
                <button className="bg-primary-blue text-white px-4 py-2 rounded-r-lg font-semibold hover:bg-dark-navy transition-colors">Cari</button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              
              {/* Kartu Buku 1 */}
              <div className="bg-bg-color rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex flex-col">
                <div className="h-48 bg-gray-100 flex justify-center items-center text-gray-400 font-bold text-sm">Cover Gambar</div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-accent uppercase bg-light-blue px-2 py-1 rounded">Teknologi</span>
                    <span className="text-[10px] font-semibold text-text-sekunder">Rak: A-01</span>
                  </div>
                  <h3 className="font-bold text-text-utama text-base leading-tight mb-1">React JS untuk Pemula</h3>
                  <p className="text-xs text-text-sekunder mb-1">Penulis: Sandhika Galih</p>
                  <p className="text-xs text-gray-400 mb-4">ISBN: 978-602-0000-00</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-text-utama">Status Ketersediaan:</span>
                      {/* Badge Hijau = Tersedia */}
                      <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-xs">
                        Tersedia (3)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kartu Buku 2 */}
              <div className="bg-bg-color rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex flex-col">
                <div className="h-48 bg-gray-100 flex justify-center items-center text-gray-400 font-bold text-sm">Cover Gambar</div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold text-accent uppercase bg-light-blue px-2 py-1 rounded">Sastra</span>
                    <span className="text-[10px] font-semibold text-text-sekunder">Rak: C-12</span>
                  </div>
                  <h3 className="font-bold text-text-utama text-base leading-tight mb-1">Bumi Manusia</h3>
                  <p className="text-xs text-text-sekunder mb-1">Penulis: Pramoedya A. Toer</p>
                  <p className="text-xs text-gray-400 mb-4">ISBN: 978-979-0000-00</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-text-utama">Status Ketersediaan:</span>
                      {/* Badge Merah = Habis Dipinjam */}
                      <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-xs">
                        Sedang Dipinjam
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* === TAMPILAN 3: RIWAYAT PEMINJAMAN (MENAMPILKAN DENDA DIBAYAR) === */}
        {menuAktif === 'riwayat' && (
          <div className="bg-bg-color rounded-2xl shadow-sm border border-gray-100 animate-fade-in">
            <div className="p-5 sm:p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-dark-navy">Riwayat Peminjaman Anda</h2>
              <p className="text-sm text-text-sekunder mt-1">Daftar buku yang pernah dipinjam. Silakan hubungi admin jika ada ketidaksesuaian data.</p>
            </div>
            
            <div className="p-5 sm:p-6 space-y-4">
              
              {/* Item Riwayat 1: Tepat Waktu */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-[10px] font-bold">Selesai</span>
                    <h4 className="font-bold text-text-utama text-base">Filosofi Teras</h4>
                  </div>
                  <div className="text-xs text-text-sekunder space-y-1 mt-2">
                    <p>Waktu Pinjam: 1 Sep 2026, 09:15 WITA</p>
                    <p>Waktu Kembali: 5 Sep 2026, 14:30 WITA</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <p className="text-xs font-semibold text-text-utama">Status Denda:</p>
                  <p className="text-sm font-bold text-gray-400 mt-1">Tidak Ada (-)</p>
                </div>
              </div>

              {/* Item Riwayat 2: Terlambat & Denda Terbayar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between p-4 sm:p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="px-2 py-0.5 bg-red-100 text-red-600 rounded text-[10px] font-bold">Terlambat</span>
                    <h4 className="font-bold text-text-utama text-base">Dasar Jaringan Komputer</h4>
                  </div>
                  <div className="text-xs text-text-sekunder space-y-1 mt-2">
                    <p>Waktu Pinjam: 10 Ags 2026, 10:00 WITA</p>
                    <p>Jatuh Tempo: 17 Ags 2026</p>
                    <p className="text-red-500 font-medium">Dikembalikan: 20 Ags 2026 (Telat 3 Hari)</p>
                  </div>
                </div>
                
                {/* Bagian Status Denda Terbayar */}
                <div className="mt-4 md:mt-0 bg-white border border-gray-200 p-3 rounded-lg text-left md:text-right min-w-[150px]">
                  <p className="text-[10px] font-bold text-text-sekunder uppercase mb-1">Total Denda Dibayar</p>
                  <p className="text-lg font-black text-dark-navy">Rp 6.000</p>
                  <p className="text-[10px] font-semibold text-green-600 mt-1">✔ Lunas (Diserahkan ke Admin)</p>
                </div>
              </div>

            </div>
          </div>
        )}

      </main>
    </div>
  );
}