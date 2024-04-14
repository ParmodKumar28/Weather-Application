import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
import CityTable from "./Components/CityTable";
import WeatherPage from "./Components/WeatherPage";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <div className="relative bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-blue-500 text-white py-4 text-center z-50">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <FontAwesomeIcon icon={faCloudSun} className="text-4xl mr-2 animate-pulse" /> Weather Forecast App
            </h1>
          </Link>
        </header>

        {/* Route's */}
        <div className="relative z-0">
          <Routes>
            {/* CityTable route */}
            <Route path="/" element={<CityTable />} />
            {/* Weather Page route */}
            <Route path="/weather/:lat/:lon" element={<WeatherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
