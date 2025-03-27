import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantById } from "../services/getService";

function RestaurantDetail() {

    

  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return 'N/A'; // Handle no reviews case
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(2); // Round to 2 decimal places
  };

  const averageRating = calculateAverageRating(restaurant.reviews);

  async function fetchRestaurant() {
    try {
      const res = await fetchRestaurantById(id);
      console.log(res.data.restaurants);
      setRestaurant(res.data.restaurants);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <div className="bg-zinc-300 min-h-[100vh]  w-auto flex flex-col justify-center items-center">
      <div className="bg-zinc-200 w-[75%] h-100 flex rounded-lg overflow-hidden">
        <img  className="rounded-lg w-[50%] h-full " src={restaurant.imageUrl} alt="" />
        <div className=" px-10 flex flex-col justify-center  ">
            <div className="text-4xl font-bold py-2 mb-4 text-zinc-900">{restaurant.name}</div>
            <div className="text-xl text-zinc-800 py-1">{restaurant.city}</div>
            <div className="text-xl text-zinc-800 py-1">{restaurant.address}</div>
            <div className="text-xl text-zinc-800 py-1">{restaurant.contact}</div>
            <div className="text-xl text-zinc-800 py-1">{restaurant.email}</div>
            <a className='text-blue-500 text-xl ' href={restaurant.website}>{restaurant.website}</a>
            <div className="text-xl text-zinc-800 py-1">{restaurant.status} now</div>
            <div className="text-yellow-500 text-xl mt-6 font-bold">★ {averageRating}</div>
        </div>
      </div>

      <div className="reviews w-[75%]  mt-4">
        <h1 className=" text-xl text-zinc-900 font-semibold">Reviews</h1>
        {
          restaurant.reviews &&
          restaurant.reviews.map((review, index)=>{
            return <Review review={review} key={index} />
          })
        }
      </div>
    </div>
  );
}

function Review({review}){
  console.log(review);
  
  return (
    
    <div className=" bg-zinc-200 rounded-2xl my-2 p-4">
      <div className="text-zinc-800 font-thin">{review.comment}</div>
    </div>
  )
}


export default RestaurantDetail;
