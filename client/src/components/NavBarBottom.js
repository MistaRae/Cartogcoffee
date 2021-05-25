import React from 'react'


const NavBarBottom = ({onCountryClick, onFarmClick}) =>  {

    const handleCountryStatsClick = function () {
        onCountryClick()
    };
    
    const handleFarmClick = function () {
        onFarmClick()
    };

    return (
        <div>
            <button onClick = {handleFarmClick}>World Beans</button>
            <button onClick = {handleCountryStatsClick}>Country Stats</button>
        </div>
    )
}

export default NavBarBottom