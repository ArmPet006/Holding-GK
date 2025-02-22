"use client";
import "./index.scss";

import {useContext} from "react";
import AdvertisersList from "./advertisers";
import {ThemeContext} from "@/Contexts/theme-context.tsx";
import LogoOutline from "@/Helpers/Svg/logo-outline.tsx";

const Advertisers = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`advertisers_container ${theme}`}>
            <LogoOutline/>
            <h2 className={`page_title`}>Рекламодателям</h2>
            <AdvertisersList/>
        </div>
    )
}

export default Advertisers;