import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewProfile = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState("");
    const [cards, setCards] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const storedName = localStorage.getItem("name");
        const storedEmail = localStorage.getItem("email");
        const storedGender = localStorage.getItem("gender");
        const storedCountry = localStorage.getItem("country");

        if (storedName) setName(storedName);
        if (storedEmail) setEmail(storedEmail);
        if (storedGender) setGender(storedGender);
        if (storedCountry) setCountry(storedCountry);

        // Fetch cards from the database
        axios.get("http://localhost:3000/profile/get-cards", { params: { email: storedEmail } })
            .then((response) => setCards(response.data.cards))
            .catch((error) => console.error("Error fetching cards:", error));
    }, []);

    const handleEdit = () => {
        navigate("/edit-profile");
    };

    return (
        <div>
            <h1>Profile</h1>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Country:</strong> {country}</p>

            <h2>Saved Cards</h2>
            {cards.length > 0 ? (
                cards.map((card, index) => (
                    <div key={index}>
                        <p><strong>Card Number:</strong> {card.CardNumber}</p>
                        <p><strong>Expiration:</strong> {card.Expiration}</p>
                        <p><strong>Name on Card:</strong> {card.NameonCard}</p>
                        <hr />
                    </div>
                ))
            ) : (
                <p>No cards added yet.</p>
            )}
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
};

export default ViewProfile;

























// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ViewProfile = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [gender, setGender] = useState("");
//     const [country, setCountry] = useState("");

//     const navigate = useNavigate();

//     useEffect(() => {
//         // Load user details from localStorage
//         const storedName = localStorage.getItem("name");
//         const storedEmail = localStorage.getItem("email");
//         const storedGender = localStorage.getItem("gender");
//         const storedCountry = localStorage.getItem("country");

//         if (storedName) setName(storedName);
//         if (storedEmail) setEmail(storedEmail);
//         if (storedGender) setGender(storedGender);
//         if (storedCountry) setCountry(storedCountry);
//     }, []);

//     const handleEdit = () => {
//         navigate("/edit-profile");
//     };

//     return (
//         <div>
//             <h1>Profile</h1>
//             <p><strong>Name:</strong> {name}</p>
//             <p><strong>Email:</strong> {email}</p>
//             <p><strong>Gender:</strong> {gender}</p>
//             <p><strong>Country:</strong> {country}</p>
//             <button onClick={handleEdit}>Edit</button>
//         </div>
//     );
// };

// export default ViewProfile;
