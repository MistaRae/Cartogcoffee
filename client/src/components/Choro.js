import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ChoroMap from "./map_components/ChoroMap";
import Legend from "./map_components/Legend";
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


const Choro = ({coffees, legend}) => {
  const [countries, setCountries] = useState([]);


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
          <ChoroMap countries={countries} coffees={coffees} />
          <Legend legend={legend}/>
        </div>
      )}
    </div>
  );
};

export default Choro;
