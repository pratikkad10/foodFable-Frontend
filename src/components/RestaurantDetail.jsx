import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRestaurantById } from "../services/getService";
import RatingReview from "./RatingReview";
import Spinner from "./Spinner";

function RestaurantDetail() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [restaurant, setRestaurant] = useState({});
  const { id } = useParams();

  const calculateAverageRating = (reviews) => {
    if (!reviews || reviews.length === 0) return "N/A"; // Handle no reviews case
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(2); // Round to 2 decimal places
  };

  const averageRating = calculateAverageRating(restaurant.reviews);

  async function fetchRestaurant() {
    try {
      setIsLoggedIn(true);
      const res = await fetchRestaurantById(id);
      setRestaurant(res.data.restaurants);
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <>
      {isLoggedIn === true ? (
        <Spinner />
      ) : (
        <div className="text-zinc-50  min-h-[100vh] py-4 flex flex-col justify-center items-center">
          <div className="text-zinc-50 w-[75%] h-100 flex rounded-lg overflow-hidden">
            <img
              className="rounded-lg w-[50%] h-full "
              src={restaurant.imageUrl}
              alt=""
            />
            <div className=" px-10 flex flex-col justify-center  ">
              <div className="text-4xl font-bold py-2 mb-4 text-zinc-50">
                {restaurant.name}
              </div>
              <div className="text-xl text-zinc-100 py-1">
                {restaurant.city}
              </div>
              <div className="text-xl text-zinc-100 py-1">
                {restaurant.address}
              </div>
              <div className="text-xl text-zinc-100 py-1">
                {restaurant.contact}
              </div>
              <div className="text-xl text-zinc-100 py-1">
                {restaurant.email}
              </div>
              <a className="text-blue-500 text-xl " href={restaurant.website}>
                {restaurant.website}
              </a>
              <div className="text-xl text-zinc-100 py-1">
                {restaurant.status} now
              </div>
              <div className="text-yellow-600 text-xl mt-6 font-bold">
                ★ {averageRating}
              </div>
            </div>
          </div>

          <div className="reviews w-[75%] text-zinc-50  mt-6  rounded-lg shadow-lg p-4 my-4">
            <RatingReview id={id} />
            
            <div className="mt-6 flex flex-col justify-center  w-full">
            <h1 className="text-lg font-semibold ">Reviews</h1>
            {restaurant.reviews &&
              restaurant.reviews.map((review, index) => {
                return (
                  <ul className="font-normal py-2 bg-[#2f3331] h-10 my-2 rounded-xl px-4" key={index}>
                    {review.comment}
                  </ul>
                );
              })}
              </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RestaurantDetail;
