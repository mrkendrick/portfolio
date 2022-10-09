import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import PageTitle from '../../components/PageTitle'

const Project = () => {
  return (
    <div>
      <Head>
        <title>Projects - Charles Duruaku</title>
      </Head>
      <PageTitle title="Swirge" subTitle="" />
      <section className="mt-28 container px-7 mx-auto">
        <div className="items-start w-full flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
          <section className="grow">
            <div className="h-[22rem] lg:h-[30rem] overflow-hidden relative rounded-md">
              <Image src="/images/1.jpg" layout="fill" alt="project" />
            </div>

            <div className="mt-20 flex flex-col space-y-5">
              <h2 className="text-3xl">Description</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium quidem fuga consequatur voluptatum recusandae aut
                veniam asperiores, possimus reiciendis placeat quam dicta,
                laborum, ad cum eaque autem similique. Quia sequi distinctio
                consequuntur fuga officia, fugit error! Mollitia nihil
                distinctio, non sit inventore quaerat consectetur optio hic
                nostrum magni cum provident?
              </p>
            </div>
          </section>
          <aside className="w-full lg:w-2/3 border border-slate-300 dark:border-slate-600 rounded-lg bg-slate-100 dark:bg-gray-800 p-5">
            <div className="flex flex-col space-y-3">
              <h3 className="text-xl font-semibold">Links</h3>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-sm text-blue-600 dark:text-blue-500">
                  public
                </span>
                <a
                  href="#!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition-ease"
                >
                  swirge.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-sm text-blue-600 dark:text-blue-500">
                  code
                </span>
                <a
                  href="#!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition-ease"
                >
                  github.com
                </a>
              </div>
            </div>

            <div className="flex flex-col space-y-3 mt-10">
              <h3 className="text-xl font-semibold">Technology</h3>
              <div className="flex flex-wrap items-start space-x-2">
                <span className="bg-gray-700 dark:bg-gray-600 px-1.5 py-0.5 rounded-md text-white text-sm mb-2">
                  Tailwind
                </span>
                <span className="bg-gray-700 dark:bg-gray-600 px-1.5 py-0.5 rounded-md text-white text-sm mb-2">
                  CSS
                </span>
                <span className="bg-gray-700 dark:bg-gray-600 px-1.5 py-0.5 rounded-md text-white text-sm mb-2">
                  HTML5
                </span>
                <span className="bg-gray-700 dark:bg-gray-600 px-1.5 py-0.5 rounded-md text-white text-sm mb-2">
                  Tailwind
                </span>
                <span className="bg-gray-700 dark:bg-gray-600 px-1.5 py-0.5 rounded-md text-white text-sm mb-2">
                  Tailwind
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  }
}

export default Project
