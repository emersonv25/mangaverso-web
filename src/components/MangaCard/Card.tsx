import { IManga } from "@/interfaces/IManga"
import Image from "next/image"

type CardProps = {
    manga: IManga
}
export const Card: React.FC<CardProps> = ({ manga }: CardProps) => {
    return (
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

    )
}