import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import PageTitle from '../../components/PageTitle'
import ApiService from '../../utils/api'
import { Project } from '../../utils/types'

type Props = {
  project: {
    data: Project
  }
  error: boolean
}

const Project: NextPage<Props> = ({ project, error }) => {
  return !error && project ? (
    <div>
      <Head>
        <title>{project.data.attributes.title} - Charles Duruaku</title>
      </Head>
      <PageTitle title={project.data.attributes.title} subTitle="" />
      <section className="mt-28 container px-7 mx-auto">
        <div className="items-start w-full flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
          <section className="grow">
            <div className="h-[14rem] lg:h-[30rem] overflow-hidden relative rounded-md">
              <Image
                src={
                  project.data.attributes.image.data.attributes.formats.large
                    .url
                }
                layout="fill"
                alt={project.data.attributes.title}
              />
            </div>

            <div className="mt-20 flex flex-col space-y-5">
              <h2 className="text-3xl">Description</h2>
              <p>{project.data.attributes.description}</p>
            </div>
          </section>
          <aside className="w-full lg:w-1/3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-100 dark:bg-gray-800 p-5">
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-semibold">Links</h3>
              {project.data.attributes.links.map((link) => (
                <div className="flex items-center space-x-2" key={link.id}>
                  <span className="material-symbols-outlined text-sm text-blue-600 dark:text-blue-500">
                    {link.platform === 'website' ? 'public' : 'code'}
                  </span>
                  <a
                    href={`https://${link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition-ease"
                  >
                    {link.url}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-3 mt-10">
              <h3 className="text-xl font-semibold">Technology</h3>
              <div className="flex flex-wrap items-start space-x-2">
                {project.data.attributes.techs.map((tech) => (
                  <span
                    key={tech.id}
                    className="bg-gray-700 dark:bg-gray-600 px-1.5 py-0.5 rounded-md text-white text-sm mb-2"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  ) : (
    <></>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const res = await ApiService.project(ctx.query.id as string)

    return {
      props: {
        project: res.data,
        error: null,
      },
    }
  } catch (error: any) {
    return {
      props: {
        project: null,
        error: true,
      },
    }
  }
}

export default Project
