export const fetchCountryRequest = () => {
    return {
        type: "FETCH_COUNTRY_REQUEST",
    };
};

export const fetchCountrySuccess = (response) => {
    return {
        type: "FETCH_COUNTRY_SUCCESS",
        payload: { response },
    };
};

export const fetchCountryFailure = (error) => {
    return {
        type: "FETCH_COUNTRY_FAILURE",
        payload: { error },
    };
};

export const fetchCountryData = (countryname) => {
    return async (dispatch) => {
        try {
            dispatch(fetchCountryRequest());
            const response = await fetch(
                `https://restcountries.com/v3.1/name/${countryname}`
            ).then((response) => {
                response.json();
            });
            console.log(response, "RESPONSE_COUNTRYDATA");
            dispatch(fetchCountrySuccess(response));
        } catch (error) {
            dispatch(fetchCountryFailure(error));
        }
    };
};
