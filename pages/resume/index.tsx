import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import CodingSkills from '../../components/CodingSkills'
import EduEx from '../../components/EduEx'
import PageTitle from '../../components/PageTitle'
import ApiService from '../../utils/api'
import { Educations, Experiences, ProLangs } from '../../utils/types'

type Props = {
  education: Educations
  experience: Experiences
  proLang: ProLangs
  error: boolean | null
}

const Resume: NextPage<Props> = ({ education, error, experience, proLang }) => {
  return (
    <div>
      <Head>
        <title>Resume - Charles Duruaku</title>
      </Head>
      <PageTitle
        title="Resume"
        subTitle={`${new Date().getFullYear() - 2017} Years of Experience`}
      />
      {!error && education && (
        <EduEx educations={education} experiences={experience} />
      )}
      {!error && proLang && <CodingSkills {...proLang} />}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [eduRes, expRes, proLangRes] = await Promise.all([
      ApiService.education(),
      ApiService.experience(),
      ApiService.proLang(),
    ])

    return {
      props: {
        education: eduRes.data,
        experience: expRes.data,
        proLang: proLangRes.data,
        error: null,
      },
      revalidate: 86400,
    }
  } catch (error: any) {
    console.log(error.message)
    return {
      props: {
        education: null,
        error: true,
      },
      revalidate: 86400,
    }
  }
}

export default Resume
