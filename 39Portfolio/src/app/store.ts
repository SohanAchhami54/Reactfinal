import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth/authslice";
import storage from 'redux-persist/lib/storage'
import {persistReducer, type PersistConfig} from 'redux-persist'
import persistStore from "redux-persist/es/persistStore";

const rootReducer=combineReducers({
    auth:authReducer
})

const persistStorage=(storage as any).default || storage

const persistConfig:PersistConfig<ReturnType<typeof rootReducer>> ={
   key:'root',
   storage:persistStorage,             //it means localstorage.
   whitelist:["auth"],
   blacklist:[]
}

const persistedReducer=persistReducer(persistConfig,rootReducer) //add persistent power to reducer.

export const store=configureStore({
   reducer:persistedReducer,              //we want redux with autosaving. 
   middleware:(getDefault)=>{             //redux toolkit check if every action is serializable.
      return getDefault({
         serializableCheck:{
            ignoredActions:[
                'persist/PERSIST', 
                'persist/REHYDRATE', 
                'persist/REGISTER'
            ]
         }
      })
   }
})

export const  persistor=persistStore(store)

export type RootState=ReturnType<typeof store.getState> 


