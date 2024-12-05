import Placeholder from '../assets/Placeholder.jpg';
import LikedCard from '../components/Liked-Card';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_BASE_PATH } from "../constants/Navigation";
// Button to add new song 
// Button to delete song



const Profile = () => {

    const params = useParams();
    const albumId = params.id;
    const [playlist, setInfo] = useState({});

    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}/${albumId}`).then((res) => {
            return res.json();
        }).then((data) => {
            setInfo(data);
        }).catch(() => {
            alert("Something went wrong fetching city info!");
        });
    }, [albumId]);

    return (

    <div>
        <div className='profile'>
            <img src={Placeholder} alt="Profile" className="profile-image" />
            <div className="user-info">
                <h1>Maggie Lam</h1>
                <p>Username</p>
                <p>Email</p>
            </div>
        </div>
        <hr></hr>

        <div className="liked-songs">
            <h2> Liked Songs</h2>

            <div className="songs">
               
                <button className="add-song-button">
                    <svg width="26" height="26" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                    </svg>
                    <p className="add-song-text">Add a new song</p>
                </button>
             
                <LikedCard 
                    playlist={playlist}
                />
                
            </div>
        </div>
        
    </div>
    );

};

export default Profile;