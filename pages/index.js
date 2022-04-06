import LandingPage from "../components/LandingPage"
import Layout from "../components/layout"
import Head from 'next/head'


export default function Home() {
  return (
    <Layout>
      <Head>
        <script src="//widget.manychat.com/380889_99347.js" defer="defer"></script>
        <script src="https://mccdn.me/assets/js/widget.js" defer="defer"></script>
      </Head>
      <LandingPage />
    </Layout>
  )
}

