import { LiveQueryProvider } from 'next-sanity/preview'
import { useMemo } from 'react'

import { getClient } from '~/lib/sanity.client'

export const PreviewModeWrapper = ({
  children,
  token,
}: {
  children: React.ReactNode
  token: string
}) => {
  const client = useMemo(() => getClient({ token }), [token])

  if (token) {
    return (
      <LiveQueryProvider client={client} logger={console}>
        {children}
      </LiveQueryProvider>
    )
  }

  return <>{children}</>
}
