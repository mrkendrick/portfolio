import Head from 'next/head'
import React from 'react'
import PageTitle from '../../components/PageTitle'

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects - Charles Duruaku</title>
      </Head>
      <PageTitle title="Projects" subTitle="Skills implementation" />
      <section className="mt-28 w-[70%] mx-auto"></section>
    </div>
  )
}

export default Projects
