import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import toast from "react-hot-toast";
import { fetchOwnerRestaurants } from "../services/getService";

function Dashboard() {
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  async function fetchRestaurants() {
    const token = localStorage.getItem("authToken");

    if (!token) {
      toast.error("Sign in to access the dashboard.");
      navigate("/user/signin");
      return;
    }

    try {
      const response = await fetchOwnerRestaurants(token);
      console.log("API Response:", response.data.data); 
      setRestaurants(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch restaurants. Please try again.");
    }
  }

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col p-4 gap-2 pt-4 ">
      <button
        onClick={() => navigate("/restaurant/new")}
        className="px-4 flex justify-center items-center gap-2 py-2 bg-zinc-800 text-white font-semibold rounded-md cursor-pointer hover:bg-zinc-700"
      >
        Create Restaurant <FaPlus />
      </button>

      <div className="flex justify-center gap-4 items-center flex-wrap p-4">
        {restaurants.length  &&
          restaurants.map((restaurant, index) => (
            <Card restaurant={restaurant} key={index} />
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
