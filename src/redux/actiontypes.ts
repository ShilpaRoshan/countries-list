import { Constants } from "./constants";
import { Country } from "../types";

export type FetchCountriesRequest = {
    type: Constants.FETCH_COUNTRIES_REQUEST;
};
export type FetchCountriesSuccess = {
    type: Constants.FETCH_COUNTRIES_SUCCESS;
    payload: {
        response: Country[];
    };
};

export type FetchCountriesFailure = {
    type: Constants.FETCH_COUNTRIES_FAILURE;
    payload: {
        error: any;
    };
};
// export type FilteredCountries = {

//         type: "FILTER_COUNTRIES",
//         payload: keyword,
// };
export type Actions =
    | FetchCountriesRequest
    | FetchCountriesSuccess
    | FetchCountriesFailure
    | any;
