import React from 'react'


const NavBarCountry = ({onProducersClick, onExportersClick, onFarmsClick}) => {

    const handleProducersClick = function () {
        onProducersClick()
    };

    const handleExportersClick = function () {
        onExportersClick()
    };

    const handleFarmsClick = function () {
        onFarmsClick()
    };

    return (
        <div id="navbar-container">
            <span>
            <button onClick={handleProducersClick} className = "button">TOP PRODUCERS</button>
            </span>

            <span>
        <button onClick={handleExportersClick} className = "button">TOP EXPORTERS</button>
            </span>

            <span>
            <button  onClick={handleFarmsClick} className = "button">TOP CONSUMERS</button>
            </span>

        </div>
    )
};

export default NavBarCountry;