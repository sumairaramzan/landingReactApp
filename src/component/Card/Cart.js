// src/components/Cart.js
import React from "react";
import { useSelector } from "react-redux";
import "./card.css";

const Cart = () => {
  const { cart } = useSelector((state) => state.cards);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <h4>{item.title}</h4>
                <p>Quantity: {item.quantity}</p>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
