import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Card({ restaurant }) {
  if (!restaurant) {
    return (
      <div className="text-gray-500">Restaurant details not available</div>
    );
  }

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return "N/A";
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(2);
  };

  const averageRating = calculateAverageRating(restaurant.reviews);

  const navigate = useNavigate();

  function clickHandler(restaurant) {
    console.log(restaurant._id);

    navigate(`/restaurant/${restaurant._id}`);
  }

  return (
    <div
      onClick={() => clickHandler(restaurant)}
      className='hover:scale-110 transition duration-300 ease-in 
    gap-3 overflow-hidden mt-10 ml-4 rounded-xl bg-[#171717]
    hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'
    >
      <img className="w-80 h-52"  src={restaurant.imageUrl} alt="Restaurant" />
      <div className="px-4 py-2 text-zinc-50 flex flex-col gap-2">
        <div className="font-bold text-xl ">{restaurant.name}</div>
        <p className="text-zinc-200 text-base">{restaurant.city}</p>
        <p className="text-zinc-200  text-sm ">{restaurant.address}</p>
        <a className="text-blue-500 text-sm " href={restaurant.website}>
          {restaurant.website}
        </a>
      </div>
      <div className="px-4 pt-4 pb-2 flex justify-between items-center">
        <p className="text-zinc-100 font-semibold text-sm mt-2">
          {restaurant.status}
        </p>
        <span className="text-yellow-500 font-bold">★ {averageRating}</span>
      </div>
    </div>
  );
}

export default Card;
