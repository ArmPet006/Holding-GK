"use client";

import {useContext, useState} from "react";
import Image, {StaticImageData} from "next/image";
import {useRouter} from "next/navigation";

import TabList from "@/app/journal/tab-list.tsx";
import {ThemeContext} from "@/Contexts/theme-context.tsx";
import Button, {Theme} from "@/Components/UI/Button/button.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import TableLight from "@/../public/assets/images/table-light.svg";
import TableDark from "@/../public/assets/images/table-dark.svg";
import {topics} from "@/app/journal/topics.ts";

import "./index.scss";
import FeaturedBook from "@/Components/Book/featured-book.tsx";

export type Topic = {
    title: string;
    image: string;
    description: string;
}

const Journal = () => {
    const [featuredTopic, setFeaturedTopic] = useState<Topic>({...topics[0], image: topics[0].image.default.src});
    const router = useRouter();

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`journal_container ${theme}`}>
            <div className="featured_container">
                <div className="heading_container">
                    <h2 className={`page_title heading ${theme}`}>{featuredTopic.title}</h2>
                    <Button
                        className="filled"
                        width={"13.125rem"}
                        height={"2.292rem"}
                        theme={theme === "light" ? Theme.dark : Theme.light}
                        style={{
                            justifyContent: "flex-end",
                            paddingRight: 10,
                            gap: "2.083rem",
                            fontSize: "1.5rem"
                        }}
                        onClick={() => router.push("/journal/specproject/")}
                    >
                        Узнать больше
                        <Arrow size={"1.25rem"}/>
                    </Button>
                </div>
                <FeaturedBook className="featured_book" imgSrc={featuredTopic.image}/>
                <p className={theme}>
                    {featuredTopic.description}
                </p>
            </div>
            <Image className="table" src={theme === "light" ? TableLight : TableDark} alt="table"/>
            <TabList setFeaturedTopic={setFeaturedTopic}/>
        </div>
    );
};

export default Journal;
