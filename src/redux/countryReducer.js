const initialState = {
    countryNameData: null,
    loading: false,
    error: null,
};

const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COUNTRY_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_COUNTRY_SUCCESS":
            return {
                ...state,
                countryNameData: action.payload.response,
                loading: false,
            };
        case "FETCH_COUNTRY_FAILURE":
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
export default countryReducer;
