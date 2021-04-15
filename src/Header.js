import React from 'react';
import './Header.css';
import logo from './img/addMore.png';

function Header(props) {
    return (
        <div className="header">
            <div className="intro-bar"></div>
            <div className="menu-bar">
                <img className="logo" src={logo}/>
            </div>
        </div>
    );
}

export default Header;