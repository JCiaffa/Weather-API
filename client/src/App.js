import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import HourlyForecast from "./components/HourlyForecast";
import DailyForecast from "./components/DailyForecast";

function App() {
  const [query, setQuery] = useState({ q: "spokane" });
  const [units, setUnits] = useState("metric");
  const [unitLabel, setUnitLabel] = useState("C");
  const [weather, setWeather] = useState(null);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const cutoff = units === "metric" ? 30 : 60;
    if (weather.temp <= cutoff) return " from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units, unitLabel]);

  return (
    <div className=" bg-slate-700 h-screen">
      <div
        className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl ${formatBackground()}`}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs
          setQuery={setQuery}
          units={units}
          setUnits={setUnits}
          setUnitLabel={setUnitLabel}
        />

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <div className="flex flex-col justify-between">
              <TemperatureAndDetails weather={weather} unitLabel={unitLabel} />
              <HourlyForecast
                title="Hourly Forecast"
                items={weather.hourly}
                unitLabel={unitLabel}
              />
              <DailyForecast title="Daily Forecast" items={weather.daily} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
