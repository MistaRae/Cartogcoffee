import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ChoroMap from "./map_components/ChoroMap";
import Legend from "./map_components/Legend";
import { features } from "../data/countries.json";



// from UiContainer
const Choro = ({coffees, legend, onChangeLegend}) => {
  const [countries, setCountries] = useState([]);


  const load = () => {
    for (let i = 0; i < features.length; i++) {
      const mapCountry = features[i];

    }
    setCountries(features);
  };

  useEffect(load, [onChangeLegend, legend]);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <ChoroMap countries={countries} coffees={coffees} onChangeLegend={onChangeLegend}/>
          <Legend legend={legend}/>
        </div>
      )}
    </div>
  );
};

export default Choro;
