"use client";
import './index.scss';

import {useContext} from "react";
import {ThemeContext} from "@/Contexts/theme-context.tsx";
import Card from "@/Components/Card/card.tsx";
import DiamondOutline from "@/Helpers/Svg/diamond-outline.tsx";
import {useScroll, useTransform, motion} from "motion/react";

const ClubGK = () => {
    const {theme} = useContext(ThemeContext);
    const {scrollYProgress} = useScroll();

    const firstTextTranslate = useTransform(
        scrollYProgress,
        [0, 0.3],
        ["0%", "-100%"],
        {clamp: false}
    );

    const secondTextTranslate = useTransform(
        scrollYProgress,
        [0, 0.3],
        ["-100%", "0%"],
        {clamp: false}
    );

    const thirdTextTranslate = useTransform(
        scrollYProgress,
        [0, 0.65],
        ["-100%", "0%"],
        {clamp: false}
    );

    const fourthTextTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"],
        {clamp: false}
    );

    return (
        <div className={`club_container ${theme}`}>
            <DiamondOutline/>

            <section className="section">
                <motion.h2 style={{translateX: firstTextTranslate}} className={`page_title ${theme}`}>Club GK Gold
                </motion.h2>

                <div className="first_section_container">
                    <ul className="first_list">
                        <li>
                            <span>G – goal: </span>
                            поиск и формулировка целей и их достижение
                        </li>
                        <li>
                            <span>O – open-minded: </span>
                            открытость сердца и ума восприятию мира, изменениям и всему новому
                        </li>
                        <li>
                            <span>L – love: </span>
                            любовь к себе и своему делу как неотъемлемая составляющая успеха
                        </li>
                        <li>
                            <span>D – development: </span>
                            развитие как непрерывное совершенствование себя и всех жизненных и бизнес-процессов
                        </li>
                    </ul>

                    <div>
                        <p>
                            КЛУБ, объединяющий неравнодушных людей из различных сфер (предпринимателей, политиков,
                            деятелей
                            науки и искусства и т.д.) с четкими принципами и близкими ценностями с целью:

                        </p>
                        <ul className="second_list">
                            <li>общения с единомышленниками, создания близкого по духу и целям окружения</li>
                            <li>развития, как бизнеса, так и личностного</li>
                            <li>профессиональной помощи и экспертного консультирования в вопросах различного характера
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="section">
                <motion.h2 style={{translateX: secondTextTranslate}} className={`page_title ${theme}`}>Club GK Gold
                </motion.h2>

                <div className="second_section_container">
                    <h3>Что наше сообщество хочет дать вам?</h3>

                    <ul>
                        <li>свою руку, чтобы вы почувствовали, что вы не одни, и нашли себе своё окружение, которое
                            умеет
                            ценить каждую личность
                        </li>
                        <li>уверенность и поддержку в делах: в нашем сообществе менторы ведут мастермайнд - группы,
                            которые
                            позволяют найти точки для развития и проработать любой запрос
                        </li>
                        <li>знания и инструменты, которые важны сегодня и актуальны завтра: вы сможете актуализировать
                            себя
                            и свой бизнес в соответствии с новыми тенденциями рынка
                        </li>
                        <li>удовольствие и интерес жить насыщенной жи знью, полной ярких впечатлений и эмоций:
                            ежемесячно мы
                            организуем лучшие деловые, образовательные и развлекательные мероприятия, как локальные, так
                            и
                            выездные!
                        </li>
                        <li>идеи, вдохновение и новый сценарий вашей качественно лучшей, наполненной жизни!»</li>
                    </ul>
                </div>
            </section>

            <section className="section">
                <motion.h2 style={{translateX: thirdTextTranslate}} className={`page_title ${theme}`}>Club GK Gold
                </motion.h2>

                <div className="third_section_container">
                    <Card>
                        <div className="title_container">
                            <h2>Networking</h2>
                            <h2>Окружение</h2>
                        </div>

                        <ul>
                            <li>Поиск нужных контактов</li>
                            <li>Общение сединомышленниками,знакомства, совместный отдых</li>
                            <li>Моральная, физическая июридическая поддержка другдруга</li>
                            <li>Участие в разноформатныхвстречах и мероприятиях, организуемых Клубом и егопартнерами
                            </li>
                        </ul>
                    </Card>
                    <Card>
                        <div className="title_container">
                            <h2>Business</h2>
                            <h2>Бизнес</h2>
                        </div>

                        <ul>
                            <li>Возможность найти сильногопартнера, инвестора или наставника (ментора)</li>
                            <li>Поиск долгосрочной стратегии</li>
                            <li>Бизнес-идеи и помощь в их развитии</li>
                            <li>Встречи с успешнымипредпринимателями / крупными топ-менеджерами</li>
                            <li>Обмен экспертными знаниями</li>
                            <li>Актуальная информация по узкимтемам (менеджмент, финансы, KPI, продукт, персонал,
                                логистика)
                            </li>
                        </ul>
                    </Card>
                    <Card>
                        <div className="title_container">
                            <h2>Energy</h2>
                            <h2>Энергия</h2>
                        </div>

                        <ul>
                            <li>Ресурсное состояние</li>
                            <li>Драйв и эмоции</li>
                            <li>Вдохновение и мотивация</li>
                            <li>Новый опыт, возможностьпрокачать определенные навыкии компетенции</li>
                            <li>Перезагрузка себя и своегоокружения</li>
                            <li>Поиск смыслов</li>
                        </ul>
                    </Card>
                </div>
            </section>

            <section className="section">
                <motion.h2 style={{translateX: fourthTextTranslate}} className={`page_title ${theme}`}>Портрет
                    резидента
                </motion.h2>

                <div className="fourth_section_container">
                    <h4>Наш основной ресурс –люди. Они создают ценность сообщества. От качества состава зависит
                        привлекательность вашего Клуба для новых резидентов, а также репутация как ваша, так и
                        Франчайзера, поэтому вступить в Клуб может не любая женщина, оплатившая членский взнос.</h4>

                    <h3>Правила Клуба:</h3>

                    <ul>
                        <li>Мы доброжелательны, активны, неравнодушны</li>
                        <li>Помогаем словом и делом</li>
                        <li>Делимся информацией, экспертными знаниями</li>
                        <li>Активно участвуем в жизни Клуба и его резидентов</li>
                        <li>Поддерживаем разнообразие –резидентыпредставляют и интересуются различными сферамижизни, их
                            бизнесы не идентичны (по продукту, рынкуили масштабу)
                        </li>
                        <li>Приносим пользу (нет токсичности)</li>
                        <li>Развиваемся</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default ClubGK
