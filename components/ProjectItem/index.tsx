import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { Project } from '../../utils/types'

type Props = Project

const ProjectItem = ({ attributes, id }: Props) => {
  return (
    <NextLink href={`/projects/${id}`}>
      <div className="w-full rounded-lg overflow-hidden h-60 relative hover:cursor-pointer">
        <span className="bg-stone-700 text-white absolute z-10 font-semibold p-1 rounded-md top-3 left-3 text-sm">
          {attributes.title}
        </span>
        <Image
          src={attributes.image.data.attributes.formats.medium.url}
          layout="fill"
          alt={attributes.title}
        />
        <div className="bg-stone-700 text-white absolute z-10 rounded-md bottom-3 left-3 px-2">
          {attributes.stacks.map((tag, i) => (
            <span className="text-sm" key={tag.id}>
              {tag.name}
              {`${i < attributes.stacks.length - 1 ? ', ' : ' '}`}
            </span>
          ))}
        </div>
      </div>
    </NextLink>
  )
}

export default ProjectItem
