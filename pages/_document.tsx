import { Html, Head, Main, NextScript } from "next/document";

import { siteMeta } from 'lib/constants'

export default function Document() {
    return (
        <Html>
            <Head lang={siteMeta.siteLang} />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}