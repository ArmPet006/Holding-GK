import React from "react";
import JournalCard from "../../Components/JournalCard/journal-card";

const JournalList = () => {
	const arr = Array(10).fill({
		image: undefined,
		title: "Heading",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptatibus velit sint obcaecati voluptatem sequi, suscipit deserunt! Maxime aliquam, est harum, fuga possimus quos saepe nam nostrum tempore a nemo?",
	});
	return (
		<div className="specProj_container">
			{arr.map((element, index) => (
				<JournalCard
					key={index}
					image={element.image}
					title={element.title}
					description={element.description}
				/>
			))}
		</div>
	);
};

export default JournalList;
