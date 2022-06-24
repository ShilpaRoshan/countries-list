import { Dispatch } from "redux";
import { Country } from "../types";
import {
    FetchCountriesRequest,
    FetchCountriesSuccess,
    FetchCountriesFailure,
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
    console.log(response, "fetchCountriesSuccess_action");
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
export const filteredCountries = (keyword: any) => {
    console.log(keyword, "filteredCountries_Action");
    return {
        type: "FILTER_COUNTRIES",
        payload: keyword,
    };
};
export const addFavoriteCountries = (country: any) => {
    return {
        type: "ADD_FAVROITE_COUNTRIES",
        payload: country,
    };
};
export const removeFavoriteCountries = (country: any) => {
    return {
        type: "REMOVE_FAVORITE_COUNTRIES",
        payload: country,
    };
};
export const sortCountriesByName = () => {
    return {
        type: "SORT_COUNTRIES_NAME",
    };
};
export const sortCountriesByRegion = () => {
    return {
        type: "SORT_COUNTRIES_REGION",
    };
};
export const sortCountriesByPopulation = () => {
    return {
        type: "SORT_COUNTRIES_POPULATION",
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
            console.log(error);
            dispatch(fetchCountriesFailure(error));
        }
    };
};
