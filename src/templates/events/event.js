import { Link }         from "react-router-dom";
import                       "../../css/hobbies.css";
const eventTemp = ({event}) => {
    return (
        <div className="info">
            <div className="content">
                <h3><Link to={"/event/" + event._id}>
                    {event.title}
                </Link></h3>
                <p className="informations">
                    <p className="author">{event.username}</p>
                    <time>{new Date(event.createdAt).toDateString()}</time>
                </p>
                <p className="desc">{event.desc}</p>
            </div>
            {event.photo && (
                <img className="postImg" src={process.env.REACT_APP_API + "images/" + event.photo} />
            )}
        </div>
    );
}

export default eventTemp;