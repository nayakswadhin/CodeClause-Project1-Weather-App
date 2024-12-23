"use client";

import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { WeatherCard } from "@/components/WeatherCard";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [city, setCity] = useState("");
  const [searchedCity, setSearchedCity] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [rain, setRain] = useState("");
  const API_KEY = "f1884b19b621a23c4476200b111774f7";
  const handleSearch = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      )
      .then((res) => {
        setSearchedCity(res.data.name);
        setHumidity(res.data?.main?.humidity || 0);
        setTemperature(res.data?.main?.temp - 273.15 || 0);
        setRain(res.data.weather[0]?.description || "No data found");
        setVisibility(res.data.visibility / 1000 || 0);
        setWindSpeed(res.data.wind.speed * 3.6 || 0);
      })
      .catch((e) => {
        console.log("this is executed");
        toast.error(
          "City not found. Please check the city name and try again.",
          {
            duration: 2000,
            position: "top-center",
            style: {
              background: "#FF4B4B",
              color: "#fff",
              padding: "16px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: "500",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#FF4B4B",
            },
          }
        );
        console.log(e);
      });
  };

  return (
    <main className="min-h-screen p-4 md:p-8">
      <Toaster
        toastOptions={{
          className: "",
          style: {
            maxWidth: "500px",
          },
        }}
      />
      <div className="max-w-5xl mx-auto space-y-8 pt-12">
        <div className="text-center space-y-4 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Weather Forecast
          </h1>
          <p className="text-blue-100">
            Enter a city name to get the current weather
          </p>
        </div>

        <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />

        {searchedCity && (
          <WeatherCard
            city={searchedCity}
            temp={temperature}
            humidity={humidity}
            windspeed={windSpeed}
            visibility={visibility}
            rainChance={rain}
          />
        )}
      </div>
    </main>
  );
}
