import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// GET request
export const getRestaurants = () => {
  return api.get('/restaurant/restaurants');
};

// POST request
export const createRestaurant = (data) => {
  return api.post('/restaurant/add', data);
};

// PUT request
export const updateRestaurant = (id, updatedData) => {
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


