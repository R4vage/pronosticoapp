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

export function useImg( icon ) { //No era necesario hacer un custom hook para esto pero bueno. Estas imagenes son mas grandes, y mas detalladas, para usar en el main card
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
    return { selectedImg };
  }