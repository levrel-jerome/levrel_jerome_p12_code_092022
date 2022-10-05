import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className='navigation'>
            <div className='image-logo'>
                <img src='/asset/logo.png' alt='logo'/>
            </div>
            <div className='liens'>
            <ul>
                <li>
                <NavLink to="">Accueil</NavLink>
                </li>
                <li>
                <NavLink to="">Profil</NavLink>
                </li>
                <li>
                <NavLink to="">Réglage</NavLink>
                </li>
                <li>
                <NavLink to="">Communauté</NavLink>
                </li>
            </ul>
            </div>
        </div>
    );
};

export default Header;