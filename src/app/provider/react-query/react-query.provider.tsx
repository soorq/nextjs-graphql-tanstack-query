'use client';

import { getQueryClient } from '~@/src/shared/lib/query-client';
import type { PropsWithChildren } from 'react';
import {
    Query,
    QueryClientProvider as TanStackQueryClientProvider
} from '@tanstack/react-query';

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
