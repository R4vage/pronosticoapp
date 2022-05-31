import { useImg } from "../../hooks/useImg";
import "./SmallCard.css"


function SmallCard(props) {
    const {day, icon, max, min, hum, press} = props
    const { selectedImg, maxTemp, minTemp, humidity, pressure } = useImg (icon)

    return ( 
        <div className="SmallCard">
            <h2>{day}</h2>
            <img src={selectedImg} className="SmallCard--img" alt="selectedImg"/>
            <div>
                <p><img src={maxTemp} alt="maxTemp"/>{max} °C</p>
                <p><img src={minTemp} alt="minTemp"/>{min} °C</p>
            </div>
            <div>
                <p><img src={humidity} alt="humidity"/>{hum} %</p>
                <p><img src={pressure} alt="pressure"/>{press} hp</p>
            </div>


        </div>
     );
}

export default SmallCard;