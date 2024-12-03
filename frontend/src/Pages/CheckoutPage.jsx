// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import STAR from "../assets/star.png"
// import LOCATION from "../assets/Location.png"
// import CART from "../assets/Group59.png"
// import LOGO from "../assets/LOGO 1.png"
// import LOGIN from "../assets/Login.png"
// import IMG1 from "../assets/Rectangle 11.png"

// import MCD from "../assets/MacD.png"
// import PAPAJ from "../assets/papajohns.png"
// import BK from "../assets/BurgerKing.png"
// import Texas from "../assets/Texas.png"
// import KFC from "../assets/KFC.png"
// import SHAURMA from "../assets/shaurma.png"

// import LOGO2 from "../assets/LOGO2.png"
// import intro from "../assets/Intro.png"
// import playstore from "../assets/Platstore.png"
// import facebook from "../assets/Facebook.png"
// import instagram from "../assets/Instagram.png"
// import snapchat from "../assets/Snapchat.png"
// import tiktok from "../assets/TikTok.png"


// const CheckoutPage = () => {
//   const [cart, setCart] = useState(() => {
//     const savedCart = localStorage.getItem("cart");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAddress = async () => {
//       const userId = localStorage.getItem("userId"); // Retrieve userId from localStorage

//       if (!userId) {
//         console.error("User ID not found");
//         return;
//       }

//       try {
//         const response = await fetch(`http://localhost:3000/api/address?userId=${userId}`);
//         const addressData = await response.json();

//         if (addressData.success) {
//           setSelectedAddress(addressData.defaultAddress || null);
//         } else {
//           console.error("No default address found.");
//         }
//       } catch (err) {
//         console.error("Error fetching address:", err);
//       }
//     };

//     fetchAddress();
//   }, []); // Corrected: Single useEffect hook

//   const calculateTotalPrice = () =>
//     cart.reduce((total, dish) => total + dish.price, 0);

//   const handleNavigateToAddress = () => {
//     navigate("/address"); // Navigate to Address page for adding/editing an address
//   };

//   const handlePlaceOrder = async () => {
//     try {
//       const orderData = { cart, address: selectedAddress };
//       const response = await fetch("http://localhost:3000/api/order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       if (response.ok) {
//         alert("Order placed successfully!");
//         setCart([]);
//         localStorage.removeItem("cart");
//         navigate("/order-confirmation");
//       } else {
//         alert("Failed to place the order.");
//       }
//     } catch (err) {
//       console.error("Error placing the order:", err);
//     }
//   };

//   return (
//     <div>
      
//       <div id="header" >
//       <div class="offer" >
//   <img class="offer-img" src={STAR} alt="star" />
//   <label class="offer" >Get 5% Off first order, <p style={{color:"#FC8A06"}} >Promo:ORDER5 </p></label>
// </div>

// <div class="location" >
//   <img class="offer-location" src={LOCATION} alt="Location" />
//   <label class="location" >Regent Street, A4, A4201, London <p style={{color:"#FC8A06"}}  >Change Location</p> </label>
// </div>

// <img src={CART} alt="cart" 
//  onClick={() => navigate("/cart")}
// />

// </div>

// <div id="navbar">
// <img src={LOGO} alt="logo" />

//   <button id="navbar-btn" >Home</button>
//   <p>Browser Menu</p>
//   <p>Special Offer</p>
//   <p>Restaurants</p>
//   <p>Track Order</p>

// <img src={LOGIN} alt="login"
// onClick={() => navigate("/profile")}
// />
//       </div>

//       <h2>Your Order Details</h2>

//       <div>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cart.map((dish, index) => (
            
//             <li key={index}>
//               <img src={IMG1} />
//               {dish.name} - ₹{dish.price.toFixed(2)}
//             </li>
//           ))}
//         </ul>
//       )}
//       <h3>Total: ₹{calculateTotalPrice().toFixed(2)}</h3>
//       </div>
      
//       <div>
//       <h2>Address</h2>
//       {selectedAddress ? (
//         <div>
//           <p>
//             {selectedAddress.addressLine1}, {selectedAddress.city},{" "}
//             {selectedAddress.state} - {selectedAddress.zipCode}
//           </p>
//           <button onClick={handleNavigateToAddress}>
//             Select or Edit Address
//           </button>
//         </div>
//       ) : (
//         <button onClick={handleNavigateToAddress}>
//           Add or Select Address
//         </button>
//       )}

//       <button
//         onClick={handlePlaceOrder}
//         disabled={cart.length === 0 || !selectedAddress}
//       >
//         Place Order
//       </button>
//       </div>

//       <div>
//         <h1>Similar Restaurants</h1>
//         <div>
//           <img src={MCD}/>
//           <img src={PAPAJ}/>
//           <img src={BK}/>
//           <img src={Texas}/>
//           <img src={KFC}/>
//           <img src={SHAURMA}/>
//         </div>
//       </div>
      
//       {/* <div id="footer">
//         <div id ="footerLogo">
    
//         <img id="LOGO2" src={LOGO2} alt="" />
//         <img id="playstore" src={playstore} alt="" />
            
//         <p>Company # 490039-445, Registered with</p>
//         <p>House of companies.</p>
        
//     </div>  
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
//     </div> */}

      
//     </div>
//   );
// };

// export default CheckoutPage;





























import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import MapComponent from "./map.jsx";
import AddressForm from "./AddressForm";
import "./Checkout.css"; // Ensure the modal styles are applied


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

import pizza from "../assets/Rectangle 11.png"

const CheckoutPage = () => {
  // const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddress = async () => {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        console.error("User ID not found");
        return;
      }

      try {
        const response = await fetch(
          `https://food-delivery-website-1-tobh.onrender.com/api/address?userId=${userId}`
        );
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
  }, []);

  const calculateTotalPrice = () =>
    cart.reduce((total, dish) => total + dish.price, 0);

  const handlePlaceOrder = async () => {
    try {
      const orderData = { cart, address: selectedAddress };
      const response = await fetch("https://food-delivery-website-1-tobh.onrender.com/api/order", {
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
    <>
    <div>

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

      {/* Modal Overlay */}
      <div className={isModalOpen ? "modal-overlay" : "hidden"}>
        <div className="modal">
          <AddressForm />
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </div>


      <div id ="OrderAndAddress">

      

      <div>
      <h2>Your Order Details</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            
            {cart.map((dish, index) => (
              <li key={index}>
                <img src={pizza} alt="pizza-image" />
                {dish.name} - ₹{dish.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ₹{calculateTotalPrice().toFixed(2)}</h3>
      </div>

      <div>
        <h2>Address</h2>
        <div id="BTNs">
        {selectedAddress ? (
          <div>
            <p>
              {selectedAddress.addressLine1}, {selectedAddress.city},{" "}
              {selectedAddress.state} - {selectedAddress.zipCode}
            </p>
            <button 
            id="Add-address"
            onClick={() => setIsModalOpen(true)}>
              {/* <img class="offer-location" src={LOCATION} alt="Location" /> */}
              Select or Edit Address
            </button>
          </div>
        ) : (
          
          <button 
          id="Add-address"
          
          onClick={() => setIsModalOpen(true)}> Add or Select Address</button>
        )}

        <button
        id="Place-Order"
          // onClick={handlePlaceOrder}
          // disabled={cart.length === 0 || !selectedAddress}
          onClick={() => navigate("/orderPlaced")}
        >
          Place Order
        </button>
        </div>
      </div>
      </div>

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

    </div>
    </>
  );
};

export default CheckoutPage;
