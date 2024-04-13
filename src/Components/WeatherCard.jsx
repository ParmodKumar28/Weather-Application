import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data) {
    return <p>Loading weather...</p>;
  }

  // Convert temperature from Kelvin to Celsius
  const temperature = Math.round(data.main?.temp - 273.15);
  const feelsLike = Math.round(data.main?.feels_like - 273.15);
  const minTemp = Math.round(data.main?.temp_min - 273.15);
  const maxTemp = Math.round(data.main?.temp_max - 273.15);
  const description = data.weather[0]?.description;
  const humidity = data.main?.humidity;
  const windSpeed = data.wind?.speed;
  const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0]?.icon}.png`;

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
      <div className="max-w-lg rounded-lg overflow-hidden shadow-lg bg-white p-8">
        <div className="text-center">
          <img src={weatherIcon} alt={description} className="w-24 h-24 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-2 text-blue-900">{data.name}</h2>
          <div className="text-6xl font-bold mb-4 text-blue-900">{temperature}°C</div>
          <p className="text-2xl text-blue-900">{description}</p>
          <div className="mt-8">
            <p className="text-xl text-blue-900">Feels Like: {feelsLike}°C</p>
            <p className="text-xl text-blue-900">Min Temperature: {minTemp}°C</p>
            <p className="text-xl text-blue-900">Max Temperature: {maxTemp}°C</p>
            <p className="text-xl text-blue-900">Humidity: {humidity}%</p>
            <p className="text-xl text-blue-900">Wind Speed: {windSpeed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
