import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  async function submitHandler(event) {
    event.preventDefault();
    console.log("Login details", formData);

    try {
      const response = await fetch(`http://localhost:3000/restaurantOwner/signin`, {
        method:"POST",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(formData)
      })
  
      console.log("response", response);
      // if(response.statusText === "ok"){
      //   toast.success("Logged In successfully")
      // }
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
    <div className="flex flex-row gap-0 h-[100vh]  bg-zinc-200">
      <div className="left  w-1/2 mx-auto relative">
        <img
          className="h-full w-full "
          src="https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p className="absolute text-zinc-200 opacity-75 top-20 text-5xl font-bold left-3">
          Welcome again...!
        </p>
      </div>

      <div className="right p-40   w-1/2 mx-auto">
        <p className="text-xl font-semibold mb-6">Signin</p>
        <form onSubmit={submitHandler} >

        


          <div>
            <label className="" htmlFor="email">Email</label>
            <input
            onChange={changeHandler}
              className="border-1 border-zinc-400 p-1 mb-2 w-full rounded-md"
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
              className="border-1 border-zinc-400 p-1 mb-2 w-full rounded-md"
              id="password"
              name="password"
              type="password"
              placeholder="•••••••"
            />
          </div>

          
          <div className="mt-4 flex flex-col ">
          <button className="px-4 py-1 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-400 cursor-pointer">Signin</button>
          <span className="text-blue-500 mt-2 cursor-pointer font-semibold"><Link>Don't have an account ?</Link></span>
          <div className="h-[0.1rem] w-45 rounded-lg bg-blue-500"></div>
        </div>
        </form>

        
      </div>
    </div>
  );
}

export default Login;
