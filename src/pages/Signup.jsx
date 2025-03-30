import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Signup({ isLoggedIn, setIsLoggedIn }) {
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
    <div className="flex flex-row gap-0 h-[100vh] bg-zinc-300">
      <div className="left w-1/2 mx-auto relative">
        <img
          className="h-full w-full"
          src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p className="absolute text-zinc-200 opacity-75 top-20 text-5xl font-bold left-3">
          Let's get started...!
        </p>
      </div>

      <div className="right p-40 w-1/2 mx-auto">
        <p className="text-xl font-semibold mb-6">Signup</p>
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
              className="border-1 border-zinc-400 p-1 mb-2 w-full rounded-md"
            >
              <option value="" disabled>
                Choose a role
              </option>
              <option value="Owner">Owner</option>
              <option value="User">User</option>
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
