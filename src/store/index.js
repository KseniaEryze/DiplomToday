import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../store/slices/userSlice'
import cakeReducer from '../store/slices/cakeSlice'


export const store = configureStore({
    reducer: {
        user: userReducer,
        cake: cakeReducer
    }
});

