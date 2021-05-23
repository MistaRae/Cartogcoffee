import React from "react";

const Legend = ({ legendItems }) => {
  console.log(legendItems);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
      }}
    >
      {legendItems.map((item) => (
        <div key={item.title}
        style={{
            backgroundColor: item.color,
            flex:1,
            display:"flex",
            alignItems: "center",
            justifyContent: "center",
            color: item.textColor,
            height: "5vh",
            fontSize: "1.2em"
        }}>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Legend;
