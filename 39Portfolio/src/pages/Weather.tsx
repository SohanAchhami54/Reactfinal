import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import type { Weather } from "../types";

const App = () => {
  const [city, setCity] = useState(
    localStorage.getItem("cityname") || "kathmandu"
  );
  const [inputcity, setInputCity] = useState("");
  const [data] = useFetch(city);

  useEffect(() => {
    localStorage.setItem("cityname", city);
  }, [city]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputcity.trim()) return;

    setCity(inputcity)
    setInputCity("")
  }

  return (
    <div className="min-h-screen bg-gray-700 text-neutral-100 p-4 sm:p-6 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
          This is Example of Axios.
        </h1>

        <h1 className="text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium break-words">
          City: {city.toUpperCase()}
        </h1>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-3"
        >
          <label htmlFor="city" className="text-lg">
            City:
          </label>

          <input
            type="text"
            id="city"
            value={inputcity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder="Enter the name of the city"
            className="border rounded-md outline-none focus:ring-2  py-2 px-3 w-full sm:max-w-sm text-white"
          />
        </form>

        {/* Weather Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <p className="bg-amber-700 rounded-md p-4 text-center">
            Coordinates: {data?.coord?.lon} , {data?.coord?.lat}
          </p>

          <p className="bg-amber-700 rounded-md p-4 text-center">
            Humidity: {data?.main?.humidity}
          </p>

          <p className="bg-amber-600 rounded-md p-4 text-center">
            Pressure: {data?.main?.pressure}
          </p>

          <p className="bg-amber-600 rounded-md p-4 text-center">
            Temperature:{" "}
            {data?.main?.temp
              ? (data.main.temp - 273.15).toFixed(1)
              : "--"}{" "}
            °C
          </p>

          <p className="bg-amber-600 rounded-md p-4 text-center">
            Sea Level: {data?.main?.sea_level ?? "N/A"}
          </p>
        </div>

        {/* City Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <p className="bg-gray-500 rounded-md p-4 text-center font-bold">
            City: {data?.name}
          </p>

          <p className="bg-gray-500 rounded-md p-4 text-center">
            Country: {data?.sys?.country}
          </p>

          <p className="bg-gray-500 rounded-md p-4 text-center">
            Sunrise: {data?.sys?.sunrise}
          </p>

          <p className="bg-gray-500 rounded-md p-4 text-center">
            Sunset: {data?.sys?.sunset}
          </p>

          <p className="bg-gray-500 rounded-md p-4 text-center">
            Wind Speed: {data?.wind?.speed}
          </p>
        </div>

        {/* Weather Description */}
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Weather Description
          </h2>

          <ul className="w-full max-w-lg flex flex-col gap-3">
            {data?.weather?.map((w) => (
               <li
                key={w.id}
                className="bg-gray-600 rounded-md p-4 shadow-md"
              >
                <span className="font-semibold">Description:</span>{" "}
                {w.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;