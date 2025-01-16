import React, { FC } from "react";
import Button from "../UI/Button/button";

type Props = {
	image: string | undefined;
	title: string;
	description: string;
};

const HeroesCard: FC<Props> = ({ image, title, description }) => {
	return (
		<div className="heroes_card">
			<div className="heroes_card_heading">
				<div className="heroes_card_logo"></div>
				<div className="heroes_card_title">{title}</div>
				<div className="heroes_card_icons">
					<button className="heroes_card_icon"></button>
					<button className="heroes_card_icon"></button>
					<button className="heroes_card_icon"></button>
					<button className="heroes_card_icon"></button>
				</div>
			</div>
			<div className="heroes_card_description">
				<p>{description}</p>
				<Button>Read More</Button>
			</div>
		</div>
	);
};

export default HeroesCard;
