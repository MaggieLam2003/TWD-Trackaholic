import path from "path";
import express, { Express } from "express";
import cors from "cors";
import fetch from "node-fetch";

const app: Express = express();

const hostname = "0.0.0.0";
const port = 8080;

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//     res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');  // or 'unsafe-none' or 'credentialless'
//     next();
//   });

// Get all songs 
// /tracks/{id}
app.get("/", async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
  });

// get all playlists of user
// /playlists/{user_id}

// get all songs in playlist of user
// /playlists/{playlist_id}

// post song into playlist of user 

// delete song from playlist of user

// post/create new playlist of user

// update playlist name of user


app.listen(port, hostname, () => {
    console.log("Listening");
});
