import styles from '../styles/Search.module.css';
const SearchComponent = () => {
    return (
        <div className={styles.search}>
            <input className={styles.searchBox}/>
            <button className={styles.searchButton}>Search</button>
        </div>
    );
}
export default SearchComponent;