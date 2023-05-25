import axios from "axios";
import { useEffect, useState } from "react";

const fetchAPI = "https://api.exchangerate.host/latest?base=PLN";

export const useDataRates = () => {
  const [data, setData] = useState({ status: "loading" });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(fetchAPI);
        setData({
          status: "success",
          rates: response.data.rates,
          date: response.data.date,
        });
      } catch (error) {
        setData({
          status: "error",
        });
      }
    };

    setTimeout(fetchRates, 3000);
  }, []);

  return data;
};
