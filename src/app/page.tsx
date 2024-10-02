import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { draftMode } from 'next/headers'

import { HomePageInner } from '~/features/home'
import { readToken } from '~/lib/sanity.api'
import { getClient } from '~/lib/sanity.client'
import { getPosts } from '~/lib/sanity.queries'

export default async function IndexPage() {
  const client = getClient(draftMode() ? { token: readToken } : undefined)
  const posts = await getPosts(client)
  const token = draftMode() ? readToken : ''

  return <HomePageInner posts={posts} token={token} />
}
