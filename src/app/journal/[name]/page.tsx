"use client";
import "./index.scss";

import PostItem from "@/Components/PostItem";
import {useParams, useRouter} from "next/navigation";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import {useContext} from "react";
import {ThemeContext} from "@/Contexts/theme-context.tsx";

enum PageTitle {
    specproject = "Спецпроект",
    body = "Body",
    funtoys = "Fun Toys",
    homeanddesign = "Home and Design",
    lookst = "Look st"
}

const JournalTopicList = () => {
    const {theme} = useContext(ThemeContext);
    const {name}: { name: string } = useParams();
    const router = useRouter();

    return (
        <>
            <button onClick={() => router.replace("/journal")} className="back_button">
                <Arrow size={"1.875rem"}/>
            </button>

            <div className="journal_topics_list">
                <h2 className={theme}>{PageTitle[name as keyof typeof PageTitle]}</h2>
                {
                    Array(10).fill(0).map((_, index) => (
                        <PostItem key={index} onButtonClick={() => router.push(`${name}/${index}`)}/>
                    ))
                }
            </div>
        </>
    )
}
export default JournalTopicList
