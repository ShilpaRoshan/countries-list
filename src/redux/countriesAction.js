export const fetchCountriesRequest = () => {
    return {
        type: "FETCH_COUNTRIES_REQUEST",
    };
};

export const fetchCountriesSuccess = (response) => {
    return {
        type: "FETCH_COUNTRIES_SUCCESS",
        payload: response,
    };
};
export const fetchCountriesFailure = (error) => {
    return {
        type: "FETCH_COUNTRIES_FAILURE",
        payload: error,
    };
};
export const filteredCountries = (keyword) => {
    return {
        type: "FILTER_COUNTRIES",
        payload: keyword,
    };
};
export const addFavoriteCountries = (country) => {
    console.log("ADD_COUNTRY_FAV_ACTION", country);
    return {
        type: "ADD_FAVROITE_COUNTRIES",
        payload: country,
    };
};
export const removeFavoriteCountries = (country) => {
    console.log("REMOVE_COUNTRY_FAV_ACTION", country);
    return {
        type: "REMOVE_FAVORITE_COUNTRIES",
        payload: country,
    };
};
export const fetchCountries = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchCountriesRequest());
            const response = await fetch(
                "https://restcountries.com/v3.1/all"
            ).then((response) => response.json());
            //console.log(response, "Response DATA");
            dispatch(fetchCountriesSuccess(response));
        } catch (error) {
            dispatch(fetchCountriesFailure(error));
        }
    };
};
