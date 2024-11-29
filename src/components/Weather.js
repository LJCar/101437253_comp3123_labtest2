import React from "react";

function Weather({ data }) {
    const { name, weather, main } = data;

    const temperatureCelsius = (main.temp - 273.15).toFixed(2);

    return (
        <div>
            <h2>Weather in {name}</h2>
            <div>
                <img
                    src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                    alt={weather[0].main}
                />
                <p>{weather[0].description}</p>
            </div>
            <p>Temperature: {temperatureCelsius}°C</p>
        </div>
    );
}

export default Weather;