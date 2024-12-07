import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_BASE_PATH } from "../constants/Navigation";
import Placeholder from '../assets/Placeholder-Album.jpeg';
import Track from '../components/Track';

interface Track {
    id: string;
    name: string;
    duration: string;
    artist: string;
}

interface AlbumInfo {
    id: string;
    name: string;
    artist: string;
    releaseDate: string;
    tracks: Track[];
}

const Album: React.FC = () => {
    const { id: albumId } = useParams<{ id: string }>();  
    const [albumInfo, setAlbumInfo] = useState<AlbumInfo | null>(null); 
    

    // Grab the album of id
    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}/albums/${albumId}`)
            .then((res) => res.json())
            .then((data: AlbumInfo) => {
                setAlbumInfo(data);
            })
            .catch(() => {
                // alert("Something went wrong fetching album info!");
            });
    }, [albumId]);

    // Add a fetch tracks from album 
    // if liked - post to playlist
    // If unliked - delete from playlist

    const [tracks, setTracks] = useState([]); 

    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}/albums/${albumId}/tracks`)
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
    }, [albumId]);

    // Make a add track to playlist post

    // should only remove IF the track is in the playlist



    
    return (
        <div>
            
            <div className="album">
                <img src={Placeholder} className="album-image" alt="Album Cover" />
                <div className="album-info">
                    <h1>Album name</h1>
                    <h2>Artist</h2>
                    <h3>Release Date</h3>
                    <p>Tracks</p>
                </div>
            </div>
          

            <hr />

            <div className="tracks">
                <h2>Tracks</h2>

                <Track
                    songName="Song Name"
                    songTime="2:30"
                    artists="Artist"
                    trackId="trackId"
                    playlistId="playlistId"
                />

                <Track
                    songName="Song Name"
                    songTime="2:30"
                    artists="Artist"
                    trackId="trackId"
                    playlistId="playlistId"
                />

                <Track
                    songName="Song Name"
                    songTime="2:30"
                    artists="Artist"
                    trackId="trackId"
                    playlistId="playlistId"
                />
                
            </div>

            
        </div>
    );
};

export default Album;
