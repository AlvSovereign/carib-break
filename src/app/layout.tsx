import '~/styles/global.css'

import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Footer } from '~/components/ui/group/footer'
import { Header } from '~/components/ui/group/header'

type RootLayoutProps = PropsWithChildren<{}>

const sans = Inter({
  variable: '--font-family-sans',
  subsets: ['latin'],
  weight: ['500', '700', '800'],
})

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className={sans.className} lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
