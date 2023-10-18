import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mangaverso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className='flex flex-col min-h-screen bg-zinc-700 text-white'>
          {children}
        </div>
      </body>
    </html>
  )
}
