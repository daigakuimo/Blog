import { getAllSlugs, getPostBySlug } from 'lib/api'
import Container from '@/components/container'
import PostHeader from '@/components/post-header'
import ConvertBody from '@/components/convert-body'
import { extractText } from '@/components/extract-text'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from '@/components/two-column'
import Image from 'next/image'
import PostBody from '@/components/post-body'
import PostCategories from '@/components/post-categories'
import Meta from '@/components/meta'
import { eyecatchLocal } from 'lib/constants'
import { getPlaiceholder } from 'plaiceholder'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { content, prevNextPost } from 'lib/prev-next-post'
import Pagination from '@/components/pagination'
import { CategoryMeta } from '../../types'

interface imageObj {
    url: string
    blurDataURL: string
    width: number
    height: number
}

type Props = {
    title?: string
    publish?: string
    content?: string
    eyecatch?: imageObj
    categories?: CategoryMeta[]
    description?: string
    prevPost: content
    nextPost: content
}

interface IParams extends ParsedUrlQuery {
    slug: string
}


export default function Post({ title, publish, content, eyecatch, categories, description, prevPost, nextPost }: Props) {
    return (
        <Container>
            <Meta
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecatch?.url}
                pageImgW={eyecatch?.width.toString()}
                pageImgH={eyecatch?.height.toString()}
            />
            <article>
                <PostHeader title={title} subtitle={"Blog Article"} publish={publish} />
                {eyecatch && (<figure>
                    <Image
                        src={eyecatch.url}
                        alt=''
                        layout='responsive'
                        width={eyecatch.width}
                        height={eyecatch.height}
                        sizes="(min-width:1152px) 1152px, 100vw"
                        priority
                    />
                </figure>)}

                <TwoColumn>
                    <TwoColumnMain>
                        <PostBody>
                            <ConvertBody contentHTML={content} />
                        </PostBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar>
                        <PostCategories categories={categories} />
                    </TwoColumnSidebar>
                </TwoColumn>

                <Pagination
                    prevText={prevPost.title}
                    prevUrl={`/blog/${prevPost.slug}`}
                    nextText={nextPost.title}
                    nextUrl={`/blog/${nextPost.slug}`}
                />
            </article>
        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const allSlugs = await getAllSlugs() as content[]
    return {
        paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams

    const post = await getPostBySlug(slug)

    const eyecatch = post.eyecatch ?? eyecatchLocal

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const description = extractText(post.content)

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
            prevPost: prevPost,
            nextPost: nextPost,
        },
    }
}