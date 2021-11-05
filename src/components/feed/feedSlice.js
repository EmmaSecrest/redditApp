// import React from "react"
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";



export const getPosts = createAsyncThunk('posts/getPosts', 
async (argument) => {
    let res 
   
        // alert('something was Clicked') 
        res = await fetch(`https://www.reddit.com/r/${argument}.json`)     
     
        // alert('default chosen')
        const resJson = await res.json();
    
    return resJson.data.children.map(post=> post.data);
}
)
export const getComments = createAsyncThunk('comments/getComments', 
async () => {
    //adjust this link
    const res = await fetch(``)
    const resJson = await res.json();
    
    return resJson.data.children.map(post=> post.data);
}
)




const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        posts: [],
        feed: [
            // {data: {id:1 , subredditId:1,title: 'title 1' ,post: 'post 1'}},
            // {data: {id:2, subredditId:1, title: "title 2" ,post: 'post 2'}},
            // {data: {id:3, subredditId: 2,title: 'title 3' ,post: "post 3"}},
            // {data: {id:4, subredditId:2,title: 'title 4' ,post:"post 4"}}
        ],
    error: false,
    isLoading: false,
    },
    
    extraReducers: {
      [getPosts.pending] (state,action){
          state.isLoading = true;
          state.error = false;
      },  
      [getPosts.rejected] (state,action){
          state.isLoading = false;
          state.error = true;
      },
      [getPosts.fulfilled](state,action){
          state.isLoading = false;
          state.error = false;
          state.posts = action.payload;
        },
       
      //add an extra reducer for the comments
    }
    
    
    
})
 
 export const feedReducer = feedSlice.reducer
 export const isLoading = (state) => state.feed.isLoading
 export const feedError = (state) => state.feed.error
 export const selectFeed = state => state.feed.posts;
 


