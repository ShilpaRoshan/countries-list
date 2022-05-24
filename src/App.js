import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Country from "./components/Country";
import Home from "./components/Home";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/country/:countryname" element={<Country />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
