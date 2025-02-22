import './list-item.scss';

import {FC, useContext} from "react";
import Book from "@/Components/Book/book.tsx";
import Button, {Theme} from "@/Components/UI/Button/button.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import {ThemeContext} from "@/Contexts/theme-context.tsx";

interface Props {
    image: string;
    title: string;
    onClick?: () => void;
    className?: string;
    buttonProps?: {
        width?: number | string;
        height?: number | string;
        className?: string;
        arrowSize?: number | string;
    };
    onButtonClick?: () => void;
}

const ListItem: FC<Props> = ({image, title, onClick, className, buttonProps, onButtonClick}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`list_item_container ${className}`}>
            <Book className="book" imgSrc={image} onClick={onClick}/>

            <div className="text_container">
                <h3 className={theme}>{title}</h3>
                <Button
                    className={buttonProps?.className}
                    width={buttonProps?.width || "6.958rem"}
                    height={buttonProps?.height || "1.792rem"}
                    theme={theme === "light" ? Theme.dark : Theme.light}
                    onClick={onButtonClick}
                >
                    Узнать больше
                    <Arrow size={buttonProps?.arrowSize || "0.833rem"}/>
                </Button>
            </div>
        </div>
    )
}
export default ListItem
