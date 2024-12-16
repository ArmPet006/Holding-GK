import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <nav>
        <div className="logo">
          <img className="logo_image" src={Logo} alt="logo" />
        </div>
        <ul className="main_links">
          <li>Главная</li>
          <Link to="/heroes">
            <li>Герой</li>
          </Link>
          <li className="dropdown_trigger">
            Журнал
            <ul className="dropdown_menu">
              <li>Спецпроект</li>
              <li>Look st</li>
              <li>Body</li>
              <li>Fun Toys</li>
              <li>Home and Design</li>
            </ul>
          </li>
          <li>Фото</li>
          <Link to="/advertisers">
            <li>Рекламодателям</li>
          </Link>
          <li>Карине</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
