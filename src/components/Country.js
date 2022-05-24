import React from "react";
import useCountry from "../custom-hooks/useCountry";
import { useParams, Link } from "react-router-dom";
import CountryCard from "./CountryCard";

export default function Country() {
    const { countryname } = useParams();
    const { countryNameData, error, loading } = useCountry(
        `https://restcountries.com/v3.1/name/${countryname}`
    );

    if (error) return <div>Error</div>;
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <Link to="/">Back</Link>
            {countryNameData
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
