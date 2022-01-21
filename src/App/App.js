// import logo from './logo.svg';
import "./App.css";
import Feed from "../components/feed/feed";
import Subreddits from "../components/subreddits/Subreddit";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/navBar/navBar";


function App() {
  return (
    <main className="App">
      <NavBar />
      <section>
      <Feed />
      <Subreddits />
      </section>
    </main>
  );
}

export default App;
