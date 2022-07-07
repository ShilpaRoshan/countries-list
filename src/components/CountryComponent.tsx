import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//import useCountry from "../custom-hooks/useCountry";
import CountryCard from "./CountryCard";
import { fetchCountryData } from "../redux/countryAction";
import { AppState, Country } from "../types";

export default function CountryComponent() {
  const { countryname } = useParams();
  let currentName: string = "";
  if (countryname) {
    currentName = countryname;
  }
  const dispatch = useDispatch<any>();
  const countryNameData = useSelector(
    (appState: AppState) => appState.countryData.countryNameData
  );
  const error = useSelector((appState: AppState) => appState.countryData.error);
  const loading = useSelector(
    (appState: AppState) => appState.countryData.loading
  );

  // const { countryNameData, error, loading } = useCountry(
  //     `https://restcountries.com/v3.1/name/${countryname}`
  // );
  // useEffect(() => {
  //     console.log("USE-EFFECT");
  //     dispatch(fetchCountryData(countryname));
  // }, [dispatch, countryname]);

  useEffect(() => {
    if (countryname) {
      dispatch(fetchCountryData(countryname));
    }
  }, [dispatch, countryname]);

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {countryNameData &&
        countryNameData
          .filter(
            (data) =>
              data.name.common.toLowerCase() === currentName.toLowerCase()
          )

          .map((result: Country) => {
            return (
              <>
                {console.log(result, "result")}
                <CountryCard result={result} />
              </>
            );
          })}
    </div>
  );
}
