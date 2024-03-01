import { Link }         from "react-router-dom";
import Logo             from "../../media/logo.png";
import BackgroundVideo  from "../../media/intro.mov";
import                       "../../css/navbar.css";

const navbar = () => {
    return (
        <div className="navbar0">
            <header>
                <div>
                    <Link className="logo" to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                    <Link className="logo" to="/">
                        <h1>PaRaMeRoS</h1>
                    </Link>
                </div>
                <ul className="nav0">
                    <li><Link to="/" id="active">
                        Home
                    </Link></li>
                    <li><Link to="/about">
                        About
                    </Link></li>
                    <li><Link to="/hobbies">
                        Hobbies
                    </Link></li>
                    <li><Link to="/terminal">
                        Log In
                    </Link></li>
                </ul>
            </header>
            <div className="main0">
                <div>
                    <h2>First Lego League</h2>
                    <h1>PaRaMeRoS</h1>
                </div>
            </div>
            <video src={BackgroundVideo} autoPlay muted playsinline/>
        </div>
    );
}

export default navbar;
