import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MapComponent from "./map.jsx";
import axios from "axios";
import "./Cart.css"

import STAR from "../assets/star.png";
import LOCATION from "../assets/Location.png";
import CART from "../assets/Group59.png";
import LOGO from "../assets/LOGO 1.png";
import LOGIN from "../assets/Login.png";
import MACDBURGER from "../assets/McDBurger.png";
import IMG1 from "../assets/Group 23.png";
import IMG2 from "../assets/Group 43.png";
import IMG3 from "../assets/Group 44.png";
import IMG4 from "../assets/Group 25.png"
import IMG5 from "../assets/Group 31.png"
import IMG6 from "../assets/Group 37.png"

const Cart = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  // Fetch restaurant details
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/restaurants/${id}`)
      .then((response) => {
        console.log(response.data)
        setRestaurant(response.data);
      })
      .catch((err) => {
        console.error("Error fetching restaurant:", err);
      });
  }, [id]);

  // Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleDishClick = (dish) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, dish];
      return updatedCart;
    });
  };

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
    navigate("/checkout");
  };

  const calculateTotalPrice = () =>
    cart.reduce((total, dish) => total + (dish?.price || 0), 0);

  return (
    <>
    {/* <div id="cart-web"> */}
    <div id="web">
      
      <div id="header">
        <div className="offer">
          <img className="offer-img" src={STAR} alt="star" />
          <label className="offer">
            Get 5% Off first order, <p style={{ color: "#FC8A06" }}>Promo: ORDER5</p>
          </label>
        </div>
        <div className="location">
          <img className="offer-location" src={LOCATION} alt="Location" />
          <label className="location">
            Regent Street, A4, A4201, London
            <p style={{ color: "#FC8A06" }}>Change Location</p>
          </label>
        </div>
        <img src={CART} alt="cart" onClick={() => navigate("/cart")} />
      </div>

      <div id="navbar">
        <img src={LOGO} alt="logo" />
        <button id="navbar-btn">Home</button>
        <p>Browse Menu</p>
        <p>Special Offer</p>
        <p>Restaurants</p>
        <p>Track Order</p>
        <img src={LOGIN} alt="login" onClick={() => navigate("/profile")} />
      </div>

      <div id="restaurant-name">
        <h1 style={{ color: "white" }}>{restaurant?.name || "Restaurant Name"}</h1>
        <img src={MACDBURGER} alt="Restaurant Logo" />
      </div>

      <div id="search">
        <h1>All Offers From {restaurant?.name || "Restaurant"}</h1>
        <input
          type="text"
          name=""
          id="search-input"
          placeholder="Search for menu..."
        />
      </div>

      <div id="offer">
        <p id="black-offer">Offer</p>
        <p>Burger</p>
        <p>Fries</p>
        <p>Snacks</p>
        <p>Salads</p>
        <p>Cold Drink</p>
        <p>Happy Meal</p>
        <p>Dessert</p>
        <p>Hot Drinks</p>
        <p>Sauces</p>
        <p>Orbit</p>
      </div>


<div className="cart-container">
  <div id="cart-web">
    <div id="img">
      <img src={IMG1} alt="Offer 1" />
      <img src={IMG2} alt="Offer 2" />
    </div>

    <div>
      <h2>Burger</h2>
      <div>
        {restaurant?.dishes?.map((dish, index) => (
          <img
            src={IMG4}
            key={index}
            onClick={() => handleDishClick(dish)}
            style={{ cursor: "pointer" }}
            alt={`Dish ${index}`}
          />
        ))}
      </div>

      <h2>Fries</h2>
      <div>
        {restaurant?.dishes?.map((dish, index) => (
          <img
            src={IMG5}
            key={index}
            onClick={() => handleDishClick(dish)}
            style={{ cursor: "pointer" }}
            alt={`Dish ${index}`}
          />
        ))}
      </div>

      <h2>Cold Drink</h2>
      <div>
        {restaurant?.dishes?.map((dish, index) => (
          <img
            src={IMG6}
            key={index}
            onClick={() => handleDishClick(dish)}
            style={{ cursor: "pointer" }}
            alt={`Dish ${index}`}
          />
        ))}
      </div>
    </div>
  </div>

  <div id="Total">
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        <ul>
          {cart.map((dish, index) => (
            dish && (
              <li key={index}>
                {dish.name || "Unnamed Item"} - $
                {(dish.price || 0).toFixed(2)}
                <button onClick={() => handleRemoveDish(index)}>Remove</button>
              </li>
            )
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
</div>


      {/* <div id="Map" >
      <MapComponent
        
        latitude={restaurant.location.latitude}
        longitude={restaurant.location.longitude}
        restaurantName={restaurant.name}
        description={restaurant.description}
      />
      </div> */}

    </div>
    {/* </div> */}
    </>
  );
};

export default Cart;
