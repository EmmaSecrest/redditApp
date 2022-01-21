import styles from './search.module.css'
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { getSearchResults } from "./searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectResults } from "./searchSlice";
import { selectSubredditUpdated } from "../subreddits/subredditSlice";

export default function SearchBar() {
  const [searchterm, setSearchterm] = useState("");
  const dispatch = useDispatch();
  const results = useSelector(selectResults);

  function handleTermChange(e) {
    setSearchterm(e.target.value);
  }
  function search(e) {
    dispatch(getSearchResults(searchterm));
  }
  function searchClick(category) {
    console.log("im in here");
    dispatch(selectSubredditUpdated(category));
  }

  return (
    <div>
      <Dropdown>
        <div>
          <div className={styles.dropdown}>
            <input
              id="searchbar"
              type="text"
              placeholder="Search for subreddit"
              onChange={handleTermChange}
              onKeyPress={search}
            />
            <Dropdown.Toggle className={styles.searchButton}>
              See Results
            </Dropdown.Toggle>
          </div>

          <Dropdown.Menu>
            {results.map((result, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => {
                  searchClick(result.subreddit);
                }}
              >
                <h6>{result.subreddit}</h6>
                {result.title}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </div>
      </Dropdown>
    </div>
  );
}
