import LegendItem from "./LegendItem";

const legendItems = [
  new LegendItem(
    "1,000,000 +",
    "#741f1f",
    (cases) => cases >= 1_000_000,
    "white"
  ),
  new LegendItem(
    "500,000  - 999,999",
    "#9c2929",
    (cases) => cases >= 500_000 && cases < 1_000_000,
    "white"
  ),
  new LegendItem(
      "200,000 - 499,999",
      "#c57f7f",
      (cases) => cases >= 200_000 && cases < 500_0000
  ),
  new LegendItem(
      "50,000 - 199,999",
      "'d8aaaa",
      (cases) => 50_000 && cases < 200_000
  ),
  new LegendItem(
      "0 - 49,999",
      "#ebd4d4",
      (cases) => cases > 0 && cases < 50_000
  ),
  new LegendItem("No Data", "#a293ad", (cases) => true),
];

export default legendItems;

/*
#





*/
