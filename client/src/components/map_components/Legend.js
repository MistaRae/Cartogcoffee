import React from "react";

const Legend = ({ legend, legendItems }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <span> {legend[4]}</span>
      <span>{legend[3]}</span>
      <span>{legend[2]}</span>
      <span>{legend[1]}</span>
      <span>{legend[0]}</span>
      <span> {legend[5]}</span>

    </div>
  );
};

export default Legend;
