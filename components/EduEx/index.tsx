import React from 'react'
import { education, experience } from '../../data'
import SectionTitle from '../SectionTitle'

const EduEx = () => {
  return (
    <section className="flex items-start justify-between space-x-10 mt-28 w-[70%] mx-auto">
      <section>
        <SectionTitle title="Education" />
        <div className="mt-10 ml-5">
          {education.map((data, i) => (
            <article
              className={`px-8 pb-6 pt-14 relative ${
                i + 1 === education.length ? 'border-b-0' : 'border-b'
              } border-l border-stone-300 dark:border-stone-700 flex flex-col space-y-2`}
              key={data.id}
            >
              <div className="flex items-center space-x-3 absolute top-4 bg-slate-50 dark:bg-gray-900 -left-5">
                <span className="px-4 py-1 text-sm border-2 border-blue-500 rounded-full">
                  {data.timeline}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {data.title}
                </span>
              </div>
              <h3 className="font-semibold text-lg">{data.course}</h3>
              <p className="text-sm">{data.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <SectionTitle title="Experience" />
        <div className="mt-10 ml-5">
          {experience.map((data, i) => (
            <article
              className={`px-8 pb-6 pt-14 relative ${
                i + 1 === education.length ? 'border-b-0' : 'border-b'
              } border-l border-stone-300 dark:border-stone-700 flex flex-col space-y-2`}
              key={data.id}
            >
              <div className="flex items-center space-x-3 absolute top-4 bg-slate-50 dark:bg-gray-900 -left-5">
                <span className="px-4 py-1 text-sm border-2 border-blue-500 rounded-full">
                  {data.timeline}
                </span>
                <span className="text-sm text-slate-600 dark:text-slate-400">
                  {data.title}
                </span>
              </div>
              <h3 className="font-semibold text-lg">{data.role}</h3>
              <p className="text-sm">{data.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default EduEx
