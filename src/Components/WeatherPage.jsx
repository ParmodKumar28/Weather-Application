import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import ApiService from '../Services/ApiService';
import { useParams } from 'react-router-dom';
import './WeatherPage.css'; // Import the CSS file

const WeatherPage = () => {
  const { lat, lon } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await ApiService.fetchWeather(lat, lon);
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setLoading(false);
      }
    };
    fetchWeatherData();
  }, [lat, lon]);

  return (
    <div className="mx-auto max-w-lg">
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

export default WeatherPage;
