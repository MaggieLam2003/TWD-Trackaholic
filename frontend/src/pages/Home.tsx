import Banner from '../assets/banner2.jpg';
import Placeholder from '../assets/Placeholder.jpg';
import Card from '../components/Card';
import { useEffect, useState } from "react";
import { BACKEND_BASE_PATH } from '../constants/Navigation.tsx';

const CLIENT_ID= 'c2909f91a5a549dc85bc89731c862375';
const CLIENT_SECRET="39b1271bfe3946efa83110841869e539";

const HomePage = () => {


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