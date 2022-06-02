import React from 'react'
import { v4 } from 'uuid'
import { roles } from '../../data'
import SectionTitle from '../SectionTitle'

type RoleItemProps = {
  key: string
  role: string
  icon: string
  activities: string
}

const RoleItem = ({ activities, icon, key, role }: RoleItemProps) => (
  <article key={key} className="flex items-start space-x-5">
    <span className="material-symbols-outlined text-4xl text-blue-500 ">
      {icon}
    </span>
    <div className="flex flex-col space-y-3">
      <h3 className="text-xl font-bold">{role}</h3>
      <p className="dark:text-slate-400 text-slate-600">{activities}</p>
    </div>
  </article>
)

const Roles = () => {
  return (
    <section className="mt-36 w-[65%] mx-auto">
      <SectionTitle title="What I Do" />

      <div className="grid grid-cols-2 w-full mt-10 gap-10">
        {roles.map((data) => (
          <RoleItem key={data.id} {...data} />
        ))}
      </div>
    </section>
  )
}

export default Roles
