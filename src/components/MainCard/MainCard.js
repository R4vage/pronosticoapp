import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { useImg } from "../../hooks/useImg";
import "./MainCard.css"


function MainCard() {
    const selectedCity = useSelector((state) => state.currentlySelected);
    const { data } = useFetch({ url: `data/2.5/weather?lat=${selectedCity.lat}&lon=${selectedCity.lon}&appid=8a5e9515a6583a0a93a8e614d848ffb5&units=metric` });
    const { selectedImg, wind, minTemp, maxTemp, avgTemp, humidity, pressure, feelsGood, feelsCold, feelsHot, windDir  } = useImg (data?.weather[0]?.icon);
    console.log(data);
    return (
    <div className="MainCard">
        <div className="MainCard--Left">
            <h2 className="MainCard--title">{selectedCity.name}</h2>
            <p className="MainCard--date">{Date()}</p>
            <img alt="weatherIcon" className="MainCard--icon" src={selectedImg}/>
        </div>
        <div className="MainCard--Right">   
            
            <div>
                <img src={(data?.main.feels_like<10)? feelsCold : (data?.main.feels_like>30)?feelsHot:feelsGood} alt="FeelsLike" className="MainCard--rowImg"/>{/* Sobre la hora se me ocurrio usar distintos iconos segun si hacia frio o calor. */}
                <p> Feels Like: {data?.main.feels_like}</p>
            </div>
            
            <div>
                <img src={humidity} alt="humidity" className="rowImg"/>
                <p> Humidity: {data?.main.humidity}%</p>
            </div>
            <div>
                <img src={pressure} alt="pressure"  className="rowImg"/>
                <p> Pressure: {data?.main.pressure}hp</p>
            </div>
            <div>
                <img src={avgTemp} alt="avgTemp" className="rowImg"/>
                <p> Avg. Temperature: {data?.main.temp}°C</p>
            </div>
            <div>
                <img src={maxTemp} alt="maxTemp"  className="rowImg"/>
                <p> Max. Temperature: {data?.main.temp_max}°C</p>
            </div>
            <div>
                <img src={minTemp} alt="minTemp"   className="rowImg"/>
                <p> Min. Temperature: {data?.main.temp_min}°C</p>
            </div>
            <div>
                <img src={wind} alt="wind"  className="rowImg"/>
                <p> Wind Speed: {data?.wind.speed}  kph</p>
            </div>
            <div>
                <img src={windDir} alt="windArrow" style={{transform: `rotate(-${data?.wind.deg}deg)`}}  className="MainCard--windDirIMg"/>
                <p>Wind Direction: {data?.wind.deg} °</p>
            </div>


            
        </div>
    </div>  );
}

export default MainCard;

