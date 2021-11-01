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
//not sure about this
    useEffect(() => {
    
        dispatch(getPosts())
    
},[dispatch])
// if(isLoading) return <div>Loading</div>
// if(!feed) return null; 
    
    
    
    return (
        
        <section>
            
            <ul className = 'posts'>
        {feed.map((post, index) => (
            <li className = 'feed'key = {index} >
                <h2>{post.title}</h2>
                <br/>
                r/{post.subreddit}<br/>
                {post.selftext? post.selftext: null}
                {post.ups}
                
            </li>

        ))}
    </ul> 
        </section>
    )
}