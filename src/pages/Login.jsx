import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/RestaurantData";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  async function submitHandler(event) {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        
        const { token } = data;
        if (token) {
          localStorage.setItem("authToken", token);
          setIsLoggedIn(true);
          toast.success("Logged in successfully!");
          navigate("/"); 
        } else {
          toast.error("Token not received. Login failed.");
        }
      } else {
        toast.error(
          data.message || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      console.log("error in login page!", error);
    }
  }

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      };
    });
  }

  return (
    <div className="flex flex-row  text-zinc-50">
      

      <div className="right p-40   w-1/2 mx-auto">
        <p className="text-xl text-center font-semibold p-1">Back for More? Let’s Satisfy Your Cravings!</p>
        <div className="h-1 w-[90%] ml-[5%] rounded-full mb-6 bg-blue-300"></div>
        <form onSubmit={submitHandler}>
          <div>
            <label className="" htmlFor="email">
              Email
            </label>
            <input
              onChange={changeHandler}
              className="border-1 text-zinc-50 border-zinc-400 p-1 mb-2 w-full rounded-md"
              id="email"
              name="email"
              type="text"
              placeholder="abc@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={changeHandler}
              className="border-1 text-zinc-50 border-zinc-400 p-1 mb-2 w-full rounded-md"
              id="password"
              name="password"
              type="password"
              placeholder="•••••••"
            />
          </div>

          <div className="mt-4 flex flex-col ">
            <button className="px-4 py-1 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-400 cursor-pointer">
              Signin
            </button>
            <span
              onClick={() => navigate("/user/signup")}
              className="text-blue-500 mt-2 cursor-pointer font-semibold"
            >
              <Link>Don't have an account ?</Link>
            </span>
            <div className="h-[0.1rem] w-45 rounded-lg bg-blue-500"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
