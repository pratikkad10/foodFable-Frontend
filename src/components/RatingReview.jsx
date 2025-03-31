import { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { addReview } from "../services/getService";

const RatingReview = ({ id }) => {
  const [rating, setRating] = useState(1);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  

  const handleSubmit = async () => {
    if (review.trim() === "") {
      toast.error("Please provide a review before submitting");
      return;
    }
    const data = { rating:rating, comment:review };
    try {
      const token = localStorage.getItem("authToken");
      const response = await addReview(id, data, token);
      if (response.status === 201) {
        toast.success("Review submitted");
        setRating(1);
        setReview("");
      } else if(response.status===401){
        toast.error("Only user can Review!");
        setRating(1);
        setReview("");
      }
    } catch (error) {
      console.log("error in ratingReview component!", error);
    }
  };

  return (
    <div className="w-full mx-auto p-4 mb-2 rounded-lg shadow-lg bg-zinc-200">
      <h2 className="text-lg font-semibold mb-2">Rate and Review</h2>
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`h-6 w-6 cursor-pointer ${
              (hover || rating) >= star ? "text-yellow-500" : "text-gray-300"
            }`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          />
        ))}
      </div>
      <textarea
        className="w-full border-[0.125px] rounded p-2 mb-3 "
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white cursor-pointer hover:bg-blue-400 font-semibold py-1 rounded"
      >
        Post Review
      </button>
    </div>
  );
};

export default RatingReview;
