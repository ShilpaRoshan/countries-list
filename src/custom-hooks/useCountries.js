// This hook is used to fetch all countries
import { useEffect, useState } from "react";

const useCountries = (url) => {
    const [countriesData, setCountriesData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setCountriesData(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { countriesData, error, loading };
};

export default useCountries;
