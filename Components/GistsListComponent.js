import styles from '../styles/Home.module.css'
import BadgesComponent from './BadgesComponent';
import FilesComponent from './FilesComponents';
import ForksComponent from './ForksComponent';
const GistsList = (prop) => {
    const {list}= prop || null;
    
    return <div className={styles.grid}>
    {list.map(gist =>
                    <div className={styles.card} key={gist.id}>
                        <h3>{gist.owner.login} &rarr;</h3>
                        <p>{gist.description}</p>
                        <FilesComponent files = {gist.files}/>
                        <BadgesComponent files = {gist.files}/>
                        <hr/>
                        <ForksComponent url={gist.forks_url}/>
                    </div>
                )}
    </div>
        
    
}

export default GistsList;