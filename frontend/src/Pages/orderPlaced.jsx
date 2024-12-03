// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import "./OrderPlaced.css"

// import STAR from "../assets/star.png"
// import LOCATION from "../assets/Location.png"
// import CART from "../assets/Group59.png"
// import LOGO from "../assets/LOGO 1.png"
// import LOGIN from "../assets/Login.png"

// import Successfully from "../assets/Content.png"
// import backtoHOME from "../assets/Frame 113.png"

// function OrderPlaced() {
//   const navigate = useNavigate();

//   return (
//     <>
//       <div id="header">
//         <div className="offer">
//           <img className="offer-img" src={STAR} alt="star" />
//           <label className="offer">
//             Get 5% Off first order, 
//             <p style={{ color: "#FC8A06" }}>Promo: ORDER5</p>
//           </label>
//         </div>

//         <div className="location">
//           <img className="offer-location" src={LOCATION} alt="Location" />
//           <label className="location">
//             Regent Street, A4, A4201, London 
//             <p style={{ color: "#FC8A06" }}>Change Location</p>
//           </label>
//         </div>

//         <img
//           src={CART}
//           alt="cart"
//           onClick={() => navigate("/cart")}
//         />
//       </div>

//       <div id="navbar">
//         <img src={LOGO} alt="logo" />

//         <button id="navbar-btn">Home</button>
//         <p>Browser Menu</p>
//         <p>Special Offer</p>
//         <p>Restaurants</p>
//         <p>Track Order</p>

//         <img
//           src={LOGIN}
//           alt="login"
//           onClick={() => navigate("/profile")}
//         /> 
//       </div>

//       <div id="successfull" >
//           <img src={Successfully} alt="order placed successfully" />
//           <img src={backtoHOME} 
//           onClick={() => navigate("/home")}
//           alt="Back to Home" />
//       </div>

//       <div id="footer">
//         <div id ="footerLogo">
    
//         <img id="LOGO2" src={LOGO2} alt="" />
//         <img id="playstore" src={playstore} alt="" />
           
//         <p>Company # 490039-445, Registered with</p>
//         <p>House of companies.</p>
        
//         </div>  
//     <div class="wrapper">
//             <p>Get Exclusive Deals in Your Inbox</p>
//             <input type="email" placeholder="yourmail@gmail.com" />
//             <button>Subscribe</button>
//             <p id="social-media">
//             <img src={facebook} alt="" />
//             <img src={instagram} alt="" />
//             <img src={snapchat} alt="" />
//             <img src={tiktok} alt="" />
//             </p>
//         </div>
//     <div>
//         <p>Legal Pages</p>
//         <a href="#">Terms and Conditions</a>
//         <a href="#">Cookie Policy</a>
//         <a href="#">Privacy Policy</a>
//     </div>
//     <div>
//         <p>Important Links</p>
//         <a href="#">Add your Restraunt</a>
//         <a href="#">Sign up to deliver</a>
//         <a href="#">Create a business account</a>
//     </div>
    
//     <div id="footer">
//     <div id ="footerLogo">
        
//         <img id="LOGO2" src={LOGO2} alt="" />
//         <img id="playstore" src={playstore} alt="" />
        
//         <p>Company # 490039-445, Registered with</p>
//         <p>House of companies.</p>
        
//     </div>
//     <div class="wrapper">
//         <p>Get Exclusive Deals in Your Inbox</p>
//         <input type="email" placeholder="yourmail@gmail.com" />
//         <button>Subscribe</button>
//         <p id="social-media">
//             <img src={facebook} alt="" />
//             <img src={instagram} alt="" />
//             <img src={snapchat} alt="" />
//             <img src={tiktok} alt="" />
//         </p>
//     </div>
//     <div>
//         <p>Legal Pages</p>
//         <a href="#">Terms and Conditions</a>
//         <a href="#">Cookie Policy</a>
//         <a href="#">Privacy Policy</a>
//     </div>
//     <div>
//         <p>Important Links</p>
//         <a href="#">Add your Restraunt</a>
//         <a href="#">Sign up to deliver</a>
//         <a href="#">Create a business account</a>
//     </div>
//     </div>
      
//     </>
//   );
// }

// export default OrderPlaced;


































import React from 'react';
import { useNavigate } from "react-router-dom";
import "./OrderPlaced.css";

import STAR from "../assets/star.png";
import LOCATION from "../assets/Location.png";
import CART from "../assets/Group59.png";
import LOGO from "../assets/LOGO 1.png";
import LOGIN from "../assets/Login.png";



import LOGO2 from "../assets/LOGO2.png";
import playstore from "../assets/Playtstore.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import snapchat from "../assets/Snapchat.png";
import tiktok from "../assets/TikTok.png";

import Successfully from "../assets/Content.png";
import backtoHOME from "../assets/Frame 113.png";


function OrderPlaced() {
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
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

      {/* Success Message */}
      <div id="successful">
        <img src={Successfully} alt="Order placed successfully" />
        <img
          src={backtoHOME}
          alt="Back to Home"
          onClick={() => navigate("/home")}
          className="clickable"
        />
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
}

export default OrderPlaced;

