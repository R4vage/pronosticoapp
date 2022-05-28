import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import SmallCard from "../SmallCard";



function ListCard() {
    const selectedCity = useSelector((state) => state.currentlySelected);
    const { data } = useFetch({ url: `data/2.5/onecall?lat=${selectedCity.lat}&lon=${selectedCity.lon}&cnt=5&appid=2a062aa21b035ce8da2c7c7700011d90&units=metric&exclude=current,minutely,hourly,alerts` });
    console.log(data)
    function toDate (date){
        const newDate = new Date(date*1000)
        let day = newDate.getDate()
        let month = newDate.getMonth()
        let dayMonth= day+"/"+month 
        
        return dayMonth
    }
    console.log(toDate(data?.daily[2].dt))

    return ( 
        <div className="ListCard">
             { data?.daily?.map( day => 
            <SmallCard day={`${toDate(day.dt)}`}/>
            )} 
        </div>
     );
}

export default ListCard;