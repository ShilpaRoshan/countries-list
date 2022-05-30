const initialState = {
    countriesData: [],
    error: null,
    loading: false,
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COUNTRIES_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_COUNTRIES_SUCCESS":
            return {
                ...state,
                countriesData: action.payload.response,
                loading: false,
            };
        case "FETCH_COUNTRIES_FAILURE":
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            };
        default:
            return {
                ...state,
            };
    }
};
export default countriesReducer;
