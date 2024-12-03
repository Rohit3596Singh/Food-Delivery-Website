// import React, { useState, useEffect } from "react";
// import axios from "axios";


// import STAR from "../assets/star.png";
// import LOCATION from "../assets/Location.png";
// import CART from "../assets/Group59.png";
// import LOGO from "../assets/LOGO 1.png";
// import LOGIN from "../assets/Login.png";



// import LOGO2 from "../assets/LOGO2.png";
// import playstore from "../assets/Playtstore.png";
// import facebook from "../assets/facebook.png";
// import instagram from "../assets/instagram.png";
// import snapchat from "../assets/snapchat.png";
// import tiktok from "../assets/tiktok.png";


// const EditProfile = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [gender, setGender] = useState("");
//     const [country, setCountry] = useState("");
//     const [cardDetails, setCardDetails] = useState({
//         CardNumber: "",
//         Expiration: "",
//         CCV: "",
//         NameonCard: "",
//     });

//     const [cards, setCards] = useState([]);

//     useEffect(() => {
//         const storedName = localStorage.getItem("name");
//         const storedEmail = localStorage.getItem("email");
//         const storedGender = localStorage.getItem("gender");
//         const storedCountry = localStorage.getItem("country");

//         if (storedName) setName(storedName);
//         if (storedEmail) setEmail(storedEmail);
//         if (storedGender) setGender(storedGender);
//         if (storedCountry) setCountry(storedCountry);

//         // Fetch saved cards
//         axios.get("http://localhost:3000/bank/get-card", { params: { email: storedEmail } })
//             .then((response) => setCards(response.data.cards))
//             .catch((error) => console.error("Error fetching cards:", error));
//     }, []);

//     const handleSaveProfile = async () => {
//         try {
//             await axios.put("http://localhost:3000/profile/update-profile", {
//                 email,
//                 gender,
//                 country,
//             });
//             localStorage.setItem("gender", gender);
//             localStorage.setItem("country", country);
//             alert("Profile updated successfully.");
//         } catch (error) {
//             console.error("Error updating profile:", error);
//             alert("Failed to update profile.");
//         }
//     };

//     const handleAddCard = async () => {
//         try {
//             await axios.post("http://localhost:3000/bank/add-card", {
//                 email,
//                 card: cardDetails,
//             });
//             alert("Card added successfully.");
//             setCards([...cards, cardDetails]);
//             setCardDetails({
//                 CardNumber: "",
//                 Expiration: "",
//                 CCV: "",
//                 NameonCard: "",
//             });
//         } catch (error) {
//             console.error("Error adding card:", error);
//             alert("Failed to add card.");
//         }
//     };

//     return (
//     <>
//         <div id="header">
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
//           className="clickable"
//         />
//       </div>

//       {/* Navbar */}
//       <div id="navbar">
//         <img src={LOGO} alt="logo" />

//         <button id="navbar-btn" onClick={() => navigate("/home")}>Home</button>
//         <p>Browse Menu</p>
//         <p>Special Offer</p>
//         <p>Restaurants</p>
//         <p>Track Order</p>

//         <img
//           src={LOGIN}
//           alt="login"
//           onClick={() => navigate("/profile")}
//           className="clickable"
//         /> 
//       </div>

//         <div>
//             <h1>Edit Profile</h1>
//             <form>
//                 <label>
//                     Name:
//                     <input type="text" value={name} disabled />
//                 </label>
//                 <br />
//                 <label>
//                     Email:
//                     <input type="email" value={email} disabled />
//                 </label>
//                 <br />
//                 <label>
//                     Gender:
//                     <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
//                 </label>
//                 <br />
//                 <label>
//                     Country:
//                     <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
//                 </label>
//                 <br />
//                 <button type="button" onClick={handleSaveProfile}>Save</button>
//             </form>

//             <h2>Add Card</h2>
//             <form>
//                 <label>
//                     Card Number:
//                     <input
//                         type="text"
//                         value={cardDetails.CardNumber}
//                         onChange={(e) => setCardDetails({ ...cardDetails, CardNumber: e.target.value })}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Expiration:
//                     <input
//                         type="text"
//                         value={cardDetails.Expiration}
//                         onChange={(e) => setCardDetails({ ...cardDetails, Expiration: e.target.value })}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     CCV:
//                     <input
//                         type="text"
//                         value={cardDetails.CCV}
//                         onChange={(e) => setCardDetails({ ...cardDetails, CCV: e.target.value })}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Name on Card:
//                     <input
//                         type="text"
//                         value={cardDetails.NameonCard}
//                         onChange={(e) => setCardDetails({ ...cardDetails, NameonCard: e.target.value })}
//                     />
//                 </label>
//                 <br />
//                 <button type="button" onClick={handleAddCard}>Add Card</button>
//             </form>
//         </div>

