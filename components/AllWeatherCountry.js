// src/components/AllWeatherCountry.js
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchWeatherData } from '@/utils/AllWeatherCountry';

const AllWeatherCountry = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cities = [
      'Abuja,Nigeria',
      'London,UK',
      'Beijing,China',
      'New York,US',
    ];

    const fetchAllWeatherData = async () => {
      try {
        const weatherPromises = cities.map(city => fetchWeatherData(city));
        const results = await Promise.all(weatherPromises);

        // Check if any of the results are null (indicating an error)
        if (results.some(result => result === null)) {
          throw new Error('One or more weather fetches failed.');
        }

        setWeatherData(results);
      } catch (error) {
        console.error("Error fetching all weather data:", error.message);
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchAllWeatherData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {weatherData.map((data, index) => {
        if (!data) return null; // Skip if data is null

        const { currentWeather } = data;
        return (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center"
          >
            <h3 className="text-xl font-bold text-primary dark:text-white">
              {currentWeather.name}
            </h3>
            <p className="text-lg font-semibold text-secondary">
              {Math.round(currentWeather.main.temp)}°C
            </p>
            <Image
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt={currentWeather.weather[0].description}
              width={80}
              height={80}
              priority
            />
            <p className="text-gray-700 dark:text-gray-300">
              {currentWeather.weather[0].description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AllWeatherCountry;
