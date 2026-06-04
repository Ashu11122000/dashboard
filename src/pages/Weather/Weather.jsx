import { useState } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Loader from "../../components/ui/Loader";
import { getWeather } from "../../services/weatherApi";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Weather Application
        </h1>

        <div className="flex gap-3 mb-6">
          <Input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <Button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Search
          </Button>
        </div>

        {loading && <Loader />}

        {error && <p className="text-red-500 text-center">{error}</p>}

        {weather && (
          <div className="bg-gray-100 rounded-lg p-6 mt-4">
            <h2 className="text-2xl font-bold mb-4">
              {weather.location.name}, {weather.location.country}
            </h2>

            <p>
              <strong>Temperature:</strong> {weather.current.temp_c}°C
            </p>

            <p>
              <strong>Feels Like:</strong> {weather.current.feelslike_c}°C
            </p>

            <p>
              <strong>Humidity:</strong> {weather.current.humidity}%
            </p>

            <p>
              <strong>Wind Speed:</strong> {weather.current.wind_kph} km/h
            </p>

            <p>
              <strong>Condition:</strong> {weather.current.condition.text}
            </p>

            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
              className="mt-4"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
