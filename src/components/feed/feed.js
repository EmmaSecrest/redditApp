import React from "react";
import { useSelector } from "react-redux";
import { selectFeed } from "./feedSlice";
import {selectSubreddit, subredditsReducer} from '../subreddits/subredditSlice'
import "./feed.css"

export default function Feed() {
    const subreddits = useSelector(selectSubreddit);
    const feed = useSelector(selectFeed);

   document.getElementsByClassName('sub').onClick = function(){
       const subredditIdFromFeed = feed.data.subredditId;
       const subredditIdFromSubreddit = subreddits.data.id;

       if (subredditIdFromFeed === subredditIdFromSubreddit) {
           return (
               <ul className = 'posts'>
                   {Object.values(feed).map(posts =>
                    <li className = 'feed' key = {posts.data.subredditId[subredditIdFromFeed]}>
                        <h3>{posts.data.title}</h3>
                        <p>{posts.data.post}</p>
                    </li>
                    
                    )}
               </ul>
           )
       }
   }
     
    
    
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