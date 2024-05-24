import'./Navbar/Navbar';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import Header from './Components/Header';
import Banner from './Components/Banner';
import { Customers } from './Components/Customers';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Customers/>
  
    </div>
  );
}

export default App;
