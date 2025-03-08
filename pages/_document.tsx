import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
    render() {
        return (
            <Html className="h-full overflow-y-scroll" lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" sizes="any" />
                </Head>
                <body className="border-0 h-full m-0 p-0">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
