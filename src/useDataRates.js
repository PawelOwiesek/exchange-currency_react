import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = "zCYVeigwdsIU19nZF1qgx2zjOpLNzb5K";

const fetchAPI =
  "https://api.apilayer.com/currency_data/live?source=EUR&currencies=USD,GBP,PLN";

export const useDataRates = () => {
  const [data, setData] = useState({ status: "loading" });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(fetchAPI, { headers: { apiKey } });
        const { quotes, timestamp, success } = response.data;

        if (success) {
          const modifiedQuotes = Object.fromEntries(
            Object.keys(quotes).map((key) => [key.substring(3), quotes[key]])
          );
          setData({
            state: "success",
            rates: modifiedQuotes,
            date: new Date(timestamp * 1000).toLocaleDateString(),
          });
        }
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
