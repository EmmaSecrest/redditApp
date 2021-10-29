import React from "react";
import { useSelector } from "react-redux";
import { selectFeed } from "./feedSlice";
import {selectSubreddit} from '../subreddits/subredditSlice'

export default function Feed() {
    const subreddits = useSelector(selectSubreddit);
    const feed = useSelector(selectFeed);

    const subredditFeedId = feed.data.subredditId;
    const subredditsId = subreddits.data.id ; 
     
    
    subreddits.onclick = function(){
        if(subredditsId === 1){
            <ul className = 'home-posts'>
               {Object.values(feed).map(posts => (
                   <li className = 'sub' key = {posts.data.id}>
                       <h3>{posts.data.title}</h3>
                       <p>{posts.data.post}</p>
                   </li>

               ))}
           </ul>
        } else if (subredditsId === subredditFeedId) {
            <ul className = 'subreddit-posts'>
                {Object.values(feed).map(posts => (
                    <li className = 'sub-feed' key = {posts.data.subredditId[subredditsId]} >
                        <h3>{posts.data.title}</h3>
                        <p>{posts.data.post}</p>
                    </li>
                ))
                }
            </ul>
        }
    }
    return (
        <ul className = 'home-posts'>
        {Object.values(feed).map(posts => (
            <li className = 'sub' key = {posts.data.id}>
                <h3>{posts.data.title}</h3>
                <p>{posts.data.post}</p>
            </li>

        ))}
    </ul> 
    )
}