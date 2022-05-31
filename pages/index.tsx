import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../components/HeroSection'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Charles Duruaku</title>
      </Head>

      <HeroSection />
    </div>
  )
}

export default Home
