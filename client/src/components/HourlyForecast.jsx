import React from "react";
import { iconUrlFromCode } from "../services/weatherService";
import { UilWind, UilClouds, UilTemperature } from "@iconscout/react-unicons";

function HourlyForecast({ title, items, unitLabel }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-3">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              alt="sunny"
              className="my-1 w-14"
            />
            <div className="flex font-light text-sm items-center justify-center">
              <UilTemperature size={18} className="mr-1" />
              Temp:
              <span className="font-medium ml-1">{`${item.temp.toFixed()}°${unitLabel}`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilWind size={18} className="mr-1" />
              Wind:
              <span className="font-medium ml-1">{`${item.wind.toFixed()}`}</span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilClouds size={18} className="mr-1" />
              Clouds:
              <span className="font-medium ml-1">{`${item.clouds.toFixed()}%`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;
