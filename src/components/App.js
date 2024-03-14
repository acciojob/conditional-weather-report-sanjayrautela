// App.js
import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

function App() {
  // State to hold weather data
  const [weatherData, setWeatherData] = useState({ temperature: 0, conditions: "" });

  useEffect(() => {
    // Simulate fetching weather data
    // In a real app, this would fetch data from an API
    const fetchWeatherData = () => {
      // Simulated weather data
      const fetchedData = { temperature: 25, conditions: "Sunny" };
      setWeatherData(fetchedData);
    };

    fetchWeatherData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="App">
      <WeatherDisplay weather={weatherData} />
    </div>
  );
}

export default App;
