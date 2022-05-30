import { combineReducers } from "redux";
import countriesReducer from "./countriesReducer";
import countryReducer from "./countryReducer";

const allReducers = combineReducers({
    countriesData: countriesReducer,
    countryData: countryReducer,
});

export default allReducers;
