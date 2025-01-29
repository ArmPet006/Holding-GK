import React, {FC, ReactNode, useContext} from "react";
import Navbar from "./Components/Navbar/navbar.tsx";
import {ThemeContext} from "./Providers/theme-provider.tsx";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({children}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <>
            <Navbar/>
            <div className={`container ${theme}`}>{children}</div>
        </>
    );
};

export default Layout;
