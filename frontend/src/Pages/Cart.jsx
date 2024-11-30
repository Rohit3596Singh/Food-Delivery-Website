import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [notification, setNotification] = useState("");
  const navigate = useNavigate(); // For navigation

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleRemoveDish = (dishIndex) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, index) => index !== dishIndex);
      return updatedCart;
    });
  };

  const handlePlaceOrder = () => {
    const totalPrice = calculateTotalPrice();
    if (totalPrice < 10) {
      setNotification("Minimum delivery is $10. You must spend more!");
      return;
    }
    // Navigate to the checkout page if total price meets the minimum requirement
    navigate("/checkout");
  };

  const calculateTotalPrice = () =>
    cart.reduce((total, dish) => total + dish.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((dish, index) => (
              <li key={index}>
                {dish.name} - ${dish.price.toFixed(2)}
                <button onClick={() => handleRemoveDish(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{calculateTotalPrice().toFixed(2)}</h3>
        </>
      )}

      {notification && <p style={{ color: "red" }}>{notification}</p>}

      {cart.length > 0 && (
        <button onClick={handlePlaceOrder}>Place Order</button>
      )}
    </div>
  );
};

export default Cart;
