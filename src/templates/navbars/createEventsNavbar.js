import { Link }         from "react-router-dom";
import Logo             from "../../media/logo.png";
import                       "../../css/navbar.css";
import                       "../../css/terminal.css";

const navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    };

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
                    <li><Link to="/terminal">
                        Terminal
                    </Link></li>
                    <li><Link to="/events/create" id="active">
                        Events
                    </Link></li>
                    <li><Link to="/hobbies/create">
                        Hobbies
                    </Link></li>
                    <li><button className="a" onClick={handleLogout}>
                        Logout
                    </button></li>
                </ul>
            </header>
        </div>
    );
}

export default navbar;