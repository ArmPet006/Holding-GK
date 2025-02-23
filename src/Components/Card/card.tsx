import "./card.scss";

import {FC, ReactNode, useContext} from "react";
import {ThemeContext} from "@/Contexts/theme-context.tsx";

interface Props {
    children: ReactNode;
}

const Card: FC<Props> = ({children}) => {
    const {theme} = useContext(ThemeContext);

    return (
        <figure className={`card_container ${theme}`}>{children}</figure>
    )
}
export default Card
