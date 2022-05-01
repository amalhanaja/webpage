import Document, { Html, Main, NextScript, Head } from "next/document";

export default class CustomDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en_US">
                <Head>
                    {/* FONT */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

                    {/* FAVICON */}
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="msapplication-config" content="/browserconfig.xml" />
                    <meta name="msapplication-TileColor" content="#DF2935" />
                    <meta name="theme-color" content="#DF2935" />

                </Head>
                <body className="min-h-screen">
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        )
    }
}