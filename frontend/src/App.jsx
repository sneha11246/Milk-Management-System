import './App.css';
import Navbar from './components/Navbar';
import Customer from './components/Customer';
function App(){
  return(
    <div>
      <Navbar/>
      <h2>Welcome to diary dashboard</h2>
      <Customer name="Sneha" quantity={5}/>
      <Customer name="neha" quantity={4}/>

     
    </div>
  );
}
export default App;