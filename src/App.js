import React, { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(""); // State for error messages

  const fetchWeather = async () => {
    const API_KEY = "b8d585576ce603cb15444bf3aae527f4";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError("");
      } else {
        setError("City not found.");
        setWeatherData(null);
      }
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      setError("Error fetching weather data");
      setWeatherData(null);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (city.trim()) {
      await fetchWeather();
    }
  };

  return (
      <div>
        <header>
          <h1>Weather COMP3123</h1>
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Enter city name" value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </header>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {weatherData && <Weather data={weatherData} />}
      </div>
  );
}

export default App;
