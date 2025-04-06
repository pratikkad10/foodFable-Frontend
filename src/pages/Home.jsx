import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { getRestaurants } from '../services/getService'
import Spinner from '../components/Spinner'
import Loader from '../components/Loader'
import { AppContext } from '../context/RestaurantData'

function Home() {
  const [isLoading, setIsLoading]=useState(false);

  const {restaurants, setRestaurants} = useContext(AppContext);

  async function fetchRestaurants(){
      try {
        setIsLoading(true);
        const data=await getRestaurants();
        setRestaurants(data.data.restaurants);
        setIsLoading(false);
      } catch (error) {
        console.log("Error in fetch restaurants", error.message);
      }
  }

  useEffect(()=>{
    fetchRestaurants();
  }, [])



  return (
    <div className='flex justify-center gap-1 pb-15 items-center flex-wrap p-4 '>

      {
        isLoading === true ? (<Loader/>) : (
          restaurants.map((restaurant, index)=>{
            return <Card restaurant={restaurant} key={index} />
          })
        )  
      }

    </div>
  )
}

export default Home