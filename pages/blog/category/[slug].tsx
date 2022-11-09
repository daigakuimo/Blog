import { getAllCategories, getAllPostsByCategories } from "lib/api";
import Container from "@/components/container";
import PostHeader from "@/components/post-header";
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { CategoryMeta, Post } from '../../../types'
import { eyecatchLocal } from "lib/constants";
import { getPlaiceholder } from "plaiceholder";
import Posts from "@/components/posts";
import Meta from "@/components/meta";

interface IParams extends ParsedUrlQuery {
    slug: string
}

type Props = {
    name: string,
    posts: Post[]
}

export default function Category({ name, posts }: Props) {
    return (
        <Container>
            <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
            <PostHeader title={name} subtitle="Blog Category" />
            <Posts posts={posts} />
        </Container>
    )
}

export async function getStaticPaths() {
    const allCategories = await getAllCategories() as CategoryMeta[]

    return {
        paths: allCategories.map(({ slug }) => `/blog/category/${slug}`),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { categorySlug } = context.params as IParams

    const allCategories = await getAllCategories() as CategoryMeta[]

    const category = allCategories.find(({ slug }) => slug === categorySlug)

    console.log("category : ", category)

    if (category === undefined) {
        return {
            props: {},
        }
    }

    const posts = await getAllPostsByCategories(category.id)
    for (const post of posts) {
        if (!post.hasOwnProperty('eyecatch')) {
            post.eyecatch = eyecatchLocal
        }

        const { base64 } = await getPlaiceholder(post.eyecatch.url)
        post.eyecatch.blurDataURL = base64
    }

    console.log("posts : ", posts)

    return {
        props: {
            name: category?.name,
            posts: posts
        },
    }
}
