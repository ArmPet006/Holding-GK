import Button, {Theme} from "@/Components/UI/Button/button.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import FeaturedBook from "@/Components/Book/featured-book.tsx";
import Image from "next/image";
import TableLight from "@/../public/assets/images/table-light.svg";
import TableDark from "@/../public/assets/images/table-dark.svg";
import TabList from "@/app/journal/tab-list.tsx";
import {useState} from "react";
import {topics} from "@/app/journal/topics.ts";
import {useRouter} from "next/navigation";
import {Topic} from "@/app/journal/page.tsx";

const JournalWebView = ({theme}: { theme: "light" | "dark" }) => {
    const [featuredTopic, setFeaturedTopic] = useState<Topic>({...topics[0], image: topics[0].image.default.src});
    const router = useRouter();

    return (
        <>
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
                        <span>Узнать больше</span>
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
        </>
    )
}
export default JournalWebView
