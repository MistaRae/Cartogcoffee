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

            <div id = "socials">
                <div className="navButtons"></div>

                {/* <img class = "social-image" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-facebook-icon-png-image_3566127.jpg" alt="" />
                <img class = "social-image" src="https://image.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="" />
                <img class = "social-image" src="https://i.pinimg.com/474x/ee/4b/ec/ee4bec98e284c251b885707a470ad3b8.jpg" alt="" /> */}
            <div id = "prep-link">
                <p onClick={handlePrepClick}>PREPARATION GUIDE</p>
            </div>
            
            <div id = "copyright" style={{cursor: "pointer"}} onClick = {handleFooterClick}><p>©cartogcoffee.com</p></div>
    
            <div id = "footer-names">
                <p onClick ={handleMarkClick}>Mark Rae</p>
                <p onClick ={handleDanClick}>Dan Callus</p>
                <p onClick ={handleGordonClick}>Gordon Lilley</p>
                <p onClick ={handleAaronClick}>Aaron Mckie</p>
            </div>
        </div>
        </div>
    )
}

export default Footer; 