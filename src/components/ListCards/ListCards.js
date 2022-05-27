import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import SmallCard from "../smallCard";



function ListCard() {
    const selectedCity = useSelector((state) => state.currentlySelected);
    const { data } = useFetch({ url: `data/2.5/forecast/daily?lat=${selectedCity.lat}&lon=${selectedCity.lon}&cnt=5&appid=8a5e9515a6583a0a93a8e614d848ffb5&units=metric` });


    return ( 
        <div className="ListCard">
            <SmallCard />
        </div>
     );
}

export default ListCard;