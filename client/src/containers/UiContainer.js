import React from 'react'
import NavBar from '../components/NavBar'
// import Map from '../components/Map'
import Map from './Map'
import Header from '../components/Header'
import Footer from '../components/Footer'

const UiContainer = () => {

    return(
        <div id = "Ui-Container">
            <Header />
            <NavBar />
            <Map />
            <Footer/>
        </div>
    )
}

export default UiContainer; 