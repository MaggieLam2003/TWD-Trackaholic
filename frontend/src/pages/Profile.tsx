import Placeholder from '../assets/Placeholder.jpg';
import { useAuth } from "../auth/AuthUserProvider";

import LikedCard from '../components/Liked-Card';

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_BASE_PATH } from "../constants/Navigation";


const placeholderImageUrl = '../assets/Placeholder-Song.jpeg';


const Profile = () => {
    const { user } = useAuth();

    const { id: playlistId } = useParams(); 
    const [tracks, setTracks] = useState([]); 

    const [playlistName, setPlaylistName] = useState("Liked Songs");
    const [isEditing, setIsEditing] = useState(false);
    const [newPlaylistName, setNewPlaylistName] = useState("");

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
                setPlaylistName(data.name || "Liked Songs");
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

    
    const editName = () => {
        setIsEditing(true);
        setNewPlaylistName(playlistName);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPlaylistName(e.target.value);
    };

    const saveName = () => {
        fetch(`${BACKEND_BASE_PATH}/playlists/${playlistId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: newPlaylistName }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to update playlist name");
                }
                return res.json();
            })
            .then(() => {
                setPlaylistName(newPlaylistName);
                setIsEditing(false);
                // reload once it is updated
                window.location.reload();
            
            })
            .catch((error) => {
                console.error("Error updating playlist name:", error);
            });
    };

   

    return (
        <div>
            <div className='profile'>
                <img src={Placeholder} alt="Profile" className="profile-image" />
                <div className="user-info">
                    <h1>{user?.displayName ?? "Guest"}</h1>
                    <p>{user?.email ?? "guest@example.com"}</p>
                </div>
            </div>
            <hr></hr>

            <div className="liked-songs">
                <div className='playlist-name'>
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                value={newPlaylistName}
                                onChange={handleNameChange}
                                className="playlist-name-input"
                            />
                            <button onClick={saveName}>Save</button>
                        </>
                    ) : (
                        <>
                            <h1>{playlistName}</h1>
                            <button onClick={editName}>
                                <svg width="26" height="26" viewBox="0 0 24 24">
                                    <path d="M3 21v-3.75l11.06-11.06 3.75 3.75L6.75 21H3zm2.5-2.5h1.25l9.19-9.19-1.25-1.25-9.19 9.19V18.5zm13.44-13.44l-1.25-1.25 1.06-1.06c.39-.39 1.02-.39 1.41 0l.94.94c.39.39.39 1.02 0 1.41l-1.06 1.06-1.25-1.25z" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
            
                

                <div className="songs">
                    
                    
                    {/* Add handleRemoveTrack on the onRemove */}
                    {/* Backend wont work :( ??? */}
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
