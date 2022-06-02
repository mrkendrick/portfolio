import Head from 'next/head'
import React from 'react'
import CodingSkills from '../../components/CodingSkills'
import EduEx from '../../components/EduEx'
import PageTitle from '../../components/PageTitle'

const Resume = () => {
  return (
    <div>
      <Head>
        <title>Resume - Charles Duruaku</title>
      </Head>
      <PageTitle title="Resume" subTitle="5 Years of Experience" />
      <EduEx />
      <CodingSkills />
    </div>
  )
}

export default Resume
