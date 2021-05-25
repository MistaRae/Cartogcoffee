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
            <button onClick = {handleProducersClick}>Top Producers</button>
            </span>

            <span>
        <button onClick = {handleExportersClick}>Top Exporters</button>
            </span>

            <span>
            <button onClick = {handleFarmsClick}>Number of Farms</button>
            </span>

        </div>
    )
};

export default NavBarCountry;