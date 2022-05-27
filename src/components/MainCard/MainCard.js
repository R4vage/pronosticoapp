import { useSelector } from "react-redux";
import { useFetch } from "../../hooks/useFetch";
import { useImg } from "../../hooks/useImg";


function MainCard() {
    const selectedCity = useSelector((state) => state.currentlySelected);
    const { data } = useFetch({ url: `data/2.5/weather?lat=${selectedCity.lat}&lon=${selectedCity.lon}&appid=8a5e9515a6583a0a93a8e614d848ffb5&units=metric` });
    const { selectedImg } = useImg (data?.weather[0]?.icon)
    return (
    <div className="MainCard">
        <h2 className="MainCard--title">{selectedCity.name}</h2>
        <p className="MainCard--date">{Date()}</p>
        <img alt="weatherIcon" className="MainCard--icon" src={selectedImg}/>
    </div>  );
}

export default MainCard;

