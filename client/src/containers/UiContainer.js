import React, { useState, useEffect, useRef } from 'react';
// import Map from '../components/Map'
import Map from './Map'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Choro from '../components/Choro'
import { getCoffees } from "../Services"

const UiContainer = () => {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        getCoffees().then((allCoffees) => {
          setCoffees(allCoffees);
        });
      }, []);

      
    return(
        <div id = "Ui-Container">
            <Header />
            {/* OG MAP LEAVE ME IN */}
            {/* <Map coffees={coffees} />  */}
            <Choro coffees={coffees}/>
            <Footer/>
        </div>
    )
}

export default UiContainer; 