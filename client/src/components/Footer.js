import React from 'react'

const Footer = ({onCountryClick, onFarmClick}) => {
    const handleFooterClick = () => {
        window.location = 'https://github.com/MistaRae/Cartogcoffee'
    }

const handleCountryStatsClick = function () {
    onCountryClick()
};

const handleFarmClick = function () {
    onFarmClick()
};


    return (
        <div id="footer">

            <div id = "socials">
                <div className="navButtons"></div>
            <button onClick = {handleFarmClick}>Farms</button>
            <button onClick = {handleCountryStatsClick}>Country Stats</button>
                {/* <img class = "social-image" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-facebook-icon-png-image_3566127.jpg" alt="" />
                <img class = "social-image" src="https://image.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="" />
                <img class = "social-image" src="https://i.pinimg.com/474x/ee/4b/ec/ee4bec98e284c251b885707a470ad3b8.jpg" alt="" /> */}
            </div>
            
            <div id = "copyright" style={{cursor: "pointer"}} onClick = {handleFooterClick}><p>©cartogcoffee.com</p></div>
    
            <div id = "footer-names">
                <p>Mark Rae</p>
                <p>Dan Callus</p>
                <p>Gordon Lilley</p>
                <p>Aaron Mckie</p>
            </div>
        </div>
    )
}

export default Footer; 