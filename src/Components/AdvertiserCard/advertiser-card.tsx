import React, { FC } from "react";
import Button from "../UI/Button/button";

import "./advertiser-card.scss";

interface Props {
	logo: string | undefined;
	title: string;
	price: number;
}

const AdvertisersCard: FC<Props> = ({ logo, title, price }) => {
	return (
		<div className="advertisers_card">
			<div className="advertisers_card_logo"></div>
			<div className="advertisers_card_description">
				<h3 className="advertisers_card_title">{title}</h3>
				<p className="advertisers_card_price">Цена - {price}$</p>
				<Button>Read More</Button>
			</div>
		</div>
	);
};

export default AdvertisersCard;
