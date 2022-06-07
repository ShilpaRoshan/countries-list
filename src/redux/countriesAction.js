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
    return {
        type: "ADD_FAVROITE_COUNTRIES",
        payload: country,
    };
};
export const removeFavoriteCountries = (country) => {
    return {
        type: "REMOVE_FAVORITE_COUNTRIES",
        payload: country,
    };
};
export const sortCountriesByName = (sortBy) => {
    return {
        type: "SORT_COUNTRIES_NAME",
        payload: sortBy,
    };
};
export const sortCountriesByRegion = (sortBy) => {
    return {
        type: "SORT_COUNTRIES_REGION",
        payload: sortBy,
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
