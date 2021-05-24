import React from 'react';
import {MapContainer, GeoJSON, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css"

const CovidMap = ({ countries, coffees }) => {
    
    const mapStyle = {
        // fillColor: "rgb(240, 237, 230)",
        fillColor: "white",
        weight: 0.6,
        // color: "rgb(162, 147, 173)",
        color: "white",
        fillOpacity: 1
    };

const onEachCountry = (country, layer) =>  {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    // const confirmedText = country.properties.confirmedText;
    const countryObj = coffees.find((coffee) => coffee.country == name)
    if (countryObj != null){
    layer.bindPopup(`${name} ${countryObj.export_volume}`);
}
}
 
    return ( <MapContainer className="map"  attributionControl={false} zoom={2} center={[20, 100]}>
                    <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON data={countries} style={mapStyle} onEachFeature={onEachCountry} />

    </MapContainer>
    
    ); 
};
 
export default CovidMap;