import React from 'react'
import Logo from '../Logo'
import ThemeButton from '../ThemeButton'
import { v4 } from 'uuid'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

const Navigation = () => {
  const { asPath } = useRouter()

  return (
    <header className="px-4 py-8 w-11/12 mx-auto flex items-center justify-between">
      <Logo />

      <nav className="flex items-center space-x-14">
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
    </header>
  )
}

export default Navigation
