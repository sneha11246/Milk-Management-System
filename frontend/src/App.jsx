import './App.css';

import Customer from './components/Customer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import DashboardCard from './components/DashboardCard';
import CustomerList from './components/CustomerList';

const cards = [
  { number: 120, title: "Total Customers", color: "#e3f2fd" },
  { number: 103, title: "Total Milk Sold", color: "#e8f5e9" },
  { number: 170000, title: "Total Payment", color: "#fff3e0" },
  { number: 670000, title: "Pending Payments", color: "#ffebee" }
];

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="main-layout">

        <Sidebar />

        <main className="content">

          <h1>Dashboard</h1>

          <p>Welcome to your Dairy Management System.</p>

          {/* Dashboard Cards */}
          <div className="dashboard-cards">
            {cards.map((card, index) => {
              return (
                <DashboardCard
                  key={index}
                  number={card.number}
                  title={card.title}
                  color={card.color}
                />
              );
            })}
          </div>

      
          

          {/* Customer Section (useState) */}
          <div className="customer-section">
            <Customer name="Rahul" />
            <Customer name="Priya" />
          </div>

          {/* Task 3: Array + map() */}
          <CustomerList />

        </main>

      </div>

    </div>
  );
}

export default App;