import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import SmallCard from "../SmallCard";
import "./ListCards.css"



function ListCards() {
    const selectedCity = useSelector((state) => state.currentlySelected);
    const { data } = useFetch({ url: `data/2.5/onecall?lat=${selectedCity.lat}&lon=${selectedCity.lon}&cnt=5&appid=2a062aa21b035ce8da2c7c7700011d90&units=metric&exclude=current,minutely,hourly,alerts` });
    function toDate (date){
        const newDate = new Date(date*1000)
        let day = newDate.getDate()
        let month = newDate.getMonth()+1
        let dayMonth= day+"/"+month 
        return dayMonth
    }
    console.log(data)
    return ( 
        <div className="ListCards">
             { data?.daily?.map( day => 
            <SmallCard key={day?.dt} day={`${toDate(day.dt)}`} icon={day?.weather[0].icon} max={day?.temp.max} min={day?.temp.min} hum={day?.humidity} press={day?.pressure}/>
            )} 
        </div>
     );
}

export default ListCards;