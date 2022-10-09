import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

type Props = {
  id: string
  tags: string[]
  image: string
  title: string
}

const ProjectItem = ({ image, tags, title, id }: Props) => {
  return (
    <NextLink href={`/projects/${id}`}>
      <div className="w-full rounded-lg overflow-hidden h-72 relative hover:cursor-pointer">
        <span className="bg-stone-700 text-white absolute z-10 font-semibold p-1 rounded-md top-3 left-3 text-sm">
          {title}
        </span>
        <Image src={image} layout="fill" alt={title} />
        <div className="bg-stone-700 text-white absolute z-10 rounded-md bottom-3 left-3 px-2">
          {tags.map((tag, i) => (
            <span className="text-sm" key={i}>
              {tag}
              {`${i < tags.length - 1 ? ', ' : ' '}`}
            </span>
          ))}
        </div>
      </div>
    </NextLink>
  )
}

export default ProjectItem
