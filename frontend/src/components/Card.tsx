import React from 'react';
import '../App.css';


interface CardProps {
    imageUrl: string
    songName: string;
    artist: string;
}

const Card: React.FC<CardProps> = ({imageUrl, songName, artist }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={songName} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{songName}</h2>
                <p className="card-artist">{artist}</p>
            </div>
        </div>
    );
};

export default Card;
