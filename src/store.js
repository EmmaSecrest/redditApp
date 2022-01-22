import {configureStore } from '@reduxjs/toolkit'
import { feedReducer } from './components/feed/feedSlice'
import { subredditsReducer } from './components/subreddits/subredditSlice'
import { searchReducer } from './components/search/searchSlice'
import storage from 'redux-persist/lib/storage' ;
import {persistReducer ,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER} from 'redux-persist';// defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, subredditsReducer)


export const store = configureStore({
    reducer: {
        subreddits: persistedReducer ,
        feed: feedReducer,
        search: searchReducer
    }, middleware:  (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  
})