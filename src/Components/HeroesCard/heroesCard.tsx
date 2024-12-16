import React from "react";

type HeroesCardPropTypes = {
  logo: string | undefined;
  title: string;
  description: string;
};

const HeroesCard = ({ logo, title, description }: HeroesCardPropTypes) => {
  return (
    <div className="heroes_card">
      <div className="heroes_card_heading">
        <div className="heroes_card_logo"></div>
        <div className="heroes_card_title">{title}</div>
        <div className="heroes_card_icons">
            <div className="heroes_card_icon"></div>
            <div className="heroes_card_icon"></div>
            <div className="heroes_card_icon"></div>
            <div className="heroes_card_icon"></div>
        </div>
      </div>
      <div className="heroes_card_description">{description}</div>
    </div>
  );
};

export default HeroesCard;
