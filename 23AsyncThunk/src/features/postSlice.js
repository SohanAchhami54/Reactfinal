import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Axios } from "../api/axios"

export const fetchPost=createAsyncThunk(
    'posts/fetchPost',
    async(_,{rejectWithValue})=>{
        try{
           const response=await Axios.get('/posts') 
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
    name:'posts',
    initialState, 
    reducers:{}, 
    extraReducers:(builder)=>{
        builder
        .addCase(fetchPost.pending,(state,action)=>{
            state.loading=true 
            state.error=null
        })
        .addCase(fetchPost.fulfilled,(state,action)=>{
            state.loading=false
            state.list=action.payload
        
        })
        .addCase(fetchPost.rejected,(state,action)=>{
            state.loading=false  
            state.error=action.payload 
        })
    }
})

export const postReducer=postSlice.reducer

