import { combineReducers, configureStore} from "@reduxjs/toolkit"
import { authReducer } from "../features/authSlice"
import { themeReducer } from "../features/themeSlice"
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'

const rootReducer=combineReducers({
        auth:authReducer, 
        theme:themeReducer
})

const persistConfig={
    key:'root',
    storage:storage.default?storage.default:storage,  //{ default: actualStorageObject }
    whitelist:['auth','theme'],
    blacklist:null
}

const combinedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({ 
    reducer:combinedReducer, 
    middleware:(getDefault)=>{
       return getDefault({
            serializableCheck:{
                ignoredActions:[
                    'persist/PERSIST',
                    'persist/REHYDRATE',
                    'persist/REGISTER',
                ]
            }
        })
    }
})

export const persistor=persistStore(store)