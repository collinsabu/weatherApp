"use client"

import { useEffect, useState } from 'react';
import WeatherCard from '../components/WeatherCard';
import SearchBar from '../components/SearchBar';
import { fetchWeatherData } from '../utils/weatherApi';
import AllWeatherCountry from '@/components/AllWeatherCountry';
import NavBar from '../components/NavBar'; // Import the NavBar component

const HomePage = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentCity, setCurrentCity] = useState('Cardiff');

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      const weatherData = await fetchWeatherData(currentCity);
      if (weatherData) {
        setWeather(weatherData);
      } else {
        setError(`Failed to fetch weather data for ${currentCity}`);
      }

      setLoading(false);
    };

    fetchWeather();
  }, [currentCity]);

  const handleSearch = (city) => {
    setCurrentCity(city);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: 'url(/weather.webp)' }}>
      <NavBar onSearch={handleSearch} /> {/* Include the NavBar component */}
      
      <div className="  rounded-lg shadow-lg w-full max-w-lg mx-auto">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
      
      <div className="mt-8 w-full">
        <AllWeatherCountry />
      </div>
    </div>
  );
};

export default HomePage;
