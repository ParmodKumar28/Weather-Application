// Import'ss
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faWind, faCloud, faThermometerHalf, faEye, faCloudSun, faSun } from '@fortawesome/free-solid-svg-icons';

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

  // Card component for displaying weather details
  const WeatherDetailCard = ({ title, value, icon }) => (
    <div className={`bg-gray-200 bg-opacity-95 rounded-lg shadow-lg p-4 text-center flex-1 mr-4 mb-4 hover:scale-110 transition-all`}>
      <FontAwesomeIcon icon={icon} className="text-xl text-gray-700 mb-2" />
      <h3 className={`text-lg font-semibold mb-2 ${getTextColor()}`}>{title}</h3>
      <p className={`text-xl ${getTextColor()}`}>{value}</p>
    </div>
  );

  // Returning JSX
  return (
    // Weather card container with dynamic background image
    <div className="w-full flex justify-center min-h-screen h-auto" style={backgroundStyle}>
      <div className={`max-w-full rounded-lg overflow-hidden shadow-2xl ${getBackgroundColor()} bg-opacity-35 backdrop-filter p-8 m-4 transform transition-transform hover:scale-100 hover:shadow-xl flex flex-col items-center`}>
        <div className="text-center mb-8">
          {/* Image */}
          <img src={weatherIcon} alt={description} className="w-24 h-24 mx-auto mb-4" />
          {/* Weather name */}
          <h2 className={`text-5xl font-bold mb-2 ${getTextColor()}`}>{data.name}</h2>
          {/* Temperature */}
          <div className="text-8xl font-bold mb-4 text-blue-900">{temperature}°C</div>
          {/* Description */}
          <p className={`text-6xl ${getTextColor()}`}>{description}</p>
        </div>
        {/* Details */}
        <div className="flex flex-wrap justify-around w-full">
          {/* Temperature */}
          <WeatherDetailCard title="Feels Like" value={`${feelsLike}°C`} icon={faThermometerHalf} />
          <WeatherDetailCard title="Min Temperature" value={`${minTemp}°C`} icon={faThermometerHalf} />
          <WeatherDetailCard title="Max Temperature" value={`${maxTemp}°C`} icon={faThermometerHalf} />
          {/* Humidity */}
          <WeatherDetailCard title="Humidity" value={`${humidity}%`} icon={faTint} />
          {/* Wind Speed */}
          <WeatherDetailCard title="Wind Speed" value={`${windSpeed} m/s`} icon={faWind} />
          {/* Additional details */}
          <WeatherDetailCard title="Cloudiness" value={`${data.clouds.all}%`} icon={faCloud} />
          <WeatherDetailCard title="Pressure" value={`${data.main.pressure} hPa`} icon={faCloudSun} />
          <WeatherDetailCard title="Visibility" value={`${data.visibility} meters`} icon={faEye} />
          <WeatherDetailCard title="Sunrise" value={new Date(data.sys.sunrise * 1000).toLocaleTimeString()} icon={faSun} />
          <WeatherDetailCard title="Sunset" value={new Date(data.sys.sunset * 1000).toLocaleTimeString()} icon={faSun} />
        </div>
      </div>
    </div>
  );
};

// Export WeatherCard
export default WeatherCard;
