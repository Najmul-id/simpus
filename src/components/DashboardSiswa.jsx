import { useState } from 'react';
import Navbar from '../components/Navbar';
import DashboardHome from '../pages/DashboardHome';
import Katalog from '../pages/Katalog';
import Riwayat from '../pages/Riwayat';
import Profil from '../pages/Profile';

export default function DashboardSiswa() {
  const [menuAktif, setMenuAktif] = useState('dashboard');

  return (
    <div className="min-h-screen bg-light-blue font-sans p-4 md:p-6 lg:p-8">
      
      {/* KOREKSI: Menghilangkan tanda kutip pada variabel props */}
      <Navbar menuAktif={menuAktif} setMenuAktif={setMenuAktif} />

      <main className="max-w-7xl mx-auto space-y-6">
        {/* KOREKSI: Menghilangkan tanda kutip pada setMenuAktif */}
        {menuAktif === 'dashboard' && <DashboardHome setMenuAktif={setMenuAktif} />}
        {menuAktif === 'katalog' && <Katalog />}
        {menuAktif === 'riwayat' && <Riwayat />}
        {menuAktif === 'profil' && <Profil />}
      </main>
      
    </div>
  );
}