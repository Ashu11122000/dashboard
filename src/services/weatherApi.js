const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeather = async (city) => {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );

    if (!response.ok) {
        throw new Error("City not found");
    }

    return response.json();
};