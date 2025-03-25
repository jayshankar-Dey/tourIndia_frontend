import {createSlice} from "@reduxjs/toolkit"


const userSlice=createSlice({
    name:"login",
    initialState:{
        isLogin:false
    },
    reducers:{
        loginTrue:(state)=>{
          state.isLogin=true
        },
        loginFalse:(state)=>{
            state.isLogin=false
        }
    }
})

export default userSlice.reducer
export const {loginFalse,loginTrue}=userSlice.actions