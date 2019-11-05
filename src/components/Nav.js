import React, { useState } from 'react'
import { Link } from 'react-router-dom'


import './Nav.css'

export default function Nav(props) {

    const [ slide, setSlide ] = useState(false)

    const socialIcons = (
        <>
            <a href="https://www.facebook.com/knbessey/" target="_blank"><li><i class="fab fa-facebook"></i></li></a>
            <a href="https://www.instagram.com/knbessey/" target="_blank"><li><i class="fab fa-instagram"></i></li></a>
            <a href="https://open.spotify.com/artist/53h4243mR88lDJIjU5JsOb" target="_blank"><li><i class="fab fa-spotify"></i></li></a>
            <a href="https://itunes.apple.com/ca/artist/kevin-bessey/1349463595" target="_blank"><li><i class="fab fa-apple"></i></li></a>
            <a href="https://www.youtube.com/channel/UCn-uhlQmEajH8TRKcphdRhA" target="_blank"><li><i class="fab fa-youtube"></i></li></a>
            <a href="https://kevinbessey.bandcamp.com" target="_blank"><li><i class="fab fa-bandcamp"></i></li></a>
        </>
    )

    const links = (
        <>
            {/* only display links if logged in as admin */}
            {
                props.user ?
                <>
                    <Link to="/admin" className="link"><li>Admin Dashboard</li></Link>
                    <Link to="/" className="link"><li>Home</li></Link>
                </>
                :
                null
            }
            <a href="https://kevinbessey.bandcamp.com/merch" target="_blank" className="link"><li>Merch</li></a>
        </>
    )

    const toggleMenu = () => {
        setSlide(!slide)
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1>Kevin Bessey</h1>
                <ul className="nav-menu">
                    { links }                    
                    { socialIcons }
                </ul>
                <div className="mobile-menu" onClick={ toggleMenu }>
                    { slide ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i> }
                </div>
            </div>
            <div className={ slide ? 'slideout slide' : 'slideout'}>
                <ul className="nav-links">
                    { links }
                </ul>
                <ul className="social-links">
                    { socialIcons }
                </ul>
            </div>
        </nav>
    )
}
