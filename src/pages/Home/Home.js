import React from "react";
import { MainCard, ListCities, Navbar, ListCards, Footer, ListFavorites } from "../../components";
import "./Home.css"


function Home() {
    return ( 
            <div className="Home">
                <Navbar />
                <MainCard/>
                <ListCards/>
                <ListFavorites/>
                <ListCities/>
                <Footer />
            </div>
     );
}

export default Home;