import Link from 'next/link';

export default function Navbar () {
    return(
        <nav>
            <Link href="/" className="navbar-name">YUSTINA YASIN</Link>
            <ul className="navbar-menu">
                <li>
                    <Link href="/">FLOATING LAPTOP</Link>
                </li>
                {/* <li>
                    <Link href="">PROJECTS</Link>
                </li> */}
                <li>
                    <Link href="/blog">BLOG</Link>
                </li>
                <li>
                    <Link href="">PROFILE</Link>
                </li>
                <li>
                    <Link href="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
    )
}