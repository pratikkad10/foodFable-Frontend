import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AppContext } from "../context/RestaurantData";

function Signup() {
  const { isLoggedIn, setIsLoggedIn }= useContext(AppContext);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    accountType: "",
  });

  async function submitHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsLoggedIn(true);
        toast.success("Signup successful! You are now logged in.");
        setFormData({
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
          accountType: "",
        });
      } else {
        toast.error(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
  }

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="flex flex-row justify-center items-center  gap-0  text-zinc-50">
      

      <div className="right px-10 mt-20  w-1/2 mx-auto">
        <p className="text-2xl font-semibold p-1 text-center">Sign Up & Savor the Best Food Tales!</p>
        <div className="h-1 w-[60%] ml-[20%] rounded-full mb-6 bg-blue-300"></div>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="Name">Name</label>
            <input
              onChange={changeHandler}
              className="border-1 border-zinc-400 mb-2 p-1 w-full rounded-md"
              id="Name"
              name="name"
              type="text"
              placeholder="Aman Gupta"
              value={formData.name}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={changeHandler}
              className="border-1 border-zinc-400 p-1 mb-2 w-full rounded-md"
              id="email"
              name="email"
              type="text"
              placeholder="abc@gmail.com"
              value={formData.email}
            />
          </div>

          <div className="flex flex-col items-start">
            <label htmlFor="accountType" className="">
              Account Type:
            </label>
            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={changeHandler}
              className="border-1 border-zinc-400  p-1 mb-2 w-full rounded-md"
            >
              <option className="text-zinc-900" value="" disabled>
                Choose a role
              </option>
              <option className="text-zinc-900" value="Owner">Owner</option>
              <option className="text-zinc-900" value="User">User</option>
            </select>
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={changeHandler}
              className="border-1 border-zinc-400 p-1 mb-2 w-full rounded-md"
              id="password"
              name="password"
              type="password"
              placeholder="•••••••"
              value={formData.password}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={changeHandler}
              className="border-1 border-zinc-400 p-1 w-full rounded-md"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="•••••••"
              value={formData.confirmPassword}
            />
          </div>

          <div className="mt-4 flex flex-col">
            <button className="px-4 py-1 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-400 cursor-pointer">
              Signup
            </button>
            <span className="text-blue-500 mt-2 cursor-pointer font-semibold">
              <Link to="/user/signin">Already have an account?</Link>
            </span>
            <div className="h-[0.1rem] w-45 rounded-lg bg-blue-500"></div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
