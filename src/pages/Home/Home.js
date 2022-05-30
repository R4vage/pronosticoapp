import React from "react";
import { MainCard, ListCities, Navbar, ListCards, Footer } from "../../components";
import "./Home.css"


function Home() {
    return ( 
            <div className="Home">
                <Navbar />
                <MainCard/>
                <ListCards/>
                <ListCities/>
                <Footer />
            </div>
     );
}

export default Home;