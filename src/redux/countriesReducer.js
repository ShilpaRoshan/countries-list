const initialState = {
    countriesData: [],
    error: null,
    loading: false,
    filteredCountriesData: [],
    keyword: null,
    favoriteCountries: [],
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
            const newFavCountry = [...state.favoriteCountries, country];
            return {
                ...state,
                favoriteCountries: newFavCountry,
            };
        }
        case "REMOVE_FAVORITE_COUNTRIES": {
            const country = action.payload;
            const favoriteCountries = state.favoriteCountries.filter(
                (value) => value.name.common !== country.name.common
            );
            return {
                ...state,
                favoriteCountries,
            };
        }
        case "SORT_COUNTRIES_NAME": {
            // console.log(state.countriesData, "SORT_COUNTRIES_REDUCER");
            // console.log(action.payload, "PAYLOAD");
            const sortedArray = [...state.countriesData].sort(
                (firstEl, secondEl) => {
                    if (firstEl.name.common < secondEl.name.common) {
                        return -1;
                    }
                    if (firstEl.name.common > secondEl.name.common) {
                        return 1;
                    }
                    return 0;
                }
            );
            console.log(sortedArray, "SORTED_COUNRTIES_DATA");
            return {
                ...state,
                countriesData: sortedArray,
            };
        }
        case "SORT_COUNTRIES_REGION": {
            // console.log(state.countriesData, "SORT_COUNTRIES_REDUCER");
            // console.log(action.payload, "PAYLOAD");
            const sortedArray = [...state.countriesData].sort(
                (firstEl, secondEl) => {
                    if (firstEl.region < secondEl.region) {
                        return -1;
                    }
                    if (firstEl.region > secondEl.region) {
                        return 1;
                    }
                    return 0;
                }
            );
            console.log(sortedArray, "SORTED_COUNRTIES_DATA");
            return {
                ...state,
                countriesData: sortedArray,
            };
        }

        default:
            return state;
    }
};
export default countriesReducer;
