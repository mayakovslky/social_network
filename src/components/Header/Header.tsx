import React from "react";
import logo from '../../logo.png';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="Logo"/>
        </header>
    )
}

export default Header;