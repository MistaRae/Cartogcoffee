import React, { useState, useEffect, useRef } from 'react';
// import Map from '../components/Map'
import Map from './Map'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Choro from '../components/Choro'
import { getCoffees } from "../Services"

const UiContainer = () => {
    const [coffees, setCoffees] = useState([]);
    const [legend, setLegend] = useState(exportLegend);

    useEffect(() => {
        getCoffees().then((allCoffees) => {
          setCoffees(allCoffees);
        });
      }, []);

    const exportLegend = [10_000_000, 5_000_000, 2_000_000, 500_000]    
      
    return(
        <div id = "Ui-Container">
            <Header />
            {/* OG MAP LEAVE ME IN */}
            {/* <Map coffees={coffees} />  */}
            <Choro legend={legend} coffees={coffees}/>
            <Footer/>
        </div>
    )
}

export default UiContainer; 