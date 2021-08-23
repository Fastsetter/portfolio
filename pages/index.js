import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Curve from './components/Curve'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Showcase from './components/Showcase'
export default function Home() {

  return (
    <div>
      <Navbar />
      <Intro></Intro>
      <Showcase></Showcase>
      <Projects></Projects>
    </div>
  )
}
