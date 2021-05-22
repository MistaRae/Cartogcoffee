import React from 'react';
import { Marker, Popup } from 'react-leaflet';



const MarkerList = ({coffees, icon}) => {
    console.log('hello', {coffees})
    const markerNodes = coffees.map((coffee) => {
        return <Marker 
        position={[coffee.lat, coffee.long]} icon={icon}>
        <div id= 'Popup'></div>
             <Popup>
             <div id= 'Popup'>
            <h3>{coffee.country}</h3>
            <p>
                <ul>
                    <li>Region: {coffee.region}</li>
                    <li>Number of Farms: {coffee.number_of_farms}</li>
                    <li>Production Volume: {coffee.production_volume} tonnes/year</li>
                    <li>Bean Type: {coffee.bean_type}</li>
                    <li>Taste Profile: {coffee.taste_profile}</li>
                    <li>Export Volume: {coffee.export_volume} tonnes/year</li>
                </ul>
            </p>
            </div>
            </Popup>

            
            
            
            
           
         

        </Marker>
        

        // region: "Africa",
        // country: "Ethiopia",
        // number_of_farms: "80",
        // production_volume: "18,000,000",
        // bean_type: "Arabica",
        // taste_profile: "Soily, Floral, Harsh",
        // export_volume: "8,000,000",


    });




    return (
        <div>{markerNodes}</div>
        
    )

}

export default MarkerList; 