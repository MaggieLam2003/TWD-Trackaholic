import Banner from '../assets/banner2.jpg';
// import Placeholder from '../assets/placeholder-song.png';
// import Card from '../components/Card';
import { useEffect, useState } from "react";
import { BACKEND_BASE_PATH } from '../constants/Navigation.tsx';

const CLIENT_ID= 'c2909f91a5a549dc85bc89731c862375';
const CLIENT_SECRET="39b1271bfe3946efa83110841869e539";


const HomePage = () => {
    const [accessToken, setAccessToken] = useState('');

    // get songs from backend
    useEffect(() => {  
        const authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET 
        }
        fetch(BACKEND_BASE_PATH, authParameters )
            .then((res)=> { 
                return res.json();})
            .then((data) => {setAccessToken(data.access_token);
            })
            .catch(() => {
                alert("Something went wrong!");
            });
     }, []);

    return (
    <div className="home">
        <div className='banner'>
            <img src={Banner}></img>
        </div>
        
    </div>
    );
};

export default HomePage;
