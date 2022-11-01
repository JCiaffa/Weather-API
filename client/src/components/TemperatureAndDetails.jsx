import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  unitLabel,
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">Current Conditions: </p>
        <p className="text-cyan-300 font-medium uppercase ml-2">{details}</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white ">
        <img src={iconUrlFromCode(icon)} alt="sunny" className="w-32" />
        <div className="flex flex-col justify-start  text-white text-sm">
          <div className="flex flex-row items-center">
            <UilSun size={18} className="mr-1" />
            <p className="font-light ml-1">
              Sunrise:
              <span className="font-medium ml-1">
                {formatToLocalTime(sunrise, timezone, "hh:mm a")}
              </span>
            </p>
          </div>

          <div className="flex flex-row items-center">
            <UilSunset size={18} className="mr-1" />
            <p className="font-light ml-1">
              Sunset:
              <span className="font-medium ml-1">
                {formatToLocalTime(sunset, timezone, "hh:mm a")}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <p className="text-5xl mr-2">{`${temp.toFixed()}°`}</p>
          <div className="flex flex-col text-white text-sm">
            <div className="flex flex-row items-center">
              <UilArrowUp size={18} className="mr-1" />
              <p className="font-light ml-1">
                High:
                <span className="font-medium ml-1">{`${temp_max.toFixed()}°${unitLabel}`}</span>
              </p>
            </div>
            <div className="flex flex-row items-center">
              <UilArrowDown size={18} className="mr-1" />
              <p className="font-light ml-1">
                Low:
                <span className="font-medium ml-1">{`${temp_min.toFixed()}°${unitLabel}`}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°${unitLabel}`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;
