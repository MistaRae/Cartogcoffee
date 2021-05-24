import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./map_components/CovidMap";
import Legend from "./map_components/Legend";
import legendItems from "../entities/LegendItems";
import papa from "papaparse";
import { features } from "../data/countries.json";

class LoadCountriesTask {
  covid19Dataurl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  setState = null;
  mapCountries = features;

  load = (setState) => {
    this.setState = setState;
    // SENDS STUFF TO PROCESSCOVID DATA. REFACTOR TO SEND COFFEES
    papa.parse(this.covid19Dataurl, {
      download: true,
      header: true,
      complete: (result) => this.#processCovidData(result.data),
    });
  };

  // loop over list of countries and apply covid data
  #processCovidData = (covidCountries) => {
    for (let i = 0; i < this.mapCountries.length; i++) {
      const mapCountry = this.mapCountries[i];

    }
    this.setState(this.mapCountries);
  };

}


const Covid19 = ({coffees}) => {
  const [countries, setCountries] = useState([]);
  const legendItemsInReverse = [...legendItems].reverse();

  console.log('new countries list', countries)
  // setCountries(coffees)


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
