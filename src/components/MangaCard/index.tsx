import Image from "next/image"
import Link from "next/link"

type MangaCardProps = {
    id: number,
    posterUrl: string,
    title: string,    
}
const MangaCard: React.FC<MangaCardProps> = ({ id, posterUrl, title }: MangaCardProps) => {
    return (
        <Link href={`/mangas/${id}`}>
            <div className='flex flex-col min-w-[125px] min-h-[200px] max-w-[200px] overflow-hidden rounded-lg '>
                <Image
                    src={posterUrl}
                    alt={title}
                    width={1000}
                    height={600}
                    sizes="(max-width: 600px) 100vw, 50vw"
                    style={{ width: '100%', height: 'auto' }}
                />
                <div className='  w-full p-1 bottom-0 opacity-80'>
                    <p className='opacity-100 line-clamp-1 hover:line-clamp-2 text-white font-bold text-xs sm:text-xs lg:text-sm text-center'>
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default MangaCard