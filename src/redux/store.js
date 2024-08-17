import { configureStore } from "@reduxjs/toolkit";
import  movieList  from "./slice/movieList";
import  user  from "./slice/user";

const store = configureStore({
    reducer: {
        movieList: movieList,
        user: user,
      },
})

export default store;