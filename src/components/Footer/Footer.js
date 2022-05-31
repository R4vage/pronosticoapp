import { useImg } from "../../hooks/useImg";
import "./Footer.css"

function Footer() {
    const { gitHub, linkedIn } = useImg ()
    return ( <footer className="Footer">
        <img className="footer--icon github" src={gitHub} alt="gitHub" onClick={() => window.open("https://github.com/R4vage")}/>
        <img className="footer--icon linkedin" src={linkedIn} alt="linkedin" onClick={ () => window.open("https://www.linkedin.com/in/julianmarc")}/>
        
    </footer> );
}

export default Footer;