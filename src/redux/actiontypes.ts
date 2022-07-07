import { Constants } from "./constants";
import { Country } from "../types";

export type FetchCountriesRequest = {
  type: Constants.FETCH_COUNTRIES_REQUEST;
};
export type FetchCountriesSuccess = {
  type: Constants.FETCH_COUNTRIES_SUCCESS;
  payload: Country[];
};

export type FetchCountriesFailure = {
  type: Constants.FETCH_COUNTRIES_FAILURE;
  payload: any;
};
export type FilteredCountries = {
  type: Constants.FILTER_COUNTRIES;
  payload: string;
};
export type AddFavoriteCountries = {
  type: Constants.ADD_FAVROITE_COUNTRIES;
  payload: Country;
};
export type RemoveFavoriteCountries = {
  type: Constants.REMOVE_FAVORITE_COUNTRIES;
  payload: Country;
};
export type SortCountriesByName = {
  type: Constants.SORT_COUNTRIES_NAME;
};
export type SortCountriesByRegion = {
  type: Constants.SORT_COUNTRIES_REGION;
};
export type SortCountriesByPopulation = {
  type: Constants.SORT_COUNTRIES_POPULATION;
};

export type FetchCountryRequest = {
  type: Constants.FETCH_COUNTRY_REQUEST;
};
export type FetchCountrySuccess = {
  type: Constants.FETCH_COUNTRY_SUCCESS;
  payload: {
    response: Country;
  };
};
export type FetchCountryFailure = {
  type: Constants.FETCH_COUNTRY_FAILURE;
  payload: {
    error: any;
  };
};
export type Actions =
  | FetchCountriesRequest
  | FetchCountriesSuccess
  | FetchCountriesFailure
  | FilteredCountries
  | AddFavoriteCountries
  | RemoveFavoriteCountries
  | SortCountriesByName
  | SortCountriesByRegion
  | SortCountriesByPopulation
  | FetchCountryRequest
  | FetchCountrySuccess
  | FetchCountryFailure
  | any;
