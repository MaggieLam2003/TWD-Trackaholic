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

        res.status(200).send({
        message: `SUCCESS got all albums`,
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
  });

// Get all tracks on album
// GET/albums/{id}/tracks
app.get("/albums/:id/tracks", async (req, res) => {
    try {
        res.status(200).send({
            message: `SUCCESS got all albums tracks`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});



// Save song to playlist for user
// POST/playlists/{playlist_id}/tracks
app.post("/playlists/:playlist_id/tracks", async (req, res) => {
    try {
        res.status(200).send({
            message: `SUCCESS saved song to playlist`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});


app.get("/playlists/:playlist_id/tracks", async (req, res) => {
    try {
        res.status(200).send({
            message: `SUCCESS got all tracks in playlist`,
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Remove song of playlist from user
// DELETE /playlists/:playlist_id/tracks
app.delete("/playlists/:playlist_id/tracks", async (req, res) => {
    try {
        res.status(200).send({
            message: `SUCCESS removed song from playlist`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Update song of playlist from user
// PUT /playlists/:playlist_id/tracks
app.put("/playlists/:playlist_id/tracks", async (req, res) => {
    try {
        res.status(200).send({
            message: `SUCCESS updated song in playlist`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});

// Get song based on id of track
app.get("/tracks/:id", async (req, res) => {
    try {
        res.status(200).send({
            message: `SUCCESS updated song in playlist`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
});




app.listen(port, hostname, () => {
    console.log("Listening");
});
