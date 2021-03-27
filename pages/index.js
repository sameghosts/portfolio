import Head from 'next/head'
//TODO: Components to import:
// Navbar - same lvl or 1 up
// Splash/Bio Comp container
// Projects comp container
// About comp container
// Contact comp container
// Footer - same lvl or 1 up

import Nav from '../components/nav'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Sean Feiner Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <h1 className="NameTitle">Sean Feiner</h1>
        <h3 className="TagLine">
          Insert Quick Bio Here
        </h3>
      
      </main>

    </div>
  )
}
