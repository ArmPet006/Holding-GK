import {FC, useContext} from "react";
import Image from "next/image";

import {ThemeContext} from "@/Contexts/theme-context.tsx";
import Button, {Theme} from "@/Components/UI/Button/button.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import BookBackdrop from "@/../public/assets/images/book-backdrop-small.svg";
import {Topic} from "@/app/journal/page.tsx";

import './journal-tab-item.scss';

interface Props {
    image: string;
    title: string;
    description: string;
    setFeaturedTopic: (topic: Topic) => void;
}

const JournalTabItem: FC<Props> = ({image, title, description, setFeaturedTopic}) => {
    const {theme} = useContext(ThemeContext);

    const setTopic = () => {
        setFeaturedTopic({
            title,
            image,
            description
        })
    }

    return (
        <div className="tab_item_container">
            <div className="image_container" onClick={setTopic}>
                <Image className="cover" src={image} alt=""/>
                <Image className="backdrop" src={BookBackdrop} alt=""/>
            </div>

            <div className="action_container">
                <h3 className={theme}>{title}</h3>
                <Button width={140} height={35} theme={theme === "light" ? Theme.dark : Theme.light}>
                    Узнать больше
                    <Arrow size={15}/>
                </Button>
            </div>
        </div>
    )
}
export default JournalTabItem
