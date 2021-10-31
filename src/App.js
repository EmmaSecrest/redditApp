// import logo from './logo.svg';
import './App.css';
import Feed from './components/feed/feed';
import Subreddits from './components/subreddits/Subreddit';

function App() {
  return (
    <div className="App">
      <nav>
      <div className = 'textBackground'>
      <h1>Deep Dive</h1>
      </div>
      {/* search bar will be created here */}
      </nav>
      <div className = 'subreddit-containter'>
      <h2 className = "subs">Subreddits</h2>
      <div className = 'subreddits'>
        <Subreddits />
        
      </div>
      </div>
      
        <Feed />
        
      

    </div>
  );
}

export default App;
