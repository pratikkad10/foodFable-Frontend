import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { getRestaurants } from '../services/getService'

function Home() {

  const [restaurants, setRestaurants] = useState([]);

  async function fetchRestaurants(){
      try {
        const data=await getRestaurants();
        // console.log(data.data.restaurants);
        setRestaurants(data.data.restaurants);
      } catch (error) {
        console.log("Error in fetch restaurants", error.message);
      }
  }

  useEffect(()=>{
    fetchRestaurants();
  }, [])


  return (
    <div className='flex justify-center  gap-4 items-center flex-wrap p-4 bg-zinc-300'>

      {
        restaurants && restaurants.map((restaurant, index)=>{
          return <Card restaurant={restaurant} key={index} />
        })
      }

    </div>
  )
}

export default Home