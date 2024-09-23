'use client';

import {
    QueryClientProvider as TanStackQueryClientProvider
} from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';

import { getQueryClient } from '~@/src/shared/lib/query-client';

export function QueryClientProvider({ children }: PropsWithChildren) {
    const queryClient = getQueryClient();

    return (
        <TanStackQueryClientProvider client={queryClient}>
            {/*<ReactQueryStreamedHydration>*/}
            {children}
            {/*</ReactQueryStreamedHydration>*/}
        </TanStackQueryClientProvider>
    );
}
