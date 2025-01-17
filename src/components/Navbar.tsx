import Link from "next/link"

type NavbarProps = {
  links: {label: string, href: string}[]
}

export default function Navbar({links}: NavbarProps) {
  return (
    <nav>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href}>
            {link.label}
          </Link>
        </li>
      ))}
      </ul>
      </nav>
  )
}
