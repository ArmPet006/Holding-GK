"use client";

import {FC, useContext} from 'react'
import {ThemeContext} from "@/Contexts/theme-context.tsx";
import Form from "@/app/contacts/form.tsx";

import './index.scss';

const Contacts: FC = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`contacts_container ${theme}`}>
            <hr className="top_line"/>
            <span className="left_line"/>
            <span className="right_line"/>
            <hr className="bottom_line"/>

            <div className="block left">
                <span className="block_right_line"/>
                <h2 className={`page_title ${theme}`}>Контакты</h2>
                <Form theme={theme}/>
            </div>

            <div className="block right">
                <span className="block_left_line"/>

                <h4 className={theme}>Информация</h4>

                <ul className={theme}>
                    <li>
                        <span>Телефон</span>
                        8 (3822) 521-001 доп. 370
                    </li>
                    <li>
                        <span>Емейл</span>
                        dorogoe@rde.ru
                    </li>
                    <li>
                        <span>Адрес</span>
                        г.Томск, ул. Герцена 72Б
                    </li>
                    <li>
                        <span>Вконтакте</span>
                        dorogoeydovolstvietomsk
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Contacts
