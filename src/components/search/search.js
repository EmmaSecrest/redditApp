import './search.css'
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { getSearchResults } from './searchSlice'
import { useDispatch , useSelector } from 'react-redux'
import { selectResults } from './searchSlice'
import { selectSubredditUpdated } from '../subreddits/subredditSlice'


export default function SearchBar(){

   const [searchterm ,setSearchterm] = useState('')
    const dispatch = useDispatch()
    const results = useSelector(selectResults)
   
    function handleTermChange (e) {
        setSearchterm(e.target.value)
    }
    function search(e){
        dispatch(getSearchResults(searchterm))
    }
    function searchClick(category){
        console.log('im in here')
        dispatch(selectSubredditUpdated(category))
    }
 
   
   
    return (
        <section>
          
           <div className = 'dropdown'>
                <Dropdown >
                <div className = 'flexboxMe'>
                <input id = 'searchbar' type = 'text' className = 'search'  placeholder = 'Search for subreddit' onChange = {handleTermChange} onKeyPress = {search} />
                <Dropdown.Toggle className = 'searchButton' >See Results</Dropdown.Toggle>
                <Dropdown.Menu className = 'dropdown'>
                  {results.map((result,index) => (
                      <Dropdown.Item key ={index} >
                          <h6 onClick = {() => {searchClick(result.subreddit)}}>{result.subreddit}</h6>
                          {result.title}
                      </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
                </div>
                
                </Dropdown>
            </div>        
        

        </section>
        )
}