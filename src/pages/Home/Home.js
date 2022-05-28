import React from "react";
import { MainCard, ListCities, Navbar, ListCards } from "../../components";


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