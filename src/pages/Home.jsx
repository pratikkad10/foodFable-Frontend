import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import { getRestaurants } from '../services/getService'
import Spinner from '../components/Spinner'

function Home() {
  const [isLoading, setIsLoading]=useState(false);
  const [restaurants, setRestaurants] = useState([]);

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
    <div className='flex justify-center gap-4 items-center flex-wrap p-4 bg-zinc-300'>

      {
        isLoading === true ? (<Spinner/>) : (
          restaurants.map((restaurant, index)=>{
            return <Card restaurant={restaurant} key={index} />
          })
        )  
      }

    </div>
  )
}

export default Home