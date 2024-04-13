// ApiService.js
const API_KEY = "70d197d4860d389e54f0f803646fd500";

const ApiService = {
  fetchAllCities: async (searchTerm) => {
    const response = await fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?limit=20&q=${searchTerm}`
    );
    const data = await response.json();
    return data.results; // Return just the array of cities
  },
  fetchWeather: async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  },
};

export default ApiService;
