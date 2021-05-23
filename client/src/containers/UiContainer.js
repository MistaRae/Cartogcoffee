import React from 'react'
// import Map from '../components/Map'
import Map from './Map'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Covid19 from '../components/Covid19'

const UiContainer = () => {

    return(
        <div id = "Ui-Container">
            <Header />
            {/* OG MAP LEAVE ME IN */}
            <Map /> 
            <Covid19 />
            <Footer/>
        </div>
    )
}

export default UiContainer; 