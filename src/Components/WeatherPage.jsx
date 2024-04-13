// WeatherPage.js
import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';
import ApiService from '../Services/ApiService';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    <Container>
      {weatherData ? (
        <WeatherCard data={weatherData} />
      ) : (
        <p>Loading weather...</p>
      )}
    </Container>
  );
};

export default WeatherPage;
