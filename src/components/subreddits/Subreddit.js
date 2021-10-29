
import React from "react";
import { selectSubreddit } from "./subredditSlice";
import { useSelector } from "react-redux";
import "./subreddits.css";

export default function Subreddits(){
   const subreddits = useSelector(selectSubreddit)

   return  (
       <section>
           
           
           <ul className = 'subreddit-list'>
               {Object.values(subreddits).map(sub => (
                   <li className = 'sub' key = {sub.data.id}>
                       <h3>{sub.data.name}</h3>
                   </li>

               ))}
           </ul>
           
       </section>
   )
    
}