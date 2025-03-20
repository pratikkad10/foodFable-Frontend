import React from "react";
import { GrRestaurant } from "react-icons/gr";
import { IoSearchOutline } from "react-icons/io5";

function Navbar() {
  return  <nav className="flex items-center justify-between bg-zinc-200 p-4 shadow">
  {/* Logo/Brand */}
  <div className="flex items-center">
    <div className="text-blue-600 font-bold text-xl mr-4">
      <span><GrRestaurant /></span> {/* Placeholder for logo  */}
    </div>
    <div className="flex space-x-6">
      <a href="#" className="text-black text-xl font-semibold">FoodFable</a>
    </div>
  </div>
  {/* Search and Profile */}
  <div className="flex items-center space-x-4">
    <div className="relative">
      <input
        type="text"
        className="border rounded-md p-1 pl-10 pr-4 text-gray-600"
        placeholder="Search"
      />
      <span className="absolute left-3 top-2 text-gray-400">
      <IoSearchOutline size={20} />
      </span>
    </div>
    
    {/* <img 
      src="profile_picture_url" 
      alt="Profile" 
      className="w-10 h-10 rounded-full border border-gray-300"
    /> */}
  </div>
</nav>

;
}

export default Navbar;
