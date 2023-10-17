import { IManga } from "@/interfaces/IManga"
import Image from "next/image"
import Link from "next/link"

type MangaCardProps = {
    manga: IManga
}
export const MangaCard: React.FC<MangaCardProps> = ({ manga }: MangaCardProps) => {
    return (
        <Link href={`/mangas/${manga.id}`}>
            <div className='flex flex-col min-w-[125px] min-h-[200px] max-w-[200px] overflow-hidden rounded-lg relative'>
                <Image
                    src={manga.posterUrl}
                    alt={manga.title}
                    layout="responsive"
                    width={1000}
                    height={600}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    style={{ width: '100%', height: 'auto' }}
                />
                <div className='absolute bg-black w-full p-1 bottom-0 opacity-80'>
                    <p className='opacity-100 line-clamp-2 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg text-center'>
                        {manga.title}
                    </p>
                </div>
            </div>
        </Link>
    )
}