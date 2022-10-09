import React from 'react'

type Props = {
  title: string
  subTitle: string
}

const PageTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="border-y h-56 border-gray-300 dark:border-gray-700 mt-5 flex flex-col lg:flex-row lg:items-center justify-center items-center lg:justify-between px-32 space-y-3 lg:space-y-0 text-center lg:text-left">
      <h1 className="font-semibold text-5xl">{title}</h1>
      <span className="text-slate-600 dark:text-slate-400">{subTitle}</span>
    </div>
  )
}

export default PageTitle
