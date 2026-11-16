import './App.css';
import Customer from './components/Customer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardCard from './components/DashboardCard';
const cards = [
  { number: 120, title: "Total Customers" },
  { number: 103, title: "Total Milk Sold" },
  { number: 170000, title: "Total Payment" },
  { number: 670000, title: "Pending Payments" }
];
function App() {
  return (
    <div className="app">
      <Navbar />
      <Customer/>
      <div className="main-layout">
        <Sidebar />
       
        <main className="content">
          <h1>Dashboard</h1>
          <p>Welcome to your Dairy Management System.</p>
          
<div className="dashboard-cards">
  {cards.map((card,index) => {
    return (
      <DashboardCard
      key={index}
        number={card.number}
        title={card.title}
      />
    );
  })}
</div>

        </main>
      </div>
    </div>
  );
}

export default App;
