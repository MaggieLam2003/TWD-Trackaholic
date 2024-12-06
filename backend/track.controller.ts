// import { db } from "./firebase";

// // fix this
// const albumRef = db.collection("Albums").doc(albumId);
// const trackRef = db.collection("Tracks").doc(trackId);
// const playlistRef = db.collection("Playlists").doc(playlistId);

// export const getalbum = async (albumId: string) => {
//     const doc = await albumRef.get();
//     if (!doc.exists) {
//         throw new Error("Album not found");
//     }
//     return { id: doc.id, ...doc.data() };
// }

// export const getTracks = async (albumId: string) => {
//     const snapshot = await db.collection("Tracks").where("album_id", "==", albumRef).get();
//     if (snapshot.empty) {
//         throw new Error("No tracks found for this album");
//     }
//     return snapshot.docs.map(doc => ({
//         trackId: doc.id,
//         ...doc.data()
//     }));
// }

// export const getTrack = async (trackId: string) => {
//     const doc = await trackRef.get();
//     if (!doc.exists) {
//         throw new Error("Track not found");
//     }
//     return { id: doc.id, ...doc.data() };
// }

// export const getPlaylist = async (playlistId: string) => {
//     const doc = await playlistRef.get();
//     if (!doc.exists) {
//         throw new Error("Playlist not found");
//     }
//     return { id: doc.id, ...doc.data() };
// }

