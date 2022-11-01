import Head from "next/head"
import { siteMeta } from 'lib/constants'
import { useRouter } from "next/router"
import siteImg from 'images/ogp.jpg'

type Props = {
    pageTitle?: string
    pageDesc?: string
    pageImg?: string
    pageImgW?: string
    pageImgH?: string
}

export default function Meta({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }: Props) {
    const title = pageTitle ? `${pageTitle} | ${siteMeta.siteTitle}` : siteMeta.siteTitle
    const desc = pageDesc ?? siteMeta.siteDesc
    const router = useRouter()
    const url = `${siteMeta.siteUrl}${router.asPath}`

    const img = pageImg || siteImg.src
    const imgW = pageImgW || `${siteImg.width}`
    const imgH = pageImgH || `${siteImg.height}`
    const imgUrl = img.startsWith('https') ? img : `${siteMeta.siteUrl}${img}`

    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta name="description" content={desc} />
            <meta property="og:description" content={desc} />

            <link rel="canonical" href={url} />
            <meta property="og:url" content={url} />

            <meta property="og:site_name" content={siteMeta.siteTitle} />
            <meta property="og:type" content={siteMeta.siteType} />
            <meta property="og:local" content={siteMeta.siteLocale} />

            <link rel="icon" href={siteMeta.siteIcon} />
            <link rel="apple-touch-icon" href={siteMeta.siteIcon} />

            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:height" content={imgH} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}