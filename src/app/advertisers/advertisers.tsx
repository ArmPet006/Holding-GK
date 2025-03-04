import {FC, useContext} from "react";

import JournalLogo from "@/../public/assets/images/journal-logo.svg";
import Card from "@/Components/Card/card.tsx";
import Image from "next/image";
import Button, {Theme} from "@/Components/UI/Button/button.tsx";
import Arrow from "@/Helpers/Svg/arrow.tsx";
import {ThemeContext} from "@/Contexts/theme-context.tsx";

const AdvertisersList: FC<any> = () => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className="advertisers_list">
            <Card>
                <Image src={JournalLogo} className="advertisers_card_logo" alt="logo"/>

                <div className="advertisers_card_description">
                    <h3 className="advertisers_card_title">Книга</h3>
                    <p className="advertisers_card_price">Цена - 100$</p>
                </div>
                <Button width={'100%'} height={"1.792rem"} theme={theme === "dark" ? Theme.light : Theme.dark}>
                    <span>Узнать больше</span>
                    <Arrow size={"0.833rem"}/>
                </Button>
            </Card>

            <Card>
                <Image src={JournalLogo} className="advertisers_card_logo" alt="logo"/>

                <div className="advertisers_card_description">
                    <h3 className="advertisers_card_title">Журнал</h3>
                    <p className="advertisers_card_price">Цена - 100$</p>
                </div>
                <Button width={'100%'} height={"1.792rem"} theme={theme === "dark" ? Theme.light : Theme.dark}>
                    <span>Узнать больше</span>
                    <Arrow size={"0.833rem"}/>
                </Button>
            </Card>

            <Card>
                <Image src={JournalLogo} className="advertisers_card_logo" alt="logo"/>

                <div className="advertisers_card_description">
                    <h3 className="advertisers_card_title">Club GK</h3>
                    <p className="advertisers_card_price">Цена - 100$</p>
                </div>
                <Button width={'100%'} height={"1.792rem"} theme={theme === "dark" ? Theme.light : Theme.dark}>
                    <span>Узнать больше</span>
                    <Arrow size={"0.833rem"}/>
                </Button>
            </Card>
        </div>
    );
};

export default AdvertisersList;
