export interface imageObj {
  url: string
  blurDataURL: string
  width: number
  height: number
}

export interface Post {
  title: string,
  slug: string,
  eyecatch: imageObj
}

export interface CategoryMeta {
  name: string,
  id: string,
  slug: string
}