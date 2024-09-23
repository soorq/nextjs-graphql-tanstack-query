"use client";

import { ApolloProvider } from "../apollo";
import { QueryClientProvider } from "../react-query";

export function RootProvider({ children }: React.PropsWithChildren) {
    return (
        <QueryClientProvider>
            <ApolloProvider>{children}</ApolloProvider>
        </QueryClientProvider>
    );
}
