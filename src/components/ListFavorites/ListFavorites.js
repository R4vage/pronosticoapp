import {useSelector } from "react-redux";

import FavouriteCard from "./FavouriteCard";
import "./ListFavourites.css"

function ListFavorites() {
    const favouriteList = useSelector((state) => state.favourites);
    console.log(favouriteList)


    return ( 
    <div className="ListFavorites">
                { favouriteList?.map( favourite => 
            <FavouriteCard city={favourite} key={favourite.lat+favourite.lon}/>
            )} 
    </div> );
}

export default ListFavorites;