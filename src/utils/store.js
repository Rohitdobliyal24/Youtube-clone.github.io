import {configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"
import searchSlice from "./searchSlice";
const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
    },
});
export default store;








//The store is the central place where the state of your application is held. It is responsible for keeping track of the current state, handling actions that modify the state, and notifying subscribers when the state changes.