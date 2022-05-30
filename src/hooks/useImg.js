import img01d from "../assets/Weather/01d.png"
import img01n from "../assets/Weather/01n.png"
import img02d from "../assets/Weather/02d.png"
import img02n from "../assets/Weather/02n.png"
import img04d from "../assets/Weather/04d.png"
import img04n from "../assets/Weather/04n.png"
import img9d from "../assets/Weather/09d.png"
import img10d from "../assets/Weather/10d.png"
import img11d from "../assets/Weather/11d.png"
import img13d from "../assets/Weather/13d.png"
import img50d from "../assets/Weather/50d.png"
import wind from "../assets/Weather/wind.png"
import minTemp from "../assets/Weather/minTemp.png"
import maxTemp from "../assets/Weather/maxTemp.png"
import avgTemp from "../assets/Weather/avgTemp.png"
import humidity from "../assets/Weather/humidity.png"
import pressure from "../assets/Weather/pressure.png"
import feelsHot from "../assets/Weather/feelsHot.png"
import feelsCold from "../assets/Weather/feelsCold.png"
import feelsGood from "../assets/Weather/feelsGood.png"
import windDir from "../assets/Weather/windDir.png"
import gitHub from "../assets/Weather/gitHub.png"
import linkedIn from "../assets/Weather/linkedIn.png"


export function useImg( icon ) { //No era necesario hacer un custom hook para esto pero bueno. Estas imagenes son mas grandes, que las que trae el fetch, y mas detalladas, para usar en el main card
    const imgList = {
        "01d": img01d,
        "01n": img01n,
        "02d": img02d,
        "02n": img02n,
        "03d": img02d,
        "03n": img02n,
        "04d": img04d,
        "04n": img04n,
        "09d": img9d,
        "10d": img10d,
        "11d": img11d,
        "13d": img13d,
        "50d": img50d,
    }
    const selectedImg = imgList[icon]
    return { selectedImg, wind, minTemp, maxTemp, avgTemp, humidity, pressure, feelsGood, feelsCold, feelsHot, windDir, gitHub, linkedIn };
  }