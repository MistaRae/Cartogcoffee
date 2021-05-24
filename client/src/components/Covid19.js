import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./map_components/CovidMap";
import Legend from "./map_components/Legend";
import LoadCountriesTask from "../tasks/LoadCountriesTask";
import legendItems from "../entities/LegendItems";


const Covid19 = ({coffees}) => {
  const [countries, setCountries] = useState([]);
  const legendItemsInReverse = [...legendItems].reverse();

  const load = ()  =>  {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };

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
