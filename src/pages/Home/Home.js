import React from "react";
import { MainCard, ListCities, Navbar } from "../../components";


function Home() {
    return ( 
            <div className="Home">
                <Navbar />
                <MainCard/>
                <ListCities/>
            </div>
     );
}

export default Home;