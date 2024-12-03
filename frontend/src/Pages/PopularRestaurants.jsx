import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";  // Import Link component from react-router-dom
import MapComponent from "./map.jsx";  // Import the MapComponent
import './Home.css'

import STAR from "../assets/star.png"
import LOCATION from "../assets/Location.png"
import CART from "../assets/Group59.png"
import LOGO from "../assets/LOGO 1.png"
import LOGIN from "../assets/Login.png"
import HOME1 from "../assets/Homebigimage.png"
import IMG1 from "../assets/Homeimg1.png"
import IMG2 from "../assets/Homeimg2.png"
import IMG3 from "../assets/Homeimg3.png"
import GROUP1 from "../assets/Group1.png"
import GROUP2 from "../assets/Group2.png"
// import IMG4 from "../assets/Homeimg4.pmg"
import LOGO2 from "../assets/LOGO2.png"
import playstore from "../assets/Playtstore.png"
import facebook from "../assets/Facebook.png"
import instagram from "../assets/Instagram.png"
import snapchat from "../assets/Snapchat.png"
import tiktok from "../assets/TikTok.png"
// import MCD from "../assets/MacD.png"
// import PAPAJ from "../assets/papajohns.png"
// import BK from "../assets/BurgerKing.png"
// import Texas from "../assets/Texas.png"
// import KFC from "../assets/KFC.png"
// import SHAURMA from "../assets/shaurma.png"

const PopularRestaurants = () => {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null); // Store the clicked restaurant

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/restaurants", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("Fetched Restaurants:", response.data);
        setRestaurants(response.data);
      })
      .catch((err) => {
        console.error("Error fetching restaurants:", err);
      });
  }, []);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant); // Update state with clicked restaurant
  };

  return (
    <>
    <div id="website-body" >
    <div id="header" >

      <div class="offer" >
        <img class="offer-img" src={STAR} alt="star" />
        <label class="offer" >Get 5% Off first order, <p style={{color:"#FC8A06"}} >Promo:ORDER5 </p></label>
      </div>

      <div class="location" >
        <img class="offer-location" src={LOCATION} alt="Location" />
        <label class="location" >Regent Street, A4, A4201, London <p style={{color:"#FC8A06"}}  >Change Location</p> </label>
      </div>

      <img src={CART} alt="cart" 
 onClick={() => navigate("/cart")}
/>

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
    </div>

    <div id="big-image" >
      <div id ="big-image-left">
          <p>Order Restaurant food, takeaway and groceries.</p>
          <label class="big-image-text">Feast Your Senses,</label>
          <label class="big-image-text" style={{color:"#FC8A06"}} >Fast and Fresh</label>
          <p>Enter a postcode to see what we deliver</p>
          <div id="wrapper" >
            <input id="big-image-input" type="text" />
            <button id="big-image-button" >Search</button>
          </div>
      </div>

      <img id="HOME1" src={HOME1} alt="kuch bhi" />
    </div>
    <div>
      <h2>Popular Restaurants</h2>
      <div id="restaurant-list">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id}>
            <Link to={`/restaurant/${restaurant._id}`} onClick={() => handleRestaurantClick(restaurant)}>
              <img src={restaurant.imageURL} alt={restaurant.name} />
              {/* <img src={restaurant.imageUrl || MCD } alt={restaurant.name} /> */}
              {/* <img src={restaurant.imageUrl ||  PAPAJ } alt={restaurant.name} /> */}
              {/* <img src={restaurant.imageUrl ||  BK } alt={restaurant.name} /> */}
              {/* <img src={restaurant.imageUrl || Texas  } alt={restaurant.name} /> */}
              {/* <img src={restaurant.imageUrl ||  KFC } alt={restaurant.name} /> */}
              {/* <img src={restaurant.imageUrl || SHAURMA  } alt={restaurant.name} /> */}
              <h3>{restaurant.name}</h3>
              {/* <p>{restaurant.description}</p> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
    <img id="IMG1" src={IMG1} />
    <img id="IMG2" src={IMG2} />
    <img id="IMG3" src={IMG3} />
    <div id="Group" >
        <img src={GROUP1} />
        <img src={GROUP2} />
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
    </div>


    

    
  


    

    </>
  );
};

export default PopularRestaurants;

