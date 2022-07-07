// This hook is used to fetch one specific country
import { useEffect, useState } from "react";

export default function useCountry(url) {
  const [countryNameData, setCountryNameData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryByName = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCountryNameData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountryByName();
  }, [url]);
  return { countryNameData, error, loading };
}
