import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddress = async () => {
      const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

      if (!userId) {
        console.error("User ID not found");
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/api/address?userId=${userId}`);
        const addressData = await response.json();

        if (addressData.success) {
          setSelectedAddress(addressData.defaultAddress || null);
        } else {
          console.error("No default address found.");
        }
      } catch (err) {
        console.error("Error fetching address:", err);
      }
    };

    fetchAddress();
  }, []); // Corrected: Single useEffect hook

  const calculateTotalPrice = () =>
    cart.reduce((total, dish) => total + dish.price, 0);

  const handleNavigateToAddress = () => {
    navigate("/address"); // Navigate to Address page for adding/editing an address
  };

  const handlePlaceOrder = async () => {
    try {
      const orderData = { cart, address: selectedAddress };
      const response = await fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        setCart([]);
        localStorage.removeItem("cart");
        navigate("/order-confirmation");
      } else {
        alert("Failed to place the order.");
      }
    } catch (err) {
      console.error("Error placing the order:", err);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>

      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((dish, index) => (
            <li key={index}>
              {dish.name} - ₹{dish.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{calculateTotalPrice().toFixed(2)}</h3>

      <h2>Address</h2>
      {selectedAddress ? (
        <div>
          <p>
            {selectedAddress.addressLine1}, {selectedAddress.city},{" "}
            {selectedAddress.state} - {selectedAddress.zipCode}
          </p>
          <button onClick={handleNavigateToAddress}>
            Select or Edit Address
          </button>
        </div>
      ) : (
        <button onClick={handleNavigateToAddress}>
          Add or Select Address
        </button>
      )}

      <button
        onClick={handlePlaceOrder}
        disabled={cart.length === 0 || !selectedAddress}
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
