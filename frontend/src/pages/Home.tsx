import Banner from '../assets/banner2.jpg';

import Card from '../components/Card';
// import "../App.css";

import { useEffect, useState } from "react";
import { BACKEND_BASE_PATH } from '../constants/Navigation.tsx';
// import { useAuth } from "../auth/AuthUserProvider";

const HomePage = () => {
const placeholderAlbums = [
    {
        id: 1,
        title: "Album 1",
        artist: "Artist 1",
        cover: "https://via.placeholder.com/150",
        imageUrl: "https://via.placeholder.com/150",
        name: "Album Name 1"
    },
    {
        id: 2,
        title: "Album 2",
        artist: "Artist 2",
        cover: "https://via.placeholder.com/150",
        name: "Album Name 1"
    },
    {
        id: 3,
        title: "Album 3",
        artist: "Artist 3",
        cover: "https://via.placeholder.com/150",
        name: "Album Name 1"
    }
];



    // const [albums, setAlbums] = useState<Album[]>([]);

    const [albums, setAlbums] = useState<{ id: number; title: string; artist: string; cover: string; }[]>([]);
    // const { user } = useAuth();

    useEffect(() => {
        fetch(BACKEND_BASE_PATH)
        .then((res) => {
            return res.json();
        }).then((data) => {
            setAlbums(data);
        }).catch(() => {
            // alert("Something went wrong!");
        });
    }, []);

    useEffect(() => {
        setAlbums(placeholderAlbums);
    }, []);

    console.log(albums);

    return (
        <div className="home">
            <div className='banner'>
                <img src={Banner}/>
                <div className='banner-text'>
                    <h2> Trackaholics</h2>
                    <p> The ultimate destination for music lovers to effortlessly organize, rediscover, and curate 
                        their favorite songs—all in one place</p>
                </div>
                
            </div>
        
            <div>
                <Card 
                    albums={albums}
                />
                
            </div>
        </div>
    );
};

export default HomePage;
