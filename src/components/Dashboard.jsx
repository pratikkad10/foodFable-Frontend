import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { getRestaurants } from "../services/getService";

function Dashboard() {
  const navigate=useNavigate();

   const [restaurants, setRestaurants] = useState([]);
  
    async function fetchRestaurants(){
        try {
          const data=await getRestaurants();
          console.log(data.data.restaurants);
          setRestaurants(data.data.restaurants);
        } catch (error) {
          console.log("Error in fetch restaurants", error.message);
        }
    }
  
    useEffect(()=>{
      fetchRestaurants();
    }, [])
  



  return (
    <div className="flex justify-center items-center p-4 flex-col gap-2 bg-zinc-300">
      <button onClick={()=>navigate('/restaurant/new')} className="px-4 flex justify-center items-center gap-2 py-2 bg-zinc-800 text-white font-semibold rounded-md cursor-pointer hover:bg-zinc-700">
        Create Restaurant <FaPlus />
      </button>

      <div className='flex justify-center  gap-4 items-center flex-wrap p-4  '>

      {
        restaurants && restaurants.map((restaurant, index)=>{
          return <Card restaurant={restaurant} key={index} />
        })
      }

    </div>
    </div>
  );
}

export default Dashboard;
