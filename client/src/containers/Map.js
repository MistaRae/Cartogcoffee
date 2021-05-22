import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar'
import L from 'leaflet';
import { MapContainer, TileLayer, Rectangle, useMap} from 'react-leaflet';
import coffeeCup from '../images/coffeecup.png';
import coffeeShadow from '../images/coffeecup-shadow.png'
import {getCoffees} from "../Services"
import MarkerList from "../components/map_components/MarkerList"


const Map = () => {

  const [coffees, setCoffees] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState([]);
  const [LatCenter, setLatCenter] = useState(0);
  const [LongCenter, setLongCenter] = useState(0);
  const [LatLong, setLatLong] = useState([43.653225, -79.383186]);
  const [Zoom, setZoom] = useState(2)
  
  useEffect(() => {
    getCoffees().then((allCoffees) =>  {
      setCoffees(allCoffees);
    });
  }, [])


  const setTargetAmericas = (() => {
    setSelectedRegion("Americas")
    setLatCenter(-5);
    setLongCenter(-80);
    setZoom(3);
  })

  const onSelectRegion = function (region) {
    setSelectedRegion(region)
    if (region == "Americas") {
      setTargetAmericas()
    }
  }


  function MyComponent() {
    const map = useMap()
    console.log('map center:', map.getCenter())
    return null
  }

  // INITIAL STATE
  const state = {
      
      coffeeIcon: {
        lat: 55.829120,
        lng: -4.281100
      },
      coffeeIcon2: {
        lat: 70.829120,
        lng: -4.281100
      },

      zoom: 2,
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

    const positionCenter = [LatCenter, LongCenter];
    const positionCoffeeIcon = [state.coffeeIcon.lat, state.coffeeIcon.lng];
    const positionCoffeeIcon2 = [state.coffeeIcon2.lat, state.coffeeIcon2.lng];

    const rectangle = [
      [51.49, -0.08],
      [251.5, -0.06],
    ]

    const blackOptions = { color: 'black' }

return(

        <>
        {    coffees ?
        <div>
         <NavBar coffees={coffees} onSelectRegion={onSelectRegion}/>


        <MapContainer className="map" attributionControl={false} center={positionCenter} zoom={Zoom} >
        <MyComponent />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

       <MarkerList coffees={coffees} icon={coffeeIcon} position={positionCoffeeIcon}/>
       {/* <Rectangle bounds={rectangle} pathOptions={blackOptions} /> */}
      </MapContainer>
      
      </div> : null }
      </>

  )

}

export default Map;