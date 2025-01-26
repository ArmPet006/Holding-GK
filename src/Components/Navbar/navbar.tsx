import React from "react";
import Logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
	return (
		<div className="navbar_container">
			<nav>
				<div className="logo">
					<img className="logo_image" src={Logo} alt="logo" />
				</div>
				<ul className="main_links">
					<NavLink to="/">Главная</NavLink>
					<NavLink to="/heroes">Герой</NavLink>
					<NavLink to="/journal">
						Журнал
						{/* <ul className="dropdown_menu">
							<NavLink to="/journal/special-project">Спецпроект</NavLink>
							<NavLink to="/journal/lookst">Look st</NavLink>
							<NavLink to="/journal/body">Body</NavLink>
							<NavLink to="/journal/fun-toys">Fun Toys</NavLink>
							<NavLink to="/journal/home-and-design">Home and Design</NavLink>
						</ul> */}
					</NavLink>
					<NavLink to="/advertisers">Рекламодателям</NavLink>
					<NavLink to="/">Карине</NavLink>
					<NavLink to="/contacts">Контакты</NavLink>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
