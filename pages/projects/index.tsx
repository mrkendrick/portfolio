import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import PageTitle from '../../components/PageTitle'
import ProjectItem from '../../components/ProjectItem'
import { projects } from '../../data'
import ApiService from '../../utils/api'
import { Projects } from '../../utils/types'

type Props = {
  projects: Projects
  error: boolean
}

const Projects: NextPage<Props> = ({ projects, error }) => {
  return (
    <div>
      <Head>
        <title>Projects - Charles Duruaku</title>
      </Head>
      <PageTitle title="Projects" subTitle="Skills implementation" />
      <section className="mt-28 container px-7 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {projects &&
          !error &&
          projects.data.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await ApiService.projects()

    return {
      props: {
        projects: res.data,
        error: null,
      },
      revalidate: 86400,
    }
  } catch (error: any) {
    return {
      props: {
        projects: null,
        error: true,
      },
      revalidate: 86400,
    }
  }
}

export default Projects
