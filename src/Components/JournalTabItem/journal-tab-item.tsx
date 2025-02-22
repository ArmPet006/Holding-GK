import {FC} from "react";

import {Topic} from "@/app/journal/page.tsx";

import ListItem from "@/Components/ListItem/list-item.tsx";

interface Props {
    image: string;
    title: string;
    description: string;
    setFeaturedTopic: (topic: Topic) => void;
    onButtonClick?: () => void;
}

const JournalTabItem: FC<Props> = ({image, title, description, setFeaturedTopic, onButtonClick}) => {
    const setTopic = () => {
        setFeaturedTopic({
            title,
            image,
            description
        })
    }

    return (
        <ListItem image={image} title={title} onClick={setTopic} onButtonClick={onButtonClick}/>
    )
}
export default JournalTabItem
