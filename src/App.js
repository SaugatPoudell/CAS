import'./Navbar/Navbar';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import Header from './Components/Header';
import Banner from './Components/Banner';
import { Customers } from './Components/Customers';
import  {AboutUs} from './Components/AboutUs';
import { Packages} from './Components/Packages';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Customers/>
     <AboutUs/>
     <Packages/>
     <Footer/>
  
    </div>
  );
}

export default App;
