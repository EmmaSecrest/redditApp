
import { useSelector , useDispatch} from "react-redux";
import { useEffect , useState } from "react";
import { selectFeed } from "./feedSlice";
import { getPosts } from "./feedSlice";
// import {selectSubreddit, subredditsReducer} from '../subreddits/subredditSlice'
import "./feed.css"
import '../subreddits/Subreddit'
import { selectSelectedSubreddit } from "../subreddits/subredditSlice";
// import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import { getComments } from "./feedSlice";
import { selectComments } from "./feedSlice";

// import { Accordion , useAccordionButton , Card   } from "react-bootstrap";




export default function Feed() {
    // const subreddits = useSelector(selectSubreddit);
    const feed = useSelector(selectFeed);
    const dispatch = useDispatch()
    const selectedSubreddit = useSelector(selectSelectedSubreddit)
    const comments = useSelector(selectComments)
    const [isShowing , setIsShowing] = useState(false)
    
    const displayedComments = 
        <ul className = 'comment'>
        {comments.map((comment,index) => (
            <li> 
                {comment.author}
                {comment.body}
            </li>
        ))}
           
        
    </ul>
    
   
    
    useEffect(() => {
    
        console.log(selectedSubreddit)
        
        dispatch(getPosts(selectedSubreddit))
    
    },[dispatch, selectedSubreddit])



// if(isLoading) return <div>Loading</div>
// if(!feed) return null; 

function commentClick (subreddit,id){
   
    setIsShowing(!isShowing)
    
     console.log(isShowing)
    dispatch(getComments({subreddit,id}))
    
     if(isShowing === true) {
        console.log("Im here")
        
        return displayedComments
    } else {
        console.log('now I am here')
        return null;
    }

     
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
               
                <button onClick = {() =>  commentClick(post.subreddit, post.id) } className = 'comments' >Comments</button>
                {isShowing && displayedComments}
                </div>


            </li>

        ))}
    </ul> 
        </section>
    )
}