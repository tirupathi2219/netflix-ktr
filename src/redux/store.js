import { configureStore } from "@reduxjs/toolkit";
import  movieList  from "./slice/movieList";
import  user  from "./slice/user";
import gptReducer from './slice/gptSlice'

const store = configureStore({
    reducer: {
        movieList: movieList,
        user: user,
        gpt: gptReducer,
      },
})

export default store;