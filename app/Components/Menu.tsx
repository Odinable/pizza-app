import React from "react";
import Pizza from "./Pizza";

export const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit dolore
        eaque, itaque autem iure quo perferendis veritatis iusto accusamus
        numquam, culpa unde molestias accusantium ipsa illum tenetur, quasi
        explicabo odio.
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <li key={index} className="pizza-item">
            <Pizza
              photoname={pizza.photoName}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              soldout={pizza.soldOut}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
