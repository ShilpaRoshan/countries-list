import { Dispatch } from "redux";
import { Country } from "../types";
import { Constants } from "./constants";
import {
  FetchCountryRequest,
  FetchCountrySuccess,
  FetchCountryFailure,
} from "./actiontypes";

export const fetchCountryRequest = (): FetchCountryRequest => {
  return {
    type: Constants.FETCH_COUNTRY_REQUEST,
  };
};

export const fetchCountrySuccess = (response: Country): FetchCountrySuccess => {
  return {
    type: Constants.FETCH_COUNTRY_SUCCESS,
    payload: { response },
  };
};

export const fetchCountryFailure = (error: any): FetchCountryFailure => {
  return {
    type: Constants.FETCH_COUNTRY_FAILURE,
    payload: { error },
  };
};

export const fetchCountryData = (countryname: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(fetchCountryRequest());
      const response: Country = await fetch(
        `https://restcountries.com/v3.1/name/${countryname}`
      ).then((response) => response.json());
      dispatch(fetchCountrySuccess(response));
    } catch (error) {
      dispatch(fetchCountryFailure(error));
    }
  };
};
