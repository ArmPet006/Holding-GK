import React, { FC } from "react";
import AdvertisersCard from "../../Components/AdvertiserCard/advertiser-card.tsx";

const Advertisers: FC<any> = () => {
	return (
		<div className="advertisers_container">
			<AdvertisersCard logo={undefined} title={"Heading"} price={100} />
			<AdvertisersCard logo={undefined} title={"Heading"} price={100} />
			<AdvertisersCard logo={undefined} title={"Heading"} price={100} />
			<AdvertisersCard logo={undefined} title={"Heading"} price={100} />
			<AdvertisersCard logo={undefined} title={"Heading"} price={100} />
		</div>
	);
};

export default Advertisers;
