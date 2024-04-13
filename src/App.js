// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityTable from './Components/CityTable';
import WeatherPage from './Components/WeatherPage';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 text-white py-4 text-center">
          <h1 className="text-2xl font-bold">Weather Forecast App</h1>
        </header>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<CityTable />} />
            <Route path="/weather/:lat/:lon" element={<WeatherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
