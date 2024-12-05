import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BACKEND_BASE_PATH } from "../constants/Navigation";

import Placeholder from '../assets/Placeholder.jpg';
import Track from '../components/Track';
import "../App.css";

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
    const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());  
    const [playlist, setPlaylist] = useState<string[]>([]);  

    useEffect(() => {
        fetch(`${BACKEND_BASE_PATH}/albums/${albumId}`)
            .then((res) => res.json())
            .then((data: AlbumInfo) => {
                setAlbumInfo(data);
            })
            .catch(() => {
                alert("Something went wrong fetching album info!");
            });
    }, [albumId]);

    const handleLikeTrack = (trackId: string) => {
        setLikedTracks((prevLikes) => {
            const newLikes = new Set(prevLikes);
            if (newLikes.has(trackId)) {
                newLikes.delete(trackId);
            } else {
                newLikes.add(trackId);
            }
            return newLikes;
        });
    };

    const handleAddToPlaylist = (trackId: string) => {
        setPlaylist((prevPlaylist) => {
            if (!prevPlaylist.includes(trackId)) {
                return [...prevPlaylist, trackId];
            }
            return prevPlaylist;
        });
    };

    if (!albumInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="album">
                <img src={Placeholder} className="album-image" alt="Album Cover" />
                <div className="album-info">
                    <h1>{albumInfo.name}</h1>
                    <h2>{albumInfo.artist}</h2>
                    <h3>Release Date: {albumInfo.releaseDate}</h3>
                    <p>Tracks: {albumInfo.tracks.length}</p>
                </div>
            </div>

            <hr />

            <div className="tracks">
                <h2>Tracks</h2>
                {albumInfo.tracks.map((track) => (
                    <Track
                        key={track.id}
                        track={track}
                        liked={likedTracks.has(track.id)}
                        onLike={() => handleLikeTrack(track.id)}
                        onAddToPlaylist={() => handleAddToPlaylist(track.id)}
                    />
                ))}
            </div>

            <div className="playlist">
                <h3>Your Playlist</h3>
                <ul>
                    {playlist.map((trackId) => {
                        const track = albumInfo.tracks.find((track) => track.id === trackId);
                        return track ? <li key={trackId}>{track.name}</li> : null;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Album;
