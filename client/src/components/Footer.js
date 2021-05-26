import React from 'react'

const Footer = ({onCountryClick, onFarmClick}) => {
    const handleFooterClick = () => {
        window.location = 'https://github.com/MistaRae/Cartogcoffee'
    }

    const handleMarkClick = () => {
        window.location = 'https://github.com/MistaRae'
    }

    const handleDanClick = () => {
        window.location = 'https://github.com/dcallus'
    }

    const handleGordonClick = () => {
        window.location = 'https://github.com/glilley54'
    }

    const handleAaronClick = () => {
        window.location = 'https://github.com/pictishbeard'
    }

    const handlePrepClick = () => {
        window.location = '/Preparation'
    }

    return (
        <div id="footer">

            <div id = "prep-link">
                <p onClick={handlePrepClick}>PREPARATION GUIDE</p>
            </div>
            
            <div id = "copyright" onClick = {handleFooterClick}>
                    <p>©CARTOGCOFFEE.COM</p>
            </div>
    
            <div id = "footer-names">
                <p onClick ={handleMarkClick}>Mark Rae</p>
                <p onClick ={handleDanClick}>Dan Callus</p>
                <p onClick ={handleGordonClick}>Gordon Lilley</p>
                <p onClick ={handleAaronClick}>Aaron Mckie</p>
            </div>
        </div>
         
    )
}

export default Footer; 