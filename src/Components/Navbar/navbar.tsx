import React, {FC, useContext} from "react";
import {NavLink} from "react-router-dom";

import Logo from "../../../public/assets/icons/navbar/navbar-logo.png";
import HomeIcon from "../../../public/assets/icons/navbar/home-icon.png";
import HeroesIcon from "../../../public/assets/icons/navbar/heroes-icon.png";
import JournalIcon from "../../../public/assets/icons/navbar/journal-icon.png";
import AdsIcon from "../../../public/assets/icons/navbar/ads-icon.png";
import ContactIcon from "../../../public/assets/icons/navbar/contact-icon.png";
import SunIcon from "../../../public/assets/icons/navbar/sun.png";
import MoonIcon from "../../../public/assets/icons/navbar/moon.png";

import {ThemeContext} from "../../Contexts/theme-context.tsx";

import "./navbar.scss";

const Navbar: FC<any> = () => {
    const {theme, changeTheme} = useContext(ThemeContext);

    return (
        <nav className={`navbar ${theme}`}>
            <div className="wrapper">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <ul className="main_links">
                    <NavLink to="/" page-name="Главная">
                        <img className="icon" src={HomeIcon} icon-name="home" alt="icon"/>
                    </NavLink>
                    <NavLink to="/heroes" page-name="Герои">
                        <img
                            className="icon"
                            src={HeroesIcon}
                            icon-name="heroes"
                            alt="icon"
                        />
                    </NavLink>
                    <NavLink to="/journal" page-name="Журнал">
                        <img
                            className="icon"
                            src={JournalIcon}
                            icon-name="journal"
                            alt="icon"
                        />
                    </NavLink>
                    <NavLink to="/advertisers" page-name="Рекламодателям">
                        <img className="icon" src={AdsIcon} icon-name="ads" alt="icon"/>
                    </NavLink>
                    <a href="#" page-name="Карине">
                        <span>K</span>
                    </a>
                    <NavLink to="/contacts" page-name="Контакты">
                        <img
                            className="icon"
                            src={ContactIcon}
                            icon-name="contacts"
                            alt="icon"
                        />
                    </NavLink>
                </ul>

                <button className="theme_toggle" onClick={() => changeTheme()}>
                    <img src={theme === "light" ? MoonIcon : SunIcon} alt="theme_icon"/>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
