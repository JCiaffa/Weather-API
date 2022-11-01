import React from "react";
import { iconUrlFromCode } from "../services/weatherService";
import { UilWind, UilClouds, UilTemperature } from "@iconscout/react-unicons";

function DailyForecast({ title, items }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-start mt-6">
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
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;
