import axios from "axios";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets';

export const fetchCoins = async (params) => {
  const response = await axios.get(BASE_URL, { params });
  return response.data;
};
