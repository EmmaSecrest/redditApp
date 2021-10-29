import { createSlice } from "@reduxjs/toolkit";

const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: { subreddits: [
        {data: {id:1,name: "Home"}},
        {data: {id:1,name: "Memes"}}
    ]},
    reducer:{
        addSubreddit(state,action){
           return {
            ...state,
            subreddits: [...state.subreddits,action.payload]
           }
        },
        removeSubreddit(state,action){
            return{
                ...state,
                subreddits: state.subreddits.filter(sub => sub !== action.payload)
            }
        }

    }
})

export const {addSubreddit, removeSubreddit} = subredditSlice.actions;
export const subredditsReducer = subredditSlice.reducer
export const selectSubreddit = state => state.subreddits.subreddits
