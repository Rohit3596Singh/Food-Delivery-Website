import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestaurantPage = () => {
  const { id } = useParams(); // Get restaurant ID from URL
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState(null);

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
      <h2>Dishes</h2>
      <ul>
        {restaurant.dishes.map((dish, index) => (
          <li key={index}>
            {dish.name} - ${dish.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantPage;
