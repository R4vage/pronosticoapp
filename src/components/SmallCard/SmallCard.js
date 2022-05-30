import { useImg } from "../../hooks/useImg";
import "./SmallCard.css"


function SmallCard(props) {
    const {day, icon, maxTemp, minTemp, hum} = props
    const { selectedImg } = useImg (icon)

    return ( 
        <div className="SmallCard">
            <h2>{day}</h2>
            <img src={selectedImg} className="SmallCard--img"/>


        </div>
     );
}

export default SmallCard;