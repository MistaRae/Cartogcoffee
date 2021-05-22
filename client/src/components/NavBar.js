import React from 'react'


const NavBar = ({coffees, onSelectRegion}) => {

    const handleSelectChange = function (event) {
        let regionObject = coffees[event.target.value];
        onSelectRegion(regionObject.region)
    }

    const regionList = coffees.map((coffee, index) => {
        return <option value={index} key={index}>{coffee.region}</option>
    })

    return ( 
        <div id = "navbar-container">
            <select onChange={handleSelectChange} class = "drop-down" name="field-1" id="field-1">
                {regionList}
            </select>
            <select class = "drop-down" name="field-2" id="field-2">
                <option value="option1">option 1</option>
                <option value="option1">option 2</option>
            </select>
            <select class = "drop-down" name="field-3" id="field-3">
                <option value="option1">option 1</option>
                <option value="option1">option 2</option>
            </select>
        </div>
    )
}

export default NavBar