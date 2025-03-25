import {createSlice} from '@reduxjs/toolkit'

const UserSlice=createSlice({
       name:"user",
       initialState:{
              user:null
       },

       reducers:{
         setUser:(state,action)=>{
              state.user=action.payload
         }
       }
})

export const {setUser}=UserSlice.actions
export default UserSlice