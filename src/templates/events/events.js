import { useEffect }    from "react";
import { useState }     from "react";
import axios            from "axios";
import Navbar           from "../navbars/eventsNavbar";
import Footer           from "../footers/footer";
import Event            from "./event";
import                       "../../css/hobbies.css";

const events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEvents = async () => {
            const res = await axios.get(process.env.REACT_APP_API + "events");
            setEvents(res.data)
        }
        getEvents();
    }, []);

    return (
        <div className="events">
            <Navbar/>
            <div className="infos">
                <br />
                <br />
                <br />
                <br />
                <br />
                {events.map(p => (
                    <Event event={p}/>
                ))}
            </div>
            <Footer/>
        </div>
    );
}

export default events;