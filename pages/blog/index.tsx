import Container from '@/components/container'
import Hero from '@/components/hero'
import Posts from '@/components/posts'
import { getAllPosts } from 'lib/api'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { Post } from '../../types'

type Props = {
    posts: Post[]
}

export default function Blog({ posts }: Props) {
    return (
        <Container>
            <Hero
                title="Blog"
                subtitle="Recent Posts"
            />

            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticProps() {
    const posts = await getAllPosts()

    for (const post of posts) {
        if (!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }

        const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }
    return {
        props: {
            posts: posts
        }
    }
}