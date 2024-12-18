import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleSetActive = (path) => {
    setActiveLink(path);
  };

  const isDropdownActive = ["/special_project"].includes(activeLink);

  return (
    <div className="navbar_container">
      <nav>
        <div className="logo">
          <img className="logo_image" src={Logo} alt="logo" />
        </div>
        <ul className="main_links">
          <li
            className={activeLink === "/" ? "active" : ""}
            onClick={() => handleSetActive("/")}
          >
            Главная
          </li>
          <Link to="/heroes">
            <li
              className={activeLink === "/heroes" ? "active" : ""}
              onClick={() => handleSetActive("/heroes")}
            >
              Герой
            </li>
          </Link>
          <li
            className={`dropdown_trigger ${isDropdownActive ? "active" : ""}`}
          >
            Журнал
            <ul className="dropdown_menu">
              <Link to="/special_project">
                <li
                  className={activeLink === "/special_project" ? "active" : ""}
                  onClick={() => handleSetActive("/special_project")}
                >
                  Спецпроект
                </li>
              </Link>
              <li>Look st</li>
              <li>Body</li>
              <li>Fun Toys</li>
              <li>Home and Design</li>
            </ul>
          </li>
          <Link to="/advertisers">
            <li
              className={activeLink === "/advertisers" ? "active" : ""}
              onClick={() => handleSetActive("/advertisers")}
            >
              Рекламодателям
            </li>
          </Link>
          <li>Карине</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
