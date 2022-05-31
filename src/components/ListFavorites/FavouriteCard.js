import { useDispatch } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { useImg } from "../../hooks/useImg";
import { countSlice } from "../../store";

function FavouriteCard(props) {
    const { city } = props
    const { data } = useFetch({ url: `data/2.5/weather?lat=${city?.lat}&lon=${city?.lon}&appid=8a5e9515a6583a0a93a8e614d848ffb5&units=metric` });
    const { selectedImg, wind, feelsGood, feelsCold, feelsHot, cross  } = useImg (data?.weather[0]?.icon);
    const dispatch = useDispatch();
    function handleRemoveClick(city){ 
        dispatch(countSlice.actions.removeFavourite(city))
    }
    function handleCityClick(city){ 
        dispatch(countSlice.actions.setChangeSelected(city))
        window.scrollTo(0,0)
        
    } /* podria pasarlos a un custom, ya se agus, pero me escasea el tiempirijillo.  voy a entregar el proyecto a las 10 de la nocheee */
    return ( 
        <div className="FavouriteCard">
        <div className="FavouriteCard--container" onClick={()=>handleCityClick(city)}>
            <div>
            <img alt="weatherIcon" className="rowImg" src={selectedImg}/>
            <p>{city?.name}</p>
            </div>
            <div>
                <img src={(data?.main.feels_like<10)? feelsCold : (data?.main.feels_like>30)?feelsHot:feelsGood} alt="FeelsLike" className="MainCard--rowImg"/>{/* Sobre la hora se me ocurrio usar distintos iconos segun si hacia frio o calor. */}
                <p> {data?.main.feels_like} °C</p>
            </div>
            <div>
                <img src={wind} alt="wind"  className="rowImg"/>{/* Podria haber hecho un componente para estos divs, estan repetidos aca y en el mainCard, y siguen un pattern, pero me estoy quedando sin tiempo :D */}
                <p> {data?.wind.speed}  kph</p>
            </div>
        </div>
        <img onClick={()=>handleRemoveClick(city)} alt="x" src={cross} className="FavouriteCard--remove"/> 
        </div>
        
     );
}

export default FavouriteCard;