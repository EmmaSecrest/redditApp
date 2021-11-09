import './search.css'
import { useState } from 'react'

export default function Search(){

   const [searchterm ,setSearchterm] = useState('')
   
    function handleTermChange (e) {
        setSearchterm(e.target.value)
    }
    function search(){
        return searchterm;
    }
   
   
    return (
        <section>
            <input id = 'searchbar' type = 'text' className = 'search'  placeholder = 'Search for subreddit' onChange = {handleTermChange} />
            <button className = 'searchButton'>Search</button>
        </section>
    )
}