import React from 'react'
import { Educations, Experiences } from '../../utils/types'
import SectionTitle from '../SectionTitle'

type Props = {
  educations: Educations
  experiences: Experiences
}

const EduEx = ({ educations, experiences }: Props) => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between space-y-16 lg:space-y-0 lg:space-x-10 mt-28 container px-7 mx-auto">
      <section>
        <SectionTitle title="Experience" />
        <div className="mt-10 ml-5">
          {experiences.data.map((data, i) => (
            <article
              className={`px-8 pb-6 pt-14 relative ${
                i === experiences.data.length - 1 ? 'border-b-0' : 'border-b'
              } border-l border-stone-300 dark:border-stone-700 flex flex-col space-y-2`}
              key={data.id}
            >
              <div className="flex items-center space-x-3 absolute top-4 bg-slate-50 dark:bg-gray-900 -left-5">
                <span className="px-4 py-1 text-xs lg:text-sm border-2 border-blue-500 rounded-full">
                  {`${data.attributes.exp_desc.start}${
                    data.attributes.exp_desc.end ? ' - ' : ''
                  }${
                    data.attributes.exp_desc.end
                      ? data.attributes.exp_desc.end
                      : ''
                  }`}
                </span>
                <a
                  href={data.attributes.external_link.url}
                  target="_blank"
                  className="flex items-center space-x-1"
                  rel="noreferrer"
                >
                  <span className="text-xs lg:text-sm text-slate-600 dark:text-slate-400">
                    {data.attributes.exp_desc.organization}
                  </span>
                  <span className="material-symbols-outlined text-slate-600 dark:text-slate-400 text-lg">
                    open_in_new
                  </span>
                </a>
              </div>
              <h3 className="font-semibold text-lg">
                {data.attributes.exp_desc.role}
              </h3>
              <p className="text-sm">{data.attributes.exp_desc.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle title="Education" />
        <div className="mt-10 ml-5">
          {educations.data.map((data, i) => (
            <article
              className={`px-8 pb-6 pt-14 relative ${
                i + 1 === educations.data.length ? 'border-b-0' : 'border-b'
              } border-l border-stone-300 dark:border-stone-700 flex flex-col space-y-2`}
              key={data.id}
            >
              <div className="flex items-center space-x-3 absolute top-4 bg-slate-50 dark:bg-gray-900 -left-5">
                <span className="px-4 py-1 text-xs lg:text-sm border-2 border-blue-500 rounded-full">
                  {`${data.attributes.edu_desc.start}${
                    data.attributes.edu_desc.end ? ' - ' : ''
                  }${
                    data.attributes.edu_desc.end
                      ? data.attributes.edu_desc.end
                      : ''
                  }`}
                </span>
                <span className="text-xs lg:text-sm text-slate-600 dark:text-slate-400">
                  {data.attributes.edu_desc.organization}
                </span>
              </div>
              <h3 className="font-semibold text-lg">
                {data.attributes.edu_desc.role}
              </h3>
              <p className="text-sm">{data.attributes.edu_desc.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default EduEx
