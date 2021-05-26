import React, {useState} from 'react'


const NavBarCountry = ({onProducersClick, onExportersClick, onFarmsClick}) => {
    const [stat, setStat] = useState("Producers");

    const handleProducersClick = function () {
        onProducersClick()
        setStat("Producers");
    };

    const handleExportersClick = function () {
        onExportersClick()
        setStat("Exporters");
    };

    const handleFarmsClick = function () {
        onFarmsClick()
        setStat("Farms");
    };

    if (stat === "Producers") {
    return (
        <div id="navbar-container">
            <span>
            <button className = "button-highlighted"  onClick={handleProducersClick}>TOP PRODUCERS</button>
            </span>

            <span>
        <button  className = "button"  onClick={handleExportersClick}>TOP EXPORTERS</button>
            </span>

            <span>
            <button className = "button"   onClick={handleFarmsClick}>TOP FARMS</button>
            </span>
        </div>
    )
}
else if (stat === "Exporters") {
    return (
        <div id="navbar-container">
            <span>
            <button className = "button"  onClick={handleProducersClick}>TOP PRODUCERS</button>
            </span>

            <span>
        <button  className = "button-highlighted"  onClick={handleExportersClick}>TOP EXPORTERS</button>
            </span>

            <span>
            <button className = "button"   onClick={handleFarmsClick}>TOP FARMS</button>
            </span>
        </div>
    )
}
else if (stat === "Farms") {
    return (
        <div id="navbar-container">
            <span>
            <button className = "button"  onClick={handleProducersClick}>TOP PRODUCERS</button>
            </span>

            <span>
        <button  className = "button"  onClick={handleExportersClick}>TOP EXPORTERS</button>
            </span>

            <span>
            <button className = "button-highlighted"   onClick={handleFarmsClick}>TOP FARMS</button>
            </span>
        </div>
    )
}



};

export default NavBarCountry;