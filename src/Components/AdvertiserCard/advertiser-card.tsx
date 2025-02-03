import {FC} from "react";
import Image from "next/image";

import Button, {Theme} from "../UI/Button/button";
import Arrow from "@/Helpers/Svg/arrow.tsx";

import "./advertiser-card.scss";

interface Props {
    logo: string;
    title: string;
    price: number;
}

const AdvertisersCard: FC<Props> = ({logo, title, price}) => {
    return (
        <div className="advertisers_card">
            <Image src={logo} className="advertisers_card_logo" alt="logo"/>

            <div className="advertisers_card_description">
                <h3 className="advertisers_card_title">{title}</h3>
                <p className="advertisers_card_price">Цена - {price}$</p>
            </div>
            <Button width={'100%'} height={35} theme={Theme.light}>
                Узнать больше
                <Arrow size={15}/>
            </Button>
        </div>
    );
};

export default AdvertisersCard;
