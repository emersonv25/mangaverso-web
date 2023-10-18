
import Image from "next/image";
import { BookOpen, MessagesSquare, Heart, ArrowLeft } from 'lucide-react';
import Link from "next/link";
import { MangaService } from "@/services/MangaService";


export async function generateStaticParams() {
    return [{ id: '1' }]
}

const getData = async (id: number) => {
    return await MangaService.getById(id)
}

export default async function Page({ params }: { params: { id: string } }) {

    const mangaResponse = await getData(Number(params.id));
    return (
        <div className="flex flex-col h-screen w-screen  overflow-x-hidden px-4 ">
            <div className="flex flex-row pt-5 ">
                <Link href={'/'}>
                    <div className="flex flex-row font-bold space-x-2 text-center justify-left items-center py-2 ">
                        <ArrowLeft />
                        <p className="text-base text-center ">Voltar</p>
                    </div>
                </Link>

            </div>

            <div className="flex flex-col justify-center items-center  space-y-2 pt-10">
                <Image src={mangaResponse.posterUrl} alt="rara" width={200} height={350} />
                <p className="text-lg font-bold">{mangaResponse.title}</p>

                <button className="bg-red-400 hover:bg-red-500 rounded-xl px-4 py-1 text-sm font-bold">Continuar</button>
            </div >

            <div className="flex flex-row space-x-2 pt-4 items-center justify-center">
                <div className="flex flex-col items-center w-24 ">
                    <BookOpen />
                    <p className="text-sm">150 capítulos</p>
                </div>
                <div className="flex flex-col items-center w-24 ">
                    <MessagesSquare />
                    <p className="text-sm">Comentários</p>
                </div>
                <div className="flex flex-col items-center w-24">
                    <Heart />
                    <p className="text-sm">Favoritar</p>
                </div>
            </div>

            <div className="flex flex-row space-x-2 py-6">
                <div className="bg-zinc-800 p-1 px-3 rounded-xl">
                    <p>Ação</p>
                </div>
                <div className="bg-zinc-800 p-1 px-3 rounded-xl">
                    <p>Aventura</p>
                </div>
                <div className="bg-zinc-800 p-1 px-3 rounded-xl">
                    <p>Demônios</p>
                </div>
                <div className="bg-zinc-800 p-1 px-3 rounded-xl">
                    <p>Shounen</p>
                </div>
            </div>
            <div>
                <span>
                    {mangaResponse.description}
                </span>
            </div>
            <div className="mt-2 mb-3">
                <div className="text-lg font-bold mt-3 mb-3">
                    Capítulos
                </div>
                <div className="text-sm font-medium">
                    <a href="#" aria-current="true" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-200">1</span>

                        Capítulo 1
                    </a>
                    <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-200">2</span>
                        Capítulo 2
                    </a>
                    <a href="#" className="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-200">3</span>
                        Capítulo 3
                    </a>
                    <a href="#" className="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                        <span className="bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-200">4</span>

                        Capítulo 4
                    </a>
                </div>
            </div>
        </div >
    )
}