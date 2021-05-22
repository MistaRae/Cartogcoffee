import React from 'react'


const NavBar = (coffees) => {

    const regionList = coffees.coffees.map(coffee => {
        return <option value={coffee.region}>{coffee.region}</option>
    })

    return ( 
        <div id = "navbar-container">
            <select class = "drop-down" name="field-1" id="field-1">
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