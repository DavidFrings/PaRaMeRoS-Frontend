import { Link }         from "react-router-dom";
import                       "../../css/hobbies.css";
const hobbyTemp = ({hobby}) => {
    return (
        <div className="info">
            <div className="content">
                <h3><Link to={"/hobby/" + hobby._id}>
                    {hobby.title}
                </Link></h3>
                <p className="informations">
                    <p className="author">{hobby.username}</p>
                    <time>{new Date(hobby.createdAt).toDateString()}</time>
                </p>
                <p className="desc">{hobby.desc}</p>
            </div>
            {hobby.photo && (
                <img className="postImg" src={process.env.REACT_APP_API + "images/" + hobby.photo} />
            )}
        </div>
    );
}

export default hobbyTemp;