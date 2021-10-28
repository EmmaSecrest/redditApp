
import React from "react";
import { selectSubreddit } from "./subredditSlice";
import { useSelector } from "react-redux";


export default function Subreddits(){
   const subreddits = useSelector(selectSubreddit)

   return  (
       <section>
           {/* render content here */} 
       </section>
   )
    
}