import { Link }         from "react-router-dom";
import Logo             from "../../media/logo.png";
import                       "../../css/navbar.css";

const navbar = () => {
    return (
        <div className="navbar2">
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
                    <li><Link to="/">
                        Home
                    </Link></li>
                    <li><Link to="/about">
                        About
                    </Link></li>
                    <li><Link to="/hobbies">
                        Hobbies
                    </Link></li>
                    <li><Link to="/terminal" id="active">
                        Log In
                    </Link></li>
                </ul>
            </header>
        </div>
    );
}

export default navbar;