'use client';

import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
                {children}
        </QueryClientProvider>
    );
}
