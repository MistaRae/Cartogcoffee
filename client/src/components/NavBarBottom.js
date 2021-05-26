import React from 'react'
// import UiContainer from '../containers/UiContainer'

const NavBarBottom = ({onCountryClick, onFarmClick, viewFarm}) =>  {

    const handleCountryStatsClick = function () {
        onCountryClick()
    };
    
    const handleFarmClick = function () {
        onFarmClick()
    };

    return (

        viewFarm ?
        <div id = "nav-bar-bottom">

            <button className = "button-highlighted" onClick = {handleFarmClick}>WORLD BEANS</button> : 
            <button className = "button" onClick = {handleCountryStatsClick}>COUNTRY STATS</button>
        
        </div>
        :

        <div id = "nav-bar-bottom">

        <button className = "button" onClick = {handleFarmClick}>WORLD BEANS</button> : 
        <button className = "button-highlighted" onClick = {handleCountryStatsClick}>COUNTRY STATS</button>
    
        </div>

    )
}

export default NavBarBottom