import React from 'react'

type Props = {
  title: string
  width: number
}

const SectionTitle = ({ width, title }: Props) => {
  return (
    <div className="w-fit">
      <h5 className="font-semibold text-2xl">{title}</h5>
      <div className={`flex items-stretch w-[${width}rem] h-0.5 mt-2`}>
        <div className="w-[30%] dark:bg-blue-600 bg-blue-500"></div>
        <div className="w-[70%] dark:bg-stone-700 bg-stone-200"></div>
      </div>
    </div>
  )
}

export default SectionTitle
