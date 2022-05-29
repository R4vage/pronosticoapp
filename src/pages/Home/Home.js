import React from "react";
import { MainCard, ListCities, Navbar, ListCards } from "../../components";
import "./Home.css"


function Home() {
    return ( 
            <div className="Home">
                <Navbar />
                <MainCard/>
                <ListCards/>
                <ListCities/>
            </div>
     );
}

export default Home;