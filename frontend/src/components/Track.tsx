import React from 'react';
import '../App.css';

interface TrackProps {
    songName: string;
    songTime: string;
    artists: string;
    trackId: string;
    playlistId: string;
}

const Track: React.FC<TrackProps> = ({ songName, songTime, artists, trackId, playlistId }) => {

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

    return (
        <div className="track">
            <div className="track-info">
                <h2 className="track-title">{songName}</h2>
                <p className="track-artists">{artists}</p>
            </div>
            <div className="track-time">
                <p>{songTime}</p>
            </div>
            
            <button onClick={addToPlaylist}>
                <svg className="track-heart" width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                </svg>
            </button>
        </div>
    );
};

export default Track;