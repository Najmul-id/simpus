export default function Riwayat() {
  return (
    <div className="bg-bg-color rounded-3xl shadow-sm border border-gray-100 animate-fade-in">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold text-dark-navy">Riwayat Peminjaman Anda</h2>
        <p className="text-sm text-text-sekunder mt-1">Daftar buku yang pernah dipinjam.</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between p-5 border border-gray-200 rounded-2xl bg-gray-50/50">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-[10px] font-bold">Selesai</span>
              <h4 className="font-bold text-text-utama text-base">Filosofi Teras</h4>
            </div>
            <div className="text-xs text-text-sekunder space-y-1">
              <p>Waktu Pinjam: 1 Sep 2026</p>
              <p>Waktu Kembali: 5 Sep 2026</p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <p className="text-xs font-semibold text-text-utama">Status Denda:</p>
            <p className="text-sm font-bold text-gray-400 mt-1">Tidak Ada (-)</p>
          </div>
        </div>
      </div>
    </div>
  );
}