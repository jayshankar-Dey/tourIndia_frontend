import {configureStore} from "@reduxjs/toolkit"
import LoginSlice from "./redux/LoginSlice"
import { SocketSlice } from "./redux/SocketSlice"


export const store=configureStore({
    reducer:{
        isLogin:LoginSlice,
        socket:SocketSlice.reducer
    }
})