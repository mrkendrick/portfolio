import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Roles from '../components/Roles'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Charles Duruaku</title>
      </Head>

      <HeroSection />
      <Roles />
    </div>
  )
}

export default Home
