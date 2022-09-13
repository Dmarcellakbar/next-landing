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

const Home: NextPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1000px)' })
  
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
      <Element className="element" name="section6" >
        <Faq/>
      </Element>
      <Moreinfo />
      <Footer />
    </>
  )
}

export default Home
