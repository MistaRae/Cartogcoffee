import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import coffeeCup from '../images/coffeecup.png';
import coffeeShadow from '../images/coffeecup-shadow.png'

const Map = () => {

  const state = {
      coffeeIcon: {
        lat: 55.829120,
        lng: -4.281100
      },

      zoom: 13,
    }

    const coffeeIcon = L.icon({
      iconUrl: coffeeCup,
      shadowUrl: coffeeShadow,
      iconSize: [38, 38],
      shadowSize: [47, 34],
      shadowAnchor: [15, 14],
      popupAnchor: [0, -20]
    });

    const positionCoffeeIcon = [state.coffeeIcon.lat, state.coffeeIcon.lng];

return(
        <MapContainer className="map" attributionControl={false} center={positionCoffeeIcon} zoom={state.zoom} >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={positionCoffeeIcon} icon={coffeeIcon}>
          <Popup>
            <h3>This coffee is tasty!</h3> <br /> I love my coffee
            </Popup>
        </Marker>
      </MapContainer>
  )

}

export default Map;