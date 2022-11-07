import parse, { Element } from 'html-react-parser'
import Image from 'next/image'


type Props = {
    contentHTML?: string
}


export default function ConvertBody({ contentHTML = "" }: Props) {
    const contentReact = parse(contentHTML, {
        replace: node => {
            if (node instanceof Element && node.name === 'img') {
                const { src, alt, width, height } = node.attribs
                return <Image src={src} width={width} height={height} alt={alt} />
            }
        }
    })

    return <>{contentReact}</>
}