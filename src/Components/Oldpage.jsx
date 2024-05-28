import React from 'react'
import Header from './Header';
import Banner from './Banner';
import { Customers } from './Customers';
import  {AboutUs} from './AboutUs';
import { Packages} from './Packages';
import { Footer } from './Footer';

const Oldpage = () => {
  return (
    <div>
     <Header/>
     <Banner/>
     <Customers/>
     <AboutUs/>
     <Packages/>
     <Footer/>
    </div>

  )
}

export default Oldpage