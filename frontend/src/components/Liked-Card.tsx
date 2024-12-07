import React from 'react';
// const placeholderImageUrl = '../assets/Placeholder-Song.jpeg';

interface LikedCardProps {
    imageUrl: string;
    songName: string;
    artist: string;
    onRemove: () => void;
}

const LikedCard: React.FC<LikedCardProps> = ({ imageUrl, songName, artist, onRemove}) => {
    return (
        <div className='card'>
            <img src={imageUrl} alt={songName} className="card-image" />
            
            <div className='card-content'>
                <h2 className='card-title'>{songName}</h2>
                <p className='card-artist'>{artist}</p>
            </div>

            <div className='x-button'>
                <button onClick={onRemove}>
                    <div className='remove'>
                        <svg width="26" height="26" viewBox="0 0 24 24">
                            <path d="M18.36 6.64l-1.41-1.41L12 10.17 7.05 5.23 5.64 6.64 10.59 11.59 5.64 16.54l1.41 1.41L12 13.41l4.95 4.95 1.41-1.41-4.95-4.95 4.95-4.95z"/>
                        </svg>
                        <p> Remove Song</p>
                    </div>
                    
                </button>
            </div>
        </div>
    );
};


export default LikedCard;