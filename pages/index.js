import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sean Feiner Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="NameTitle">Sean Feiner</h1>
        <h3 className="TagLine">
          Insert Quick Bio Here
        </h3>
        
      </main>

    </div>
  )
}
