"use client";

import {FC, useContext} from "react";
import NavLink from "./navlink.tsx";
import Image from "next/image";

import Logo from "../../../public/assets/icons/navbar/navbar-logo.png";
import HomeIcon from "../../../public/assets/icons/navbar/home-icon.png";
import HeroesIcon from "../../../public/assets/icons/navbar/heroes-icon.png";
import JournalIcon from "../../../public/assets/icons/navbar/journal-icon.png";
import ClubIcon from "../../../public/assets/icons/navbar/club-icon.png";
import AdsIcon from "../../../public/assets/icons/navbar/ads-icon.png";
import ContactIcon from "../../../public/assets/icons/navbar/contact-icon.png";
import SunIcon from "../../../public/assets/icons/navbar/sun.png";
import MoonIcon from "../../../public/assets/icons/navbar/moon.png";

import {ThemeContext} from "@/Contexts/theme-context.tsx";

import "./navbar.scss";

const Navbar: FC<any> = () => {
    const {theme, changeTheme} = useContext(ThemeContext);

    return (
        <nav className={`navbar ${theme}`}>
            <div className="wrapper">
                <div className="logo">
                    <Image src={Logo} alt="logo"/>
                </div>
                <div className="main_links">
                    <NavLink href="/" pageName="Главная">
                        <Image className="icon" src={HomeIcon} icon-name="home" alt="icon"/>
                        <span>Главная</span>
                    </NavLink>
                    <NavLink href="/heroes" pageName="Герои">
                        <Image
                            className="icon"
                            src={HeroesIcon}
                            icon-name="heroes"
                            alt="icon"
                        />
                        <span>Герои</span>
                    </NavLink>
                    <NavLink href="/journal" pageName="Журнал">
                        <Image
                            className="icon"
                            src={JournalIcon}
                            icon-name="journal"
                            alt="icon"
                        />
                        <span>Журнал</span>
                    </NavLink>
                    <NavLink href="/clubgk" pageName="Club GK">
                        <Image
                            className="icon"
                            src={ClubIcon}
                            icon-name="club"
                            alt="icon"
                        />
                        <span>Club GK</span>
                    </NavLink>
                    <NavLink href="/advertisers" pageName="Рекламодателям">
                        <Image className="icon" src={AdsIcon} icon-name="ads" alt="icon"/>
                        <span>Рекламодателям</span>
                    </NavLink>
                    <NavLink href="/contacts" pageName="Контакты">
                        <Image
                            className="icon"
                            src={ContactIcon}
                            icon-name="contacts"
                            alt="icon"
                        />
                        <span>Контакты</span>
                    </NavLink>
                    <a href="#" page-name="Карине">
                        <span className="external_link">K</span>
                        <span>Карине</span>
                    </a>
                </div>

                <button className="theme_toggle" onClick={() => changeTheme()}>
                    <Image src={theme === "light" ? MoonIcon : SunIcon} alt="theme_icon"/>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
