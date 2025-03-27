import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Card({ restaurant }) {

  if (!restaurant) {
    return <div className="text-gray-500">Restaurant details not available</div>;
  }

  console.log(restaurant);

  // Function to calculate average rating
  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 'N/A'; // Handle no reviews case
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(2); // Round to 2 decimal places
  };

  const averageRating = calculateAverageRating(restaurant.reviews);

  // Hook for navigation
  const navigate = useNavigate();

  // Click handler for navigating to the restaurant details
  function clickHandler(restaurant) {
    console.log(restaurant._id);
    
    navigate(`/restaurant/${restaurant._id}`);
  }

  return (
    <div
      onClick={() => clickHandler(restaurant)} 
      className="max-w-sm rounded-lg overflow-hidden shadow-lg  shadow-zinc-600 bg-zinc-100 cursor-pointer hover:shadow-2xl"
    >
      <img
        className="w-full"
        src={restaurant.imageUrl}
        alt="Restaurant"
      />
      <div className="px-4 py-2 text-zinc-900 flex flex-col gap-2">
        <div className="font-bold text-xl ">{restaurant.name}</div>
        <p className="text-gray-700 text-base">{restaurant.city}</p>
        <p className="text-gray-700 text-sm ">{restaurant.address}</p>
        <a className='text-blue-500 text-sm ' href={restaurant.website}>{restaurant.website}</a>
      </div>
      <div className="px-4 pt-4 pb-2 flex justify-between items-center">
        <p className="text-gray-700 font-semibold text-sm mt-2">
          {restaurant.status}
        </p>
        <span className="text-yellow-500 font-bold">★ {averageRating}</span>
      </div>
    </div>
  );
}

export default Card;
