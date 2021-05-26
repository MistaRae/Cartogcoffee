import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import ChoroMap from "./map_components/ChoroMap";
import Legend from "./map_components/Legend";



// from UiContainer
const Choro = ({coffees, legend, onChangeLegend, countries}) => {


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
