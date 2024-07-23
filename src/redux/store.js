import { configureStore } from "@reduxjs/toolkit";
import { movieList } from "./slice/movieList";

const store = configureStore({
    reducer:  movieList.reducer 
})

export default store