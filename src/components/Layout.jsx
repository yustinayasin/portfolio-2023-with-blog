import Navbar from "./Navbar"

export default function Layout ({ Component, pageProps }) {
    return (
        <>
            <Navbar/>
            <Component {...pageProps} />
        </>
    )
}