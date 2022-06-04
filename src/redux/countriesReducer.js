const initialState = {
    countriesData: [],
    error: null,
    loading: false,
    filteredCountriesData: [],
    keyword: null,
    favoriteCountries: [],
    isOpen: true,
};

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_COUNTRIES_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "FETCH_COUNTRIES_SUCCESS":
            // console.log(action.payload, "COUNTRIES_REDUCER");
            return {
                ...state,
                countriesData: action.payload,
                loading: false,
            };
        case "FETCH_COUNTRIES_FAILURE":
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case "FILTER_COUNTRIES":
            const keyword = action.payload;
            const result = state.countriesData.filter((country) =>
                country.name.common.toLowerCase().includes(keyword)
            );
            return {
                ...state,
                filteredCountriesData: result,
                keyword: keyword,
            };

        case "ADD_FAVROITE_COUNTRIES": {
            const country = action.payload;
            const isDuplicate = state.favoriteCountries.some(
                (value) => value.name.common === country.name.common
            );
            if (isDuplicate) {
                return state;
            }

            return {
                ...state,
                favoriteCountries: [...state.favoriteCountries, country],
                isOpen: false,
            };
        }

        case "REMOVE_FAVORITE_COUNTRIES": {
            const country = action.payload;
            const index = state.favoriteCountries.findIndex(
                (value) => value.name.common === country.name.common
            );
            console.log(index, "REMOVE_COUNTRIES_REDUCER");
            if (index >= 0) {
                const newFavCountry = state.favoriteCountries.splice(index, 1);
                console.log(newFavCountry, "NEW_[]_AFTER_REMOVE_COUNTRY");
                return {
                    ...state,
                    favoriteCountries: [...state.favoriteCountries],
                    isOpen: true,
                };
            }
            return state;
        }

        default:
            return {
                ...state,
            };
    }
};
export default countriesReducer;
