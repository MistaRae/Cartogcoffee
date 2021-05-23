import React from 'react'
// import Map from '../components/Map'
import Map from './Map'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MapChoro from './MapChoro'

const UiContainer = () => {

    return(
        <div id = "Ui-Container">
            <Header />
            {/* <Map /> */}
            <MapChoro />
            <Footer/>
        </div>
    )
}

export default UiContainer; 