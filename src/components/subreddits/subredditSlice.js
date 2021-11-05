import { createSlice } from "@reduxjs/toolkit";





const subredditSlice = createSlice({
    name: 'subreddits',
    initialState: { subreddits: [
        {data: {id:1,name: "Home", search:'hot'}},
        {data: {id:1,name: "Memes", search: 'memes'}},
        {data:{id:3,name:"Ask Reddit",search: 'AskReddit'}},
        {data:{id:4, name: 'Aww',search:'aww'}},
        {data:{id:5, name:'Funny', search: 'funny'}},
        {data:{id:6, name: 'SW Galaxy of Heroes',search:'SWGalaxyofHeroes'}},
        {data:{id:7, name: 'Pics',search:'pics'}},
        {data:{id:8, name: 'Music', search: 'music'}},
        {data:{id:9, name: 'No stupid Question',search:'NostupidQuestion'}},
        {data:{id:10, name: "Explain like I'm five", search:'ExplainlikeImfive'}},
        {data:{id:11, name: 'Life Pro Tips',search:'LifeProTips'}},
        {data:{id:12, name: 'Netflix', search:'netflix'}},
        {data:{id:13, name: "Ask Science",search:'askScience'}},
        {data:{id: 14, name: 'BTS',search: 'bangtan'}},
        {data:{id:15, name: 'iPhone',search:'iphone'}},
        {data:{id:16, name:'Android', search: 'android'}},
        {data:{id:17, name: 'Starbucks', search:'starbucks'}},
        {data:{id:18,name: 'Twitch',search:'twitch'}},
        {data:{id:19, name: "Mildy Interesting", search:'MildyInteresting'}},
        {data:{id:20, name: "gaming" , search: 'gaming'}}

    ],
    error: false,
    isLoading: false,
    },
    reducers:{
        addSubreddit(state,action){
           // may need to be adjusted 
            state.subreddits.push(action.payload)
        },
        selectSubredditUpdated(state,action){
            state.selectedSubreddit = action.payload
        }
    },
    
})

export const {addSubreddit, selectSubredditUpdated } = subredditSlice.actions;
export const subredditsReducer = subredditSlice.reducer
export const selectSubreddit = state => state.subreddits.subreddits
export const selectSelectedSubreddit = state => state.subreddits.subreddits.selectSubreddit