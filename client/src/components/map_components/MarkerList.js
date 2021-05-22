import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';


const MarkerList = ({ coffees, icon }) => {
    const markerNodes = coffees.map((coffee) => {
        return <Marker 
        position={[coffee.lat, coffee.long]} icon={icon}>
        <div id= 'Popup'>
             <Popup>
             
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
           
            </Popup>
            <Tooltip direction="bottom" offset={[0, 20]} opacity={0.9}>{coffee.country}</Tooltip>

            </div>
            
            
            
           
         

        </Marker>
    });


    return (
        <div>{markerNodes}</div>

    )

}

export default MarkerList;