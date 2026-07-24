import {createSlice, type PayloadAction} from '@reduxjs/toolkit' 
import type { AuthState, LoginPayload } from './authType'

const initialState:AuthState={
    user:null, 
    token:null, 
    isLoggedIn:false
}

const authslice=createSlice({
    name:'auth',
    initialState, 
    reducers:{
        login:(state,action:PayloadAction<LoginPayload>)=>{
            const {password,...userwithoutPassword}=action.payload.user 
            state.user=userwithoutPassword
            state.token=action.payload.token 
            state.isLoggedIn=true
        },
        logout:(state)=>{
            state.user=null 
            state.token=null 
            state.isLoggedIn=false
        }
    }
})

export const {login,logout}=authslice.actions 
export const authReducer=authslice.reducer