import React from "react";
import Button from "../UI/Button/button";

type SpecProjectCardPropTypes = {
  image: string | undefined;
  title: string;
  description: string;
};

const SpecialProjectCard = ({
  image,
  title,
  description,
}: SpecProjectCardPropTypes) => {
  return (
    <div className="specialProject_card">
      <div className="specProj_card_heading">
        <div className="specProj_card_logo"></div>
        <div className="heroes_card_title">{title}</div>
        <Button />
      </div>
      <div className="specProj_card_description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SpecialProjectCard;
