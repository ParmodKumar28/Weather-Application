// Import's
import React from 'react';

const WeatherCard = ({ data }) => {
  // Convert temperature from Kelvin to Celsius
  const temperature = Math.round(data.main?.temp - 273.15);
  const feelsLike = Math.round(data.main?.feels_like - 273.15);
  const minTemp = Math.round(data.main?.temp_min - 273.15);
  const maxTemp = Math.round(data.main?.temp_max - 273.15);
  const description = data.weather[0]?.description;
  const humidity = data.main?.humidity;
  const windSpeed = data.wind?.speed;
  const weatherIcon = `http://openweathermap.org/img/wn/${data.weather[0]?.icon}.png`;

  // Function to determine background image URL based on weather description
  const getBackgroundImage = () => {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return 'url(https://source.unsplash.com/featured/?sky)';
      case 'few clouds':
        return 'url(https://source.unsplash.com/featured/?cloud)';
      case 'scattered clouds':
        return 'url(https://source.unsplash.com/featured/?cloud)';
      case 'broken clouds':
        return 'url(https://source.unsplash.com/featured/?cloud)';
      case 'shower rain':
        return 'url(https://source.unsplash.com/featured/?rain)';
      case 'rain':
        return 'url(https://source.unsplash.com/featured/?rain)';
      case 'thunderstorm':
        return 'url(https://source.unsplash.com/featured/?thunderstorm)';
      case 'snow':
        return 'url(https://source.unsplash.com/featured/?snow)';
      case 'mist':
        return 'url(https://source.unsplash.com/featured/?fog)';
      default:
        return 'url(https://source.unsplash.com/featured/?weather)';
    }
  };

  // Function to determine text color based on weather description
  const getTextColor = () => {
    switch (description.toLowerCase()) {
      case 'clear sky':
      case 'few clouds':
        return 'text-yellow-700';
      case 'scattered clouds':
      case 'broken clouds':
        return 'text-gray-700';
      case 'shower rain':
      case 'rain':
        return 'text-blue-700';
      case 'thunderstorm':
        return 'text-purple-700';
      case 'snow':
        return 'text-white';
      case 'mist':
        return 'text-gray-500';
      default:
        return 'text-black';
    }
  };

  // Function to determine background color based on weather description
  const getBackgroundColor = () => {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return 'bg-blue-200'; // Blue background for clear sky
      case 'few clouds':
        return 'bg-gray-300'; // Gray background for few clouds
      case 'scattered clouds':
        return 'bg-gray-400'; // Light gray background for scattered clouds
      case 'broken clouds':
        return 'bg-gray-500'; // Dark gray background for broken clouds
      case 'overcast clouds':
        return 'bg-gray-400'; // Gray background for overcast clouds
      case 'shower rain':
        return 'bg-blue-500'; // Blue background for shower rain
      case 'rain':
        return 'bg-blue-700'; // Dark blue background for rain
      case 'thunderstorm':
        return 'bg-purple-700'; // Purple background for thunderstorm
      case 'snow':
        return 'bg-white'; // White background for snow
      case 'mist':
        return 'bg-gray-100'; // Light gray background for mist
      default:
        return 'bg-gray-200'; // Default background color
    }
  };

  // Inline style for background image
  const backgroundStyle = {
    backgroundImage: getBackgroundImage(),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  // If no data, then show loading
  if (!data) {
    return (
      // Weather card container with loader icon or animation
      <div className="flex justify-center items-center h-screen">
        {/* Loader icon or animation */}
        <i className="animate-spin h-10 w-10 rounded-full border-t-2 border-b-2 border-yellow-500"></i>
      </div>
    );
  }

  // Returning JSX
  return (
    // Weather card container with dynamic background image
    <div className="flex justify-center items-center h-screen" style={backgroundStyle}>
      <div className={`max-w-full rounded-lg overflow-hidden shadow-2xl ${getBackgroundColor()} bg-opacity-95 backdrop-filter p-8 m-4 transform transition-transform hover:scale-105 hover:shadow-xl`}>
        <div className="text-center">
          {/* Image */}
          <img src={weatherIcon} alt={description} className="w-24 h-24 mx-auto mb-4" />
          {/* Weather name */}
          <h2 className={`text-4xl font-bold mb-2 ${getTextColor()}`}>{data.name}</h2>
          {/* Temperature */}
          <div className="text-6xl font-bold mb-4 text-blue-900">{temperature}°C</div>
          {/* Description */}
          <p className={`text-2xl ${getTextColor()}`}>{description}</p>
          {/* Other details */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-xl text-blue-900">
            <div>
              <p className={getTextColor()}>Feels Like:</p>
              <p>{feelsLike}°C</p>
            </div>
            <div>
              <p className={getTextColor()}>Min Temperature:</p>
              <p>{minTemp}°C</p>
            </div>
            <div>
              <p className={getTextColor()}>Max Temperature:</p>
              <p>{maxTemp}°C</p>
            </div>
            <div>
              <p className={getTextColor()}>Humidity:</p>
              <p>{humidity}%</p>
            </div>
            <div>
              <p className={getTextColor()}>Wind Speed:</p>
              <p>{windSpeed} m/s</p>
            </div>

            <div>
              <p className={getTextColor()}>Cloudiness:</p>
              <p>{data.clouds.all}%</p>
            </div>
            <div>
              <p className={getTextColor()}>Pressure:</p>
              <p>{data.main.pressure} hPa</p>
            </div>
            <div>
              <p className={getTextColor()}>Visibility:</p>
              <p>{data.visibility} meters</p>
            </div>
            <div>
              <p className={getTextColor()}>Sunrise:</p>
              <p>{new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
            </div>
            <div>
              <p className={getTextColor()}>Sunset:</p>
              <p>{new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export WeatherCard
export default WeatherCard;
