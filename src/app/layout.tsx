import type {Metadata} from 'next';
import {Archivo, Space_Mono} from 'next/font/google';
import './globals.css';
import {Nav} from '@/components/blocks/nav';
import {ThemeToggle} from '@/components/theme-toggle';
import {ThemeProvider} from '@/components/theme-provider';
import {cn} from '@/lib/utils';
import {Footer} from '@/components/blocks/footer';
import InkCursor from "@/components/ink-cursor";

const archivo = Archivo({
    variable: '--font-archivo',
    subsets: ['latin'],
});

const spaceMono = Space_Mono({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-space-mono'
})

export async function generateMetadata(): Promise<Metadata> {
    const hostname = process.env.NEXT_PUBLIC_HOSTNAME || 'localhost';
    return {
        title: 'Alfian Akmal Hanantio - Software Engineer',
        description: 'Building secure, scalable, and accessible digital products for enterprises and fintech industries since 2017. I am currently working as a Senior Android Developer at Digital Daya Teknologi.',
        openGraph: {
            title: 'Alfian Akmal Hanantio - Software Engineer',
            description: 'Building secure, scalable, and accessible digital products for enterprises and fintech industries since 2017. I am currently working as a Senior Android Developer at Digital Daya Teknologi.',
            url: `https://${hostname}/`,
            siteName: 'Alfian Akmal Hanantio',
            type: 'website',
        },
        alternates: {
            canonical: `https://${hostname}/`,
        },
        robots: {
            follow: true,
            index: true,
        },
        authors: {
            name: 'Alfian Akmal Hanantio',
        },
        keywords: [
            "alfian",
            "akmal",
            "hanantio",
            "software engineer",
            "software",
            "android",
            "android developer",
            "kotlin",
            "mobile developer",
            "backend",
            "web developer",
            "frontend",
            "senior",
            "secure",
            "application",
            "scalable",
            "best practices",
        ]
    }
}

export default function RootLayout(
    {
        children
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <link rel="dns-prefetch" href="https://cdn.jsdelivr.net"/>
            <link rel="dns-prefetch" href="https://raw.githubusercontent.com"/>
        </head>
        <body
            className={cn(
                `${archivo.variable} ${spaceMono.variable} antialiased font-sans`
            )}
        >
        <ThemeProvider attribute="class">
            <InkCursor/>
            <Nav/>
            <main>
                {children}
            </main>
            <ThemeToggle className="fixed bottom-8 right-8 z-20"/>
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
