import React, { useState } from "react";
import {
  UilSearch,
  UilLocationPoint,
  UilCelsius,
  UilFahrenheit,
} from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits, unitLabel, setUnitLabel }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    const selectedUnitLabel = e.currentTarget.value;

    if (units !== selectedUnit) setUnits(selectedUnit);
    if (units !== selectedUnitLabel) setUnitLabel(selectedUnitLabel);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => {
            setCity(e.currentTarget.value);
          }}
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="search for city..."
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          value="C"
          className="text-white transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          <UilCelsius />
        </button>
        <p className="text-white text-xl mx-1">/</p>
        <button
          name="imperial"
          value="F"
          className="text-white transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          <UilFahrenheit />
        </button>
      </div>
    </div>
  );
}

export default Inputs;
