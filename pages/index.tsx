import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Roles from '../components/Roles'
import ApiService from '../utils/api'
import { About, Skills } from '../utils/types'

type Props = {
  about: About | null
  skills: Skills | null
  error: boolean | null
}

const Home: NextPage<Props> = ({ about, error, skills }) => {
  return (
    <div>
      <Head>
        <title>Charles Duruaku</title>
      </Head>

      {!error && about && <HeroSection {...about} />}
      {!error && skills && <Roles {...skills} />}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [aboutRes, skillsRes] = await Promise.all([
      ApiService.about(),
      ApiService.skills(),
    ])

    return {
      props: {
        about: aboutRes.data,
        skills: skillsRes.data,
        error: null,
      },
      revalidate: 86400,
    }
  } catch (error: any) {
    return {
      props: {
        about: null,
        skills: null,
        error: true,
      },
      revalidate: 86400,
    }
  }
}

export default Home
