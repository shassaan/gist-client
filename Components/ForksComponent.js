import { useEffect, useState } from "react";
import styles from '../styles/Forks.module.css'
const ForksComponent = (props) => {
    const { url } = props || null;
    const [forks, setForks] = useState([]);
    useEffect(() => {
        fetch(url)
        .then(res => res.json()
        .then(json => {
            setForks(json.slice(Math.max(json.length - 3, 0)));
        }));
        
    },[props.url])

    return (
        <>
        {forks.length >0? <h4>Forks</h4> : <>0 Forks.</>}
            {
                
                forks.map(fork => {
                    return <div className={styles.forkContainer}>
                        <img src={fork.owner.avatar_url} height="75" width="75" className={styles.image}/><a href={fork.owner.html_url} target="_blank">{fork.owner.login}</a>
                    </div>
                    
                })
                
            }
        </>
    );
}



export default ForksComponent;