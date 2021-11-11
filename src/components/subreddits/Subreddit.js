
import { selectSubreddit , selectSubredditUpdated  } from "./subredditSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import "./subreddits.css";







export default function Subreddits(){
   const subreddits = useSelector(selectSubreddit)
    const dispatch = useDispatch()
    const subredditClick = function (category){
       
        dispatch(selectSubredditUpdated(category))
    }


   return  (
       <section >
           <h2 className = "subs">Suggested Subreddits</h2>
            <ul className = 'subreddit-list'>
               {Object.values(subreddits).map(sub => (
                   <li className = 'sub' key = {sub.data.id} id = 'sub' onClick = {() => subredditClick(sub.data.search)}>
                       <h3 className = 'subredditName' >{sub.data.name}</h3>
                   </li>

               ))}
           </ul>
           
       </section>
   )
    
}
