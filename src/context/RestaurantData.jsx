import React, { createContext, useState } from 'react'

export const AppContext = createContext();

export default function RestaurantData({children}) {

    const [restaurants, setRestaurants] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const value={
        restaurants,
        setRestaurants,
        isLoggedIn,
        setIsLoggedIn
    } 
  return <AppContext.Provider value={value} >
    {children}
    </AppContext.Provider>
}

