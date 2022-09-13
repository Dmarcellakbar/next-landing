import type { NextPage } from 'next'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/Layout/Navbar/Navbar'
import { Element } from 'react-scroll'
import Hero from '../components/Content/Hero/Hero'
import Performance from '../components/Content/Performance/Performance'
import Footer from '../components/Layout/Footer/Footer'
import Howto from '../components/Content/Howto/Howto'
import Moreinfo from '../components/Content/Moreinfo/Moreinfo'
import Faq from '../components/Content/FAQ/Faq'
import Terms from '../components/Content/Terms/Terms'
import News from '../components/Content/News/News'

const Home: NextPage = () => {

  return (
    <>
      <Navbar />
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
        <News />
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
