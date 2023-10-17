import Image from "next/image";
import { BookOpen, MessagesSquare, Heart, ArrowLeft } from 'lucide-react';
import Link from "next/link";
export default function Page({ params }: { params: { id: string } }) {
    console.log(params.id)
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
                <Image src={'/capa2.jpg'} alt="rara" width={200} height={350} />
                <p className="text-lg font-bold">Chainsaw Man</p>

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
                    Chainsaw Man" conta a história de Denji, um jovem endividado que, após a morte de seu pai, assume uma dívida monumental devido a um contrato com demônios. Para sobreviver, Denji se funde com o coração de um demônio de motosserra e se torna o "Chainsaw Man," um ser com a habilidade de se regenerar e combater demônios. No entanto, sua vida como caçador de demônios é tudo, menos glamorosa, uma vez que ele enfrenta perigos inimagináveis e é frequentemente subjugado por agências governamentais que o usam como uma ferramenta.
                </span>
            </div>

        </div >
    )
}