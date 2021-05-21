import React, {Component} from 'react';
import './App.css';
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import coffeeCup from './images/coffeecup.png';
import coffeeShadow from './images/coffeecup-shadow-2.png'



class App extends Component {

  state = {
    coffeeIcon: {
    lat: 51.505,
    lng: 0.09
    },
    
    zoom: 13,
  }

  coffeeIcon = L.icon({
    iconUrl: coffeeCup,
    shadowUrl: coffeeShadow,
    iconSize: [38, 38],
    shadowSize: [47, 34],
    shadowAnchor: [15, 14],
    popupAnchor: [0, -20]
  });

  render() {
    const positionCoffeeIcon = [this.state.coffeeIcon.lat, this.state.coffeeIcon.lng];
  return (
  <MapContainer className="map" attributionControl={false} center={positionCoffeeIcon} zoom={this.state.zoom} >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={positionCoffeeIcon} icon={this.coffeeIcon}>
      <Popup>
        This coffee is tasty!. <br /> I love my coffee
      </Popup>
    </Marker>
  </MapContainer>
  );
  }
}

export default App;
