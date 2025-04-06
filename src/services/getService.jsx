import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// GET request
export const getRestaurants = () => {
  return api.get('/restaurant/restaurants');
};

// POST request
export const createRestaurant = (data, token) => {
  return api.post('/restaurant/add', data, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });
};

// PUT request
export const updateRestaurant = (id, updatedData, token) => {
  return api.put(`/restaurant/edit/${id}`, updatedData);
};

// DELETE request
export const deleteRestaurant = (id) => {
  return api.delete(`/restaurant/delete/${id}`);
};

//get restaurant by id
export const fetchRestaurantById =(id)=>{
    return api.get(`/restaurant/${id}`);
}

export const fetchOwnerRestaurants = (token) => {
  return api.get(`/restaurant/owner`, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });
};


export const addReview = (id, data, token) => {
  return api.post(`/restaurant/review/${id}`,data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const searchRestaurants = (city, token) =>{
  return api.get(`/restaurant/find/${city}`, {
    headers: {
      Authorization: `Bearer ${token}`, 
    },
  });
}


