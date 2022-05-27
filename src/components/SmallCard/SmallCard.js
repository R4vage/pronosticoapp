

function SmallCard(props) {
    const {day, icon, maxTemp, minTemp, hum} = props


    return ( 
        <div className="SmallCard">
            <h2>{day}</h2>
        </div>
     );
}

export default SmallCard;