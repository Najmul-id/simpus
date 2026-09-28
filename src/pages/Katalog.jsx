import { useState } from 'react';
import { FiSearch, FiX, FiInfo } from 'react-icons/fi'; // Tambahan ikon close dan info
import BookCard from '../components/BookCard';

export default function Katalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [kategoriFilter, setKategoriFilter] = useState('');
  
  // State untuk menyimpan data buku yang sedang diklik (jika null, pop-up ditutup)
  const [bukuTerpilih, setBukuTerpilih] = useState(null);

  // Data diperkaya dengan Penerbit, Tahun, ISBN, dan Deskripsi
  const daftarBuku = [
    { 
      id: 1, judul: "React JS untuk Pemula", penulis: "Sandhika Galih", kategori: "Teknologi", rak: "A-01", stok: 3,
      penerbit: "Informatika Pustaka", tahun: "2023", isbn: "978-602-1234-56-7", halaman: 250, bahasa: "Indonesia",
      deskripsi: "Buku panduan lengkap belajar React JS dari nol hingga mahir. Dilengkapi dengan studi kasus nyata pembuatan aplikasi web modern menggunakan Hooks dan Tailwind CSS."
    },
    { 
      id: 2, judul: "Bumi Manusia", penulis: "Pramoedya A. Toer", kategori: "Sastra", rak: "C-12", stok: 0,
      penerbit: "Lentera Dipantara", tahun: "2005", isbn: "978-979-97312-3-4", halaman: 535, bahasa: "Indonesia",
      deskripsi: "Novel sejarah epic yang mengisahkan perjuangan Minke, seorang pribumi terpelajar di era kolonial Hindia Belanda, dalam menghadapi penindasan dan mencari keadilan."
    },
    { 
      id: 3, judul: "Fisika Dasar 1", penulis: "Halliday Resnick", kategori: "Sains", rak: "B-04", stok: 5,
      penerbit: "Erlangga", tahun: "2018", isbn: "978-602-298-123-4", halaman: 480, bahasa: "Indonesia (Terjemahan)",
      deskripsi: "Buku rujukan utama mahasiswa sains dan teknik. Membahas kinematika, dinamika, usaha, energi, hingga mekanika fluida dengan pendekatan matematis yang sistematis."
    },
    { 
      id: 4, judul: "Clean Code", penulis: "Robert C. Martin", kategori: "Teknologi", rak: "A-02", stok: 2,
      penerbit: "Prentice Hall", tahun: "2008", isbn: "978-013-235088-4", halaman: 464, bahasa: "Inggris",
      deskripsi: "Panduan legendaris bagi programmer perangkat lunak yang ingin menulis kode yang bersih, mudah dibaca, dan mudah dikembangkan (maintainable) oleh tim."
    },
  ];

  const filteredBuku = daftarBuku.filter((buku) => {
    const cocokKategori = kategoriFilter === '' || buku.kategori === kategoriFilter;
    const cocokPencarian = 
      buku.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
      buku.penulis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      buku.rak.toLowerCase().includes(searchQuery.toLowerCase());
    return cocokKategori && cocokPencarian;
  });

  return (
    <div className="space-y-6 animate-fade-in relative">
      
      {/* ================= HEADER PENCARIAN ================= */}
      <div className="bg-bg-color p-5 sm:p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        
        <h2 className="text-xl font-bold text-dark-navy w-full md:w-auto">
          Pencarian Koleksi
        </h2>
        
        {/* Susunan Search Bar dan Dropdown */}
        <div className="flex flex-col w-full md:w-auto gap-3 md:items-end">
          
          {/* Baris 1: Kolom Pencarian + Ikon Sejajar */}
          <div className="flex w-full md:w-80 shadow-sm rounded-full overflow-hidden border border-gray-200 focus-within:border-primary-blue focus-within:ring-2 focus-within:ring-light-blue transition-all">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari judul, penulis, rak..." 
              className="w-full px-5 py-3 h-12 focus:outline-none text-base text-text-utama placeholder-gray-400"
            />
            <button className="bg-primary-blue text-white px-5 h-12 flex items-center justify-center font-bold hover:bg-dark-navy transition-colors shrink-0">
              <FiSearch className="text-xl" />
            </button>
          </div>

          {/* Baris 2: Dropdown Kategori di Bawah */}
          <select 
            value={kategoriFilter}
            onChange={(e) => setKategoriFilter(e.target.value)}
            className="w-full md:w-80 px-5 py-2.5 bg-gray-50 text-text-sekunder text-sm font-medium focus:outline-none focus:ring-2 focus:ring-light-blue border border-gray-200 rounded-full cursor-pointer transition-all"
          >
            <option value="">Semua Kategori</option>
            <option value="Teknologi">Teknologi</option>
            <option value="Sastra">Sastra & Novel</option>
            <option value="Sains">Sains</option>
            <option value="Pengembangan Diri">Pengembangan Diri</option>
          </select>

        </div>
      </div>

      {/* ================= AREA HASIL PENCARIAN ================= */}
      {filteredBuku.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBuku.map((buku) => (
            <BookCard 
              key={buku.id} 
              buku={buku} // Mengirim 1 objek utuh ke komponen
              onDetailClick={(dataBuku) => setBukuTerpilih(dataBuku)} // Memicu pop-up
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-bg-color rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
          <p className="text-5xl mb-4">🔍</p>
          <h3 className="text-xl font-bold text-dark-navy">Buku tidak ditemukan</h3>
          <p className="text-sm text-text-sekunder mt-2">Coba gunakan kata kunci lain atau ubah kategori pilihanmu.</p>
        </div>
      )}

      {/* ================= MODAL / POP-UP DETAIL BUKU ================= */}
      {bukuTerpilih && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-navy/60 backdrop-blur-sm animate-fade-in">
          
          <div className="bg-bg-color w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Header Pop-up */}
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white">
              <h3 className="font-bold text-lg text-dark-navy flex items-center gap-2">
                <FiInfo className="text-primary-blue" /> Informasi Detail Buku
              </h3>
              <button 
                onClick={() => setBukuTerpilih(null)} 
                className="p-2 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors"
              >
                <FiX className="text-lg" />
              </button>
            </div>

            {/* Body Pop-up yang bisa di-scroll */}
            <div className="p-6 overflow-y-auto flex flex-col sm:flex-row gap-6">
              
              {/* Sisi Kiri: Gambar Cover Besar */}
              <div className="w-full sm:w-1/3 shrink-0">
                <div className="w-full aspect-[2/3] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 font-bold border border-gray-100 shadow-inner">
                  Cover / Gambar
                </div>
                <div className="mt-4 flex justify-center">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold w-full text-center ${bukuTerpilih.stok > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                    {bukuTerpilih.stok > 0 ? `Stok: ${bukuTerpilih.stok} Buku` : 'Buku Habis Dipinjam'}
                  </span>
                </div>
              </div>

              {/* Sisi Kanan: Teks Data Buku */}
              <div className="w-full sm:w-2/3 space-y-4">
                <div>
                  <h2 className="text-2xl font-black text-dark-navy leading-tight">{bukuTerpilih.judul}</h2>
                  <p className="text-primary-blue font-semibold mt-1">Oleh: {bukuTerpilih.penulis}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div>
                    <span className="block text-[10px] text-text-sekunder uppercase font-bold">Kategori</span>
                    <span className="font-semibold text-text-utama">{bukuTerpilih.kategori}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-text-sekunder uppercase font-bold">Penerbit</span>
                    <span className="font-semibold text-text-utama">{bukuTerpilih.penerbit}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-text-sekunder uppercase font-bold">Tahun Terbit</span>
                    <span className="font-semibold text-text-utama">{bukuTerpilih.tahun}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-text-sekunder uppercase font-bold">Bahasa</span>
                    <span className="font-semibold text-text-utama">{bukuTerpilih.bahasa}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-text-sekunder uppercase font-bold">Tebal Buku</span>
                    <span className="font-semibold text-text-utama">{bukuTerpilih.halaman} Halaman</span>
                  </div>
                  <div>
                    <span className="block text-[10px] text-text-sekunder uppercase font-bold">ISBN</span>
                    <span className="font-semibold text-text-utama">{bukuTerpilih.isbn}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-[10px] text-text-sekunder uppercase font-bold">Posisi Rak</span>
                    <span className="font-semibold text-accent">{bukuTerpilih.rak}</span>
                  </div>
                </div>

                <div>
                  <span className="block text-xs text-text-sekunder font-bold mb-1">Sinopsis / Deskripsi:</span>
                  <p className="text-sm text-text-utama leading-relaxed text-justify">
                    {bukuTerpilih.deskripsi}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}