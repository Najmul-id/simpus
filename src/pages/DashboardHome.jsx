import { FiBookOpen, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { FaBullhorn } from 'react-icons/fa6';

export default function DashboardHome({ setMenuAktif }) {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-bg-color rounded-3xl shadow-sm p-6 border-l-4 border-accent flex flex-col justify-center lg:col-span-2">
          <h2 className="text-2xl font-bold text-text-utama">Selamat datang kembali, Najmul! 👋</h2>
          <p className="text-text-sekunder mt-2">Ini adalah ringkasan keanggotaan perpustakaanmu per tanggal 27 September 2026.</p>
        </div>
        <div className="bg-gradient-to-br from-primary-blue to-dark-navy rounded-3xl shadow-sm p-6 text-white flex flex-col justify-center relative overflow-hidden">
          {/* Ikon Pengumuman */}
          <FaBullhorn className="absolute top-0 right-0 m-4 opacity-20 text-6xl" />
          <h3 className="font-bold text-lg mb-1 relative z-10">Info Perpustakaan</h3>
          <p className="text-sm text-light-blue relative z-10">Perpustakaan tutup lebih awal Jumat ini (14:00 WITA) karena rapat evaluasi.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-bg-color rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center space-x-5">
          <div className="p-4 bg-light-blue text-primary-blue rounded-2xl text-2xl shrink-0">
            <FiBookOpen /> {/* Ikon Buku */}
          </div>
          <div>
            <p className="text-text-sekunder text-xs font-semibold mb-1">Sedang Dipinjam</p>
            <h3 className="text-3xl font-black text-text-utama">2 <span className="text-sm font-normal">Buku</span></h3>
          </div>
        </div>
        <div className="bg-bg-color rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center space-x-5">
          <div className="p-4 bg-green-50 text-green-600 rounded-2xl text-2xl shrink-0">
            <FiCheckCircle /> {/* Ikon Centang */}
          </div>
          <div>
            <p className="text-text-sekunder text-xs font-semibold mb-1">Selesai Dibaca</p>
            <h3 className="text-3xl font-black text-text-utama">15 <span className="text-sm font-normal">Buku</span></h3>
          </div>
        </div>
        <div className="bg-bg-color rounded-3xl p-6 shadow-sm border border-gray-100 flex items-center space-x-5">
          <div className="p-4 bg-red-50 text-red-500 rounded-2xl text-2xl shrink-0">
            <FiAlertTriangle /> {/* Ikon Peringatan */}
          </div>
          <div>
            <p className="text-text-sekunder text-xs font-semibold mb-1">Tunggakan Denda</p>
            <h3 className="text-3xl font-black text-text-utama">Rp 0</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-bg-color rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-lg text-dark-navy">Buku Aktif Dipinjam</h3>
          </div>
          <div className="p-6 space-y-4 flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-light-blue/30 rounded-2xl border border-gray-100">
              <div className="flex space-x-4 items-center">
                <div className="w-12 h-16 bg-gray-200 rounded-xl flex-shrink-0 flex items-center justify-center text-xs text-gray-400 font-bold overflow-hidden">Cover</div>
                <div>
                  <h4 className="font-bold text-text-utama text-base">Belajar Dasar Pemrograman Web</h4>
                  <p className="text-xs text-text-sekunder mt-1">Rak: B-02 | Kode: BDPW-001</p>
                </div>
              </div>
              <div className="mt-3 sm:mt-0 flex flex-col items-start sm:items-end">
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-[10px] font-bold">Jatuh Tempo: 29 Sep</span>
                <p className="text-[10px] text-text-sekunder mt-1 italic">Kembalikan ke petugas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-bg-color rounded-3xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100"><h3 className="font-bold text-lg text-dark-navy">Baru Selesai Dibaca</h3></div>
            <div className="p-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-16 bg-gray-200 rounded-xl flex-shrink-0 flex items-center justify-center text-[10px] text-gray-400 font-bold">Cover</div>
                <div className="flex-1">
                  <h4 className="font-bold text-text-utama text-base">Filosofi Teras</h4>
                  <p className="text-xs text-text-sekunder mt-1">Dikembalikan: 5 Sep 2026</p>
                </div>
                <FiCheckCircle className="text-2xl text-green-500" /> {/* Ikon Centang Selesai */}
              </div>
            </div>
          </div>
          
          <div className="bg-bg-color rounded-3xl shadow-sm border border-gray-100 flex-1">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-lg text-dark-navy">Koleksi Terbaru</h3>
              <button onClick={() => setMenuAktif('katalog')} className="text-xs font-bold text-primary-blue hover:underline">Lihat Katalog</button>
            </div>
            <div className="p-6 flex gap-4 overflow-x-auto pb-2">
              <div className="w-24 shrink-0 cursor-pointer group" onClick={() => setMenuAktif('katalog')}>
                <div className="w-24 h-32 bg-gray-200 rounded-xl flex items-center justify-center text-xs text-gray-400 font-bold mb-2 group-hover:shadow-md transition-shadow">Cover</div>
                <p className="text-xs font-bold text-text-utama truncate group-hover:text-primary-blue">Clean Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}