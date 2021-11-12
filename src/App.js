// import logo from './logo.svg';
import './App.css';
import Feed from './components/feed/feed';
import Subreddits from './components/subreddits/Subreddit';
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/search/search';



function App() {
  return (
    <div className="App">
     <nav>
      <div className = 'textBackground'>
      <h1 style ={{fontSize :'60px'}}>Deep Dive</h1>
      </div>
      <div className = 'search'>
       <SearchBar />
       </div>
      </nav>
      <div className = 'subreddit-containter'>
      
      <div className="content">
      
      <Feed />
      
      <Subreddits />
      </div>
      
        
        
      
      </div>
      
        
        
      

    </div>
  );
}

export default App;
