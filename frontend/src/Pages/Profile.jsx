import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css"
// import "./EditProfile.jsx"

import STAR from "../assets/star.png";
import LOCATION from "../assets/Location.png";
import CART from "../assets/Group59.png";
import LOGO from "../assets/LOGO 1.png";
import LOGIN from "../assets/Login.png";



import LOGO2 from "../assets/LOGO2.png";
import playstore from "../assets/Playtstore.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import snapchat from "../assets/snapchat.png";
import tiktok from "../assets/tiktok.png";


const ViewProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [cards, setCards] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch stored profile data from localStorage
        const storedName = localStorage.getItem("name");
        const storedEmail = localStorage.getItem("email");
        const storedGender = localStorage.getItem("gender");
        const storedCountry = localStorage.getItem("country");

        if (storedName) setName(storedName);
        if (storedEmail) setEmail(storedEmail);
        if (storedGender) setGender(storedGender);
        if (storedCountry) setCountry(storedCountry);

        // Fetch cards associated with the user's email
        if (storedEmail) {
            axios
                .get("http://localhost:3000/credential/get-cards", { params: { email: storedEmail } })
                .then((response) => {
                    setCards(response.data.cards);
                })
                .catch((error) => {
                    console.error("Error fetching cards:", error);
                });
        }
    }, []);

    const handleEdit = () => {
        navigate("/edit-profile");
    };

    const handleAddCard = () => {
        const card = {
            CardNumber: "1234 5678 9012 3456",
            Expiration: "12/25",
            NameonCard: "John Doe"
        };

        axios
            .post("http://localhost:3000/bank/add-card", { email, card })
            .then((response) => {
                console.log(response.data.message);
                // Refresh card list
                setCards((prevCards) => [...prevCards, card]);
            })
            .catch((error) => {
                console.error("Error adding card:", error);
            });
    };

    return (
        <>

<div id="header">
        <div className="offer">
          <img className="offer-img" src={STAR} alt="star" />
          <label className="offer">
            Get 5% Off first order, 
            <p style={{ color: "#FC8A06" }}>Promo: ORDER5</p>
          </label>
        </div>

        <div className="location">
          <img className="offer-location" src={LOCATION} alt="Location" />
          <label className="location">
            Regent Street, A4, A4201, London 
            <p style={{ color: "#FC8A06" }}>Change Location</p>
          </label>
        </div>

        <img
          src={CART}
          alt="cart"
          onClick={() => navigate("/cart")}
          className="clickable"
        />
      </div>

      {/* Navbar */}
      <div id="navbar">
        <img src={LOGO} alt="logo" />

        <button id="navbar-btn" onClick={() => navigate("/home")}>Home</button>
        <p>Browse Menu</p>
        <p>Special Offer</p>
        <p>Restaurants</p>
        <p>Track Order</p>

        <img
          src={LOGIN}
          alt="login"
          onClick={() => navigate("/profile")}
          className="clickable"
        /> 
      </div>

      <div id="profile-container">
    <h1>Profile</h1>
    <p className="profile-info">
        <strong>Name:</strong> {name}
    </p>
    <p className="profile-info">
        <strong>Email:</strong> {email}
    </p>
    <p className="profile-info">
        <strong>Gender:</strong> {gender}
    </p>
    <p className="profile-info">
        <strong>Country:</strong> {country}
    </p>

    <button onClick={handleEdit}>Edit Profile</button>
    {/* <button onClick={handleAddCard}>Add Card</button> */}
</div>

<div id="cards-container">
    <h2>Saved Cards</h2>
    {cards.length > 0 ? (
        cards.slice(0, 3).map((card, index) => (
            <div className="card" key={index}>
                <p>
                    <strong>Card Number:</strong> {card.CardNumber}
                </p>
                <p>
                    <strong>Expiration:</strong> {card.Expiration}
                </p>
                <p>
                    <strong>Name on Card:</strong> {card.NameonCard}
                </p>
                <hr />
            </div>
        ))
    ) : (
        <p>No cards added yet.</p>
    )}
</div>



            {/* Footer */}
        <div id="footer">
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
    </div>

        </>
    );
};

export default ViewProfile;
