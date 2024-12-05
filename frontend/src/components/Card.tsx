import React from 'react';

interface Album {
    imageUrl: string;
    name: string;
    artist: string;
    releaseDate?: string;
}

interface CardProps {
    albums: Album[];
}

const Card: React.FC<CardProps> = ({ albums }) => {
    return (
        <div className="card-container">
            {albums.map((album, index) => (
                <div key={index} className="card">
                    <img src={album.imageUrl} alt={album.name} />
                    <h4>{album.name}</h4>
                    <p>{album.artist}</p>
                    {album.releaseDate && <p>{album.releaseDate}</p>}
                </div>
            ))}
        </div>
    );
};

export default Card;