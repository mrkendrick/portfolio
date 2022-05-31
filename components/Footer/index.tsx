import Link from 'next/link'
import React from 'react'
import { links } from '../Navigation'

const Footer = () => {
  return (
    <footer className="flex items-center justify-between px-20 dark:bg-gray-900 border-t dark:border-gray-700 mt-20 py-7">
      <div className="flex items-center space-x-5">
        <a href="" className="footer-links">
          Twitter
        </a>
        <a href="" className="footer-links">
          Instagram
        </a>
        <a href="" className="footer-links">
          LinkedIn
        </a>
      </div>

      <div className="flex items-center space-x-5">
        {links.map((link) => (
          <Link key={link.id} passHref href={link.href}>
            <a className="footer-links">{link.name}</a>
          </Link>
        ))}
      </div>

      <span className="text-sm dark:text-slate-400">
        &copy; {new Date().getFullYear()} All rights reserved
      </span>
    </footer>
  )
}

export default Footer
