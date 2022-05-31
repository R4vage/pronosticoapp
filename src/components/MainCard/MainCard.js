import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { useImg } from "../../hooks/useImg";
import { countSlice } from "../../store";
import "./MainCard.css"


function MainCard() {
    const count = useSelector((state) => state.count);
    const selectedCity = useSelector((state) => state.currentlySelected);
    const favouriteList = useSelector((state) => state.favourites);
    const { data } = useFetch({ url: `data/2.5/weather?lat=${selectedCity.lat}&lon=${selectedCity.lon}&appid=8a5e9515a6583a0a93a8e614d848ffb5&units=metric` });
    const { selectedImg, wind, avgTemp, humidity, pressure, feelsGood, feelsCold, feelsHot, windDir  } = useImg (data?.weather[0]?.icon); /* no me arrepiento de hacer un custom hook para imagenes! */
    const dispatch = useDispatch();
    function containsObject(obj, list) { /* estoy bastante seguro que esto se puede resolver de alguna otra forma, mas sencilla, pero no logre que me tomara el objeto entero. Aparentemente, a pesar de ser identicos son instancias diferentes, solo identicas en su contenido */
        for (var i = 0; i < list.length; i++) {
            if ((list[i].lat === obj.lat) && (list[i].lon === obj.lon))  { /* Aca comparo el valo de latitud y longitud. Obviamente no hay casos alternativos, solo una ciudad posee ese valor, asi que funciona perfecto, solo que parece demasiado codigo para algo tan simple */
                return true
            }
        }
    }
    console.log(data)
    function handleAddClick(){ 
        dispatch(countSlice.actions.addFavourite(selectedCity)) 
    }
    
    function handleRemoveClick(){ 
        dispatch(countSlice.actions.removeFavourite(selectedCity))
    }

    return (
    <div className="MainCard" id="Main">
        <div className="MainCard--Left">
            <h2 className="MainCard--title">{selectedCity.name}, {data?.sys.country}</h2>
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
          {/*   <div>
                <img src={maxTemp} alt="maxTemp"  className="rowImg"/> * welp, we got a problem here, la temp min y max refiere a la menor temperatura detectable en este momento en un area, para el caso del fetch a current, y es la temperatura min y maxima del dia, para el caso de forecast. Por ahora queda agregado al forecast el dia actual 
            <p> Max. Temperature: {data?.main.temp_max}°C</p>
            </div>
            <div>
                <img src={minTemp} alt="minTemp"   className="rowImg"/>
                <p> Min. Temperature: {data?.main.temp_min}°C</p>
            </div> */}
            <div>
                <img src={wind} alt="wind"  className="rowImg"/>
                <p> Wind Speed: {data?.wind.speed}  kph</p>
            </div>
            <div>
                <img src={windDir} alt="windArrow" style={{transform: `rotate(-${data?.wind.deg}deg)`}}  className="MainCard--windDirIMg"/>
                <p>Wind Direction: {data?.wind.deg} °</p>
            </div>
            {(containsObject(selectedCity, favouriteList) !== true)? (count <5) &&
            <button className="favouritesButton" onClick={handleAddClick}>Add to favourites</button> : 
            <button className="favouritesButton" onClick={handleRemoveClick}>Remove from favourites</button>
            }
        </div>
    </div>  );
}

export default MainCard;

