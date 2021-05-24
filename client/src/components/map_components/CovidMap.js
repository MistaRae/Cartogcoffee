import React from 'react';
import {MapContainer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css"

const CovidMap = ({ countries, coffees }) => {
    
    const mapStyle = {
        // fillColor: "rgb(240, 237, 230)",
        fillColor: "white",
        weight: 0.6,
        // color: "rgb(162, 147, 173)",
        color: "black",
        fillOpacity: 1
    };

const onEachCountry = (country, layer) =>  {
    layer.options.fillColor = country.properties.color;
    const name = country.properties.ADMIN;
    const confirmedText = country.properties.confirmedText;
    const details = coffees.find((country) => country.name == name)
    console.log('details', details)
    layer.bindPopup(`${name} ${confirmedText}`);
}
 
    return ( <MapContainer className="map"  attributionControl={false} zoom={2} center={[20, 100]}>
            <GeoJSON data={countries} style={mapStyle} onEachFeature={onEachCountry} />

    </MapContainer>
    
    ); 
};
 
export default CovidMap;