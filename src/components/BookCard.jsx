export default function BookCard({ buku, onDetailClick }) {
  return (
    <div className="bg-bg-color rounded-3xl border border-gray-100 overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow">
      
      {/* Area Cover Buku */}
      <div className="h-48 bg-gray-100 flex justify-center items-center text-gray-400 font-bold text-sm">
        Cover Gambar
      </div>
      
      {/* Area Informasi Buku */}
      <div className="p-6 flex flex-col flex-1">
        
        {/* Label Kategori dan Rak */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-bold text-accent uppercase bg-light-blue px-2 py-1 rounded-md">
            {buku.kategori}
          </span>
          <span className="text-[10px] font-semibold text-text-sekunder">
            Rak: {buku.rak}
          </span>
        </div>
        
        {/* Judul dan Penulis */}
        <h3 className="font-bold text-text-utama text-base leading-tight mb-2">
          {buku.judul}
        </h3>
        <p className="text-xs text-text-sekunder mb-1">
          Penulis: {buku.penulis}
        </p>
        
        {/* Garis batas, Status Ketersediaan, dan Tombol Detail */}
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-semibold text-text-utama">Ketersediaan:</span>
            {buku.stok > 0 ? (
              <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-[10px]">
                Tersedia ({buku.stok})
              </span>
            ) : (
              <span className="bg-red-100 text-red-600 font-bold px-3 py-1 rounded-full text-[10px]">
                Sedang Dipinjam
              </span>
            )}
          </div>
          
          {/* Tombol Lihat Detail */}
          <button 
            onClick={() => onDetailClick(buku)}
            className="w-full py-2 bg-light-blue text-primary-blue hover:bg-primary-blue hover:text-white rounded-full text-sm font-bold transition-colors"
          >
            Lihat Detail
          </button>
        </div>

      </div>
    </div>
  );
}