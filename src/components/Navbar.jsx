import React, { useState } from "react";
import { GrRestaurant } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar({isLoggedIn, setIsLoggedIn}) {
  const navigate = useNavigate();
  

  function handleLogout() {
    setIsLoggedIn(false); 
    localStorage.removeItem("authToken");
    navigate("/"); 
  }

  function goToHome() {
    navigate("/");
  }

  return (
    <nav className="flex items-center justify-between  p-4 shadow">
      {/* Logo/Brand */}
      <div className="flex items-center">
        <div className="text-zinc-50 font-bold text-xl mr-1 cursor-pointer">
          <span>
            <GrRestaurant size={35} />
          </span>
        </div>
        <div className="flex space-x-6">
          <a
            onClick={goToHome}
            href="#"
            className="text-zinc-50 text-xl font-semibold"
          >
            FoodFable
          </a>
        </div>
      </div>

      {/* Search and Profile */}
      <div className="flex items-center space-x-4">
        <div className="relative flex gap-4">
          <form action="">
            <input
              type="text"
              className="border rounded-md p-1 pl-2 pr-10 text-zinc-100"
              placeholder="Search"
            />
            <button>
              <span className="absolute left-50 top-2 cursor-pointer text-gray-900">
                <IoSearchOutline size={20} />
              </span>
            </button>
          </form>

          {/* Conditional Rendering */}
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => navigate("/user/signup")}
                className="px-4 py-1 bg-zinc-100 rounded-md text-zinc-900 font-semibold hover:bg-zinc-300 cursor-pointer"
              >
                Signup
              </button>

              <button
                onClick={() => navigate("/user/signin")}
                className="px-4 py-1 bg-[#171717] rounded-md text-white font-semibold hover:bg-zinc-800 cursor-pointer"
              >
                Login
              </button>
              
            </>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="px-4 py-1 bg-red-600 rounded-md text-white font-semibold hover:bg-red-500 cursor-pointer"
              >
                Logout
              </button>
              <button
                onClick={() => navigate("/restaurant/dashboard")}
                className="px-4 py-1 bg-zinc-800 rounded-md text-white font-semibold hover:bg-zinc-700 cursor-pointer"
              >
                Dashboard
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
