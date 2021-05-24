import React from "react";

const Legend = ({ legend}) => {

  const formatNumber = (number) =>  {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#000000"
      }}
    >
      <span style={{backgroundColor: "#ffffff", padding: "0 4% 0 4%"}}> 
      {legend[4]}
      </span>
      <span style={{backgroundColor: "#d88383", padding: "0 4% 0 4%"}}>0 -{'\u00A0'}
        {formatNumber(legend[3])}
        </span>
        <span style={{backgroundColor: "#c47f7f", padding: "0 4% 0 4%"}}>
        {formatNumber(legend[3])} - {formatNumber(legend[2] - 1)}
        </span>
        <span style={{backgroundColor: "#c47f7f", padding: "0 4% 0 4%"}}>
        {formatNumber(legend[2])} - {formatNumber(legend[1] - 1)}
        </span>
      <span style={{backgroundColor: "#9c2929", padding: "0 4% 0 4%", color: "white"}}>
        {formatNumber(legend[1])} - {formatNumber(legend[0] - 1)}
        </span>
      <span style={{backgroundColor: "#741f1f", padding: "0 4% 0 4%", color: "white"}}>
        {formatNumber(legend[0])}+
        </span>
      <span style={{color: "white"}}> ({legend[5]})</span>

    </div>
  );
};

export default Legend;
