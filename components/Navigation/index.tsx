import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { v4 } from 'uuid'
import Logo from '../SectionTitle/Logo'
import ThemeButton from '../ThemeButton'

export const links = [
  {
    id: v4(),
    name: 'About Me',
    href: '/',
  },
  {
    id: v4(),
    name: 'Resume',
    href: '/resume',
  },
  {
    id: v4(),
    name: 'Projects',
    href: '/projects',
  },
  {
    id: v4(),
    name: 'Contact',
    href: '/contact',
  },
]

const MobileNav = ({ asPath }: { asPath: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined text-6xl">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      <nav
        className={`bg-slate-300 z-50 dark:bg-slate-800 flex flex-col p-4 space-y-7 h-fit absolute left-0 right-0 transition-ease ${
          isOpen ? 'translate-y-5' : '-translate-y-[40rem]'
        }`}
      >
        {links.map((link) => (
          <Link href={link.href} key={link.id}>
            <a
              onClick={() => setIsOpen(false)}
              className={`p-1 text-lg ${
                asPath === link.href
                  ? 'dark:text-slate-50 text-slate-900'
                  : 'text-slate-500 dark:text-slate-400'
              } hover:text-slate-900 dark:hover:text-slate-50 transition-ease`}
            >
              {link.name}
            </a>
          </Link>
        ))}
        <ThemeButton />
      </nav>
    </div>
  )
}

const Navigation = () => {
  const { asPath } = useRouter()

  return (
    <header className="lg:px-4 py-4 lg:py-8 w-11/12 mx-auto flex items-center justify-between">
      <Logo />

      <nav className="hidden lg:flex items-center space-x-14">
        {links.map((link) => (
          <Link href={link.href} key={link.id}>
            <a
              className={`p-1 ${
                asPath === link.href
                  ? 'dark:text-slate-50 text-slate-900'
                  : 'text-slate-500 dark:text-slate-400'
              } hover:text-slate-900 dark:hover:text-slate-50 transition-ease`}
            >
              {link.name}
            </a>
          </Link>
        ))}
        <ThemeButton />
      </nav>
      <MobileNav asPath={asPath} />
    </header>
  )
}

export default Navigation
