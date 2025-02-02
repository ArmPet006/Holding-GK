import React, {FC} from "react";
import {Link} from "react-router-dom";
import Arrow from "../../Helpers/Svg/arrow.tsx";

import "./hero-card.scss";

interface Props {
    image: string | undefined;
    name: string;
    label: string;
};

const HeroCard: FC<Props> = ({image, name, label}) => {
    return (
        <div className="hero_card">
            <img src={image} alt=""/>
            <h3>{name}</h3>

            <div className="info_container">
                <p>{label}</p>
                <Link to={`hero/${name}`}>
                    <Arrow size={25}/>
                </Link>
            </div>
        </div>
    );
};

export default HeroCard;
