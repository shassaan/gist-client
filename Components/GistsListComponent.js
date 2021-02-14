import styles from '../styles/Home.module.css'
import FilesComponent from './FilesComponents';
const GistsList = (prop) => {
    const {list}= prop || null;
    
    return <div className={styles.grid}>
    {list.map(gist =>
                    <div className={styles.card} key={gist.id}>
                        <h3>{gist.owner.login} &rarr;</h3>
                        <p>{gist.description}</p>
                        <FilesComponent files = {gist.files}/>
                    </div>
                )}
    </div>
        
    
}

export default GistsList;