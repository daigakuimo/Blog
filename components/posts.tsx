import styles from 'styles/posts.module.css'
import Link from 'next/link'
import { Post } from '../types'
import Image from 'next/image'

type Props = {
    posts: Post[]
}

export default function Posts({ posts }: Props) {
    return (
        <div className={styles.gridContainer}>
            {posts.map(({ title, slug, eyecatch }) => (
                <article className={styles.post} key={slug}>
                    <Link href={`/blog/${slug}`}>
                        <a>
                            <figure>
                                <Image
                                    key={eyecatch.url}
                                    src={eyecatch.url}
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    sizes="(min-width: 1152px) 576px, 50vw"
                                    placeholder="blur"
                                    blurDataURL={eyecatch.blurDataURL}
                                />
                            </figure>
                            <h2>{title}</h2>
                        </a>
                    </Link>
                </article>
            ))}
        </div>
    )
}
