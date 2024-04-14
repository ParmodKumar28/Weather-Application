// Import's
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import ApiService from '../Services/ApiService';
import { useParams } from 'react-router-dom';
import './WeatherPage.css';

// Weather Page functional component which fetch's particular city wetaher data and render's weather card.
const WeatherPage = () => {
  // Fetching params 
  const { lat, lon } = useParams();
  // State's
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Side Effect's
  useEffect(() => {
    // Calling API here to fetch weather for a particular city.
    const fetchWeatherData = async () => {
      try {
        const data = await ApiService.fetchWeather(lat, lon);
        // Setting state after fetching data
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [lat, lon]);

  // Returning JSX
  return (
    // Weather Page container
    <div className="">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          {/* Loader */}
          <div className="loader"></div>
        </div>
      ) : weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

// Exporting WeatherPage
export default WeatherPage;
