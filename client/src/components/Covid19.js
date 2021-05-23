import React, { useState, useEffect } from 'react';
import Loading from "./Loading"
import CovidMap from "./map_components/CovidMap";
import Legend from "./map_components/Legend";

const Covid = () => {
    const [countries, setCountries] = useState([]);

    return (<div>
        
        
        {countries.length === 0 ? <Loading /> : <div></div>}
        
        
        </div> );
}
 
export default Covid;