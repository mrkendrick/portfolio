import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'
import { skills } from '../../data'
import SectionTitle from '../SectionTitle'

const CodingSkills = () => {
  const { theme, setTheme } = useTheme()

  const mode = String(theme) as 'light' | 'dark'

  return (
    <section className="mt-28 w-[70%] mx-auto">
      <SectionTitle title="Coding Skills" />

      <div className="grid grid-cols-4 mt-10 gap-10">
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col items-center space-y-3">
            <Image
              src={skill.image[mode].src}
              width={skill.image[mode].width}
              height={skill.image[mode].height}
              layout="fixed"
            />
            <span className="text-xl">{skill.skill}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CodingSkills
