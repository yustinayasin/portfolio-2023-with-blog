import Link from 'next/link';

export default function Overlay ()
{
    return(
        <>
            <Link href="/blog"
                style={{
                    position: 'absolute', 
                    bottom: 30, 
                    right: 50,
                    fontSize: '25px',
                    color: 'white',
                    fontWeight: 600,
                    fontFamily: 'sans-serif',
                    textDecoration: 'underline',
                    textUnderlineOffset: '0.25em',
                    textDecorationThickness: 2,
                    cursor: 'pointer'
                }}
            >
                Blog
            </Link>
        </>
    )
}