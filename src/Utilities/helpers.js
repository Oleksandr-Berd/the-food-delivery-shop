
import axios from "axios";

import { BASE_URL } from "./constants";

export const fetchShops = async () => {
  try {

    const response = await axios.get(`${BASE_URL}/categories.php`);

   return response.data.categories
  } catch (error) {
    return error;
  }
};

export const fetchProducts = async (shop, limit=6) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${shop}&limit=${limit}`);
    return response.data.meals;
  } catch (error) {
    return error;
  }
};
    
export const makeOrder = async (data) => {
  try {
    const {name, email, phone, address} = data
    return {name, email, phone, address};
  } catch (error) {
    return error
  }
}