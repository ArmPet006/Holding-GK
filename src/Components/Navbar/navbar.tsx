import React from "react";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <nav>
        <div className="logo">
          <img className="logo_image" src={Logo} alt="logo" />
        </div>
        <ul className="main_links">
          <li>Главная</li>
          <li>Герой</li>
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
          <li>Рекламодателям</li>
          <li>Карине</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
