import React from 'react'

const Footer = () => {
    const handleFooterClick = () => {
        window.location = 'https://github.com/MistaRae/Cartogcoffee'
    }



    return (
        <div id="footer">
            <div id = "socials">
                {/* <img class = "social-image" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-facebook-icon-png-image_3566127.jpg" alt="" />
                <img class = "social-image" src="https://image.freepik.com/free-vector/instagram-icon_1057-2227.jpg" alt="" />
                <img class = "social-image" src="https://i.pinimg.com/474x/ee/4b/ec/ee4bec98e284c251b885707a470ad3b8.jpg" alt="" /> */}
            </div>
            
            <div id = "copyright" onClick = {handleFooterClick}><p>©cartogcoffee.com</p></div>
    
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