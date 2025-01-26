import React, { FC } from "react";
import HeroesCard from "../../Components/HeroCard/hero-card";

const Heroes: FC<any> = () => {
	const arr = Array(10).fill({
		image: undefined,
		title: "Heading",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptatibus velit sint obcaecati voluptatem sequi, suscipit deserunt! Maxime aliquam, est harum, fuga possimus quos saepe nam nostrum tempore a nemo?",
	});
	return (
		<div className="heroes_container">
			{arr.map((element, index) => (
				<HeroesCard
					key={index}
					image={element.image}
					title={element.title}
					description={element.description}
				/>
			))}
		</div>
	);
};

export default Heroes;
