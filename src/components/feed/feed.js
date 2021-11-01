// import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
import { selectFeed } from "./feedSlice";
import { getPosts } from "./feedSlice";
// import {selectSubreddit, subredditsReducer} from '../subreddits/subredditSlice'
import "./feed.css"
import { isLoading } from "./feedSlice";
// import Subreddits from "../subreddits/Subreddit";

export default function Feed() {
    // const subreddits = useSelector(selectSubreddit);
    const feed = useSelector(selectFeed);
    const dispatch = useDispatch()

useEffect(() => {
    if(feed){
        dispatch(getPosts(feed.id))
    }
},[feed,dispatch])
if(isLoading) return <div>Loading</div>
if(!feed) return null; 
    
    
    return (
        <section>
            <ul className = 'posts'>
        {Object.values(feed).map(posts => (
            <li className = 'feed' key = {posts.data.id}>
                
            </li>

        ))}
    </ul> 
        </section>
    )
}