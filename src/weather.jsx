import axios from "axios";
import { useState } from "react";
import { FaTint, FaWind } from "react-icons/fa";

const Weather = ()=>{
    const [city,setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading,setLoading] = useState(false);

    const getWeather = async (e) => {
        e.preventDefault(); 
        if (!city) return;
      
        setLoading(true);
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a1ee8001bccb8441cec7b125bc7e2362`;

          const response = await axios.get(url);
          console.log(response);
          setWeather(response.data); 
        } catch (error) {
          alert("City not found!");
        } finally {
          setLoading(false);
        }
      };
    return(
        <div style={{ textAlign: "center", padding: "50px", fontFamily: "Arial" }}>
      <h1>Weather App</h1>
      
      <form onSubmit={getWeather}>
        <input 
          style={{ padding: "10px", width: "200px" }}
          placeholder="Enter City Name..." 
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button type="submit" style={{ padding: "10px",backgroundColor:"yellowgreen" }}>Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {weather && !loading && (
        <div style={{ marginTop: "30px", border: "1px solid #ccc", display: "inline-block", padding: "20px", borderRadius: "10px" }}>
          <h2>{weather?.name}, {weather?.sys?.country}</h2>
          <img 
      src={`https://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`} 
      alt={weather?.weather?.[0]?.description} 
    />
              <h1>{weather?.main?.temp ? Math.round(weather.main.temp) : "--"}°C</h1>
              <p>{weather?.weather?.[0]?.description}</p>
          
          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <span><FaTint /> {weather?.main?.humidity}%</span>
            <span><FaWind /> {weather?.wind?.speed} m/s</span>
          </div>
        </div>
      )}
    </div>
    )
}

export default Weather;

