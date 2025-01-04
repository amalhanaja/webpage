import type {Metadata} from 'next';
import {Archivo, Space_Mono} from 'next/font/google';
import './globals.css';
import {Nav} from '@/components/blocks/nav';
import {ThemeToggle} from '@/components/theme-toggle';
import {ThemeProvider} from '@/components/theme-provider';
import {cn} from '@/lib/utils';
import {CanvasCursor} from '@/components/canvas-cursor';
import {Footer} from '@/components/blocks/footer';

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

export const metadata: Metadata = {
    title: 'Alfian Akmal Hanantio - Software Engineer',
    description: 'Building secure, scalable, and accessible digital products for enterprises and fintech industries.'
};

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
            <CanvasCursor/>
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
