import '@/styles/global.css'
import '@/styles/home.css'
import '@/styles/navbar.css'
import '@/styles/contact.css'
import '@/styles/landing.css'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
