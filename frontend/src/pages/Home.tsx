import Banner from '../assets/banner2.jpg';
// import Placeholder from '../assets/Placeholder.jpg';
import Card from '../components/Card';
// import "../App.css";

import { useEffect, useState } from "react";
import { BACKEND_BASE_PATH } from '../constants/Navigation.tsx';
// import { useAuth } from "../auth/AuthUserProvider";

const HomePage = () => {

    const [albums, setAlbums] = useState([]);
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

    console.log(albums);

    return (
        <div className="home">
            <div className='banner'>
                <img src={Banner}/>
                <div className='banner-text'>
                    <h2> Trackaholics</h2>
                    <p> The ultimate destination for music lovers to effortlessly organize, rediscover, and curate their favorite songs—all in one place</p>
                </div>
                
            </div>
            <h3>Top Albums</h3>
            <div className="songs">
                <Card 
                    albums={albums}
                />
                
            </div>
        </div>
    );
};

export default HomePage;