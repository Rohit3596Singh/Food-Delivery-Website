import React, { useState, useEffect } from "react";
import axios from "axios";

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
        axios.get("http://localhost:3000/profile/get-cards", { params: { email: storedEmail } })
            .then((response) => setCards(response.data.cards))
            .catch((error) => console.error("Error fetching cards:", error));
    }, []);

    const handleSaveProfile = async () => {
        try {
            await axios.put("http://localhost:3000/profile/update-profile", {
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
            await axios.post("http://localhost:3000/profile/add-card", {
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
        <div>
            <h1>Edit Profile</h1>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} disabled />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} disabled />
                </label>
                <br />
                <label>
                    Gender:
                    <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                </label>
                <br />
                <label>
                    Country:
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                </label>
                <br />
                <button type="button" onClick={handleSaveProfile}>Save</button>
            </form>

            <h2>Add Card</h2>
            <form>
                <label>
                    Card Number:
                    <input
                        type="text"
                        value={cardDetails.CardNumber}
                        onChange={(e) => setCardDetails({ ...cardDetails, CardNumber: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Expiration:
                    <input
                        type="text"
                        value={cardDetails.Expiration}
                        onChange={(e) => setCardDetails({ ...cardDetails, Expiration: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    CCV:
                    <input
                        type="text"
                        value={cardDetails.CCV}
                        onChange={(e) => setCardDetails({ ...cardDetails, CCV: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Name on Card:
                    <input
                        type="text"
                        value={cardDetails.NameonCard}
                        onChange={(e) => setCardDetails({ ...cardDetails, NameonCard: e.target.value })}
                    />
                </label>
                <br />
                <button type="button" onClick={handleAddCard}>Add Card</button>
            </form>
        </div>
    );
};

export default EditProfile;




















// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const EditProfile = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [gender, setGender] = useState("");
//     const [country, setCountry] = useState("");

//     // Load user details from localStorage
//     useEffect(() => {
//         const storedName = localStorage.getItem("name");
//         const storedEmail = localStorage.getItem("email");
//         const storedGender = localStorage.getItem("gender");
//         const storedCountry = localStorage.getItem("country");

//         if (storedName) setName(storedName);
//         if (storedEmail) setEmail(storedEmail);
//         if (storedGender) setGender(storedGender);
//         if (storedCountry) setCountry(storedCountry);
//     }, []);

//     const handleSave = async () => {
//         try {
//             const response = await axios.put("http://localhost:3000/profile/update-profile", {
//                 email,
//                 gender,
//                 country,
//             });

//             if (response.data.success) {
//                 alert(response.data.message);

//                 // Update gender and country in localStorage
//                 localStorage.setItem("gender", gender);
//                 localStorage.setItem("country", country);
//             } else {
//                 alert("Failed to update profile.");
//             }
//         } catch (error) {
//             console.error("Error updating profile:", error);
//             alert("Failed to update profile. Please try again.");
//         }
//     };

//     return (
//         <div>
//             <h1>Profile</h1>
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
//                     <input
//                         type="text"
//                         value={gender}
//                         onChange={(e) => setGender(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Country:
//                     <input
//                         type="text"
//                         value={country}
//                         onChange={(e) => setCountry(e.target.value)}
//                     />
//                 </label>
//                 <br />
//                 <button type="button" onClick={handleSave}>
//                     Save
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default EditProfile;