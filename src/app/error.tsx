'use client';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center ">
            <h2 className="text-3xl font-semibold mb-4">
                Ops, algo deu errado!
            </h2>
            <p className="mb-4">
                Parece que encontramos um erro inesperado. Por favor, tente novamente.
            </p>
            <button
                onClick={reset}
                className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded-full">
                Tente novamente
            </button>
        </div>
    );
}