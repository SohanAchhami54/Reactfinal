import { createSlice } from "@reduxjs/toolkit"

const initialState={
    user:null, 
    token:null,
    isLoggedIn:false
}
const authSlice=createSlice({
    name:'auth',
    initialState, 
    reducers:{
        login:(state,action)=>{
            const {password,...userWithoutPassword}=action.payload.user 
            state.user=userWithoutPassword 
            state.token=action.payload.token 
            state.isLoggedIn=true
        }, 
        logout:(state,action)=>{
            state.user=null, 
            state.token=null, 
            state.isLoggedIn=false
        }
    }
})

export const {login,logout}=authSlice.actions 
export const authReducer=authSlice.reducer