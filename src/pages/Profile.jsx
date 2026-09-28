import { FiUser, FiCamera, FiCheckCircle } from 'react-icons/fi';

export default function Profil() {
  return (
    <div className="animate-fade-in space-y-6">
      <h2 className="text-2xl font-bold text-dark-navy px-2">Profil Saya</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-dark-navy rounded-3xl p-8 shadow-xl text-white flex flex-col items-center relative overflow-hidden">
          {/* Ikon User Latar Belakang */}
          <FiUser className="absolute top-0 right-0 m-4 opacity-10 text-8xl" />
          
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-4 relative group cursor-pointer shadow-lg">
            <img src="https://ui-avatars.com/api/?name=Najmul+Rijal&background=102E68&color=fff" alt="Profil Besar" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex flex-col items-center">
                <FiCamera className="text-white text-xl mb-1" /> {/* Ikon Kamera */}
                <span className="text-white text-xs font-bold text-center">Ubah Foto</span>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold text-center">Muhammad Najmul Rijal</h3>
          <p className="text-light-blue text-sm mb-6">Siswa / Anggota</p>
          <div className="w-full bg-white rounded-xl p-4 flex flex-col items-center mt-auto">
            <p className="text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-wider">Kartu Anggota Digital</p>
            <div className="w-full h-12 flex justify-center space-x-1">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`bg-dark-navy h-full ${i%3 === 0 ? 'w-2' : i%2===0 ? 'w-1' : 'w-0.5'}`}></div>
                ))}
            </div>
            <p className="text-dark-navy font-bold tracking-widest mt-2">190204001</p>
          </div>
        </div>

        <div className="bg-bg-color rounded-3xl shadow-sm border border-gray-100 p-8 lg:col-span-2">
          <h3 className="font-bold text-lg text-dark-navy mb-6 border-b border-gray-100 pb-4">Informasi Pribadi</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-text-sekunder mb-2">Nama Lengkap</label>
                <input type="text" value="Muhammad Najmul Rijal" readOnly className="w-full px-5 py-3 bg-gray-100 text-gray-500 rounded-2xl border border-gray-200 cursor-not-allowed focus:outline-none"/>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-sekunder mb-2">Nomor Induk (NISN)</label>
                <input type="text" value="190204001" readOnly className="w-full px-5 py-3 bg-gray-100 text-gray-500 rounded-2xl border border-gray-200 cursor-not-allowed focus:outline-none"/>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-sekunder mb-2">Kelas</label>
                <input type="text" value="XII IPA 1" readOnly className="w-full px-5 py-3 bg-gray-100 text-gray-500 rounded-2xl border border-gray-200 cursor-not-allowed focus:outline-none"/>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-sekunder mb-2">Status Anggota</label>
                <div className="w-full px-5 py-3 bg-green-50 text-green-700 font-bold rounded-2xl border border-green-200 flex items-center">
                  <FiCheckCircle className="text-green-500 mr-2 text-lg" /> Aktif
                </div>
              </div>
            </div>
            <hr className="border-gray-100" />
            <h3 className="font-bold text-lg text-dark-navy mb-4">Informasi Kontak</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-text-utama mb-2">Email Aktif</label>
                <input type="email" defaultValue="najmul.rijal@email.com" className="w-full px-5 py-3 bg-white text-text-utama rounded-2xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-light-blue outline-none transition-colors"/>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-utama mb-2">Nomor HP / WhatsApp</label>
                <input type="text" defaultValue="0812-3456-7890" className="w-full px-5 py-3 bg-white text-text-utama rounded-2xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-light-blue outline-none transition-colors"/>
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-text-utama mb-2">Alamat Tinggal</label>
                <textarea rows="3" defaultValue="Jl. Mawar Merah No. 12, Kota Mataram" className="w-full px-5 py-3 bg-white text-text-utama rounded-2xl border border-gray-300 focus:border-primary-blue focus:ring-2 focus:ring-light-blue outline-none transition-colors resize-none"></textarea>
              </div>
            </div>
            <div className="flex justify-end pt-4">
              <button type="button" className="px-8 py-3 bg-primary-blue hover:bg-dark-navy text-white font-bold rounded-full shadow-lg transition-all">
                Simpan Perubahan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}