import React from 'react';

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{weatherData.name}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;
const WeatherForecast = ({ forecastData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      {forecastData.list.map((day, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
          <p className="font-bold">{new Date(day.dt * 1000).toLocaleDateString()}</p>
          <p>High: {day.temp.max}°C</p>
          <p>Low: {day.temp.min}°C</p>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};
