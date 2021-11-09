import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { isLoading } from "../feed/feedSlice";

export const getSearchResults = createAsyncThunk('search/getSearchResults',
async (argument) =>{
let response;
response = await fetch(`https://www.reddit.com/search/?q=${argument}&type=sr%2Cuser`)
const responseJson = await response.json();
//going to have to console log that 
// no idea what it is going to look like 
return responseJson
}
)

const searchSlice = createSlice({
    name: 'search',
    initialState: {results: [],
        isError: false,
        isLoading: false
    },
    extraReducers: {
        [getSearchResults.pending](state,action){
            isLoading = true;
            
        }
    }


})