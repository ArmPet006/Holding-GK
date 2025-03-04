"use client";
import "./index.scss";

import {useContext} from "react";

import {ThemeContext} from "@/Contexts/theme-context.tsx";

import WebView from "@/app/journal/web-view.tsx";
import useMobile from "@/Hooks/use-mobile.tsx";
import MobileView from "@/app/journal/mobile-view.tsx";

export type Topic = {
    title: string;
    image: string;
    description: string;
}

const Journal = () => {
    const {theme} = useContext(ThemeContext);
    const {isMobile} = useMobile();

    return (
        <div className={`journal_container ${theme}`}>
            {isMobile ? <MobileView theme={theme}/> : <WebView theme={theme}/>}
        </div>
    );
};

export default Journal;
