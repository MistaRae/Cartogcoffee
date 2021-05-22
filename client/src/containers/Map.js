import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/NavBar'
import L from 'leaflet';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import coffeeCup from '../images/coffeecup.png';
import coffeeShadow from '../images/coffeecup-shadow.png'
import { getCoffees } from "../Services"
import MarkerList from "../components/map_components/MarkerList"


const Map = () => {

  const [coffees, setCoffees] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState([]);
  const [selectedTaste, setSelectedTaste] = useState('');
  const [filteredCoffees, setFilteredCoffees] = useState([coffees])

  useEffect(() => {
    getCoffees().then((allCoffees) => {
      setCoffees(allCoffees);
    });
  }, [])

  useEffect(() => {
    filterCoffees()
  }, [selectedTaste])

  const onSelectRegion = function (region) {
    setSelectedRegion(region)
  }

  const onSelectTaste = function (taste) {
    setSelectedTaste(taste)
  }


  function FlyTo() {
    const map = useMap()
    if (selectedRegion === "Americas") {
      map.flyTo([-26, -60], 3.2)
    }
    else if (selectedRegion === "Africa") {
      map.flyTo([0, 13], 3.4)
    }
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
    lat: 0,
    lon: -25
  }

  const coffeeIcon = L.icon({
    iconUrl: coffeeCup,
    shadowUrl: coffeeShadow,
    iconSize: [38, 38],
    shadowSize: [47, 34],
    shadowAnchor: [15, 14],
    popupAnchor: [0, -20]
  });

  const positionCenter = [state.lat, state.lon];
  const positionCoffeeIcon = [state.coffeeIcon.lat, state.coffeeIcon.lng];

  // FILTER COFFEES


  function filterCoffees() {
    let filteredByTaste = []
    coffees.forEach((coffee => {
      if (selectedTaste !== "All") {
        if (coffee.taste_profile.search(selectedTaste) !== -1) {
          filteredByTaste.push(coffee)
        }

        }
        else {
          filteredByTaste = coffees
      }
    }
    ))
    setFilteredCoffees(filteredByTaste)
  };



  return (

    <>
      {    coffees ?
        <div>
          <NavBar coffees={coffees} 
          onSelectRegion={onSelectRegion} 
          onSelectTaste={onSelectTaste} 
          selectedTaste={selectedTaste}
           />


          <MapContainer className="map" attributionControl={false} center={positionCenter} zoom={state.zoom} >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerList coffees={filteredCoffees} icon={coffeeIcon} position={positionCoffeeIcon} />
            <FlyTo />
          </MapContainer>

        </div> : null}
    </>

  )

}

export default Map;