import {Metadata} from "next";

import Providers from "@/app/providers.tsx";
import "@/styles/index.scss";

export const metadata: Metadata = {
    title: '...',
    description: '...',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Next app</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link
                href="https://fonts.googleapis.com/css2?family=Lovers+Quarrel&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Arsenal+SC:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
        <main id="root">
            <Providers>
                {children}
            </Providers>
        </main>
        </body>
        </html>
    )
}