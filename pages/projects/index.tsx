import Head from 'next/head'
import React from 'react'
import PageTitle from '../../components/PageTitle'
import ProjectItem from '../../components/ProjectItem'
import { projects } from '../../data'

const Projects = () => {
  return (
    <div>
      <Head>
        <title>Projects - Charles Duruaku</title>
      </Head>
      <PageTitle title="Projects" subTitle="Skills implementation" />
      <section className="mt-28 container px-7 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </section>
    </div>
  )
}

export default Projects
