import React, { useRef, useState } from "react";
import searchImg from "../../assets/search.svg"
import { useFetch } from "../../hooks/useFetch";
import {countSlice} from "../../store"
import { useDispatch } from "react-redux";

//La idea aca es crear un search, en el cual el usuario coloca la ciudad como le pinte, y le devuelve los 5 valores mas cercanos a su input. 
//Luego selecciona uno de ellos, y de ahi sacamos la lat y long, y la llevamos al Main Card.
function ListCities() {
    const dispatch = useDispatch();
    const searchRef = useRef();
    

    const [searchName, setSearchName] = useState("Buenos Aires")
    const { data } = useFetch({ url: `geo/1.0/direct?q=${searchName}&limit=5&appid=8a5e9515a6583a0a93a8e614d848ffb5` });  //Esta api es la de geolocalización, permite traducir ciudades a lat y long.
    
    console.log(data)
    
    
    function handleSearchClick() {
        setSearchName(searchRef.current.value)
    }

    function handleCityClick(city){ 
        dispatch(countSlice.actions.setChangeSelected(city))
        
    }

  
    return (
      <div className="ListCities">
          
          <input id="search" name="search" ref={searchRef} placeholder="Ingrese una ciudad" className="ListCities--search--input" onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            handleSearchClick()
                          }
                      }}/>
          <button className="ListCities--search--button" onClick={handleSearchClick}><img src={searchImg} alt="Search Button"/></button>
            
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>State/Province</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    
                    { data?.map( city=> 
                        <tr onClick={()=> handleCityClick({lat:city.lat, lon:city.lon, name:city.name})}>
                            <td>{city.name}</td>
                            <td>{city.country}</td>
                            <td>{city.state}</td>
                            <td>{city.lat}</td>
                            <td>{city.lon}</td>
                        </tr>)
                    }

                </tbody>

            </table>
      </div>
      
    )
}

export default ListCities;