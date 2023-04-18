import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        //action
        cacheResults:(state,action)=>{
            state=Object.assign(state,action.payload);
        },
    },
})
export const {cacheResults}=searchSlice.actions;

export default searchSlice.reducer;