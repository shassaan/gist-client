import styles from '../styles/Home.module.css'
const HeaderComponent = () => {
    return (
        <h1 className={styles.title}>
          Welcome to <a href="https://docs.github.com/en/github/writing-on-github/creating-gists">Gists</a> client.
        </h1>
    );
}

export default HeaderComponent;