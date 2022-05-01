import Document, { Html, Main, NextScript, Head } from "next/document";

export default class CustomDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
                </Head>
                <body className="min-h-screen">
                    <Main></Main>
                    <NextScript />
                </body>
            </Html>
        )
    }
}