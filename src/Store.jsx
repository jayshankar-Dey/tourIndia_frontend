import {configureStore} from "@reduxjs/toolkit"
import LoginSlice from "./redux/LoginSlice"
import { SocketSlice } from "./redux/SocketSlice"
import UserSlice from "./redux/UserSlice"


export const store=configureStore({
    reducer:{
        isLogin:LoginSlice,
        socket:SocketSlice.reducer,
        user:UserSlice.reducer
    }
})