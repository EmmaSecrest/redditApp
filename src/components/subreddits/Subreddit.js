import { selectSubreddit, selectSubredditUpdated } from "./subredditSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./subreddits.css";

export default function Subreddits() {
  const subreddits = useSelector(selectSubreddit);
  const dispatch = useDispatch();
  const subredditClick = function (category) {
    dispatch(selectSubredditUpdated(category));
  };

  return (
    <section className="subreddit-container">
      <h3>Suggested Subreddits</h3>
      <div>
        {Object.values(subreddits).map((sub) => (
          <button
            className="sub"
            key={sub.data.id}
            id="sub"
            onClick={() => subredditClick(sub.data.search)}
          >
            {sub.data.name}
          </button>
        ))}
      </div>
    </section>
  );
}
