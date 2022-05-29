import { useImg } from "../../hooks/useImg";


function SmallCard(props) {
    const {day, icon, maxTemp, minTemp, hum} = props
    const { selectedImg } = useImg (icon)

    return ( 
        <div className="SmallCard">
            <h2>{day}<img src={selectedImg}/></h2>


        </div>
     );
}

export default SmallCard;