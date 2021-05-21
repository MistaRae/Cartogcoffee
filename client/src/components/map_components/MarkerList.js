import React from 'react';
import { Marker, Popup } from 'react-leaflet';


const MarkerList = ({coffees, icon}) => {
    console.log('hello', {coffees})
    const markerNodes = coffees.map((coffee) => {
        return <Marker 
        position={[coffee.lat, coffee.long]} icon={icon}>
            <Popup>
            <h3>sdafsdf</h3> <br /> I love my coffee
            </Popup>

        </Marker>
        


    });




    return (
        <div>{markerNodes}</div>
        
    )

}

export default MarkerList; 