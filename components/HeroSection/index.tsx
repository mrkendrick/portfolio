import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { About } from '../../utils/types'

type Props = About

const HeroSection = ({ ...about }: Props) => {
  const { data } = about

  return (
    <section className="mt-32 w-[93%] lg:w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-10">
      <div className="min-h-[350px] min-w-[350px] lg:min-h-[400px] lg:min-w-[400px] border-[14px] border-blue-300 bg-center bg-cover bg-no-repeat overflow-hidden rounded-full relative">
        <Image
          layout="fill"
          src={data.attributes.avatar.data.attributes.formats.large.url}
          blurDataURL={
            data.attributes.avatar.data.attributes.formats.thumbnail.url
          }
          placeholder="blur"
          alt="Charles Duruaku"
        />
      </div>
      <div className="flex flex-col space-y-5 text-center lg:text-left">
        <h6 className="text-slate-500 dark:text-slate-400">
          {data.attributes.title}
        </h6>
        <h1 className="text-5xl font-bold">{data.attributes.name}</h1>
        <p className="text-slate-700 dark:text-slate-200">
          {data.attributes.profile_description}
        </p>
        <div className="flex justify-center lg:justify-start items-center space-x-6 font-semibold">
          <a
            target="_blank"
            href={data.attributes.resume_url}
            className="border-2 border-blue-600 bg-stone-100 hover:bg-blue-600 hover:text-white dark:border-blue-600 rounded-full dark:bg-stone-800 px-10 py-2.5 dark:hover:bg-blue-600 transition-ease"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <Link href="/contact" passHref>
            <a className="border-2 hover:bg-stone-800 hover:text-white hover:border-stone-800 dark:border-slate-200 rounded-full dark:bg-stone-800 px-10 py-2.5 dark:hover:bg-slate-200 dark:hover:text-slate-800 transition-ease">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
