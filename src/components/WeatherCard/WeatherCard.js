import React from "react";
//import { Slide } from "@mui/material";
import "../../App.css";

const WeatherCard = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <>
      <div
        className="group"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            textAlign: "center",
          }}
          src={`https://openweathermap.org/img/wn/${weatherData[0][0].icon}@2x.png`}
          alt="weather condition symbol"
        />

        <h1>
          <span style={{ color: "blue", textAlign: "center" }}>
            {weatherData[0][0].description.toUpperCase()}
          </span>
        </h1>
      </div>
      <div
        style={{
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          {weatherData[2].temp.toFixed()} °F
        </p>
      </div>

      <div className="box_container">
        <div className="box">
          <p>Humidity</p>
          <h1>{weatherData[2].humidity.toFixed()} %</h1>
        </div>

        <div className="box">
          <p>Feels Like</p>
          <h1>{weatherData[2].feels_like.toFixed()} °F</h1>
        </div>

        <div className="box">
          <p>Wind</p>
          <h1>{weatherData[3].speed.toFixed()} mph</h1>
        </div>

        <div className="box">
          <p>High</p>
          <h1>{weatherData[2].temp_max.toFixed()} °F</h1>
        </div>

        <div className="box">
          <p>Low</p>
          <h1>{weatherData[2].temp_min.toFixed()} °F</h1>
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
