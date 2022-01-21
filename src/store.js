import {configureStore  } from '@reduxjs/toolkit'
import { feedReducer } from './components/feed/feedSlice'
import { subredditsReducer } from './components/subreddits/subredditSlice'
import { searchReducer } from './components/search/searchSlice'
import storage from 'redux-persist/lib/storage' ;
import {persistReducer} from 'redux-persist';// defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, feedReducer)


export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        feed:persistedReducer,
        search: searchReducer
    }
  
})