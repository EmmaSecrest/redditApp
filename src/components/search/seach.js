import './search.css'
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { getSearchResults } from './searchSlice'
import { useDispatch } from 'react-redux'


export default function SearchBar(){

   const [searchterm ,setSearchterm] = useState('')
    const dispatch = useDispatch()
   
    function handleTermChange (e) {
        setSearchterm(e.target.value)
    }
    function search(e){
        
            console.log('it works')
            dispatch(getSearchResults(searchterm))
        
    }
 
   
   
    return (
        <section>
           
           <div className = 'dropdown'>
                <Dropdown >
                <div className = 'flexboxMe'>
                <input id = 'searchbar' type = 'text' className = 'search'  placeholder = 'Search for subreddit' onChange = {handleTermChange} onKeyPress = {search} />
                <Dropdown.Toggle className = 'searchButton' >See Results</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item> test </Dropdown.Item>
                </Dropdown.Menu>
                </div>
                
                </Dropdown>
            </div>        
        
        
        </section>
        )
}