import { useCallback, useEffect, useState } from "react";
import { apiOpenWeather } from "../services/api";

export function useFetch({ url }) {
  const [data, setData] = useState();

  const fetchUrl = useCallback(async () => {
    const response = await apiOpenWeather.get(url);
    setData(response.data);
  }, [url]);

  useEffect(() => {
    fetchUrl();
  }, [fetchUrl, url]);

  return { data, fetchUrl };
}