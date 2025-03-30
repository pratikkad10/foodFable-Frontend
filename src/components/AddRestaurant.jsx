import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { createRestaurant } from "../services/getService";
import toast from "react-hot-toast";

function AddRestaurant() {
  const navigate = useNavigate();
  function backClickHandler() {
    navigate(-1);
  }

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    status: "",
    imageUrl: "",
    website:"",
    contact:"",
    email:""
  });

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function formSubmitHandler(event) {
    event.preventDefault();
    const token = localStorage.getItem("authToken");
    try {
      const res= await createRestaurant(formData, token);
      if(res.status === 200){
        toast.success("Restaurant Added!");
      }else{
        toast.error("Something went Wrong!");
      }
    } catch (error) {
      console.log(error.message);
    }
    navigate("/restaurant");
  }

  return (
    <div className="m-2 w-1/2 mx-auto text-zinc-900 bg-zinc-200 p-6 rounded-md">
      <div
        onClick={backClickHandler}
        className="h-10 w-10 bg-zinc-200 hover:bg-zinc-100 rounded-full flex justify-center items-center"
      >
        <IoMdArrowRoundBack size={22} />
      </div>
      <h1 className="my-4 text-2xl font-bold ">Add new restaurant</h1>
      <form onSubmit={formSubmitHandler} action="">
        <div className="flex flex-col gap-2">
          <label className="font-semibold" htmlFor="name">
            Name of Restaurant
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="text"
            placeholder="Name of Restaurant"
            id="name"
            name="name"
          />

<label className="font-semibold" htmlFor="contact">
            Contact
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="number"
            placeholder="9900011223"
            id="contact"
            name="contact"
          />

<label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="text"
            placeholder="abc@gmail.com"
            id="email"
            name="email"
          />

          <label className="font-semibold" htmlFor="address">
            Address
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="text"
            placeholder="Enter address"
            id="address"
            name="address"
          />

          <label className="font-semibold" htmlFor="city">
            City
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="text"
            placeholder="Enter city"
            id="city"
            name="city"
          />

          <label className="font-semibold" htmlFor="status">
            Currest status
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="text"
            placeholder="open / closed"
            id="status"
            name="status"
          />

          <label className="font-semibold" htmlFor="image-url">
            URL
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="link"
            placeholder="Enter image URL"
            id="image-url"
            name="imageUrl"
          />

<label className="font-semibold" htmlFor="website-url">
            Website link
          </label>
          <input
            onChange={changeHandler}
            className="border-1 p-1 rounded-md"
            type="link"
            placeholder="Enter website URL"
            id="website-url"
            name="website"
          />

          <button className=" py-2 text-white font-semibold text-sm bg-blue-500 hover:bg-blue-400 rounded-md mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRestaurant;
