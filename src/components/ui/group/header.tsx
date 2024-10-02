import Link from 'next/link'

type HeaderProps = {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className="header">
      <Link className="header__title" href="/">
        Next.js + Sanity
      </Link>
    </header>
  )
}
