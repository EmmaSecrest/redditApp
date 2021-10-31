import {configureStore } from '@reduxjs/toolkit'
import { feedReducer } from './components/feed/feedSlice'
import { subredditsReducer } from './components/subreddits/subredditSlice'

export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        feed:feedReducer
    }
})