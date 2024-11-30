import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import MapComponent from "./map.jsx";

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
      .get(`http://localhost:3000/api/restaurants/${id}`) // Fetch restaurant by ID
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
    <div>
      <h1>{restaurant.name}</h1>
      <p>{restaurant.description}</p>
      <img src={restaurant.imageUrl} alt={restaurant.name} />

      {/* Map Component */}
      <MapComponent
        latitude={restaurant.location.latitude}
        longitude={restaurant.location.longitude}
        restaurantName={restaurant.name}
        description={restaurant.description}
      />

      <h2>Dishes</h2>
      <ul>
        {restaurant.dishes.map((dish, index) => (
          <li key={index}
          onClick={() => handleDishClick(dish)}
          style={{ cursor: "pointer" }}
          >
            {dish.name} - ${dish.price.toFixed(2)}
          </li>
        ))}
      </ul>

      {/* Cart Section */}
      <button onClick={() => navigate("/cart")}>Go to Cart</button>

      <button onClick={() => navigate("/profile")}>Go to Profile</button>

    </div>
  );
};

export default RestaurantPage;






















// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";  // Import useParams to access route parameters
// import axios from "axios";
// import MapComponent from "./map.jsx";  // Import the MapComponent

// const RestaurantPage = () => {
//   const { id } = useParams(); // Get restaurant ID from URL
//   const [restaurant, setRestaurant] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/api/restaurants/${id}`) // Fetch restaurant by ID
//       .then((response) => {
//         setRestaurant(response.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching restaurant:", err);
//         setError("Failed to fetch restaurant.");
//       });
//   }, [id]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!restaurant) {
//     return <div>Loading restaurant details...</div>;
//   }

//   const handleDishClick =()=>{

//   } 

//   return (
//     <div>
//       <h1>{restaurant.name}</h1>
//       <p>{restaurant.description}</p>
//       <img src={restaurant.imageUrl} alt={restaurant.name} />
      
      
//       <MapComponent
//         latitude={restaurant.location.latitude} 
//         longitude={restaurant.location.longitude}  
//         restaurantName={restaurant.name}
//         description={restaurant.description}
//       />

//       <h2>Dishes</h2>
//       <ul>
//         {restaurant.dishes.map((dish, index) => (
//           <li key={index} onClick={()=>handleDishClick()}>
//             {dish.name} - ${dish.price.toFixed(2)}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default RestaurantPage;

