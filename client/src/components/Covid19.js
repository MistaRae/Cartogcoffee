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
      // FINDS MATCHES BETWEEN COVID COUNTRIES AND GEO
      // MUST REFACTOR TO MATCHES WITH COFFEES
      const covidCountry = covidCountries.find(
        (covidCountry) => covidCountry.ISO3 === mapCountry.properties.ISO_A3
      );

      mapCountry.properties.confirmed = "No Data";
      mapCountry.properties.confirmedText = "No Data";

    
      //CHANGED CONFIRMED TEXT TO EXPORT VOLUME
      if (covidCountry != null) {
        const confirmed = Number(covidCountry.Confirmed);
        mapCountry.properties.confirmed = confirmed;
        mapCountry.properties.confirmedText =
          confirmed;
      }

      this.#setCountryColor(mapCountry);
    }
    this.setState(this.mapCountries);
  };

  #setCountryColor = ( mapCountry) => {
    const legendItem = legendItems.find((legendItem) =>
      legendItem.isFor(mapCountry.properties.confirmed)
    );

    if(legendItem != null) {

        mapCountry.properties.color = legendItem.color;
    }
  };

}


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
