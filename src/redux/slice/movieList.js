import { createSlice } from "@reduxjs/toolkit";

const movieList = createSlice({
    name: "movieList",
    initialState: {
        movies: []
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.movies = action.payload
        }
    }
})

export const { getNowPlayingMovies } = movieList.actions
export default movieList.reducer ;