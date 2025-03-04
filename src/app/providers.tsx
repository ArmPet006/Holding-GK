"use client";

import {ThemeProvider} from "@/Providers/theme-provider.tsx";
import Navbar from "@/Components/Navbar/navbar.tsx";
import {useContext, useEffect, useState} from "react";
import {ThemeContext} from "@/Contexts/theme-context.tsx";
import {usePathname} from "next/navigation";
import MobileNavbar from "@/Components/Navbar/Mobile/mobile-navbar.tsx";
import useMobile from "@/Hooks/use-mobile.tsx";

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
    const {loading, isMobile} = useMobile();

    if (loading) {
        return <h1>loading</h1>
    }

    return (
        !loading &&
        <ThemeProvider>
            {isMobile ? <MobileNavbar/> : <Navbar/>}
            <Wrapper>{children}</Wrapper>
        </ThemeProvider>
    )
}
export default Providers
