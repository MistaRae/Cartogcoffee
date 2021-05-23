import {features} from "../data/countries.json"


class LoadCountriesTask{
load = (setState) =>  {
    setState(features);
};
}

export default LoadCountriesTask;