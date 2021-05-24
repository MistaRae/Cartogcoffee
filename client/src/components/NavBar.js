import React from 'react'


const NavBar = ({ coffees, onSelectRegion, onSelectTaste, onSelectBean}) => {


    const handleRegionChange = function (event) {
        let region = event.target.value;
        onSelectRegion(region)
    };

    const handleTasteChange = function (event) {
        let taste = event.target.value;
        onSelectTaste(taste)
    };

    const handleBeanChange = function (event) {
        let bean = event.target.value;
        onSelectBean(bean)
    };

    const getFlavours = () => {

        let flavourList = []
        coffees.map((coffee) => {
            const flavours = coffee.taste_profile.split(",").map(taste => taste.trim());
            flavourList.push(...flavours);
            flavourList.sort();
        });

        const flavourSet = new Set(flavourList);
        const flavourArray = Array.from(flavourSet);
        return flavourArray
    };

    const flavourMapping = getFlavours().map((flavour, index) => {
        return <option value={flavour} key={index}>{flavour}</option>
    });


    return (
        <div id="navbar-container">
            <span>
            <label htmlFor="region">Region: </label>
            <select onChange={handleRegionChange} class="drop-down" name="region" id="region">
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            </select>
            </span>

            <span>
                <label htmlFor="taste">Taste Profile: </label>
            <select onChange={handleTasteChange} class="drop-down" name="taste" id="taste">
            <option value="All">All</option>
                {flavourMapping}
            </select>
            </span>

            <span>
                <label htmlFor="type">Bean Type: </label>
            <select onChange={handleBeanChange} class="drop-down" name="type" id="type">
                <option value="Both">Both</option>
                <option value="Arabica">Arabica</option>
                <option value="Robusta">Robusta</option>
            </select>
            </span>
        </div>
    )
};

export default NavBar;