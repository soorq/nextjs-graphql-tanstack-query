"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
    ApolloNextAppProvider,
    InMemoryCache,
    ApolloClient,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";

const $app = process.env.NEXT_PUBLIC_APP_URL

function makeClient() {
    const httpLink = new HttpLink({
        uri: `${$app}/api/graphql`,
        fetchOptions: { cache: "no-store" },
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    httpLink,
                ])
                : httpLink,
    });
}

export function ApolloProvider({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}