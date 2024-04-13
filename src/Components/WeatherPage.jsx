// WeatherPage.jsx
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import ApiService from '../Services/ApiService';
import { useParams } from 'react-router-dom';

const WeatherPage = () => {
  const { lat, lon } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await ApiService.fetchWeather(lat, lon);
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    fetchWeatherData();
  }, [lat, lon]);

  return (
    <div className="mx-auto max-w-lg">
      {weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherPage;
