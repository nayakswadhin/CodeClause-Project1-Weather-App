"use client";

import { Cloud, Wind, Droplets, Thermometer, Eye, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface WeatherCardProps {
  city: string;
  temp: number;
  humidity: number;
  windspeed: number;
  visibility: number;
  rainChance: string;
}

export function WeatherCard({
  city,
  temp,
  humidity,
  windspeed,
  visibility,
  rainChance,
}: WeatherCardProps) {
  const weatherData = {
    temp: temp.toFixed(2),
    humidity: humidity.toFixed(2),
    windSpeed: windspeed.toFixed(2),
    visibility: visibility.toFixed(2),
    rainChance: rainChance.charAt(0).toUpperCase() + rainChance.slice(1),
  };

  const cards = [
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Temperature",
      value: `${weatherData.temp}°C`,
      color: "from-orange-400 to-red-400",
      bgLight: "bg-orange-50",
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Humidity",
      value: `${weatherData.humidity}%`,
      color: "from-blue-400 to-cyan-400",
      bgLight: "bg-blue-50",
      animation: "animate-float",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Rain Chance",
      value: `${weatherData.rainChance}`,
      color: "from-indigo-400 to-purple-400",
      bgLight: "bg-indigo-50",
      animation: "animate-float",
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Wind Speed",
      value: `${weatherData.windSpeed} km/h`,
      color: "from-teal-400 to-green-400",
      bgLight: "bg-teal-50",
      animation: "animate-spin-slow",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Visibility",
      value: `${weatherData.visibility} km`,
      color: "from-pink-400 to-rose-400",
      bgLight: "bg-pink-50",
    },
  ];

  return (
    <Card className="p-8 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md border-none rounded-2xl shadow-2xl">
      <div className="relative mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-br from-purple-600 to-blue-600 text-transparent bg-clip-text tracking-tight capitalize">
            {city}
          </h2>
          <div className="inline-block">
            <p className="text-gray-500 px-4 py-1 rounded-full bg-gray-100/80 text-sm font-medium">
              Current Weather
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={card.title}
            className={`relative group rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 ${card.bgLight}`}
            style={{
              animationDelay: `${index * 100}ms`,
              perspective: "1000px",
            }}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />

            <div className="relative p-6 flex flex-col items-center group-hover:text-white transition-colors duration-300">
              <div className={`mb-4 ${card.animation || ""}`}>{card.icon}</div>
              <p className="text-sm font-medium mb-2">{card.title}</p>
              <p className="text-2xl font-bold">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
