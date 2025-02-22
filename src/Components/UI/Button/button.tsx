import React, {ButtonHTMLAttributes, FC} from "react";
import "@/styles/theme.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    width: number | string;
    height: number | string;
    theme: Theme
}

export enum Theme {
    dark = "dark",
    light = "light",
}

const Button: FC<Props> = (props) => {
    return (
        <button
            {...props}
            className={`read_more_btn ${props.className} ${props.theme}`}
            style={{
                ...props.style,
                width: props.width,
                height: props.height,
            }}
        >
            {props.children}
        </button>
    );
};

export default Button;
