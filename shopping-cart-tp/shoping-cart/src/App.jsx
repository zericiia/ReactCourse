import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

import cartImage from "./assets/cartImage.png";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const cart = localStorage.getItem("cartItems");
    return cart ? JSON.parse(cart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  function handleKeyDown(event) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      console.log(event.target.value);
      setCartItems([...cartItems, event.target.value]);

      event.target.value = "";
    }
  }
  function removeItem(index) {
    setCartItems(cartItems.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <div className="cart-logo">
        <img src={cartImage} />
      </div>
      <div className="cart-input">
        <p>Enter a product into the cart</p>

        <input
          type="text"
          className="product-input-text"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="cart-items">
        {cartItems.map((cartItem, index) => {
          return (
            <div key={index} className="cartitem">
              <input className="checkbox-input" type="checkbox" />
              {cartItem} <button onClick={() => removeItem(index)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
