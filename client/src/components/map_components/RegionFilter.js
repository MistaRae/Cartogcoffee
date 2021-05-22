import React from 'react';

const RegionFilter = ({coffees}) => {
    // console.log('regionFilter', {coffees})
    // const regionList = coffees.coffees.coffees.map((coffee) => {
    //     console.log('hello', {coffees})
    //     return <option value="option1">{coffee.region}</option>

    // }


    // )


    return (
        <>
        <select className = "drop-down" name="field-1" id="field-1">
                {/* {regionList} */}
                {/* <option value="option1">option 1</option>
                <option value="option1">option 2</option> */}
            </select>
        </>
    )


}

export default RegionFilter;