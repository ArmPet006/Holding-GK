"use client";

import {useContext} from 'react';

import {ThemeContext} from "@/Contexts/theme-context.tsx";
import HeroesList from "./heroes-list";

import './index.scss';

const Heroes = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <h2 className={`page-title ${theme}`}>Герои</h2>
            <HeroesList/>
        </>
    )
}

export default Heroes;