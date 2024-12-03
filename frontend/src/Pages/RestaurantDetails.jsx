import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MapComponent from "./map.jsx";
import "../Pages/RestaurantDetails.css"
import CAAART from "./Cart.jsx"

import STAR from "../assets/star.png"
import LOCATION from "../assets/Location.png"
import CART from "../assets/Group59.png"
import LOGO from "../assets/LOGO 1.png"
import LOGIN from "../assets/Login.png"
import MACDBURGER from "../assets/McDBurger.png"
import IMG1 from "../assets/Group 23.png"
import IMG2 from "../assets/Group 43.png"
import IMG3 from "../assets/Group 44.png"
import IMG4 from "../assets/Group 25.png"
import IMG5 from "../assets/Group 31.png"
import IMG6 from "../assets/Group 37.png"

// import LOGO2 from "../assets/LOGO2.png"
// import intro from "../assets/Intro.png"
// import playstore from "../assets/Playtstore.png"
// import facebook from "../assets/Facebook.png"
// import instagram from "../assets/Instagram.png"
// import snapchat from "../assets/Snapchat.png"
// import tiktok from "../assets/TikTok.png"

const RestaurantPage = () => {
  const { id } = useParams(); // Get restaurant ID from URL
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState(() => {
    // Initialize cart from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    axios
      .get(`https://food-delivery-website-1-tobh.onrender.com/api/restaurants/${id}`) // Fetch restaurant by ID
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((err) => {
        console.error("Error fetching restaurant:", err);
        setError("Failed to fetch restaurant.");
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

  const handleNavigateToCart = () => {
    navigate(`/cart/${id}`); // Pass restaurant ID as URL parameter
  };

  const handleRemoveDish = (dishIndex) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, index) => index !== dishIndex);
      return updatedCart;
    });
  };

  const handlePlaceOrder = () => {
    // Clear cart and localStorage after placing order
    alert("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("cart");
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!restaurant) {
    return <div>Loading restaurant details...</div>;
  }

  return (
    <>
    <div id="web">
    <div id="header" >

<div class="offer" >
  <img class="offer-img" src={STAR} alt="star" />
  <label class="offer" >Get 5% Off first order, <p style={{color:"#FC8A06"}} >Promo:ORDER5 </p></label>
</div>

<div class="location" >
  <img class="offer-location" src={LOCATION} alt="Location" />
  <label class="location" >Regent Street, A4, A4201, London <p style={{color:"#FC8A06"}}  >Change Location</p> </label>
</div>

<img
  src={CART}
  alt="cart"
  onClick={handleNavigateToCart}
/>;

<div>
  {/* <CAAART/> */}
</div>

</div>

<div id="navbar">
<img src={LOGO} alt="logo" />

  <button id="navbar-btn" >Home</button>
  <p>Browser Menu</p>
  <p>Special Offer</p>
  <p>Restaurants</p>
  <p>Track Order</p>

<img src={LOGIN} alt="login"
onClick={() => navigate("/profile")}
/>
</div  >
      <div id="restaurant-name">
        <h1 style={{color:"white"}}>{restaurant.name}</h1>
        <img src={MACDBURGER} />
      </div>

      <div id="search">
        <h1>All Offers From {restaurant.name}</h1>
        <input type="text" name="" id="search-input" placeholder="search for menu..."></input>
      </div>

      <div id="offer">
         <p id="black-offer">Offer</p>
         <p>Burger</p>
         <p>Fries</p>
         <p>Snacks</p>
         <p>Salads</p>
         <p>Cold Drink</p>
         <p>Happy Meal</p>
         <p>Desert</p>
         <p>Hot Drinks</p>
         <p>Sauces</p>
         <p>Orbit</p> 
      </div>

      <div id="img">
          <img src={IMG1}/>
          <img src={IMG2}/>
          <img src={IMG3}/>
      </div>
      
      
      

      <h2>Burger</h2>
      <div>
      {restaurant.dishes.map((dish, index) => (
      <img src={IMG4}  key={index}
        
          
          onClick={() => handleDishClick(dish)}
          style={{ cursor: "pointer" }}
          >
        </img>
        ))}
      </div>
      {/* <ul>
        {restaurant.dishes.map((dish, index) => (
          <li key={index}
          onClick={() => handleDishClick(dish)}
          style={{ cursor: "pointer" }}
          >
            {dish.name} - ${dish.price.toFixed(2)}
          </li>
        ))}
      </ul> */}

<h2>Fries</h2>
      <div>
      {restaurant.dishes.map((dish, index) => (
      <img src={IMG5}  key={index}
        
          
          onClick={() => handleDishClick(dish)}
          style={{ cursor: "pointer" }}
          >
        </img>
        ))}
      </div>

      <h2>Cold Drink</h2>
      <div>
      {restaurant.dishes.map((dish, index) => (
      <img src={IMG6}  key={index}
        
          
          onClick={() => handleDishClick(dish)}
          style={{ cursor: "pointer" }}
          >
        </img>
        ))}
      </div>

      {/* Cart Section */}
      {/* <button onClick={() => navigate("/cart")}>Go to Cart</button> */}

      {/* <button onClick={() => navigate("/profile")}>Go to Profile</button> */}


      <div id="Map" >
      <MapComponent
        
        latitude={restaurant.location.latitude}
        longitude={restaurant.location.longitude}
        restaurantName={restaurant.name}
        description={restaurant.description}
      />
      </div>

    </div>
    {/* <div id="footer">
        <div id ="footerLogo">
    
        <img id="LOGO2" src={LOGO2} alt="" />
        <img id="playstore" src={playstore} alt="" />
           
        <p>Company # 490039-445, Registered with</p>
        <p>House of companies.</p>
        
    </div>  
    <div class="wrapper">
            <p>Get Exclusive Deals in Your Inbox</p>
            <input type="email" placeholder="yourmail@gmail.com" />
            <button>Subscribe</button>
            <p id="social-media">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={snapchat} alt="" />
            <img src={tiktok} alt="" />
            </p>
        </div>
    <div>
        <p>Legal Pages</p>
        <a href="#">Terms and Conditions</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Privacy Policy</a>
    </div>
    <div>
        <p>Important Links</p>
        <a href="#">Add your Restraunt</a>
        <a href="#">Sign up to deliver</a>
        <a href="#">Create a business account</a>
    </div>
    </div> */}
    {/* <div id="footer">
    <div id ="footerLogo">
        
        <img id="LOGO2" src={LOGO2} alt="" />
        <img id="playstore" src={playstore} alt="" />
        
        <p>Company # 490039-445, Registered with</p>
        <p>House of companies.</p>
        
    </div>
    <div class="wrapper">
        <p>Get Exclusive Deals in Your Inbox</p>
        <input type="email" placeholder="yourmail@gmail.com" />
        <button>Subscribe</button>
        <p id="social-media">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={snapchat} alt="" />
            <img src={tiktok} alt="" />
        </p>
    </div>
    <div>
        <p>Legal Pages</p>
        <a href="#">Terms and Conditions</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Privacy Policy</a>
    </div>
    <div>
        <p>Important Links</p>
        <a href="#">Add your Restraunt</a>
        <a href="#">Sign up to deliver</a>
        <a href="#">Create a business account</a>
    </div>
    </div> */}
    </>
  );
};

export default RestaurantPage;

