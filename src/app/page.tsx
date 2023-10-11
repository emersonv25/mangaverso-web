"use client"
import MangaCard from '@/components/MangaCard';
import { IManga } from '@/interfaces/IManga';
import { useState } from 'react';
import { useQuery } from 'react-query';



interface MangaResponse {
  currentPage: number;
  data: IManga[];
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
    <div className="flex flex-col min-h-screen bg-zinc-700 p-4">
      <div className='flex flex-col'>
        <h1 className='text-white font-bold' >Os mais lidos no momento!</h1>

        <div className='flex flex-row overflow-x-scroll space-x-3'>

          {
            data?.data.map((manga, index) => {
              return (
                <MangaCard.Root manga={manga} key={index} />
              )
            })
          }

        </div>




      </div>
    </div>
  )
}
