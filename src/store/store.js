import { configureStore } from "@reduxjs/toolkit";
import user from "../reducer/userSlice";



const store = configureStore({
    reducer: {
        app: user
    }

})

export default store;