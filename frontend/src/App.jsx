import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardCard from './components/DashboardCard';

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="main-layout">
        <Sidebar />
       
        <main className="content">
          <h1>Dashboard</h1>
          <p>Welcome to your Dairy Management System.</p>
          <div className="dashboard-cards">
          <DashboardCard number={120} title ="Total Customers"/>
          <DashboardCard number={103} title ="Total Milk Sold"/>
          <DashboardCard number={170000} title ="Total Payment"/>
          <DashboardCard number={670000} title ="Pending Payments"/>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
