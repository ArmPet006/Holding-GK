"use client";
import "./index.scss";

import {useContext} from "react";
import {useRouter} from "next/navigation";
import Image from "next/image";
import {ThemeContext} from "@/Contexts/theme-context.tsx";

import TestImage from "@/../public/assets/images/image.jpg";
import {Facebook, Instagram, Telegram, VK, WhatsApp} from "@/Helpers/Svg/social-icons.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";

import {motion, useScroll, useTransform} from "motion/react";
import BackButton from "@/Components/UI/BackButton/back-button.tsx";

const userData = {
    images: [TestImage, TestImage],
    name: "Артур Петросян",
    headline:
        "Амбициозные проекты, желание постоянно расти и развиваться, а еще чувство эмпатии и социальной ответственности — пожалуй, сегодня именно эти ключевые характеристики объединяют женщин-предпринимателей. Но быть успешной женщиной в мире бизнеса — все еще вызов, требующий силы духа, уверенности в себе и умения балансировать. Несмотря на все трудности, этот путь полон захватывающих моментов и открытий. А каждая женщина, идущая по нему, уникальна…",
    information: "Начинать новый год со встречи с Кристиной Байдали для меня стало доброй традицией — Кристина уже в третий раз становится лицом нашего издания. Вообще, если бы мне доверили сформировать список вдохновляющих женщин нашего города, я не задумываясь внесла бы в топ именно ее. За предпринимательские качества, за готовность делать крутые проекты и развивать любимое дело, за неравнодушие, за желание вдохновлять и вдохновляться самой.  В этом году к ее статусу добавился прекрасный статус мамы, с чем я искренне поздравляю Кристину и ее малышку Мию! Начинать новый год со встречи с Кристиной Байдали для меня стало доброй традицией — Кристина уже в третий раз становится лицом нашего издания. Вообще, если бы мне доверили сформировать список вдохновляющих женщин нашего города"
};

const SinglePage = () => {
    const {theme} = useContext(ThemeContext);
    const {scrollYProgress} = useScroll();

    const firstTextTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-100%"],
        {clamp: false}
    );

    const secondTextTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"],
        {clamp: false}
    );

    const firstImageTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        ["0%", "-100%"],
        {clamp: false}
    );

    const secondImageTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"],
        {clamp: false}
    );

    return (
        <div className={`single_hero_container ${theme}`}>
            <BackButton/>

            <aside className="icon_container">
                <a><Instagram/></a>
                <a><Facebook/></a>
                <a><WhatsApp/></a>
                <a><VK/></a>
                <a><Telegram/></a>
            </aside>

            <div className="view">
                <div className="block">
                    <motion.div
                        initial={{x: "-100vw"}}
                        animate={{x: 0}}
                        transition={{type: "spring", bounce: 0.25, duration: 1}}
                    >
                        <motion.h2
                            style={{
                                translateX: firstTextTranslate,
                            }}
                        >
                            {userData.name}
                        </motion.h2>
                        <p>{userData.headline}</p>
                    </motion.div>

                    <motion.div
                        initial={{y: "100vw"}}
                        animate={{y: 0}}
                        transition={{type: "spring", bounce: 0.25, duration: 1}}
                        style={{
                            translateY: firstImageTranslate,
                        }}
                    >
                        <Image src={userData.images[0]} alt={userData.name}/>
                    </motion.div>
                </div>
            </div>

            <div className="view">
                <div className="block info_container">
                    <div>
                        <motion.h2
                            style={{
                                translateX: secondTextTranslate,
                            }}
                        >
                            {userData.name}
                        </motion.h2>
                        <p>{userData.information}</p>
                    </div>

                    <motion.div
                        style={{
                            translateY: secondImageTranslate,
                        }}
                    >
                        <Image src={userData.images[1]} alt={userData.name}/>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage