import React from 'react'

const Header = () => {

    const handleHomeClick = () => {
        window.location = '/'
    }

    return (
        <div id = "header">
            <h1 onClick = {handleHomeClick}>CARTOG
                COFFEE.</h1>
        </div>
    )
}

export default Header; 