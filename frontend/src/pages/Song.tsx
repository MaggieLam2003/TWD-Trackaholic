import { useEffect, useState } from "react";
import { BACKEND_BASE_PATH } from "../constants/Navigation";
import { useParams } from "react-router-dom";

const Song = () => {
    
    const [track, setTrack] = useState({});
    const params = useParams();
    const id = params.id;
    
    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}/tracks/${id}`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            setTrack(data);
        }).catch(() => {
            alert("Something went wrong fetching song info");
        });
    }, [id]);
    return (
        <div className="song">
            <p> Song details</p>
            <p> name</p>
        </div>
    );
};

export default Song;
