import { useState } from 'react';
import styles from '../styles/Search.module.css';
import GistsList from './GistsListComponent';
const SearchComponent = () => {
    const [username,SetUserName] = useState('');
    const [gists,setGists] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    
    const handleOnChange = (e) =>{
        SetUserName(e.target.value);
    }
    
    const getGists = () =>{ 
        setIsLoading(true);
        fetch(`https://api.github.com/users/${username}/gists`)
        .then(res => res.json()
        .then(data => {setGists(data);setIsLoading(false)}))
        .catch(err =>{console.log(err);setIsLoading(false)});
    }
    return (
        <>
            <div className={styles.search}>
                <input className={styles.searchBox} placeholder="Enter username " onChange={handleOnChange}/>
                <button className={styles.searchButton} onClick={getGists} type="button">{isLoading ? "Searching": "Search"}</button>
            </div>
            <div>
                {gists.length > 0 ? <GistsList list = {gists}/> : <>No data found !</>}
            </div>
        </>
    );
}
export default SearchComponent;