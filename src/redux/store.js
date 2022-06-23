import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import allReducers from ".";

const midelwares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(...midelwares))
);
export default store;
