import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//import useCountry from "../custom-hooks/useCountry";
import CountryCard from "./CountryCard";
import { fetchCountryData } from "../redux/countryAction";

export default function Country() {
    const { countryname } = useParams();
    const dispatch = useDispatch();
    const countryNameData = useSelector((state) => state.countryNameData);
    const error = useSelector((state) => state.error);
    const loading = useSelector((state) => state.loading);

    // const { countryNameData, error, loading } = useCountry(
    //     `https://restcountries.com/v3.1/name/${countryname}`
    // );
    useEffect(() => {
        dispatch(fetchCountryData(countryname));
    }, [dispatch, countryname]);

    if (error) return <div>Error</div>;
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <Link to="/">Back</Link>
            {countryNameData &&
                countryNameData
                    .filter(
                        (data) =>
                            data.name.common.toLowerCase() ===
                            countryname.toLowerCase()
                    )

                    .map((result) => {
                        return (
                            <>
                                <CountryCard result={result} />
                            </>
                        );
                    })}
        </div>
    );
}
