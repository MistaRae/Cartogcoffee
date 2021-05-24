import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./map_components/CovidMap";
import Legend from "./map_components/Legend";
import LoadCountriesTask from "../tasks/LoadCountriesTask";
import legendItems from "../entities/LegendItems";
import papa from "papaparse";
import { features } from "../data/countries.json";


const Covid19 = ({coffees}) => {
  const [countries, setCountries] = useState([]);
  const legendItemsInReverse = [...legendItems].reverse();

  // setCountries(coffees)

  const load = ()  =>  {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };
  console.log('countries', countries)

  useEffect(load, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap countries={countries} coffees={coffees} />
          <Legend legendItems={legendItemsInReverse}/>
        </div>
      )}
    </div>
  );
};

export default Covid19;
