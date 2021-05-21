import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import coffeeCup from '.../images/coffeecup.png';
// import coffeeShadow from '.../images/coffeecup-shadow.png'
// import {getCoffees} from ".../Services"

const MarkerList = ({coffees, coffeeIcon}) => {
    console.log('hello', {coffees})
    const markerNodes = coffees.map((coffee) => {
        return <Marker 
        position={[coffee.lat, coffee.long]}  icon={coffeeIcon}>
            <Popup>
            <h3>sdafsdf</h3> <br /> I love my coffee
            </Popup>

        </Marker>
        
        // coffee={coffee}
        // region = {coffee.region}
        // country = {coffee.country}
        // lat = {country.lat}
        // long = {}
    

    });




    return (
        <div>{markerNodes}</div>
        
        // <Marker position={positionCoffeeIcon} icon={coffeeIcon}>
        //   <Popup>
        //     <h3>{coffee.country}</h3> <br /> I love my coffee
        //     </Popup>
        // </Marker>
    )

}

export default MarkerList; 