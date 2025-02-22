"use client";
import './index.scss'

import LogoOutline from "@/Helpers/Svg/logo-outline.tsx";
import {createRef, FC, RefObject, useContext, useEffect, useRef, useState} from "react";
import {ThemeContext} from "@/Contexts/theme-context.tsx";
import AdBanner from "@/Components/AdBanner/banner.tsx";

import PostItem from "Components/PostItem";
import ListItem from "@/Components/ListItem/list-item.tsx";
import JournalLogo from "@/../public/assets/images/journal-logo.svg";
import Arrow from "@/Helpers/Svg/arrow.tsx";

const ProjectItemButtonProps = {
    width: "9.708rem",
    height: "2.5rem",
    className: "filled",
    arrowSize: "0.833rem"
}

const pages = [0, 1, 2];

const Home: FC = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const {theme} = useContext(ThemeContext);
    const refs = useRef<RefObject<any>[]>(pages.map(() => createRef()));

    const scrollToNextBlock = () => {
        refs.current[scrollIndex + 1].current.scrollIntoView({behavior: 'smooth', block: 'start'})
        setScrollIndex(prev => prev + 1);
    }

    const scrollToPrevBlock = () => {
        refs.current[scrollIndex - 1].current.scrollIntoView({behavior: 'smooth', block: 'start'})
        setScrollIndex(prev => prev - 1);
    }

    return (
        <div className={`home_container ${theme}`}>
            <section className="hero_section">
                <h1>Холдинг <br/> <span>GK</span></h1>
                <LogoOutline/>

                <div className="projects_list">
                    <ListItem buttonProps={{...ProjectItemButtonProps}} className="hero_project_item"
                              image={JournalLogo.src}
                              title="Книга"/>
                    <ListItem buttonProps={{...ProjectItemButtonProps}} className="hero_project_item"
                              image={JournalLogo.src}
                              title="Журнал"/>
                    <ListItem buttonProps={{...ProjectItemButtonProps}} className="hero_project_item"
                              image={JournalLogo.src}
                              title="Club GK Gold"/>
                </div>
            </section>
            <AdBanner/>
            <section className="page_slider">
                <div className="slide" ref={refs.current[0]}>
                    <h3>Книга</h3>
                    <PostItem/>
                    <PostItem/>
                    <div className="slide_button_container">
                        <button className="slide_button next" onClick={scrollToNextBlock}>
                            <Arrow size={"1.875rem"}/>
                        </button>
                    </div>
                </div>
                <div className="slide" ref={refs.current[1]}>
                    <h3>Журнал</h3>
                    <PostItem/>
                    <PostItem/>

                    <div className="slide_button_container">
                        <button className="slide_button prev" onClick={scrollToPrevBlock}>
                            <Arrow size={"1.875rem"}/>
                        </button>

                        <button className="slide_button next" onClick={scrollToNextBlock}>
                            <Arrow size={"1.875rem"}/>
                        </button>
                    </div>
                </div>
                <div className="slide" ref={refs.current[2]}>
                    <h3>Club GK Gold</h3>
                    <PostItem/>
                    <PostItem/>

                    <div className="slide_button_container">
                        <button className="slide_button prev" onClick={scrollToPrevBlock}>
                            <Arrow size={"1.875rem"}/>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Home
