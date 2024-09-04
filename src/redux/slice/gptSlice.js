import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch: true,
        language: 'En'
    },
    reducers: {
        toggleShowGptSearch: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        selectLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})
export const {toggleShowGptSearch, selectLanguage} = gptSlice.actions
export default gptSlice.reducer