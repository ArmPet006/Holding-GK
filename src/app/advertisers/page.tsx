"use client";

import {useContext} from "react";
import AdvertisersList from "./advertisers";
import {ThemeContext} from "@/Contexts/theme-context.tsx";

import "./index.scss";

const Advertisers = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <h2 className={`page_title ${theme}`}>Рекламодателям</h2>
            <AdvertisersList/>
        </>
    )
}

export default Advertisers;