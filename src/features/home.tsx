'use client'

import { LiveQueryProvider, useLiveQuery } from 'next-sanity/preview'
import { useMemo } from 'react'

import Card from '~/components/Card'
import { PreviewModeWrapper } from '~/components/preview-wrapper'
import Welcome from '~/components/Welcome'
import { getClient } from '~/lib/sanity.client'
import { Post } from '~/lib/sanity.queries'
import {
  getPosts,
  type Post as PostType,
  postsQuery,
} from '~/lib/sanity.queries'

type HomePageProps = {
  posts: PostType[]
  token: string
}

export function HomePageInner({ posts: postList, token }: HomePageProps) {
  const [posts] = useLiveQuery<Post[]>(postList, postsQuery)

  return (
    <PreviewModeWrapper token={token}>
      <section>
        {posts.length ? (
          posts.map((post) => <Card key={post._id} post={post} />)
        ) : (
          <Welcome />
        )}
      </section>
    </PreviewModeWrapper>
  )
}
