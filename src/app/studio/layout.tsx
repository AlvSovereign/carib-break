import { metadata } from 'next-sanity/studio/metadata'
import { PropsWithChildren } from 'react'

type StudioLayoutProps = PropsWithChildren<{}>

export async function generateMetadata() {
  return Object.entries(metadata).map(([key, value]) => (
    <meta key={key} name={key} content={value} />
  ))
}

export default function StudioLayout({ children }: StudioLayoutProps) {
  return <>{children}</>
}
