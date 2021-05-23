import React from 'react';
import {MapContainer, GeoJSON} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./CovidMap.css"

const CovidMap = ({ countries }) => {
    
    const mapStyle = {
        fillColor: "white",
        weight: 0.3,
        color: "black",
        fillOpacity: 1
    };


    return ( <MapContainer style={{ height: "50vh"}} zoom={2} center={[20, 100]}>
            <GeoJSON data={countries} style={mapStyle} />

    </MapContainer>
    
    );
};
 
export default CovidMap;