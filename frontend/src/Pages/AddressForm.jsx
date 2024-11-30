import React, { useState, useEffect } from "react";

const AddressForm = () => {
  const [address, setAddress] = useState({
    userId: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    isDefault: false,
  });

  // Retrieve userId from localStorage when the component mounts
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setAddress((prev) => ({ ...prev, userId: storedUserId }));
    } else {
      alert("User ID not found. Please log in.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/address/addressform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(address),
      });

      if (response.ok) {
        alert("Address added successfully!");
      } else {
        alert("Failed to add address.");
      }
    } catch (error) {
      console.error("Error adding address:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Address</h1>
      <input
        type="text"
        name="addressLine1"
        placeholder="Address Line 1"
        value={address.addressLine1}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="addressLine2"
        placeholder="Address Line 2"
        value={address.addressLine2}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={address.city}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={address.state}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="zipCode"
        placeholder="Zip Code"
        value={address.zipCode}
        onChange={handleChange}
        required
      />
      <label>
        <input
          type="checkbox"
          name="isDefault"
          checked={address.isDefault}
          onChange={(e) =>
            setAddress((prev) => ({
              ...prev,
              isDefault: e.target.checked,
            }))
          }
        />
        Set as default address
      </label>
      <button type="submit">Save Address</button>
    </form>
  );
};

export default AddressForm;
