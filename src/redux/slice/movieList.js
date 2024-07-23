import { createSlice } from "@reduxjs/toolkit";

const movieList = createSlice({
    name: "movieList",
    initialState: {
        movies: []
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            console.log('10:::', action.payload)
            state.movies = action.payload
        }
    }
})

export const { getNowPlayingMovies } = movieList.actions
export { movieList }