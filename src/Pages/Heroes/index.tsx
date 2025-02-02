import React, {useContext} from 'react'

import {ThemeContext} from "../../Contexts/theme-context.tsx";
import HeroesList from "./heroes-list";

import './index.scss';

const Heroes = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="heroes_container">
            <h2 className={theme}>Герои</h2>

            <HeroesList/>
        </div>
    )
}

export default Heroes;