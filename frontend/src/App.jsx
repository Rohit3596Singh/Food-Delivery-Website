import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'


import Signup from "./Pages/Signup.jsx"
import Login from "./Pages/Login.jsx"
import Home from "./Pages/Home.jsx"
import PopularRestaurants from './Pages/PopularRestaurants.jsx'
import RestaurantDetails from './Pages/RestaurantDetails.jsx'
import Cart from "./Pages/Cart.jsx"
import CheckoutPage from "./Pages/CheckoutPage.jsx";
import AddressPage from "./Pages/AddressForm.jsx";
// import Profile from "./Pages/Profile.jsx"
import ViewProfile from "./Pages/Profile.jsx"
import EditProfile from "./Pages/EditProfile.jsx"
import OrderPlaced from "./Pages/orderPlaced.jsx"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {/* <Route path="/home" element={<Home/>} /> */}
          <Route path="/home" element={<PopularRestaurants/>} />
          <Route path="/restaurant/:id" element={<RestaurantDetails/>} />
          <Route path="/cart/:id" element={<Cart/>} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/profile" element={<ViewProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/orderPlaced" element={<OrderPlaced />} />

        </Routes>
        
      </div>
    </>
  )
}

export default App
