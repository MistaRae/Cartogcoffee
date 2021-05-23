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
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTaste, setSelectedTaste] = useState('All');
  const [selectedBean, setSelectedBean] = useState('Both');
  const [filteredCoffees, setFilteredCoffees] = useState([coffees])

  useEffect(() => {
    getCoffees().then((allCoffees) => {
      setCoffees(allCoffees);
    });
  }, []);

  useEffect(() => {
    filterCoffees()
  }, [selectedRegion, selectedTaste, selectedBean, coffees])

  const onSelectRegion = function (region) {
    setSelectedRegion(region)
  };

  const onSelectTaste = function (taste) {
    setSelectedTaste(taste)
  };

  const onSelectBean = function (bean) {
    setSelectedBean(bean)
  };


  function FlyTo() {
    const map = useMap()
    if (selectedRegion === "All") {
      map.flyTo(positionCenter, state.zoom)
    }
    if (selectedRegion === "Americas") {
      map.flyTo([-26, -60], 3.2)
    }
    else if (selectedRegion === "Africa") {
      map.flyTo([0, 13], 3.4)
    }
    return null
  };

  // INITIAL STATE
  const state = {

    zoom: 2,
    lat: 0,
    lon: 0
  };

  const coffeeIcon = L.icon({
    iconUrl: coffeeCup,
    shadowUrl: coffeeShadow,
    iconSize: [38, 38],
    shadowSize: [47, 34],
    shadowAnchor: [15, 14],
    popupAnchor: [0, -20]
  });

  const positionCenter = [state.lat, state.lon];

  // FILTER COFFEES


  function filterCoffees() {
    // three filters in series
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
    ));

    let filteredByBean = []
    filteredByTaste.forEach((coffee => {
      if (selectedBean !== "Both") {
        if (coffee.bean_type == selectedBean) {
          filteredByBean.push(coffee)
        }

      }
      else {
        filteredByBean = filteredByTaste
      }
    }));

    let filteredByRegion = []
    filteredByBean.forEach((coffee => {
      if (selectedRegion !== "All") {
        if (coffee.region == selectedRegion) {
          filteredByRegion.push(coffee)
        }
      }
      else {
        filteredByRegion = filteredByBean
      }
    }))
    setFilteredCoffees(filteredByRegion)
  };


  return (

    <>
      {    coffees ?
        <div>
          <NavBar coffees={coffees}
            onSelectRegion={onSelectRegion}
            onSelectTaste={onSelectTaste}
            onSelectBean={onSelectBean}
            selectedTaste={selectedTaste}
          />


          <MapContainer className="map" attributionControl={false} center={positionCenter} zoom={state.zoom} >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerList coffees={filteredCoffees} icon={coffeeIcon} />
            <FlyTo />
          </MapContainer>

        </div> : null}
    </>

  )

};

export default Map;