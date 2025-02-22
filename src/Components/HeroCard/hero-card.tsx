import React, {FC} from "react";
import Link from "next/link";
import Image from "next/image";

import Arrow from "@/Helpers/Svg/arrow.tsx";

import "./hero-card.scss";

interface Props {
    image: string;
    name: string;
    label: string;
}

const HeroCard: FC<Props> = ({image, name, label}) => {
    return (
        <div className="hero_card">
            <Image src={image} alt=""/>
            <h3>{name}</h3>

            <div className="info_container">
                <p>{label}</p>
                <Link href={`/heroes/${name.split(" ").join("")}`}>
                    <Arrow size={"1.875rem"}/>
                </Link>
            </div>
        </div>
    );
};

export default HeroCard;
