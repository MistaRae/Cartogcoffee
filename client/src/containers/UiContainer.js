import React, { useState, useEffect, useRef } from 'react';
// import Map from '../components/Map'
import Map from './Map'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Covid19 from '../components/Covid19'
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
            <Covid19 coffees={coffees}/>
            <Footer/>
        </div>
    )
}

export default UiContainer; 