import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios } from "../api/axios";

export const fetchnews=createAsyncThunk(
    'news/fetchnews', 
     async(_,{rejectWithValue})=>{
        try{
          const response=await Axios.get(`everything?q=kathmandu&apiKey=${import.meta.env.VITE_NEWSAPI_KEY}`) 
          return response.data
      
        }catch(error){
            return rejectWithValue(error.message)
        }
    }
)

const initialState={
    list:[], 
    loading:false, 
    error:null
}

const postSlice=createSlice({
    name:'post', 
    initialState, 
    reducers:{}, 
    extraReducers:(builder)=>{
        builder. 
        addCase(fetchnews.pending,(state,action)=>{
           state.loading=true 
           state.error=null
        })
         builder. 
         addCase(fetchnews.fulfilled,(state,action)=>{
            state.loading=true
            state.list=action.payload 
         })
         builder. 
         addCase(fetchnews.rejected,(state,action)=>{
            state.loading=false, 
            state.error=action.payload
         })
    } 
})

export const postReducer=postSlice.reducer