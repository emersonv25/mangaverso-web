import { IManga } from "@/interfaces/IManga"
import Image from "next/image"
import Link from "next/link"

type MangaCardProps = {
    manga: IManga
}
export const MangaCard: React.FC<MangaCardProps> = ({ manga }: MangaCardProps) => {
    return (
        <Link href={`/mangas/${manga.id}`}>
            <div className='flex flex-col min-w-[250px] min-h-[400px]  max-w-[250px] max-h-[400px] overflow-hidden rounded-lg relative'>
                <div className='absolute bg-black w-[250px] p-1 top-0 opacity-80 px-2 '>
                    <p className='opacity-100 line-clamp-1 text-white font-bold'>{manga.title}</p>
                </div>
                <Image
                    src={manga.posterUrl}
                    alt={manga.title}
                    width={250}
                    height={400}
                />

            </div>
        </Link>
    )
}