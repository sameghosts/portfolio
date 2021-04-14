import Head from 'next/head'
//TODO: Components to import:
// Navbar - same lvl or 1 up
// Splash/Bio Comp container
// Projects comp container
// About comp container
// Contact comp container
// Footer - same lvl or 1 up

import Nav from '../components/nav'
import Splash from '../components/splash'
import Projects from '../components/projects'
import Projekts from '../components/projekts'
import About from '../components/about'
import Contact from '../components/contact'

export default function Home() {
  return (
    <div className="w-screen flex flex-col bg-gray-200" >
      <Head>
        <title>Sean Feiner Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Splash />
      {/* <Projects /> */}
      <Projekts />

      <About />
      <Contact />
    

    </div>
  )
}
