import React from "react";
import Button from "../UI/Button/button";

type AdvertisersCardPropTypes = {
  logo: string | undefined;
  title: string;
  price: number;
};
const AdvertisersCard = ({ logo, title, price }: AdvertisersCardPropTypes) => {
  return (
    <div className="advertisers_card">
      <div className="advertisers_card_logo"></div>
      <div className="advertisers_card_description">
        <h3 className="advertisers_card_title">{title}</h3>
        <p className="advertisers_card_price">Цена - {price}$</p>
        <Button />
      </div>
    </div>
  );
};

export default AdvertisersCard;
