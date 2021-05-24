import React, { useState, useEffect, useRef } from 'react';
// import Map from '../components/Map'
import Map from './Map'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Choro from '../components/Choro'
import { getCoffees } from "../Services"

const UiContainer = () => {
    const [coffees, setCoffees] = useState([]);
    const [legend, setLegend] = useState([]);
    const [viewFarm, setViewFarm] = useState(true)

    useEffect(() => {
        getCoffees().then((allCoffees) => {
          setCoffees(allCoffees);
          setLegend(exportLegend)
        });
      }, []);

    const onCountryClick = () => {
      setViewFarm(false)
    }

    const onFarmClick = () => {
      setViewFarm(true)
    }

    const exportLegend = [10_000_000, 5_000_000, 2_000_000, 500_000, 'No Data', '60kg bags / year']    
      
    return(
      viewFarm ? 
        <div id = "Ui-Container">
            <Header />
            <Map coffees={coffees} />
            <Footer onCountryClick={onCountryClick}/>
        </div> :

<div id = "Ui-Container">
<Header />
<Choro legend={legend} coffees={coffees}/>
<Footer onCountryClick={onCountryClick} onFarmClick={onFarmClick}/>
</div>
    )
}

export default UiContainer; 