import React, { useEffect, useState } from 'react';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser")); // Use 'localStorage' with the correct casing
  }, []); // Add an empty dependency array to ensure it only runs once after the component mounts

  return (
    <div>
      <h1>
        {loggedInUser || "No user logged in"}
      </h1>
      <button onClick={() => {
        localStorage.removeItem("loggedInUser");
        setLoggedInUser("");
      }}>Logout</button>

    </div>
  );
}

export default Home;
