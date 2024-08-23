// src/utils/weatherApi.js
export const fetchWeatherData = async (city) => {
  const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    console.log(data); // Check if this logs the expected data
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; // Return null if the API call fails
  }
};
