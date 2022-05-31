import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="mt-32 w-[55%] mx-auto flex items-center justify-between space-x-10">
      <div className="min-h-[400px] min-w-[400px] border-[14px] border-blue-300 bg-center bg-cover bg-no-repeat overflow-hidden rounded-full bg-[url('/images/charles.jpeg')]"></div>
      <div className="flex flex-col space-y-5">
        <h6 className="text-slate-500 dark:text-slate-400">
          Software Engineer
        </h6>
        <h1 className="text-5xl font-bold">Charles Duruaku</h1>
        <p className="text-slate-700 dark:text-slate-200">
          Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
          convallis, risus non condimentum gravida, odio mauris ullamcorper
          felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
          placerat sapien pretium eu.
        </p>
        <div className="flex items-center space-x-6 font-semibold">
          <a
            target="_blank"
            href=""
            className="border-2 border-blue-600 bg-stone-100 hover:bg-blue-600 hover:text-white dark:border-blue-600 rounded-full dark:bg-stone-800 px-10 py-2.5 dark:hover:bg-blue-600 transition-ease"
          >
            View CV
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