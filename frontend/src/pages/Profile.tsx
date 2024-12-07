import Placeholder from '../assets/Placeholder.jpg';

import LikedCard from '../components/Liked-Card';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_BASE_PATH } from "../constants/Navigation";


const placeholderImageUrl = '../assets/Placeholder-Song.jpeg';


const Profile = () => {

    const { id: playlistId } = useParams(); 
    const [tracks, setTracks] = useState([]); 

    // Get all tracks in playlist
    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}/playlists/${playlistId}/tracks`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch tracks");
                }
                return res.json();
            })
            .then((data) => {
                setTracks(data.tracks || []); 
            })
            .catch((error) => {
                console.error("Error fetching tracks:", error);
            });
    }, [playlistId]);

    // remove track if button is clicked
    const handleRemoveTrack = (trackId: string) => {
        fetch(`${BACKEND_BASE_PATH}/playlists/${playlistId}/tracks`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ trackId }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to remove track");
                }
                return res.json();
            })
            .then(() => {
                setTracks((prevTracks) => prevTracks.filter((track) => track.id !== trackId));
            })
            .catch((error) => {
                console.error("Error removing track:", error);
            });
    };

    return (
        <div>
            <div className='profile'>
                <img src={Placeholder} alt="Profile" className="profile-image" />
                <div className="user-info">
                    <h1>Maggie Lam</h1>
                    <p>MagieMoose123</p>
                    <p>exampleEmail@gmail.com</p>
                </div>
            </div>
            <hr></hr>

            <div className="liked-songs">
                <h1> Liked Songs</h1>

                <div className="songs">
                    
                    

                    
                    <LikedCard 
                        imageUrl= {placeholderImageUrl}
                        songName= "Song Name"
                        artist= "Artist"
                        onRemove={() => {}}
                    />
         
                    <LikedCard 
                        imageUrl= {placeholderImageUrl}
                        songName= "Song Name"
                        artist= "Artist"
                        onRemove={() => {}}
                    />

                    <LikedCard 
                        imageUrl= {placeholderImageUrl}
                        songName= "Song Name"
                        artist= "Artist"
                        onRemove={() => {}}
                    />
         
                    <LikedCard 
                        imageUrl= {placeholderImageUrl}
                        songName= "Song Name"
                        artist= "Artist"
                        onRemove={() => {}}
                    />

                    <LikedCard 
                        imageUrl= {placeholderImageUrl}
                        songName= "Song Name"
                        artist= "Artist"
                        onRemove={() => {}}
                    />
         
                    <LikedCard 
                        imageUrl= {placeholderImageUrl}
                        songName= "Song Name"
                        artist= "Artist"
                        onRemove={() => {}}
                    />

                    <LikedCard 
                        imageUrl= {placeholderImageUrl}
                        songName= "Song Name"
                        artist= "Artist"
                        onRemove={() => {}}
                    />
         
                    <LikedCard 
                        imageUrl= {placeholderImageUrl}
                        songName= "Song Name"
                        artist= "Artist"
                        onRemove={() => {}}
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;
