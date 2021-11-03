
import { selectSubreddit } from "./subredditSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./subreddits.css";
import { getSubredditPosts } from "../feed/feedSlice";






export default function Subreddits(){
   const subreddits = useSelector(selectSubreddit)
   const dispatch = useDispatch()
   
   // try const subredditClick equal to an useEffect
   const subredditClick = function () {
        alert('on Click works!')
        dispatch(getSubredditPosts())
   }

   return  (
       <section >
            <ul className = 'subreddit-list'>
               {Object.values(subreddits).map(sub => (
                   <li className = 'sub' key = {sub.data.id} id = 'sub'>
                       <h3 className = 'subredditName' onClick = {subredditClick}>{sub.data.name}</h3>
                   </li>

               ))}
           </ul>
           
       </section>
   )
    
}