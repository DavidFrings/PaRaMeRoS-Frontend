import Navbar           from "../navbars/404Navbar";
import Footer           from "../footers/404footer";
import                       "../../css/404.css";

const notFound = () => {
    return(
        <div className="notFound">
            <Navbar />
            <Footer />
        </div>
    );
}

export default notFound;