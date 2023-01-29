import React from "react";
import WeatherCard from "../WeatherCard/WeatherCard";

const MainCard = ({ weatherData }) => {
  //console.log(weatherData);

  return <WeatherCard weatherData={weatherData} />;
};

export default MainCard;
