import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import ThemeComponent from "../src/themeComponent/ThemeComponent";

ReactDOM.render(
    <React.StrictMode>
        <ThemeComponent>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeComponent>
    </React.StrictMode>,
    document.getElementById("root")
);
