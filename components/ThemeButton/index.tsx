import { useTheme } from 'next-themes'
import React from 'react'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="dark:text-slate-100 p-2 border-2 border-slate-50 dark:border-gray-900 hover:border-blue-700 dark:hover:border-blue-500 rounded-lg transition-ease"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' ? (
        <span
          aria-label="light"
          className="material-symbols-outlined text-3xl text-yellow-400"
        >
          light_mode
        </span>
      ) : (
        <span
          aria-label="dark"
          className="material-symbols-outlined text-3xl text-gray-800"
        >
          dark_mode
        </span>
      )}
    </button>
  )
}

export default ThemeButton
