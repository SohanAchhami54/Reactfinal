import {createSlice} from '@reduxjs/toolkit'

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
        const {password,...userwithoutPassword}=action.payload.user
        state.user= userwithoutPassword, 
        state.token=action.payload.token, 
        state.isLoggedIn=true
    }, 
    logout:(state,action)=>{
          state.user=null, 
          state.token=null, 
          state.isLoggedIn=false
    }
  }
})

export const {login,logout} =authSlice.actions
export const authReducer=authSlice.reducer