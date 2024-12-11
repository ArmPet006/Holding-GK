import React from "react";

type AdvertisersCardPropTypes = {
  logo: string | undefined;
  title: string;
  price: number;
};
const AdvertisersCard = ({ logo, title, price }: AdvertisersCardPropTypes) => {
  return (
    <div className="advertisers_card">
      <div className="card_logo"></div>
      <div className="card_description">
        <h3 className="card_title">{title}</h3>
        <p className="card_price">Цена - {price}$</p>
        <button className="card_button">Read More</button>
      </div>
    </div>
  );
};

export default AdvertisersCard;
