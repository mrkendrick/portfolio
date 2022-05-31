import React, { ReactNode, useEffect, useState } from 'react'
import Navigation from '../Navigation'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen relative bg-slate-50 dark:bg-gray-900 transition-ease duration-500 text-slate-800 dark:text-slate-100">
      <Navigation />
      <section>{children}</section>
    </main>
  )
}

export default Layout
