import {configureStore } from '@reduxjs/toolkit'
import { feedReducer } from './components/feed/feedSlice'
import { subredditsReducer } from './components/subreddits/subredditSlice'
import { searchReducer } from './components/search/searchSlice'

export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        feed:feedReducer,
        search: searchReducer
    }
})