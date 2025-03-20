import toast, { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/user/signup' element={<Signup/>} />
          <Route path='/user/signin' element={<Login/>} />
          <Route path='/restaurantOwner/signup' element={<Signup/>} />
          <Route path='/restaurantOwner/signin' element={<Login/>} />
        </Routes>

      
      <Toaster />
    </>
  )
}

export default App
