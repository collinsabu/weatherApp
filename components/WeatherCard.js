import React from "react";
import Image from "next/image";

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return (
      <div className="bg-white dark:bg-darkBackground shadow-md rounded-lg p-6">
        <p className="text-lg text-gray-700 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  const {
    name = "City",
    sys = { country: "" },
    weather: weatherDetails = [],
    main = { temp: 0 },
  } = weather;
  const weatherDescription =
    weatherDetails[0]?.description || "No description available";
  const weatherIcon = weatherDetails[0]?.icon || "01d";

  return (
    <div className="text-center">
      <div className=" font-bold text-purple-400 flex justify-center items-center">
        <div className="text-[160px]">{Math.round(main.temp)}</div> <span className="pt-20 text-2xl">°C</span>
      </div>
      <h2 className="text-3xl font-bold text-white mt-0 ">
        {name}, {sys.country}
      </h2>
      <p className=" text-purple-400">
        {weatherDescription}
      </p>

    </div>
  );
};

export default WeatherCard;
