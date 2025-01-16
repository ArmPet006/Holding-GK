import React, { FC } from "react";
import Button from "../UI/Button/button";

type Props = {
	image: string | undefined;
	title: string;
	description: string;
};

const JournalCard: FC<Props> = ({ image, title, description }) => {
	return (
		<div className="specialProject_card">
			<div className="specProj_card_heading">
				<div className="specProj_card_logo"></div>
				<div className="heroes_card_title">{title}</div>
				<Button>Read More</Button>
			</div>
			<div className="specProj_card_description">
				<p>{description}</p>
			</div>
		</div>
	);
};

export default JournalCard;
