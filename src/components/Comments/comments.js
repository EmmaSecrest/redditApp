import React from "react";
import { selectFeed } from "../feed/feedSlice";
import { useSelector } from "react-redux";

export default function Comments(){
 const feed = useSelector(selectFeed)

    return (
        <ul className = 'comments'>
         {Object.values(feed).map(post => (<li className = 'comment' key = {post.comments}>
            {post.comments}
         </li>))}
     </ul>
    )
}