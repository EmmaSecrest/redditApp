import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { isLoading } from "../feed/feedSlice";

export const getSearchResults = createAsyncThunk('search/getSearchResults',
async (argument) =>{
let response;
response = await fetch(`https://www.reddit.com/search/?q=${argument}&type=sr%2Cuser&restrict_sr=on.json`)
const responseJson = await response.json();

console.log(responseJson)
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
            state.isLoading = true;
            state.isError = false;
        },
        [getSearchResults.rejected](state,action){
            state.isLoading = false;
            state.isError = true;
        },
        [getSearchResults.fulfilled] (state,action){
            state.isLoading = false;
            state.isError = false;
            state.results = action.payload;
        }
    }
})

export const searchReducer = searchSlice.reducer;
export const selectResults = state => state.search.results;

