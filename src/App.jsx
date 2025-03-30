import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import RestaurantDetail from './components/RestaurantDetail';
import Dashboard from './components/Dashboard';
import AddRestaurant from './components/AddRestaurant';
import { useState } from 'react';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user/signup' element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/user/signin' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/restaurant" element={<Home />} />
          <Route path='/restaurant/:id' element={<RestaurantDetail />}/>
          <Route path="/restaurant/dashboard" element={<Dashboard />} />
          <Route path="/restaurant/new" element={<AddRestaurant/>} />
        </Routes>

    <Footer/>
      <Toaster />
    </>
  )
}

export default App
