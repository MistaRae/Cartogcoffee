import papa from "papaparse";
import { features } from "../data/countries.json";
import legendItems from "../entities/LegendItems";

class LoadCountriesTask {
  covid19Dataurl =
    "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/web-data/data/cases_country.csv";

  setState = null;
  mapCountries = features;

  load = (setState) => {
    this.setState = setState;

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
      const covidCountry = covidCountries.find(
        (covidCountry) => covidCountry.ISO3 === mapCountry.properties.ISO_A3
      );

      mapCountry.properties.confirmed = 0;
      mapCountry.properties.confirmedText = "0";

      if (covidCountry != null) {
        const confirmed = Number(covidCountry.Confirmed);
        mapCountry.properties.confirmed = confirmed;
        mapCountry.properties.confirmedText =
          this.#formatNumberWithCommas(confirmed);
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


  #formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default LoadCountriesTask;
