import React, {Component} from 'react';
import './App.css';
import UiContainer from './containers/UiContainer'
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

// type State = {
//   lat: Number,
//   lng: Number,
//   zoom: Number,
// }

var myIcon = L.icon({
  iconUrl: 'https://www.pinclipart.com/picdir/big/130-1303440_current-location-location-map-nearby-pin-pointer-slider.png',
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41]
});


class App extends Component {

  state = {
    lat: 51.505,
    lng: 0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng];
  return (
    <div className="App">
      <UiContainer/>
      <MapContainer className="map" attributionControl={false} center={position} zoom={this.state.zoom} >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={myIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
      </MapContainer>
    </div>
  );
  }
}

export default App;
