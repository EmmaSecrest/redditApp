// import React from "react"
import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";



export const getPosts = createAsyncThunk('posts/getPosts', 
async (argument) => {
    let res 
        res = await fetch(`https://www.reddit.com/r/${argument}.json`)     
        const resJson = await res.json();
    
    return resJson.data.children.map(post=> post.data);
}
)
export const getComments = createAsyncThunk('comments/getComments', 
async (path) => {
    try {
        const response = await fetch(`https://www.reddit.com/${path}`)
        const postsArray = response.data[1].data.children
        const posts = postsArray.map(item => {
          return {
            author: item.data.author,
            body: item.data.body,
            id: item.data.id,
            ups: item.data.ups,
            created_utc: item.data.created_utc
          }
        })
        return posts
      } catch (error) {
        console.log(error)
      }
}
)




const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        posts: [],
        comments: [],
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
      [getComments.pending] (state,action){
          state.isLoading = true;
          state.error = false;
      } ,
      [getComments.rejected](state,action){
          state.isLoading = false ;
          state.error = true ;
      },
      [getComments.fulfilled] (state,action){
          state.isLoading = false;
          state.error = false ;
          state.comments = action.payload;
      }
      
    }
    
    
    
})
 
 export const feedReducer = feedSlice.reducer
 export const isLoading = (state) => state.feed.isLoading
 export const feedError = (state) => state.feed.error
 export const selectFeed = state => state.feed.posts;
 export const selectPostId = state => state.feed.postId; 
   


