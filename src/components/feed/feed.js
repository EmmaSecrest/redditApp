import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectFeed } from "./feedSlice";
import { getPosts } from "./feedSlice";
// import {selectSubreddit, subredditsReducer} from '../subreddits/subredditSlice'
import "./feed.css";
import "../subreddits/Subreddit";
import { selectSelectedSubreddit } from "../subreddits/subredditSlice";
// import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from "@mui/material/CardMedia";
import { getComments } from "./feedSlice";
import { selectComments } from "./feedSlice";

// import { Accordion , useAccordionButton , Card   } from "react-bootstrap";

export default function Feed() {
  // const subreddits = useSelector(selectSubreddit);
  const feed = useSelector(selectFeed);
  const dispatch = useDispatch();
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const comments = useSelector(selectComments);
  const [isShowing, setIsShowing] = useState(false);
  const [postIdToShow, setPostIdToShow] = useState(null);

  // needs to be styled
  const displayedComments = (
    <ul className="comment">
      {comments.map((comment, index) => (
        <li>
          <h3 className="author"> {comment.author} </h3>
          <p>{comment.body} </p>
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    // console.log(selectedSubreddit);
    dispatch(getPosts(selectedSubreddit));
    localStorage.setItem("selectedSubreddit" , selectedSubreddit)
    
  }, [dispatch, selectedSubreddit]);

  // if(isLoading) return <div>Loading</div>
  // if(!feed) return null;

  function commentClick(subreddit, id) {
    setIsShowing(!isShowing);
    setPostIdToShow(id);

    dispatch(getComments({ subreddit, id }));


    if (isShowing === true) {
      return displayedComments;
    } else {
      return null;
    }
  }
  function showCommentsForThisPost(id) {
    if (postIdToShow === id) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <section className="posts">
      {feed.map((post, index) => (
        <div className="feed" key={index}>
          r/{post.subreddit} | u/
          {post.author_fullname ? `${post.author_fullname}` : ""}
          {post.link_flair_text ? ` | ${post.link_flair_text}` : null}
          <br />
          <h4>{post.title}</h4>
          {post.selftext ? `${post.selftext.substring(0, 300)}...` : null}{" "}
          {post.url ? (
            <div>
              <a href={post.url} className="link">
                Read The Full Article
              </a>
            </div>
          ) : null}
          {post.preview
            ? post.preview.images.map((post, index) => (
                <div className="preview" key={index}>
                  {post.post_hint === "image" && (
                  <CardMedia
                    variant="outlined"
                      component="img"
                      alt=""
                      height="auto"
                      image={post.url}
                      title={post.title}

                    />
                  )}
                  {post.videoUrl && (
                    <CardMedia
                      component="video"
                      height="150"
                      autoPlay
                      controls
                      image={post.videoUrl}
                      title={post.title}
                    />
                  )}
                </div>
              ))
            : null}
          <br />
          {post.videoUrl && (
            <CardMedia
              component="video"
              height="150"
              autoPlay
              controls
              image={post.videoUrl}
              title={post.title}
            />
          )}
          {post.post_hint === "image" && (
            <CardMedia
              component="img"
              alt=""
              height="auto"
              width="50%"
              image={post.url}
              title={post.title}
            />
          )}{" "}
          <div className="bottom-inline">
            Upvotes: {post.ups}
            <button onClick={() => commentClick(post.subreddit, post.id)}>
              Comments
            </button>
          </div>
          {showCommentsForThisPost(post.id) && isShowing && displayedComments}
        </div>
      ))}
    </section>
  );
}
