import React from 'react';

interface Album {
    id: string;
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
        <div className='songs'>
            {albums.map((album, index) => (
                // Conenct it to the info page of the album??? 
                <div className='card'>
                <a className='card-link' key={index} href={`/album/${album.id}`}>
                    <img className='card-image' src={album.imageUrl} alt={album.name} />
                    <div className='card-content'>
                        <h4>{album.name}</h4>
                        <p>{album.artist}</p>
                        {album.releaseDate && <p>{album.releaseDate}</p>}
                    </div>
                </a>
                </div>
            ))}
        </div>

    );
};

export default Card;