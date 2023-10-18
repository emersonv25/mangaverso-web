import MangaCard from '@/components/MangaCard';
import { MangaService } from '@/services/MangaService';
import Manga from '@/types/Manga/Manga';


const getData = async () => {
  return await MangaService.getAll()
}

export default async function Home() {
  const mangas = await getData()

  return (
    <div className="flex flex-col min-h-screen bg-zinc-700 p-4">
      <div className='flex flex-col'>
        <h1 className='text-white font-bold'>Os mais lidos no momento!</h1>

        <div className='flex flex-row overflow-x-scroll space-x-3 scrollbar-thin scrollbar-thumb-gray-900  p-4'>
          {
            mangas?.data.map((manga, index) => {
              return (
                <MangaCard id={manga.id} title={manga.title} posterUrl={manga.posterUrl} key={manga.id + index} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
