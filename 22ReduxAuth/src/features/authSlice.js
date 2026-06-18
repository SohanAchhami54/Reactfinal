import { createSlice } from "@reduxjs/toolkit"

const initialState={
    user:null, 
    token:null,
    isLogged:false
}

const authSlice=createSlice({
    name:'auth',
    initialState, 
    reducers:{
        login:(state,action)=>{
            state.user=action.payload.user 
            state.token=action.payload.token 
            state.isLogged=true
        },
        logout:(state)=>{
            state.user=null 
            state.token=null 
            state.isLogged=false
        }
    } 
})

export const {login,logout}=authSlice.actions 
export const authReducer=authSlice.reducer