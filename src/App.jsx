import React, { useState } from 'react';
import { fetchWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (err) {
      setError('City not found or invalid');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { fetchWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

// Save search history to localStorage
const saveSearchHistory = (city) => {
  const recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
  if (!recentSearches.includes(city)) {
    recentSearches.push(city);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }
};

// Fetch recent searches from localStorage
const getRecentSearches = () => {
  return JSON.parse(localStorage.getItem('recentSearches')) || [];
};

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    setRecentSearches(getRecentSearches());
  }, []);

  const handleSearch = async (city) => {
    setError(null);
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
      saveSearchHistory(city);
      setRecentSearches(getRecentSearches());  // Update recent searches
    } catch (err) {
      setError('City not found or invalid');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} recentSearches={recentSearches} />
      {error && <ErrorMessage message={error} />}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;
