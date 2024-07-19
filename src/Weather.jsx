import {useEffect, useState} from 'react';
import clearSkyIcon from "../public/img/01d.png";
import fewcloudsIcon from "../public/img/02d.png";
import scatteredcloudsIcon from "../public/img/03d.png";
import brokencloudsIcon from "../public/img/04d.png";
import showerrainIcon from "../public/img/09d.png";
import rainIcon from "../public/img/10d.png";
import thunderstromIcon from "../public/img/11d.png";
import snowIcon from "../public/img/13d.png";
import mistIcon from "../public/img/50d.png";
import clearSkyNightIcon from "../public/img/01n.png";
import fewcloudsNightIcon from "../public/img/02n.png";
import rainNightIcon from "../public/img/10n.png";
import searchIcon from "../public/img/search.png";
import humidityIcon from "../public/img/humidity.png";
import windIcon from "../public/img/wind.png";
import "./weather.css";

const WeatherDetails = ({icon,temp,city,country,lat,long,humidity,wind}) => {
    return(<>
        <div className='clear'>
            <img src={icon} alt="clear" />
        </div>
        <div className='temp'>{temp}°c</div>
        <div className='location'>{city}</div>
        <div className='country'>{country}</div>
        <div className="cord">
            <div>
                <span className="lat">Latitude</span>
                <span>{lat}</span>
            </div>
            <div>
                <span className="long">Longitude</span>
                <span>{long}</span>
            </div>
        </div>
        <div className='data-container'>
            <div className='element'>
                <img src={humidityIcon} alt="humidity" className='icon1'/>
                <div className="data">
                    <div className="humidity-percent">{humidity}%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className='element'>
                <img src={windIcon} alt="wind" className='icon2'/>
                <div className="data">
                    <div className="wind-percent">{wind} km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </>)
};
export const Weather = () => {
    const [icon,setIcon]=useState(snowIcon);
    const [temp,setTemp]=useState(0);
    const [city,setCity]=useState("");
    const [country,setCountry]=useState("");
    const [lat,setLat]=useState(0);
    const [long,setLong]=useState(0);
    const [humidity,setHumidity]=useState(0);
    const [wind,setWind]=useState(0);
    let api_key="fed5a1545c30723494b74eb870475d8f";
    const [text,setText]=useState("Salem");
    const [loading,setLoading]=useState(false);
    const [cityNotFound,setCityNotFound]=useState(false);
    const [error,setError]=useState(null);

    const weatherIconMap={
        "01d":clearSkyIcon,
        "02d":fewcloudsIcon,
        "03d":scatteredcloudsIcon,
        "04d":brokencloudsIcon,
        "09d":showerrainIcon,
        "10d":rainIcon,
        "11d":thunderstromIcon,
        "13d":snowIcon,
        "50d":mistIcon,
        "01n":clearSkyNightIcon,
        "02n":fewcloudsNightIcon,
        "03n":scatteredcloudsIcon,
        "04n":brokencloudsIcon,
        "09n":showerrainIcon,
        "10n":rainNightIcon,
        "11n":thunderstromIcon,
        "13n":snowIcon,
        "50n":mistIcon,
    }

    const search=async () =>{
        setLoading(true);
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;
        try{
            let res=await fetch(url);
            let data = await res.json();
            //console.log(data);
            if(data.cod=== "404"){
                console.error("City not Found");
                setCityNotFound(true);
                setLoading(false);
                return;
            }

            setHumidity(data.main.humidity);
            setWind(data.wind.speed);
            setTemp(Math.floor(data.main.temp));
            setCity(data.name);
            setCountry(data.sys.country);
            setLat(data.coord.lat);
            setLong(data.coord.lon);
            const weatherIconCode = (data.weather[0].icon);
            setIcon(weatherIconMap[weatherIconCode] || clearSkyIcon);
            setCityNotFound(false);

        }catch(error){
            console.error("An error occured:",error.message);
            setError("An error occurred while fetching weather data.");
        }finally{
            setLoading(false);
        }
    }
    const handleCity=(e) =>{
        setText(e.target.value);
    }
    const handleKeyDown=(e) =>{
        if(e.key === "Enter"){
            search();
        }
    }
    useEffect(function(){
        search();
    },[]);
  return (
    <>
    <div className='container'>
        <div className='input-container'>
            <input type="text" value={text}
            onKeyDown={handleKeyDown} name="" onChange={handleCity} className='cityInput' id="" placeholder='Search City'/>
            <div className='search-icon' onClick={()=>search()}>
                <img src={searchIcon} alt="search" />
            </div>
        </div>
        {!loading && !cityNotFound && <WeatherDetails icon={icon} humidity={humidity} wind={wind} lat={lat} long={long} 
        temp={temp} country={country} city={city}/>}

        {loading && <div className="loading-message">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {cityNotFound && <div className="city-not-found">City not found</div>}

        <p className="copyright">Designed by <span>Gopi ♥ Janani</span></p>
    </div>
    </>
  )
}
 