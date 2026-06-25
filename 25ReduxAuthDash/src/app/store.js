import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authReducer } from "../features/authSlice"
import { postReducer } from "../features/postSlice"
import { themeReducer } from "../features/themeSlice"
import storage from 'redux-persist/lib/storage'
import {persistStore,persistReducer} from 'redux-persist'


const rootReducer=combineReducers({
    auth:authReducer, 
    post:postReducer, 
    theme:themeReducer
})

const persistConfig={
    key:'root', 
    storage:storage.default?storage.default:storage, 
    whitelist:['auth','theme','post'], 
    blacklist:null
}

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer, 
    middleware:(getDefault)=>{
       return getDefault({
        serializableCheck:{
            ignoreActions:[
                'persist/PERSIST', 
                'persist/REHYDRATE', 
                'persist/REGISTER'
            ]
        }
       })
    }
})

export const persistor=persistStore(store)