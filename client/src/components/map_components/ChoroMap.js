import React, { useState, useEffect } from "react";
import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./ChoroMap.css";
import NavBarCountry from "../NavBarCountry";
import L from 'leaflet';

// from Choro
const ChoroMap = ({ countries, coffees, onChangeLegend }) => {
  const [selectedStat, setSelectedStat] = useState("Producers");
  const [key, setKey] = useState(1)

  function changeKey ()  {
    let updatedKey = key + 1
    setKey(updatedKey)
  }

  useEffect(() => {
    onEachCountry();
    changeKey()
  }, [selectedStat]);

  const onProducersClick = function () {
    onChangeLegend("Producers");
    setSelectedStat("Producers");
  };

  const onExportersClick = function () {
    onChangeLegend("Exporters");
    setSelectedStat("Exporters");
  };

  const onFarmsClick = function () {
    onChangeLegend("Farms");
    setSelectedStat("Farms");
  };

  const mapStyle = {
    // fillColor: "rgb(240, 237, 230)",
    fillColor: "white",
    weight: 0.6,
    // color: "rgb(162, 147, 173)",
    color: "white",
    fillOpacity: 1,
  };

  // comparisonArray must be 4 long.
  // e.g. stat >= 1_000_000        = "1,000,000 +"
  //      stat >= 500,000 && stat < 1_000_000           = "500,000  - 999,999"
  //      stat >= 200_000 && stat < 500,000             = "200,000 - 499,999"
  //      stat >= 50_000 && stat < 200,000              = "50,000 - 199,999"
  //      stat >= 0 && stat < 50_000            = "0 - 49,999"
  function legend(stat, comparisonArray) {
    if (stat >= comparisonArray[0]) {
      return "#741f1f";
    } else if (stat >= comparisonArray[1] && stat < comparisonArray[0]) {
      return "#9c2929";
    } else if (stat >= comparisonArray[2] && stat < comparisonArray[1]) {
      return "#d75e5e";
    } else if (stat >= comparisonArray[3] && stat < comparisonArray[2]) {
      return "#c57979";
    } else if (stat >= 0 && stat < comparisonArray[3]) {
      return "#f1b1b1";
    }
  }

  function stripNumber(numberString) {
    // REGEX to remove string and convert to number
    const number = Number(numberString.replace(/[^\d.-]/g, ""));
    return number;
  }

  const exportLegend = [10_000_000, 5_000_000, 2_000_000, 500_000];

  // const exportLegend = () =>  {
  //     if (selectedStat == 'Producers') {
  //     return [10_000_000, 5_000_000, 2_000_000, 500_000]
  // }
  // }

  const onEachCountry = (country, layer) => {
    if (country) {
      // defaults
      layer.options.fillOpacity = 1;
      layer.options.weight = 0.6;
      layer.options.color = "white";

      // country name from JSON
      const name = country.properties.ADMIN;

      const countryObj = coffees.find((coffee) => coffee.country === name);
      if (countryObj != null) {
        layer.on({
          mouseover: (event) =>  {
            event.target.setStyle( {
              weight: 4,
              // color: "rgb(253, 255, 120)"
            });
          },
  
          mouseout: (event) =>  {
            event.target.setStyle( {
              weight: 0.6,
              color: "white"
            });
          }
        })


        if ((selectedStat == "Producers")) {
          layer.bindPopup(`${name} ${countryObj.production_volume} 60kg bags/year`);
          const productionVol = stripNumber(countryObj.production_volume);
          const foundColor = legend(
            productionVol,
            [10_000_000, 5_000_000, 2_000_000, 500_000]
          );
          layer.options.fillColor = foundColor;
        }
        else if ((selectedStat == "Exporters")) {
            layer.bindPopup(`${name} ${countryObj.export_volume} 60kg bags/year`);
            const exportVol = stripNumber(countryObj.export_volume);
            const foundColor = legend(
              exportVol,
              [10_000_000, 5_000_000, 2_000_000, 500_000]
            );
            layer.options.fillColor = foundColor;
          }
        else if ((selectedStat == "Farms")) {
        layer.bindPopup(`${name} ${countryObj.number_of_farms} farms`);
        const numberOfFarms = stripNumber(countryObj.number_of_farms);
        const foundColor = legend(
            numberOfFarms,
            [20, 15, 10, 5]
        );
        layer.options.fillColor = foundColor;
        }

      }
    }
  };

  

  return (
    <div>
      <NavBarCountry
        onProducersClick={onProducersClick}
        onExportersClick={onExportersClick}
        onFarmsClick={onFarmsClick}
      />
      <MapContainer
        className="mapChoro"
        attributionControl={false}
        zoom={2.5}
        center={[10, 10]}
        maxBounds={[[100, 100], [-100, -100]]}
        scrollWheelZoom={false}
        minZoom={2}  
      >

        
        <GeoJSON key={key} data={countries} onEachFeature={onEachCountry} />
      </MapContainer>
    </div>
  );
};

export default ChoroMap;
