// import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
import { selectFeed } from "./feedSlice";
import { getPosts } from "./feedSlice";
// import {selectSubreddit, subredditsReducer} from '../subreddits/subredditSlice'
import "./feed.css"
import '../subreddits/Subreddit'
import { selectSelectedSubreddit } from "../subreddits/subredditSlice";
// import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import { getComments } from "./feedSlice";
import { selectPostId } from "./feedSlice";
// import { isLoading } from "./feedSlice";
// import Subreddits from "../subreddits/Subreddit";


export default function Feed() {
    // const subreddits = useSelector(selectSubreddit);
    const feed = useSelector(selectFeed);
    const dispatch = useDispatch()
    const selectedSubreddit = useSelector(selectSelectedSubreddit)
    const postId = useSelector(selectPostId)
  
    
    useEffect(() => {
    
        
        dispatch(getPosts(selectedSubreddit))
    
    },[dispatch, selectedSubreddit])



// if(isLoading) return <div>Loading</div>
// if(!feed) return null; 


function commentClick(){
    dispatch(getComments(selectedSubreddit,postId))
    
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
                {post.link_flair_text? post.link_flair_text : null } <br/>
                {post.url? <a href = {post.url} className ='link'>Click me!</a>:null}
                
                {/* { post.post_hint === 'image' &&           
                  <img 
                  alt = ''
                  src = {post.url}
                  className = 'image'
                />
                }
                {post.videoUrl && <CardMedia 
                component="video"
                height="200"
                autoPlay
                controls
                image={post.videoUrl}
                title={post.title}
            />} */}
            
                {post.videoUrl && <CardMedia 
                component="video"
                height="150"
                autoPlay
                controls
                image={post.videoUrl}
                title={post.title}
            />}
            
            {post.post_hint === 'image' && <CardMedia
                    component="img"
                    alt=""
                    height="auto"
                    image={post.url}
                    title={post.title}
                    />
                } <br/>


                <div className = 'bottom-inline'>
                Upvotes: {post.ups}
                <button onClick = {() => commentClick (post.subreddit,post.id)} className = 'comments' >Comments</button>
                </div>


            </li>

        ))}
    </ul> 
        </section>
    )
}