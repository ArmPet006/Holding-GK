import React, { FC, ReactNode } from "react";
import Navbar from "./Components/Navbar/navbar.tsx";

interface Props {
	children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className="container">{children}</div>
		</>
	);
};

export default Layout;
