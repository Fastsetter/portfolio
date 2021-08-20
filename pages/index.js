import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
export default function Home() {

  return (
    <div>
      <Head>
      <script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>


      </Head>
      <Navbar />
      <Intro></Intro>
      <Projects></Projects>
    </div>
  )
}
