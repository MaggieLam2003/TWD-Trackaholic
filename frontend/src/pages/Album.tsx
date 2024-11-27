import { useEffect, useState } from "react";
import { BACKEND_BASE_PATH } from "../constants/Navigation";
import { useParams } from "react-router-dom";

import Placeholder from '../assets/Placeholder.jpg';
import Track from '../components/Track';

const Album = () => {

    const params = useParams();
    const albumId = params.id;
    const [info, setInfo] = useState({});

    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}/${albumId}`).then((res) => {
            return res.json();
        }).then((data) => {
            setInfo(data);
        }).catch(() => {
            alert("Something went wrong fetching city info!");
        });
    }, [albumId]);

    // Make it so that you can like song and add it to playlist/ liked songs 
    const addToPlaylist = async () => {
        try {
            const response = await fetch(`/playlists/${playlistId}/tracks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ trackId }),
            });

            if (response.ok) {
                alert(`Track ${trackId} added to playlist ${playlistId}`);
            } else {
                alert('Failed to add track to playlist');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred');
        }
    };

    // get all playlist for user? potentially - or maybe just have 1 playlist for now
    
    return (
        <div>
            <div className='album'>
                <img src = {Placeholder} className="album-image"></img>
                <div className="album-info-">
                    <h1>Album name</h1>
                    <h2>Artist</h2>
                    <h3>release date</h3>
                    <p>how many tracks</p>
                </div>
            </div>

            <hr></hr>
            <div>
                
                <div  className="tracks">
                    <h2> Tracks</h2>
                    <Track 
                        songName="Track 1" 
                        songTime="3:45" 
                        artists="Artist 1, Artist 2" 
                    />
                    

                </div>
            </div>
        </div>
    );
};

export default Album;
