import MangaCard from '@/components/MangaCard';
import { IManga } from '@/interfaces/IManga';

interface MangaResponse {
  currentPage: number;
  data: IManga[];
  totalCount: number;
  totalPages: number;
}

const getData = async () => {
  const res = await fetch('https://tiny-fawn-shawl.cyclic.app/api/v1/manga')
  if (res.status === 200) {
    const data = await res.json() as MangaResponse
    return data
  }
  return new Promise<MangaResponse>((resolve, reject) => {
    resolve({
      currentPage: 1,
      data: [],
      totalCount: 0,
      totalPages: 0
    })
  })
}

export default async function Home() {
  const mangas = await getData()

  return (
    <div className="flex flex-col min-h-screen bg-zinc-700 p-4">
      <div className='flex flex-col'>
        <h1 className='text-white font-bold' >Os mais lidos no momento!</h1>

        <div className='flex flex-row overflow-x-scroll space-x-3 scrollbar-thin scrollbar-thumb-gray-900  p-4'>
          {
            mangas?.data.map((manga, index) => {
              return (
                <MangaCard manga={manga} key={index} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
