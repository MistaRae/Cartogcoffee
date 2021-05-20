import React from 'react'
import Map from './Map'

const NavBar = () => {
    return ( 
        <div id = "navbar-container">
            <select class = "drop-down" name="field-1" id="field-1">
                <option value="option1">option 1</option>
                <option value="option1">option 2</option>
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