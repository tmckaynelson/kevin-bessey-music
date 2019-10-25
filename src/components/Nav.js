import React from 'react'


import './Nav.css'

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <h1>Kevin Bessey</h1>
                <ul className="nav-menu">
                    <li><i class="fab fa-facebook-square"></i></li>
                    <li><i class="fab fa-bandcamp"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                    <li><i class="fab fa-spotify"></i></li>
                    <li><i class="fab fa-apple"></i></li>
                    <li><i class="fab fa-youtube"></i></li>
                    <li><i class="fab fa-bandcamp"></i></li>
                </ul>
            </div>
        </nav>
    )
}
