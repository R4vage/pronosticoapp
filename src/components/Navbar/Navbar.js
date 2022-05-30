import { useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    const navigate = useNavigate();
    
    function handleLogoClick (){
        navigate ( `/`);
      }

    return (   
        <nav className="Navbar">
        <div className="Navbar--logoContainer" onClick={() =>handleLogoClick}>
            <img src="/favicon.svg" className="Navbar--logo" alt="Logo"/>
            <h3 className="Navbar--title">PronosticoApp</h3>
        </div>
    </nav> );

}

export default Navbar;