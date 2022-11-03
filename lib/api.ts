import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN ? process.env.SERVICE_DOMAIN : "domain",
  apiKey: process.env.API_KEY ? process.env.API_KEY : "key",
})

export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    })
    console.log(post.contents[0])
    return post.contents[0]
  } catch (err) {
    console.log('-- getPostBySlug --')
    console.log(err)
  }
}
