import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CityTable from "./Components/CityTable";
import WeatherPage from "./Components/WeatherPage";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <div className="relative bg-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-blue-500 text-white py-4 text-center z-50">
          <h1 className="text-2xl font-bold">Weather Forecast App</h1>
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
