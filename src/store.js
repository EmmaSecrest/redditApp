import {configureStore } from '@reduxjs/toolkit'
import { subredditsReducer } from './components/subreddits/subredditSlice'

export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
    }
})