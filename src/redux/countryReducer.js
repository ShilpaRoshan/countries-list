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
            console.log(action.payload, "FETCH_COUNTRY_REDUCER");
            return {
                ...state,
                countryNameData: action.payload,
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
