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

// comparisonArray must be 4 long.
// e.g. stat >= 1_000_000        = "1,000,000 +"
//      stat >= 500,000 && stat < 1_000_000           = "500,000  - 999,999"
//      stat >= 200_000 && stat < 500,000             = "200,000 - 499,999"
//      stat >= 50_000 && stat < 200,000              = "50,000 - 199,999"
//      stat >= 0 && stat < 50_000            = "0 - 49,999"
function legend(stat, comparisonArray) {
    if (stat >= 300_000_000) {
        return "#741f1f"
    }
    else  if (stat >= 200_000_000 && stat < 300_000_000) {
        return "#9c2929"
    }
    else  if (stat >= 50_000_000 && stat < 200_000_000) {
        return "#9c2929"
    }
    else if (stat >= 1000_000_000 && stat < 500_000_000 ) {
        return "#c57f7f"
    }
    else if (stat >= 0 && stat < 1000_000_000 ) {
        return "#c57f7f"
    }


}

const onEachCountry = (country, layer) =>  {
    // DIRECTLY CHANGE COLOURS BASED ON KEY
    // layer.options.fillColor = "red";
    const name = country.properties.ADMIN;
    // const confirmedText = country.properties.confirmedText;
    const countryObj = coffees.find((coffee) => coffee.country == name)
    if (countryObj != null){
    layer.bindPopup(`${name} ${countryObj.export_volume}`);
    const foundColor = legend(countryObj.export_volume)
    layer.options.fillColor = foundColor;
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