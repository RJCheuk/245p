import React, { useState, useEffect } from "react";
import './weather.css';  // 引入样式文件

function Weather() {
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [emptyData, setEmptyData] = useState(false);
  const [data, setData] = useState(null);

  const lat = "33.7455"; // Latitude for Tustin, CA
  const lon = "-117.8265"; // Longitude for Tustin, CA
  const APIkey = "5bec114aba534e516e8cc8b5fa5dc129"; 

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`
    )
      .then((response) => response.json())
      .then((actualData) => {
        if (actualData && actualData.main) {
          setLoadingData(false);
          setError(false);
          setData(actualData);
        } else {
          setLoadingData(false);
          setError(false);
          setEmptyData(true);
        }
      })
      .catch((err) => {
        setLoadingData(false);
        setError(true);
        console.error("Error fetching data:", err);
      });
  }, []);

  const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2);

  return (
    <div className="weather-container">
      {loadingData && <p>Loading data...</p>}
      {error && <p>Error fetching data. Please try again later.</p>}
      {!loadingData && !error && data && (
        <div className="weather-info">
          <h2>Weather for {data.name}</h2>
          <p className="temperature">
            Temperature: {kelvinToCelsius(data.main.temp)}°C
          </p>
          <p>Min Temp: {kelvinToCelsius(data.main.temp_min)}°C</p>
          <p>Max Temp: {kelvinToCelsius(data.main.temp_max)}°C</p>
          <p>
            Weather: {data.weather[0].main} - {data.weather[0].description}
          </p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
          <p>Wind Direction: {data.wind.deg}°</p>
        </div>
      )}
      {emptyData && <p>No data available for the requested location.</p>}
    </div>
  );
}

export default Weather;


