import path from "path";
import express, { Express } from "express";
import cors from "cors";
import fetch from "node-fetch";
import { db } from "./firebase";

const app: Express = express();

const hostname = "0.0.0.0";
const port = 8080;

app.use(cors());
app.use(express.json());


// Get all albums 
// GET /albums
app.get("/albums", async (req, res) => {
    try {
        const snapshot = await db.collection("Albums").get(); 
        const albums = snapshot.docs.map(doc => ({
            albumId: doc.id,
            ...doc.data() 
        }));
        res.json(albums); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
  });

// Get all tracks on album
// GET/albums/{id}/tracks
app.get("/albums/:albumId/tracks", async (req, res) => {
    const { albumId } = req.params; 
    try {
        const albumRef = db.collection("Albums").doc(albumId);
        const snapshot = await db.collection("Tracks").where("album_id", "==", albumRef).get();
        if (snapshot.empty) {
            return res.status(404).json({ error: "No tracks found for this album" });
        }
        const tracks = snapshot.docs.map(doc => ({
            trackId: doc.id,
            ...doc.data()   
        }));
        res.json(tracks); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
  });

// Get songs based off id 
// GET /tracks/{id}
app.get("/tracks/:trackId", async (req, res) => {
    const { trackId } = req.params; 
    try {
        const trackRef = db.collection("Tracks").doc(trackId);
        const doc = await trackRef.get();
        if (!doc.exists) {
            return res.status(404).json({ error: "Track not found" });
        }
  
        const track = doc.data();
        res.json({ id: doc.id, ...track });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
  });



// Save song to playlist for user
// POST /playlists/{playlist_id}/tracks
app.post("/playlists/:playlistId/tracks", async (req, res) => {
    const { playlistId } = req.params; 
    const { trackId } = req.body; 
    try {
        const trackRef = db.collection("Tracks").doc(trackId); 
        const playlistRef = db.collection("Playlists").doc(playlistId);
        
        await playlistRef.update({
            // Add track to playlist
        });
       
        res.status(200).send({
            message: `SUCCESS: Track ${trackId} added to playlist ${playlistId}`,
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
});


// Get all songs within a playlist
app.get("/playlists/:playlist_id/tracks", async (req, res) => {
    const { playlist_id } = req.params; // Get playlist ID from the route
  
    try {
        const playlistRef = db.collection("Playlists").doc(playlist_id);
        const playlistDoc = await playlistRef.get();
    
        if (!playlistDoc.exists) {
            return res.status(404).json({ error: "Playlist not found" });
        }
    
        const playlistData = playlistDoc.data();
        const trackRefs = playlistData.tracks || []; 
    
        const trackPromises = trackRefs.map((trackRef) => trackRef.get());
        const trackDocs = await Promise.all(trackPromises);
    
        const tracks = trackDocs.map((doc) => ({ id: doc.id, ...doc.data() }));
    
        res.status(200).json({
            message: "SUCCESS got all tracks in playlist",
            tracks,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
  });
  

// Remove song of playlist from user
// DELETE /playlists/:playlist_id/tracks
app.delete("/playlists/:playlist_id/tracks", async (req, res) => {
    const { playlist_id } = req.params; 
    const { trackId } = req.body; 
  
    try {
        const trackRef = db.collection("Tracks").doc(trackId); 
        const playlistRef = db.collection("Playlists").doc(playlist_id); 
    
        await playlistRef.update({
            // Remove track from playlist
            
        });
    
        res.status(200).send({
            message: `SUCCESS: Track ${trackId} removed from playlist ${playlist_id}`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
  });

// Update name of playlist from user
// PUT /playlists/:playlist_id
app.put("/playlists/:playlist_id", async (req, res) => {
    const { playlist_id } = req.params; 
    const { name } = req.body;  
    try {
        const playlistRef = db.collection("Playlists").doc(playlist_id); 
        await playlistRef.update({ name });

        res.status(200).send({
            message: `SUCCESS updated playlist name to ${name}`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});



app.listen(port, hostname, () => {
    console.log("Listening");
});
