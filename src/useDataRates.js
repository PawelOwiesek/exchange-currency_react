import axios from "axios";
import { useEffect, useState } from "react";

export const useDataRates = () => {
  const [data, setData] = useState({ state: "loading" });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate.host/latest?base=PLN"
        );
        setData({
          state: "success",
          rates: response.data.rates,
          date: response.data.date,
        });
      } catch (error) {
        setData({
          state: "error",
        });
      }
    };

    setTimeout(fetchRates, 3000);
  }, []);

  return data;
};
