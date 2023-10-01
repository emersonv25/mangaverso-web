"use client"
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex min-h-screen text-white">
      {/* Conteúdo da página */}
      <main className="flex-grow bg-zinc-950">
        <div className='flex bg-zinc-900 w-full p-3 '>
          <h1 className='text-2xl text-red-500 font-bold'>MANGAVERSO</h1>
          <button className='ml-auto' onClick={toggleDrawer}>Abrir Drawer</button>
        </div>
        <div className='p-4'>
          <div className='flex bg-zinc-900 p-4 text-center justify-center'>
            <p className='p-2'>Ler Mangá</p>
            <button className='ml-auto bg-red-600 p-2  text-xs rounded-md'>VER TODOS</button>
          </div>
          <div className='h-60 bg-zinc-800'>

          </div>
        </div>

      </main>

      {/* Drawer */}
      <aside className={`transform top-0 left-0 w-64 bg-zinc-900 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`} onClick={toggleDrawer}>

        <button className="absolute top-3 right-3 text-white" onClick={toggleDrawer}>Fechar</button>
      </aside>
    </div>
  )
}
