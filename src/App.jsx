import Login from './pages/Login';
import DashboardSiswa from './components/DashboardSiswa';
import katalog from './pages/Katalog';

function App() {
  // Untuk sementara, kita atur aplikasi agar langsung menampilkan DashboardSiswa
  // Jika ingin melihat form login lagi, ganti <DashboardSiswa /> menjadi <Login />
  return (
    <div>
      <DashboardSiswa />
    </div>
  );
}

export default App;