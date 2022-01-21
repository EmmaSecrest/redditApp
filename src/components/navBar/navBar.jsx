import SearchBar from "../search/search";
import styles from './navBar.module.css'
import {useState, useEffect} from 'react'

const NavBar = () => {
  const [width, setWidth] = useState()
  useEffect(() => {
  setWidth(window.innerWidth)
  },[])

  return (
    <nav className={styles.NavBar}>
      <div>
        <h1>{width > 600 && "Deep Dive"}</h1>
      </div>
      <SearchBar />
    </nav>
  );
};

export default NavBar;