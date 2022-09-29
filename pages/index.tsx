import type { NextPage } from 'next'
import Navbar from '../components/Layout/Navbar/Navbar'
import { Element } from 'react-scroll'
import Hero from '../components/Content/Hero/Hero'
import Performance from '../components/Content/Performance/Performance'
import Footer from '../components/Layout/Footer/Footer'
import Howto from '../components/Content/Howto/Howto'
import Moreinfo from '../components/Content/Moreinfo/Moreinfo'
import Faq from '../components/Content/FAQ/Faq'
import Terms from '../components/Content/Terms/Terms'
import Crisp from '../components/Chat/crisp'
import Getnews from '../components/Content/News/Getnews'
import Head from 'next/head'


const Home: NextPage = () => {

  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/logo-white.png" />
    </Head>
      <Navbar />
      <Crisp/>
      <Element className="element" name="section1" >
        <Hero />
      </Element>
      <Element className="element" name="section2" >
        <Performance />
      </Element>
      <Element className="element" name="section3" >
        <Howto />
      </Element>
      <Element className="element" name="section4" >
        <Terms />
      </Element>
      <Element className="element" name="section5" >
        <Getnews />
      </Element>
      <Element className="element" name="section6" >
        <Faq/>
      </Element>

      <Moreinfo />
      <Footer />
    </>
  )
}

export default Home
