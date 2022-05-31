import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//import useCountry from "../custom-hooks/useCountry";
import CountryCard from "./CountryCard";
import { fetchCountryData } from "../redux/countryAction";

export default function Country() {
    const { countryname } = useParams();
    const dispatch = useDispatch();
    const countryNameData = useSelector(
        (state) => state.countryData.countryNameData
    );

    console.log(countryNameData, "COUNTRY_PAGE_BEFORE");

    const error = useSelector((state) => state.countryData.error);
    const loading = useSelector((state) => state.countryData.loading);

    // const { countryNameData, error, loading } = useCountry(
    //     `https://restcountries.com/v3.1/name/${countryname}`
    // );
    // useEffect(() => {
    //     console.log("USE-EFFECT");
    //     dispatch(fetchCountryData(countryname));
    // }, [dispatch, countryname]);
    useEffect(() => {
        console.log("USE_EFFECT");
        dispatch(fetchCountryData(countryname));
    }, [dispatch, countryname]);

    if (error) return <div>Error</div>;
    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <Link to="/">Back</Link>
            {console.log(countryNameData[0], "COUNTRY_PAGE")}
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
