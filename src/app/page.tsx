"use client"
import axios from 'axios';
import { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { useQuery } from 'react-query';

interface Genre {
  id: number;
  name: string;
}

interface Manga {
  id: number;
  createdAt: string;
  modifiedAt: string;
  releaseDate: string;
  title: string;
  description: string;
  type: string;
  posterUrl: string;
  viewsCount: number;
  genres: Genre[];
}

interface MangaResponse {
  currentPage: number;
  data: Manga[];
  totalCount: number;
  totalPages: number;
}

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };


  const getMangas = async () => {
    const res = await fetch('https://tiny-fawn-shawl.cyclic.app/api/v1/manga')
    console.log("🚀 ~ file: page.tsx:14 ~ getMangas ~ res:", res.status)
    if (res.status == 200) {
      const data = await res.json() as MangaResponse
      console.log("🚀 ~ file: page.tsx:45 ~ getMangas ~ data:", data)
      return data
    } else {
      throw new Error('Error ao carregar os mangas!')
    }

  }
  const { data, isLoading, error } = useQuery('mangas', getMangas)

  return (
    <div className="flex min-h-screen text-white">
      {/* Conteúdo da página */}
      <main className="flex-grow bg-zinc-950">
        <div className='flex bg-zinc-900 w-full p-3 '>
          <h1 className='text-2xl text-red-500 font-bold'>MANGAVERSO</h1>
          <button className='ml-auto' onClick={toggleDrawer}><IoMenu /></button>
        </div>
        <div className='p-4'>
          <div className='flex bg-zinc-900 p-4 text-center justify-center'>
            <p className='p-2 font-bold'>Ler Mangá</p>
            <button className='ml-auto bg-red-600 px-2  text-xs rounded-md'>VER TODOS</button>
          </div>
          <div className='min-h-60 bg-zinc-800 p-2'>
            {
              isLoading ? <p>Carregando...</p> : data?.data.map((manga, index) => {
                return (
                  <div key={index} className='bg-slate-100 flex flex-col max-w-xs'>
                    <div className='bg-black' >
                      <p>{manga.type}</p>
                    </div>
                    <img src={manga.posterUrl} alt={manga.title}  className='max-h-32'/>
                    <p>{manga.title}</p>
                  </div>
                )
              })
            }
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
