import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate=useNavigate();
  return (
    <div className="flex justify-center items-center p-4">
      <button onClick={()=>navigate('/restaurant/new')} className="px-4 flex justify-center items-center gap-2 py-2 bg-zinc-800 text-white font-semibold rounded-md cursor-pointer hover:bg-zinc-700">
        Create Restaurant <FaPlus />
      </button>
    </div>
  );
}

export default Dashboard;
