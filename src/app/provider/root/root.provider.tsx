"use client";

import { QueryClientProvider } from "../react-query";
import { ApolloProvider } from "../apollo";

export function RootProvider({ children }: React.PropsWithChildren) {
    return (
        <QueryClientProvider>
            <ApolloProvider>{children}</ApolloProvider>
        </QueryClientProvider>
    );
}
