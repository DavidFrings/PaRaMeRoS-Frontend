import { useLocation }  from "react-router-dom";
import { useState }     from "react";
import { useEffect }    from "react";
import axios            from "axios";
import Navbar           from "../navbars/hobbiesNavbar";
import Footer           from "../footers/footer";
import                       "../../css/hobbies.css";

const hobby = () => {
    window.scroll(0, 0);

    const [hobby,      setHobby]      = useState({});
    const [title,      setTitle]      = useState('');
    const [desc,       setDesc]       = useState('');
    const [updateMode, setUpdateMode] = useState(false);

    if (localStorage.getItem("token")) {
        const name = localStorage.getItem("token").split('?')[0];
    } else {
        const name = null;
    }
    const id   = useLocation().pathname.split("/")[2];

    useEffect( () => {
        const get = async () => {
            const res = await axios.get(process.env.REACT_APP_API + "hobbies/" + id);
            setHobby(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        get();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(process.env.REACT_APP_API + "hobbies/" + localStorage.getItem("token") + "&id=" + id);
            window.location.replace("/hobbies");
        } catch (err) {
            console.log("error");
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(process.env.REACT_APP_API + "hobbies/" + localStorage.getItem("token") + "&id=" + id, {
                username: name,
                title: title,
                desc: desc
            });
            window.location.reload();
        } catch (err) {
            console.log("error");
        }
    }

    return (
        <div className="event">
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div className="infos infos2">
                <div className="info">
                    <div className="content">
                        {updateMode ? (
                            <form className="writeForm content" onSubmit={handleUpdate}>
                                <input className="writeInput h3" value={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                                <input className="writeInput writeText desc" value={desc} type="text" onChange={(e) => setDesc(e.target.value)}/>
                                <button className="writeSubmit" type="submit">Update</button>
                            </form>
                        ) : (
                            <>
                                <h3>{hobby.title}</h3>
                                <p className="informations">
                                    <p className="author">{hobby.username}</p>
                                    <time>{new Date(hobby.createdAt).toDateString()}</time>
                                </p>
                                {name && (
                                    <div className="buttons">
                                        <label htmlFor="edit" className="edit-post">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                                        </label>
                                        <button className="edit" id="edit" onClick={() => setUpdateMode(true)}>Edit
                                        </button>
                                        <label htmlFor="delete" className="delete-post">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                        </label>
                                        <button className="delete" id="delete" onClick={handleDelete}>Delete</button>
                                    </div>
                                )}
                                <p className="desc s">
                                    {hobby.desc}
                                </p>
                            </>
                        )}
                    </div>
                    {hobby.photo && (
                        <img className="postImg" src={process.env.REACT_APP_API + "images/" + hobby.photo} />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default hobby;