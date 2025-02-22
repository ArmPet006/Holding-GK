"use client";

import {ThemeProvider} from "@/Providers/theme-provider.tsx";
import Navbar from "@/Components/Navbar/navbar.tsx";
import {useContext} from "react";
import {ThemeContext} from "@/Contexts/theme-context.tsx";
import {usePathname} from "next/navigation";

const Wrapper = ({children}: { children: React.ReactNode }) => {
    const {theme} = useContext(ThemeContext);
    const path = usePathname();

    return (
        <div
            className={`container ${theme}`}
            style={{paddingLeft: path === "/journal" ? 0 : "4.75rem", paddingTop: path === "/" ? 0 : "4.208rem"}}
        >
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
