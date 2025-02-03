import {FC} from "react";
import AdvertisersCard from "@/Components/AdvertiserCard/advertiser-card.tsx";

import JournalLogo from "@/../public/assets/images/journal-logo.svg";
import BookLogo from "@/../public/assets/images/book-logo.svg";

const AdvertisersList: FC<any> = () => {
    return (
        <div className="advertisers_list">
            <AdvertisersCard logo={JournalLogo} title={"Клуб"} price={100}/>
            <AdvertisersCard logo={JournalLogo} title={"Журнал"} price={100}/>
            <AdvertisersCard logo={JournalLogo} title={"Книга"} price={100}/>
        </div>
    );
};

export default AdvertisersList;
