import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        feed: [
            {data: {id:1 , subredditId:1, post: 'post 1'}},
            {data: {id:2, subredditId:1, post: 'post 2'}},
            {data: {id:3, subredditId: 2, post: "post 3"}},
            {data: {id:4, subredditId:2, post:"post 4"}}
        ],
    error: false,
    isLoading: false,
    },
    extraReducers: {}
    
    
    
})