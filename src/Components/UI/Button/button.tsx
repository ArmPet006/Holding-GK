import React from "react";

const Button = () => {
  return (
    <button
      className="heroes_card_button"
      style={{
        marginTop: "15px",
        padding: "8px 22px",
        borderRadius: "14px",
        fontFamily: "var(--Font-family)",
        color: "var(--Active-Link-color)",
        border: "1px solid var(--Active-Link-color)",
        cursor: "pointer",
        backgroundColor: "transparent"
      }}
    >
      Read More
    </button>
  );
};

export default Button;
