/* eslint-disable react/no-unescaped-entities */
import React from "react";

interface OrderProps {
  openHour: number;
  closeHour: number;
}

const Footer: React.FC = () => {
  const hour: number = new Date().getHours();
  const openHour: number = 6;
  const closeHour: number = 22;
  const isOpen: boolean = hour >= openHour && hour <= closeHour;

  // If the store is closed, show a message with opening hours
  if (!isOpen) {
    return (
      <footer className="footer closed">
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      </footer>
    );
  }

  // If the store is open, render the Order component
  return (
    <footer className="footer open">
      <Order openHour={openHour} closeHour={closeHour} />
    </footer>
  );
};

const Order: React.FC<OrderProps> = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn" aria-label="Place an order online">
        Order
      </button>
    </div>
  );
};

export default Footer;
