import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { todoReducer } from "../feature/todoSlice";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage'

const rootReducer=combineReducers({
    todo:todoReducer
})

const persistConfig={
    key:'root',
    storage:storage.default?storage.default:storage, 
    whitelist:['todo'], 
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

export const persistedStore=persistStore(store)

