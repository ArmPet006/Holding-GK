"use client";

import {useContext, useState} from "react";
import Image, {StaticImageData} from "next/image";

import TabList from "@/app/journal/tab-list.tsx";
import {ThemeContext} from "@/Contexts/theme-context.tsx";
import Button, {Theme} from "@/Components/UI/Button/button.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import TableLight from "@/../public/assets/images/table-light.svg";
import TableDark from "@/../public/assets/images/table-dark.svg";
import BookBackdrop from "@/../public/assets/images/book-backdrop.svg";
import {topics} from "@/app/journal/topics.ts";

import "./index.scss";

export type Topic = {
    title: string;
    image: StaticImageData | string;
    description: string;
}

const Journal = () => {
    const [featuredTopic, setFeaturedTopic] = useState<Topic>(topics[0]);

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`journal_container ${theme}`}>
            <div className="featured_container">
                <div className="heading_container">
                    <h2 className={`page_title heading ${theme}`}>{featuredTopic.title}</h2>
                    <Button
                        className="filled"
                        width={220}
                        height={36}
                        theme={theme === "light" ? Theme.dark : Theme.light}
                        style={{
                            justifyContent: "flex-end",
                            paddingRight: 10,
                            gap: 35
                        }}
                    >
                        Узнать больше
                        <Arrow size={20}/>
                    </Button>
                </div>
                <div className="image_container">
                    <Image className="cover" src={featuredTopic.image} alt=""/>
                    <Image className="backdrop" src={BookBackdrop} alt=""/>
                </div>
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
