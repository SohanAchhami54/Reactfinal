import {createSlice} from '@reduxjs/toolkit'

const initialState={
   thememode:'light'
}

const themeSlice=createSlice({
  name:'theme', 
  initialState, 
  reducers:{
     darkmode:(state,action)=>{
       state.thememode='dark'
     },
     lightmode:(state,action)=>{
       state.thememode='light'
     }
  }
})

export const {darkmode,lightmode} =themeSlice.actions
export const themeReducer=themeSlice.reducer