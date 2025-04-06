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
import { useContext, useState } from 'react';
import myImage from './assets/dark-bg1.jpg'
import { useEffect } from 'react';
import { AppContext } from './context/RestaurantData';

function App() {

  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);

  const token = localStorage.getItem("authToken");

  useEffect(()=>{
    if(token){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  }, [])
  
  
  return (
    <div className={`min-h-screen bg-cover bg-center `}
    style={{ backgroundImage: `url(${myImage})`,  backgroundAttachment: 'fixed' }}>
    <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user/signup' element={<Signup />} />
          <Route path='/user/signin' element={<Login />} />
          <Route path="/restaurant" element={<Home />} />
          <Route path='/restaurant/:id' element={<RestaurantDetail />}/>
          <Route path="/restaurant/dashboard" element={<Dashboard />} />
          <Route path="/restaurant/new" element={<AddRestaurant/>} />
        </Routes>

    {/* <Footer/> */}
      <Toaster />
    </div>
  )
}

export default App
