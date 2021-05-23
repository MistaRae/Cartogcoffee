import papa from "papaparse";
import {features} from "../data/countries.json"


class LoadCountriesTask{
    covid19Dataurl = "https://github.com/CSSEGISandData/COVID-19/blob/web-data/data/cases_country.csv"
load = (setState) =>  {
    papa.parse(this.covid19Dataurl, {
        download:true,
        header:true,
        complete: 
    });
    setState(features);
};
}

export default LoadCountriesTask;