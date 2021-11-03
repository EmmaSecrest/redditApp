// import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
import { selectFeed } from "./feedSlice";
import { getPosts } from "./feedSlice";
// import {selectSubreddit, subredditsReducer} from '../subreddits/subredditSlice'
import "./feed.css"
import '../subreddits/Subreddit'
import { getSubredditPosts } from "../feed/feedSlice";
// import { isLoading } from "./feedSlice";
// import Subreddits from "../subreddits/Subreddit";

export default function Feed() {
    // const subreddits = useSelector(selectSubreddit);
    const feed = useSelector(selectFeed);
    const dispatch = useDispatch()

    document.getElementsByClassName('subredditName').onClick = function () {
       alert('On Click works')
        dispatch(getSubredditPosts())
    }
    
    useEffect(() => {
    
        dispatch(getPosts())
    
    },[dispatch])



// if(isLoading) return <div>Loading</div>
// if(!feed) return null; 


function commentClick(){
   //place a use effect here for comments
 } 


    return (
        
        <section>

            <ul className = 'posts'>
        {feed.map((post, index) => (
            <li className = 'feed'key = {index} >
                r/{post.subreddit}<br/>
                <h2>{post.title}</h2>
                {/*less of a space here */}
                u/{post.author_fullname} <br />
                {post.selftext? post.selftext: null} <br/>
                {post.url? <a href = {post.url} className ='link'>Click me!</a>:null}
                
                { post.post_hint === 'image' &&           
                  <img 
                  alt = ''
                  src = {post.url}
                  className = 'image'
                />
                }
                { post.post_hint === 'video' &&           
                  <video
                  alt = ''
                  src = {post.videoUrl}
                  className = 'image'
                  controls
                  autoPlay
                > video is not supported </video>
                }


                <div className = 'bottom-inline'>
                Upvotes:{post.ups}
                <button onClick ={commentClick}>Comments</button>
                </div>


            </li>

        ))}
    </ul> 
        </section>
    )
}