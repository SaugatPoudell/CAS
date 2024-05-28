
import './App.css';
import { Navbar } from './Navbar/Navbar';
import Header from './Components/Header';
import Banner from './Components/Banner';
import { Customers } from './Components/Customers';
import  {AboutUs} from './Components/AboutUs';
import { Packages} from './Components/Packages';
import { Footer } from './Components/Footer';
import'./Navbar/Navbar';
import {Routes,Route} from 'react-router-dom'
import Oldpage from './Components/Oldpage';
import Newpage from './Components/Newpage';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/home" element={<Oldpage/>} />
      <Route path="/newpage" element={<Newpage/>} />
      </Routes> 
     <Oldpage/>
    
    </div>
  );
}

export default App;
