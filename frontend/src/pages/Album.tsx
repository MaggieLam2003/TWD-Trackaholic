// import { useEffect, useState } from "react";
// import { BACKEND_BASE_PATH } from "../constants/Navigation";
// import { useParams } from "react-router-dom";
import Placeholder from '../assets/Placeholder.jpg';
import Track from '../components/Track';

const Album = () => {
    
    return (
        <div>
            <div className='album'>
                <img src = {Placeholder} className="album-image"></img>
                <div className="album-info-">
                    <h1>Album name</h1>
                    <h2>Artist</h2>
                    <h3>release date</h3>
                    <p>how many tracks</p>
                </div>
            </div>

            <hr></hr>
            <div>
                
                <div  className="tracks">
                    <h2> Tracks</h2>
                    <Track 
                        songName="Track 1" 
                        songTime="3:45" 
                        artists="Artist 1, Artist 2" 
                    />
                    <Track 
                        songName="Track 2" 
                        songTime="4:20" 
                        artists="Artist 1, Artist 3" 
                    />
                    <Track 
                        songName="Track 3" 
                        songTime="5:10" 
                        artists="Artist 2, Artist 4" 
                    />
                    <Track 
                        songName="Track 2" 
                        songTime="4:20" 
                        artists="Artist 1, Artist 3" 
                    />
                    <Track 
                        songName="Track 3" 
                        songTime="5:10" 
                        artists="Artist 2, Artist 4" 
                    />

                </div>
            </div>
        </div>
    );
};

export default Album;
