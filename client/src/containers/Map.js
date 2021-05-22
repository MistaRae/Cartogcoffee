import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import coffeeCup from '../images/coffeecup.png';
import coffeeShadow from '../images/coffeecup-shadow.png'
import {getCoffees} from "../Services"
import MarkerList from "../components/map_components/MarkerList"

const Map = () => {

  const [coffees, setCoffees] = useState([]);
  
  useEffect(() => {
    getCoffees().then((allCoffees) =>  {
      setCoffees(allCoffees);
    });
  }, [])



  const state = {
      coffeeIcon: {
        lat: 55.829120,
        lng: -4.281100
      },
      coffeeIcon2: {
        lat: 70.829120,
        lng: -4.281100
      },

      zoom: 2
    }

    const coffeeIcon = L.icon({
      iconUrl: coffeeCup,
      shadowUrl: coffeeShadow,
      iconSize: [38, 38],
      shadowSize: [47, 34],
      shadowAnchor: [15, 14],
      popupAnchor: [0, -20]
    });

    const coffeeIcon2 = L.icon({
      iconUrl: coffeeCup,
      shadowUrl: coffeeShadow,
      iconSize: [38, 38],
      shadowSize: [47, 34],
      shadowAnchor: [15, 14],
      popupAnchor: [0, -20]
    });

    const positionCoffeeIcon = [state.coffeeIcon.lat, state.coffeeIcon.lng];
    const positionCoffeeIcon2 = [state.coffeeIcon2.lat, state.coffeeIcon2.lng];

return(

        <>
        {    coffees ?
        <div>
         <NavBar coffees={coffees}/>
        <MapContainer className="map" attributionControl={false} center={positionCoffeeIcon} zoom={state.zoom} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

       <MarkerList coffees={coffees} icon={coffeeIcon} position={positionCoffeeIcon}/>
      </MapContainer></div> : null }
      </>

  )

}

export default Map;