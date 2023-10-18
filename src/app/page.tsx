import MangaCard from '@/components/MangaCard';
import { MangaService } from '@/services/MangaService';
import Manga from '@/types/Manga/Manga';
import PaginationDto from '@/types/PaginationDto';
import { MenuIcon } from 'lucide-react';


// const getData = async () => {
//   return await MangaService.getAll()
// }

const mockMangaResponse: PaginationDto<Manga[]> = {
  currentPage: 1,
  totalPages: 1,
  totalCount: 1,
  data: [
    {
      "id": 123,
      "createdAt": "2023-10-02T13:02:02.735Z",
      "modifiedAt": "2023-10-02T13:02:02.735Z",
      "title": "Um Manga Incrivel",
      "description": "Uma descrição bem foda que resume o manga",
      "posterUrl": "https://cdn.discordapp.com/attachments/347182996782055435/1153843819796762714/capa.jpg",
      "releaseDate": "2023",
      "genres": [
        {
          "id": 1,
          "name": "SEINEN"
        }
      ],
      "type": "MANGA",
      "viewsCount": 123,
      "chapters": [
        {
          "id": 123,
          "mangaId": 123,
          "createdAt": "2023-10-02T13:02:02.735Z",
          "modifiedAt": "2023-10-02T13:02:02.735Z",
          "chapterNumber": "1",
          "chapterPages": [
            {
              "id": 123,
              "chapterId": 123,
              "createdAt": "2023-10-02T13:02:02.735Z",
              "modifiedAt": "2023-10-02T13:02:02.735Z",
              "imageUrl": "https://img.lermanga.org/O/one-piece-colorido/capitulo-01/1.png",
              "pageNumber": 1
            }
          ]
        }
      ]
    }
  ]
}


export default async function Home() {
  const mangaResponse = mockMangaResponse//await getData()
  return (
    <div className="flex flex-col min-h-screen bg-zinc-700 p-4">


      <div className='flex flex-col'>
        <h1 className='text-white font-bold'>Os mais lidos no momento!</h1>

        <div className='flex flex-row overflow-x-scroll space-x-3 scrollbar-thin scrollbar-thumb-gray-900  p-4'>
          {
            mangaResponse?.data.map((manga, index) => {
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
