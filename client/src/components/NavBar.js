import React from 'react'


const NavBar = ({ coffees, onSelectRegion, onSelectTaste}) => {

    const handleSelectChange = function (event) {
        if (event.target.value !== "All") {
        let regionObject = coffees[event.target.value];
        onSelectRegion(regionObject.region)
    }
        else {
            onSelectRegion("All")
        }
    };

    const handleTasteChange = function (event) {
        let taste = event.target.value;
        onSelectTaste(taste)
    };

    const regionList = coffees.map((coffee, index) => {
        return <option value={index} key={index}>{coffee.region}</option>
    });

    const getFlavours = () => {

        let flavourList = []
        coffees.map((coffee) => {
            const flavours = coffee.taste_profile.split(",").map(taste => taste.trim());
            flavourList.push(...flavours)
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
            <select onChange={handleSelectChange} class="drop-down" name="region" id="region">
            <option value="All">All</option>
                {regionList}
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
            <select class="drop-down" name="type" id="type">
                <option value="All">All</option>
                <option value="Arabica">Arabica</option>
                <option value="Robusta">Robusta</option>
            </select>
            </span>
        </div>
    )
};

export default NavBar;