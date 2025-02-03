"use client";

import React, {FC, useState, ReactNode} from 'react';
import {ThemeContext, Theme} from '@/Contexts/theme-context.tsx';

interface Props {
    children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({children}) => {
    const [theme, setTheme] = useState<Theme>("light");

    const changeTheme = () => {
        setTheme((prevState: Theme) => {
            return prevState === "light" ? "dark" : "light";
        })
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
