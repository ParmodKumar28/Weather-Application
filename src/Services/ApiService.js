// API'S and API_KEY is here and all api's are called here
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const ApiService = {
  fetchAllCities: async (searchTerm, offset = 0, limit = 100) => {
    const response = await fetch(
      `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?offset=${offset}&limit=${limit}&q=${searchTerm}`
    );
    const data = await response.json();
    return data.results;
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
