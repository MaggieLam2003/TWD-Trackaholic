import Banner from '../assets/banner2.jpg';
import Placeholder from '../assets/Placeholder.jpg';
import Card from '../components/Card';
import { useEffect, useState } from "react";
import { BACKEND_BASE_PATH } from '../constants/Navigation.tsx';
import { useAuth } from "../auth/AuthUserProvider";

const HomePage = () => {

    const [albums, setAlbums] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(BACKEND_BASE_PATH).then((res) => {
            return res.json();
        }).then((data) => {
            setAlbums(data);
        }).catch(() => {
            alert("Something went wrong!");
        });
    }, []);


    return (
        <div className="home">
            <div className='banner'>
                <img src={Banner} alt="Banner" />
            </div>
            <h3>Top Albums</h3>
            <div className="songs">
                <Card 
                    imageUrl={Placeholder} 
                    songName="Placeholder Song 1" 
                    artist="Placeholder Artist 1"
                />
                <Card 
                    imageUrl={Placeholder} 
                    songName="Placeholder Song 1" 
                    artist="Placeholder Artist 1"
                />
                <Card 
                    imageUrl={Placeholder} 
                    songName="Placeholder Song 1" 
                    artist="Placeholder Artist 1"
                />
                <Card 
                    imageUrl={Placeholder} 
                    songName="Placeholder Song 1" 
                    artist="Placeholder Artist 1"
                />
                <Card 
                    imageUrl={Placeholder} 
                    songName="Placeholder Song 1" 
                    artist="Placeholder Artist 1"
                />
                <Card 
                    imageUrl={Placeholder} 
                    songName="Placeholder Song 1" 
                    artist="Placeholder Artist 1"
                />
                
            </div>
        </div>
    );
};

export default HomePage;