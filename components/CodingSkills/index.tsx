import { useTheme } from 'next-themes'
import Image from 'next/image'
import React from 'react'
import { ProLangs } from '../../utils/types'
import SectionTitle from '../SectionTitle'

type Props = ProLangs

const CodingSkills = ({ data }: Props) => {
  const { theme, setTheme } = useTheme()

  const mode = String(theme) as 'light' | 'dark'

  return (
    <section className="mt-28 container px-7 mx-auto">
      <SectionTitle title="Coding Skills" />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10">
        {data.map((lang) => (
          <a
            href={lang.attributes.external_link.url}
            key={lang.id}
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-col items-center space-y-3">
              <div className="relative w-32 h-32">
                <Image
                  src={lang.attributes.icons[mode]}
                  placeholder="blur"
                  blurDataURL={lang.attributes.icons[mode]}
                  layout="fill"
                  alt={lang.attributes.name}
                />
              </div>
              <span className="text-xl">{lang.attributes.name}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default CodingSkills