//             {/* Footer */}
//             <div id="footer">
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

//         </>
//     );
// };

// export default EditProfile;








































import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditProfile.css";


import STAR from "../assets/star.png";
import LOCATION from "../assets/Location.png";
import CART from "../assets/Group59.png";
import LOGO from "../assets/LOGO 1.png";
import LOGIN from "../assets/Login.png";



import LOGO2 from "../assets/LOGO2.png";
import playstore from "../assets/Playtstore.png";
import facebook from "../assets/Facebook.png";
import instagram from "../assets/instagram.png";
import snapchat from "../assets/snapchat.png";
import tiktok from "../assets/tiktok.png";


const EditProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [cardDetails, setCardDetails] = useState({
        CardNumber: "",
        Expiration: "",
        CCV: "",
        NameonCard: "",
    });

    const [cards, setCards] = useState([]);

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        const storedEmail = localStorage.getItem("email");
        const storedGender = localStorage.getItem("gender");
        const storedCountry = localStorage.getItem("country");

        if (storedName) setName(storedName);
        if (storedEmail) setEmail(storedEmail);
        if (storedGender) setGender(storedGender);
        if (storedCountry) setCountry(storedCountry);

        // Fetch saved cards
        axios.get("https://food-delivery-website-1-tobh.onrender.com/bank/get-card", { params: { email: storedEmail } })
            .then((response) => setCards(response.data.cards))
            .catch((error) => console.error("Error fetching cards:", error));
    }, []);

    const handleSaveProfile = async () => {
        try {
            await axios.put("https://food-delivery-website-1-tobh.onrender.com/profile/update-profile", {
                email,
                gender,
                country,
            });
            localStorage.setItem("gender", gender);
            localStorage.setItem("country", country);
            alert("Profile updated successfully.");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Failed to update profile.");
        }
    };

    const handleAddCard = async () => {
        try {
            await axios.post("https://food-delivery-website-1-tobh.onrender.com/bank/add-card", {
                email,
                card: cardDetails,
            });
            alert("Card added successfully.");
            setCards([...cards, cardDetails]);
            setCardDetails({
                CardNumber: "",
                Expiration: "",
                CCV: "",
                NameonCard: "",
            });
        } catch (error) {
            console.error("Error adding card:", error);
            alert("Failed to add card.");
        }
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

      <div id="edit-profile-container">
    <h1>Profile Management</h1>
    <div className="content-wrapper">
        <div className="profile-section">
            <h2>Edit Profile</h2>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} disabled />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} disabled />
                </label>
                <label>
                    Gender:
                    <input
                        type="text"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                </label>
                <label>
                    Country:
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleSaveProfile}>
                    Save
                </button>
            </form>
        </div>

        <div className="card-section">
            <h2>Add Card</h2>
            <form>
                <label>
                    Card Number:
                    <input
                        type="text"
                        value={cardDetails.CardNumber}
                        onChange={(e) =>
                            setCardDetails({ ...cardDetails, CardNumber: e.target.value })
                        }
                    />
                </label>
                <label>
                    Expiration:
                    <input
                        type="text"
                        value={cardDetails.Expiration}
                        onChange={(e) =>
                            setCardDetails({ ...cardDetails, Expiration: e.target.value })
                        }
                    />
                </label>
                <label>
                    CCV:
                    <input
                        type="text"
                        value={cardDetails.CCV}
                        onChange={(e) =>
                            setCardDetails({ ...cardDetails, CCV: e.target.value })
                        }
                    />
                </label>
                <label>
                    Name on Card:
                    <input
                        type="text"
                        value={cardDetails.NameonCard}
                        onChange={(e) =>
                            setCardDetails({ ...cardDetails, NameonCard: e.target.value })
                        }
                    />
                </label>
                <button type="button" onClick={handleAddCard}>
                    Add Card
                </button>
            </form>
        </div>
    </div>
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

export default EditProfile;