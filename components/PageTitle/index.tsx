import React from 'react'

type Props = {
  title: string
  subTitle: string
}

const PageTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="border-y h-56 border-gray-300 dark:border-gray-700 mt-5 flex items-center justify-between px-32">
      <h1 className="font-semibold text-5xl">{title}</h1>
      <span className="text-slate-600 dark:text-slate-400">{subTitle}</span>
    </div>
  )
}

export default PageTitle
