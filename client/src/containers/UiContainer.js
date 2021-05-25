import React, { useState, useEffect, useRef } from "react";
// import Map from '../components/Map'
import Map from "./Map";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Choro from "../components/Choro";
import { getCoffees } from "../Services";
import NavBarBottom from "../components/NavBarBottom";

const UiContainer = () => {
  const [coffees, setCoffees] = useState([]);
  const [legend, setLegend] = useState([]);
  const [viewFarm, setViewFarm] = useState(true);

  useEffect(() => {
    getCoffees().then((allCoffees) => {
      setCoffees(allCoffees);
      setLegend(exportLegend);
    });
  }, []);

  const onCountryClick = () => {
    setViewFarm(false);
  };

  const onFarmClick = () => {
    setViewFarm(true);
  };

  const onChangeLegend = (category) => {
    if (category == "Farms") {
    setLegend([
      100,
      50,
      10,
      1,
      "No Data",
      "Number of Farms",
    ])
  }
  else if (category == "Producers") {
    setLegend([
      5_000_000,
      2_000_000,
      1_000_000,
      100_000,
      "No Data",
      "60kg bags / year",
    ])
  }
  else if (category == "Exporters") {
    setLegend([
      4_000_000,
      1_000_000,
      500_0000,
      100_000,
      "No Data",
      "60kg bags / year",
    ])
  }
  }

  const exportLegend = [
    10_000_000,
    5_000_000,
    2_000_000,
    500_000,
    "No Data",
    "60kg bags / year",
  ];

  return viewFarm ? (
    <div id="Ui-Container">
      <Map coffees={coffees} />
      <NavBarBottom viewFarm={viewFarm} onCountryClick={onCountryClick} onFarmClick={onFarmClick} />
      <Footer />
    </div>
  ) : (
    <>
      <div id="Ui-Container">
        <Choro legend={legend} coffees={coffees} onChangeLegend={onChangeLegend}/>
      </div>
      <div>
        <NavBarBottom
          onCountryClick={onCountryClick}
          onFarmClick={onFarmClick}
          viewFarm={viewFarm}
        />
              <Footer />
      </div>
    </>
  );
};

export default UiContainer;
