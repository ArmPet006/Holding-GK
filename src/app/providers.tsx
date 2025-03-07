"use client";

import Navbar from "@/Components/Navbar/navbar.tsx";
import {useContext} from "react";
import {ThemeContext} from "@/Contexts/theme-context.tsx";
import {usePathname} from "next/navigation";
import MobileNavbar from "@/Components/Navbar/Mobile/mobile-navbar.tsx";
import useMobile from "@/Hooks/use-mobile.tsx";

const Wrapper = ({children}: { children: React.ReactNode }) => {
    const {loading, isMobile} = useMobile();
    const {theme} = useContext(ThemeContext);
    const path = usePathname();

    if (loading) {
        return <h1>loading</h1>
    }

    return (
        !loading &&
        <>
            {isMobile ? <MobileNavbar/> : <Navbar/>}

            <div
                className={`container ${theme}`}
                style={{paddingLeft: path === "/journal" ? 0 : "4.75rem", paddingTop: path === "/" ? 0 : "4.208rem"}}
            >
                {children}
            </div>
        </>
    )
}
export default Wrapper
