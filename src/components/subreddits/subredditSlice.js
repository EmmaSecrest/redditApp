import { createSlice } from "@reduxjs/toolkit";

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: { subreddits: [
        {data: {id:1,name: "Home"}},
        {data: {id:1,name: "Memes"}}
    ],
    error: false,
    isLoading: false,
    },
    reducer:{
        addSubreddit(state,action){
           return {
            ...state,
            subreddits: [...state.subreddits,action.payload]
           }
        },
        
        

    }
})

export const {addSubreddit, removeSubreddit} = subredditSlice.actions;
export const subredditsReducer = subredditSlice.reducer
export const selectSubreddit = state => state.subreddits.subreddits
