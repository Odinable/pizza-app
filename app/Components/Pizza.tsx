/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface props {
  photoname: string;
  name: string;
  price: number;
  ingredients: string;
  soldout: boolean;
}

const Pizza = ({ photoname, name, price, ingredients, soldout }: props) => {
  return (
    <div className={`pizza ${soldout ? "sold-out" : ""}`}>
      <img src={photoname} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldout ? "Sold Out" : `$${price}`}</span>
      </div>
    </div>
  );
};

export default Pizza;
