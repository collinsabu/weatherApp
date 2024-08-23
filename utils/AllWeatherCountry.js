// src/utils/weatherApi.js
export const fetchWeatherData = async (city) => {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

  try {
    // Fetch current weather data
    const currentWeatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!currentWeatherResponse.ok) {
      const errorData = await currentWeatherResponse.json();
      console.error('Error fetching current weather data:', errorData);
      throw new Error(errorData.message);
    }

    const currentWeatherData = await currentWeatherResponse.json();

    return { currentWeather: currentWeatherData };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
