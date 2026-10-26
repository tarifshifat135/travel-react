import React from 'react'
import logo from '../../assets/images/logo.png'
import icon1 from '../../assets/images/icon 1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icn 3.png'
import icon4 from '../../assets/images/icon 4.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav id="navbar">
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <a href="#"></a>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">PAGES</a></li>
                            <li><a href="#">TRAVEL</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">SHOP</a></li>
                            <li><a href="#">LEMENTS</a></li>
                        </ul>
                    </div>
                    <div className="nav_actions">
                        <a href="#" className="nav_actions_item">
                            <img src={icon1} alt="icon" />
                        </a>
                        <a href="#" className="nav_actions_item">
                            <img src={icon2} alt="icon" />
                        </a>
                        <a href="#" className="nav_actions_item">
                            <img src={icon3} alt="icon" />
                        </a>
                        <a href="#" className="nav_actions_item">
                            <img src={icon4} alt="icon" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar