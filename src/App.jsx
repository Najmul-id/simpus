import Login from './components/Login';
import DashboardSiswa from './components/DashboardSiswa';

function App() {
  // Untuk sementara, kita atur aplikasi agar langsung menampilkan DashboardSiswa
  // Jika ingin melihat form login lagi, ganti <DashboardSiswa /> menjadi <Login />
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;