"use client";
import './index.scss';

import {FC, useContext} from "react";
import Book from "@/Components/Book/book.tsx";
import Button, {Theme} from "@/Components/UI/Button/button.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import {ThemeContext} from "@/Contexts/theme-context.tsx";

interface Props {
    onButtonClick?: () => void;
}

const PostItem: FC<Props> = ({onButtonClick}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`post_item_container ${theme}`}>
            <Book className="book"/>

            <div className="text_container">
                <h4>Home and Design</h4>
                <p>Амбициозные проекты, желание постоянно расти и развиваться, а еще чувство эмпатии и социальной
                    ответственности — пожалуй, сегодня именно эти ключевые характеристики объединяют
                    женщин-предпринимателей.</p>
                <Button
                    width={"6.958rem"}
                    height={"1.792rem"}
                    theme={theme === "light" ? Theme.dark : Theme.light}
                    onClick={onButtonClick}
                >
                    Узнать больше
                    <Arrow size={"0.833rem"}/>
                </Button>
            </div>
        </div>
    )
}
export default PostItem
