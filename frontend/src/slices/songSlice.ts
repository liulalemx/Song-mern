import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../types/Song";

const songSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [] as Song[],
    isLoading: false,
  },
  reducers: {
    getSongsFetch: (state) => {
      state.isLoading = true;
    },
    getSongsFailure: (state) => {
      state.isLoading = false;
    },
    getSongs: (state, action) => {
      state.songs = action.payload.map((song: Song) => {
        return {
          id: song._id,
          title: song.title,
          artist: song.artist,
          album: song.album,
          genre: song.genre,
          publishYear: song.publishYear,
        };
      });
      state.isLoading = false;
    },
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },
    updateSong: (state, action) => {
      const index = state.songs.findIndex((x) => x.id === action.payload._id);
      state.songs[index] = {
        id: action.payload._id,
        title: action.payload.title,
        artist: action.payload.artist,
        album: action.payload.album,
        genre: action.payload.genre,
        publishYear: action.payload.publishYear,
      };
    },
    deleteSong: (state, action) => {
      const id = action.payload.id;
      state.songs = state.songs.filter((s) => s.id !== id);
    },
  },
});

export const {
  getSongs,
  addSong,
  updateSong,
  deleteSong,
  getSongsFetch,
  getSongsFailure,
} = songSlice.actions;
export default songSlice.reducer;
