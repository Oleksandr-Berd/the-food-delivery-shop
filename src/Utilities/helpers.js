
import axios from "axios";

import { BASE_URL } from "./constants";

export const fetchShops = async () => {
  try {

    const response = await axios.get(`${BASE_URL}/categories`);
   return response.data
  } catch (error) {
    return error;
  }
};

export const fetchProducts = async (shop, limit=6) => {
  try {
    const response = await axios.get(`${BASE_URL}/category/${shop}?limit=${limit}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
    
