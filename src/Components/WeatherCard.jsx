import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data) {
    return <p>Loading weather...</p>;
  }

  const temperature = Math.round(data.main?.temp - 273.15); // Convert temperature from Kelvin to Celsius
  const description = data.weather[0]?.description;
  const humidity = data.main?.humidity;
  const windSpeed = data.wind?.speed;

  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-6 m-4">
      <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
      <div className="text-xl mb-2">Temperature: {temperature}°C</div>
      <div className="text-xl mb-2">Description: {description}</div>
      <div className="text-xl mb-2">Humidity: {humidity}%</div>
      <div className="text-xl mb-2">Wind Speed: {windSpeed} m/s</div>
    </div>
  );
};

export default WeatherCard;
