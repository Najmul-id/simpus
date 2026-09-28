import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import ikon Menu dan Close
import gambarHeader from '../assets/satak.png';

export default function Navbar({ menuAktif, setMenuAktif }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-bg-color rounded-3xl shadow-lg mb-6 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-4 z-50">
        <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md shrink-0 overflow-hidden">
          <img
            src= {gambarHeader} // Ganti dengan URL gambar atau import gambar Anda
            alt="Deskripsi Gambar"
            className="w-full h-full object-cover"
          />
        </div>
          <span className="font-bold text-dark-navy text-base sm:text-lg lg:text-xl truncate">
            SimPus
          </span>
        </div>

        <div className="hidden md:flex space-x-1 lg:space-x-2">
          <button onClick={() => setMenuAktif('dashboard')} className={`px-4 lg:px-5 py-2 rounded-full font-semibold transition-all text-sm lg:text-base ${menuAktif === 'dashboard' ? 'bg-primary-blue text-white shadow-md' : 'text-text-sekunder hover:bg-primary-blue hover:text-white'}`}>Dashboard</button>
          <button onClick={() => setMenuAktif('katalog')} className={`px-4 lg:px-5 py-2 rounded-full font-semibold transition-all text-sm lg:text-base ${menuAktif === 'katalog' ? 'bg-primary-blue text-white shadow-md' : 'text-text-sekunder hover:bg-primary-blue hover:text-white'}`}>Katalog Buku</button>
          <button onClick={() => setMenuAktif('riwayat')} className={`px-4 lg:px-5 py-2 rounded-full font-semibold transition-all text-sm lg:text-base ${menuAktif === 'riwayat' ? 'bg-primary-blue text-white shadow-md' : 'text-text-sekunder hover:bg-primary-blue hover:text-white'}`}>Riwayat</button>
        </div>

        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-bold text-text-utama">Najmul Rijal</p>
            <p className="text-xs text-text-sekunder">190204001</p>
          </div>
          
          <button 
            onClick={() => setMenuAktif('profil')}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 overflow-hidden shrink-0 transition-transform hover:scale-105 focus:outline-none ${menuAktif === 'profil' ? 'border-accent shadow-lg' : 'border-primary-blue'}`}
            title="Lihat Profil Saya"
          >
            <img src="https://ui-avatars.com/api/?name=Najmul+Rijal&background=102E68&color=fff" alt="Profil" className="w-full h-full object-cover"/>
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-1.5 sm:p-2 text-dark-navy bg-light-blue rounded-xl focus:outline-none">
            {/* MENGGUNAKAN REACT ICONS DI SINI */}
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-bg-color rounded-3xl shadow-lg p-4 mb-6 space-y-2">
           <button onClick={() => { setMenuAktif('dashboard'); setIsMenuOpen(false); }} className={`w-full text-left px-5 py-3 rounded-2xl font-semibold ${menuAktif === 'dashboard' ? 'bg-primary-blue text-white' : 'text-text-sekunder hover:bg-light-blue'}`}>Dashboard</button>
           <button onClick={() => { setMenuAktif('katalog'); setIsMenuOpen(false); }} className={`w-full text-left px-5 py-3 rounded-2xl font-semibold ${menuAktif === 'katalog' ? 'bg-primary-blue text-white' : 'text-text-sekunder hover:bg-light-blue'}`}>Katalog Buku</button>
           <button onClick={() => { setMenuAktif('riwayat'); setIsMenuOpen(false); }} className={`w-full text-left px-5 py-3 rounded-2xl font-semibold ${menuAktif === 'riwayat' ? 'bg-primary-blue text-white' : 'text-text-sekunder hover:bg-light-blue'}`}>Riwayat</button>
           <button onClick={() => { setMenuAktif('profil'); setIsMenuOpen(false); }} className={`w-full text-left px-5 py-3 rounded-2xl font-semibold ${menuAktif === 'profil' ? 'bg-primary-blue text-white' : 'text-text-sekunder hover:bg-light-blue'}`}>Profil Saya</button>
        </div>
      )}
    </>
  );
}