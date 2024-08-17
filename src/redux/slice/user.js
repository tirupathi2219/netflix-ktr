import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState:{
        user: null
    },
    reducers:{
         updateUserData: (state, action) => {
            state.user = action.payload;
        }
    }
});
 export  const {updateUserData} = user.actions;
 export default user.reducer;
 
