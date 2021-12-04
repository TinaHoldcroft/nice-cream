import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        const lang = "en";
        
        return (
            <Html lang={lang}>
                <Head>
                    <meta charset="utf-8"/>
                    <script async src="https://kit.fontawesome.com/a83d77d417.js"/>
                    <meta name="theme-color" content="#FFFFFF"/>
                </Head>
                
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;