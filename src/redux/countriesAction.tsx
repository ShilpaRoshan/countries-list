import { Dispatch } from "redux";
import { Country } from "../types";
import {
  FetchCountriesRequest,
  FetchCountriesSuccess,
  FetchCountriesFailure,
  FilteredCountries,
  AddFavoriteCountries,
  RemoveFavoriteCountries,
  SortCountriesByName,
  SortCountriesByPopulation,
  SortCountriesByRegion,
} from "./actiontypes";
import { Constants } from "./constants";

export const fetchCountriesRequest = (): FetchCountriesRequest => {
  return {
    type: Constants.FETCH_COUNTRIES_REQUEST,
  };
};

export const fetchCountriesSuccess = (
  response: Country[]
): FetchCountriesSuccess => {
  return {
    type: Constants.FETCH_COUNTRIES_SUCCESS,
    payload: response,
  };
};

export const fetchCountriesFailure = (error: any): FetchCountriesFailure => {
  return {
    type: Constants.FETCH_COUNTRIES_FAILURE,
    payload: error,
  };
};
export const filteredCountries = (keyword: string): FilteredCountries => {
  return {
    type: Constants.FILTER_COUNTRIES,
    payload: keyword,
  };
};
export const addFavoriteCountries = (
  country: Country
): AddFavoriteCountries => {
  return {
    type: Constants.ADD_FAVROITE_COUNTRIES,
    payload: country,
  };
};
export const removeFavoriteCountries = (
  country: Country
): RemoveFavoriteCountries => {
  return {
    type: Constants.REMOVE_FAVORITE_COUNTRIES,
    payload: country,
  };
};
export const sortCountriesByName = (): SortCountriesByName => {
  return {
    type: Constants.SORT_COUNTRIES_NAME,
  };
};
export const sortCountriesByRegion = (): SortCountriesByRegion => {
  return {
    type: Constants.SORT_COUNTRIES_REGION,
  };
};
export const sortCountriesByPopulation = (): SortCountriesByPopulation => {
  return {
    type: Constants.SORT_COUNTRIES_POPULATION,
  };
};
export const fetchCountries = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchCountriesRequest());
      const response: Country[] = await fetch(
        "https://restcountries.com/v3.1/all"
      ).then((response) => response.json());
      dispatch(fetchCountriesSuccess(response));
    } catch (error) {
      console.log(error, "ERROR IN FETCH COUNTRIES");
      dispatch(fetchCountriesFailure(error));
    }
  };
};
