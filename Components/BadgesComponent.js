import styles from '../styles/Badges.module.css'
const BadgesComponent = (props) => {
    const {files} = props || [];
    const languages = [...Object.keys(files).map(el => files[el].language)].filter((v, i, a) => a.indexOf(v) === i);
    return (
        <>
            {
                languages.map(l => 
                    {
                        return <>{!l?<></>: <span className={styles.badge}>{l}</span>}{' '}</>
                    })
            }
        </>
    );
}

export default BadgesComponent;