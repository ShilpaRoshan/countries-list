import React from "react";
import useCountry from "../custom-hooks/useCountry";
import { useParams } from "react-router-dom";

export default function Country() {
    const { countryname } = useParams();
    const { countryNameData, error, loading } = useCountry(
        `https://restcountries.com/v3.1/name/${countryname}`
    );
    // {
    //     console.log(countryNameData);
    // }
    if (error) return <div>Error</div>;
    if (loading) return <div>Loading...</div>;
    //const result = countryNameData[0];
    return (
        <div>
            {console.log(countryname)}
            {console.log(countryNameData[0])}
            {countryNameData
                .filter(
                    (data) =>
                        data.name.common.toLowerCase() ===
                        countryname.toLowerCase()
                )

                .map((result) => {
                    return (
                        <>
                            {result ? (
                                <div>
                                    <h1 key={result.cca2}>
                                        {result.name.common}
                                    </h1>
                                    <p>{result.capital}</p>
                                    <img src={result.flags.png} alt="flag" />
                                    <p>{result.region}</p>
                                    <p>
                                        {Object.keys(result.languages).map(
                                            (key) => {
                                                return (
                                                    <p key={result.cca2}>
                                                        {result.languages[key]}
                                                    </p>
                                                );
                                            }
                                        )}
                                    </p>
                                    <p>{result.borders}</p>
                                    {console.log(
                                        `Currencies ${result.currencies}`
                                    )}
                                    {Object.keys(result.currencies).map(
                                        (currency) => {
                                            console.log(
                                                `currency ${result.currencies[currency]}`
                                            );
                                            // return Object.keys(currency).map(
                                            //     (item) => {
                                            //         return (
                                            //             <p>{currency[item]}</p>
                                            //         );
                                            //     }
                                            // );
                                        }
                                    )}
                                </div>
                            ) : (
                                <p>No results found</p>
                            )}
                        </>
                    );
                })}
        </div>
    );
}
