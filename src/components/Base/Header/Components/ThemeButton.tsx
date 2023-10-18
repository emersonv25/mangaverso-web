'use client'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useState } from 'react'

export const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center bg-zinc-800 text-white rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setDarkMode(!darkMode)}
        >
            {
                !darkMode ? (
                    <SunIcon />
                ) : (
                    <MoonIcon />
                )
            }

        </button>

    )
}