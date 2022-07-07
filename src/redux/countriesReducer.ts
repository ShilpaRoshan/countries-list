import { CountriesInitialState } from "../types";
import { Actions } from "./actiontypes";
import { Constants } from "./constants";
const initialState: CountriesInitialState = {
  countriesData: [],
  error: null,
  loading: false,
  filteredCountriesData: [],
  keyword: null,
  favoriteCountries: [],
};
const countriesReducer = (state = initialState, action: Actions | any) => {
  switch (action.type) {
    case Constants.FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Constants.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countriesData: action.payload,
        loading: false,
      };
    case Constants.FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case Constants.FILTER_COUNTRIES:
      const keyword = action.payload;
      const result = state.countriesData.filter((country) =>
        country.name.common.toLowerCase().includes(keyword)
      );
      return {
        ...state,
        filteredCountriesData: result,
        keyword: keyword,
      };

    case Constants.ADD_FAVROITE_COUNTRIES: {
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
      console.log("SORT_COUNTRIES_NAME");
      const sortedArray = [...state.countriesData].sort((firstEl, secondEl) => {
        if (firstEl.name.common < secondEl.name.common) {
          return -1;
        }
        if (firstEl.name.common > secondEl.name.common) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        countriesData: sortedArray,
      };
    }
    case "SORT_COUNTRIES_REGION": {
      const sortedArray = [...state.countriesData].sort((firstEl, secondEl) => {
        if (firstEl.region < secondEl.region) {
          return -1;
        }
        if (firstEl.region > secondEl.region) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        countriesData: sortedArray,
      };
    }
    case "SORT_COUNTRIES_POPULATION": {
      console.log("SORT_COUNTRIES_POPULATION");
      const sortedArray = [...state.countriesData].sort(
        (firstEl, secondEl) => secondEl.population - firstEl.population
      );

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
