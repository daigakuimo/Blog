import { client, getPostBySlug } from 'lib/api'
import Container from '@/components/container'
import PostHeader from '@/components/post-header'

type Props = {
    title?: string
    publish?: string
    content?: string
    eyecatch?: string
    categories?: string
}

export default function Schedule({ title, publish, content, eyecatch, categories }: Props) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle={"Blog Article"} publish={publish} />
            </article>
        </Container>
    )
}

export async function getStaticProps() {
    const slug = 'schedule'

    const post = await getPostBySlug(slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    }
}