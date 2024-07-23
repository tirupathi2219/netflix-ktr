import { createSlice } from "@reduxjs/toolkit";

const movieList = createSlice({
    name: "movieList",
    initialState: {
        movies: []
    },
    reducer: {
        getNowPlayingMovies : (state, action) => {
            state.movies = action.payload
        }
    }
})

export const { getNowPlayingMovies} = movieList.actions
export {movieList}