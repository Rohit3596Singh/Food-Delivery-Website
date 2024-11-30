// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const PopularRestaurants = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//     axios.get("http://localhost:3000/api/restaurants", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     })
//       .then((response) => {
//         console.log("Fetched Restaurants:", response.data);
//         setRestaurants(response.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching restaurants:", err);
//         setError("Failed to fetch restaurants.");
//       });
//   }, []);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (restaurants.length === 0) {
//     return <div>Loading restaurants...</div>;
//   }

//   return (
//     <div>
//       <h2>Popular Restaurants</h2>
//       <div className="restaurant-list">
//         {restaurants.map((restaurant) => (
//           <div key={restaurant._id}>
//             <Link to={`/restaurant/${restaurant._id}`}>
//               <img src={restaurant.imageUrl} alt={restaurant.name} />
//               <h3>{restaurant.name}</h3>
//               <p>{restaurant.description}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularRestaurants;


















import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";  // Import Link component from react-router-dom
import MapComponent from "./map.jsx";  // Import the MapComponent

const PopularRestaurants = () => {
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
    <div>
      <h2>Popular Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id}>
            <Link to={`/restaurant/${restaurant._id}`} onClick={() => handleRestaurantClick(restaurant)}>
              <img src={restaurant.imageUrl} alt={restaurant.name} />
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRestaurants;

