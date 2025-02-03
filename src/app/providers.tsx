"use client";

import {ThemeProvider} from "@/Providers/theme-provider.tsx";
import Navbar from "@/Components/Navbar/navbar.tsx";
import {useContext} from "react";
import {ThemeContext} from "@/Contexts/theme-context.tsx";

const Wrapper = ({children}: { children: React.ReactNode }) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`container ${theme}`}>
            {children}
        </div>
    )
}

const Providers = ({children}: { children: React.ReactNode }) => {
    return (
        <ThemeProvider>
            <Navbar/>
            <Wrapper>{children}</Wrapper>
        </ThemeProvider>
    )
}
export default Providers
