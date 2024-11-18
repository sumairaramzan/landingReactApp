// src/components/CardList.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCardsRequest,addToCart } from "../../features/cardSlice";
import "./card.css";
const CardList = ({product}) => {
  const dispatch = useDispatch();
  const { items: cards, loading, error } = useSelector((state) => state.cards);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(fetchCardsRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = () => {
    console.log("Adding to cart:", product);

    if (!product) {
      console.error("No product found");
      return;
    }

    dispatch(addToCart({ ...product, quantity: 1 }));

    console.log("Current cart items:", cartItems);
    const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
    console.log("Updated cart items:", updatedCartItems);
  };

  return (
    <div className="card-list">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
    <div className="card-container">
      {filteredCards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.image} alt={card.title} />
          <h4>{card.category}</h4>
          <h3>{card.title}</h3>
          <p>${card.price}</p>
          <button onClick={() => handleAddToCart(card)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CardList;
