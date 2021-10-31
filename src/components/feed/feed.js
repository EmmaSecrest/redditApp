import React from "react";
import { useSelector } from "react-redux";
import { selectFeed } from "./feedSlice";
import {selectSubreddit} from '../subreddits/subredditSlice'
import "./feed.css"

export default function Feed() {
    const subreddits = useSelector(selectSubreddit);
    const feed = useSelector(selectFeed);

   
     
    
    
    return (
        <section>
            <ul className = 'posts'>
        {Object.values(feed).map(posts => (
            <li className = 'feed' key = {posts.data.id}>
                <h3>{posts.data.title}</h3>
                <p>{posts.data.post}</p>
            </li>

        ))}
    </ul> 
        </section>
    )
}