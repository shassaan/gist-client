import Head from 'next/head'
import FooterComponents from '../Components/FooterComponents'
import GistsList from '../Components/GistsListComponent'
import HeaderComponent from '../Components/HeaderComponent'
import SearchComponent from '../Components/SearchComponent'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeaderComponent/>

        <SearchComponent/>

        <GistsList/>
      </main>

      <FooterComponents/>
    </div>
  )
}
