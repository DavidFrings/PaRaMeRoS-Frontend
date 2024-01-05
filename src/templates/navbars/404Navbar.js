import { Link }         from "react-router-dom";
import Logo             from "../../media/logo.png";
import                       "../../css/navbar.css";
import                       "../../css/404.css";

const navbar = () => {
    return (
        <div className="navbar1">
            <header>
                <div>
                    <Link className="logo" to="/">
                        <img src={Logo} alt="Logo" />
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
                    <li><Link to="/terminal">
                        Log In
                    </Link></li>
                </ul>
            </header>
            <div id="404">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                        <h2>Page not Found</h2>
                    </div>
                    <Link to="/" id="home">Homepage</Link>
                </div>
            </div>
        </div>
    );
}

export default navbar;