import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { authReducer } from "../features/authSlice"
import storage from "redux-persist/lib/storage"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"


const rootReducer=combineReducers({
    auth:authReducer
})

const persistConfig={
   key:'root',
   storage:storage.default?storage.default:storage, 
   whilelist:['auth'], 
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