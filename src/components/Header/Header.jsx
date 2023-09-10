import React from 'react';

//media
import logo from "./logo.svg"
import drop from "./drop.svg"
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__title">
                        <img src={logo} alt="logo"/>
                        React weather
                    </h1>

                    <div className="header__right">
                        <div>
                            <img src={drop} alt="drop"/>
                        </div>
                        <input className="header__right-search" type="search" placeholder="Поиск города"/>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;