// Import's
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import ApiService from '../Services/ApiService';
import { useParams } from 'react-router-dom';

// Weather Page functional component which get data for particular city and then render's weather card for that data.
const WeatherPage = () => {
  // Extracting params latitude and longitude here
  const { lat, lon } = useParams();
  // State's
  const [weatherData, setWeatherData] = useState(null);

  // Side effect's to fetch city weather based on longitude and latitude 
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await ApiService.fetchWeather(lat, lon);
        // Setting state
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, [lat, lon]);

  // Returing JSX
  return (
    // Weather page container
    <div className="mx-auto max-w-lg">
      {/* If weather data loaded then rendering Weather Card componenet with weather data as prop's else showing loading */}
      {weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

// Exporting WeatherPage
export default WeatherPage;
