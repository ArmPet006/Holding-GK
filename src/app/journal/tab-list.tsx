import {FC} from "react";

import JournalTabItem from "@/Components/JournalTabItem/journal-tab-item.tsx";

import {topics} from "./topics.ts";

interface Props {
    setFeaturedTopic: (topic: any) => void;
}

const TabList: FC<Props> = ({setFeaturedTopic}) => {
    return (
        <div className="tab_list_container">
            {
                topics.map((item, index) => (
                    <JournalTabItem key={index} {...item} image={item.image.default.src}
                                    setFeaturedTopic={setFeaturedTopic}/>
                ))
            }
        </div>
    )
}
export default TabList
