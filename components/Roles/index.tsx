import React from 'react'
import { Skill, Skills } from '../../utils/types'
import SectionTitle from '../SectionTitle'

type RolesProps = Skills

const RoleItem = ({ ...skill }: Skill) => (
  <article className="flex items-start space-x-5">
    <span className="material-symbols-outlined text-4xl text-blue-500 ">
      {skill.attributes.icon_name}
    </span>
    <div className="flex flex-col space-y-3">
      <h3 className="text-xl font-bold">{skill.attributes.title}</h3>
      <p className="dark:text-slate-400 text-slate-600">
        {skill.attributes.description}
      </p>
    </div>
  </article>
)

const Roles = ({ ...skills }: RolesProps) => {
  return (
    <section className="mt-36 container px-7 mx-auto">
      <SectionTitle title="What I Do" />

      <div className="grid lg:grid-cols-2 w-full mt-10 gap-10">
        {skills.data.map((data) => (
          <RoleItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  )
}

export default Roles
