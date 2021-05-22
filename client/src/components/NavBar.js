import React from 'react'


const NavBar = ({ coffees, onSelectRegion, onSelectTaste }) => {

    const handleSelectChange = function (event) {
        let regionObject = coffees[event.target.value];
        onSelectRegion(regionObject.region)
    }

    const handleTasteChange = function (event) {
        let taste = event.target.value;
        onSelectTaste(taste)
    }

    const regionList = coffees.map((coffee, index) => {
        return <option value={index} key={index}>{coffee.region}</option>
    })

    const getFlavours = () => {

        let flavourList = []
        coffees.map((coffee) => {
            const flavours = coffee.taste_profile.split(",").map(taste => taste.trim());
            flavourList.push(...flavours)
        });

        const flavourSet = new Set(flavourList);
        const flavourArray = Array.from(flavourSet);
        return flavourArray
    }

    const flavourMapping = getFlavours().map((flavour, index) => {
        return <option value={flavour} key={index}>{flavour}</option>
    });


    return (
        <div id="navbar-container">
            <select onChange={handleSelectChange} class="drop-down" name="field-1" id="field-1">
                {regionList}
            </select>
            <select onChange={handleTasteChange} class="drop-down" name="field-2" id="field-2">
                {flavourMapping}
            </select>
            <select class="drop-down" name="field-3" id="field-3">
                <option value="option1">option 1</option>
                <option value="option1">option 2</option>
            </select>
        </div>
    )
}

export default NavBar