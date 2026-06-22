import {createSlice} from '@reduxjs/toolkit' 

const initialState={
  thememode:'light', 
}

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        darkmode:(state)=>{
           state.thememode='dark'
        }, 
        lightmode:(state)=>{
            state.thememode='light'
        }
    } 
})
export const {darkmode,lightmode}=themeSlice.actions 
export const themeReducer=themeSlice.reducer



// import {createSlice} from '@reduxjs/toolkit' 
// const savedTheme=localStorage.getItem('theme') 

// const initialState=savedTheme?JSON.parse(savedTheme):{
//   thememode:'light', 
// }

// const themeSlice=createSlice({
//     name:'theme',
//     initialState,
//     reducers:{
//         darkmode:(state)=>{
//            state.thememode='dark'
//            localStorage.setItem('theme',JSON.stringify(state))
//         }, 
//         lightmode:(state)=>{
//             state.thememode='light'
//             localStorage.setItem('theme',JSON.stringify(state))
//         }
//     } 
// })
// export const {darkmode,lightmode}=themeSlice.actions 
// export const themeReducer=themeSlice.reducer

