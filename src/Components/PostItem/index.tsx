"use client";
import './index.scss';

import {FC, useContext, useEffect} from "react";
import Book from "@/Components/Book/book.tsx";
import Button, {Theme} from "@/Components/UI/Button/button.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import {ThemeContext} from "@/Contexts/theme-context.tsx";

import {motion, useAnimate, useInView} from "motion/react";

interface Props {
    onButtonClick?: () => void;
}

const PostItem: FC<Props> = ({onButtonClick}) => {
    const {theme} = useContext(ThemeContext);
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, {once: true, amount: 0.7});

    useEffect(() => {
        if (isInView) {
            animate(scope.current, {x: "0"}, {duration: 0.5, ease: 'linear'})
        }
    }, [isInView]);

    return (
        <motion.div
            ref={scope}
            initial={{x: "60%"}}
            className={`post_item_container ${theme}`}
        >
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
        </motion.div>
    )
}
export default PostItem
