import type { NextPage } from 'next'
import Navbar from '../components/Layout/Navbar/Navbar'
import { Element } from 'react-scroll'
import Hero from '../components/Content/Hero/Hero'
import Performance from '../components/Content/Performance/Performance'
import Footer from '../components/Layout/Footer/Footer'
import Howto from '../components/Content/Howto/Howto'
import Moreinfo from '../components/Content/Moreinfo/More'
import Faq from '../components/Content/FAQ/Faq'
import Terms from '../components/Content/Terms/Terms'
import Crisp from '../components/Chat/crisp'
import Getnews from '../components/Content/News/Getnews'
import Head from 'next/head'


function IndexPage() {

  return (
    <div>
    <Head>
      <link rel="shortcut icon" href="/logo-white.png" />
      <title>The Best Management Firm Any Crypto Investor Can Dream of</title>
      <meta name="description" content="Our costumized strategy makes crypto investing safer, easier, and more effective for you"/>
      <meta property="image" content="https://cdn.discordapp.com/attachments/987355942825894028/1033972993854033970/op-image-cfund.png"/>
      <meta property="url" content="https://cfund.asia"/>

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:title" content="The Best Management Firm Any Crypto Investor Can Dream of" />
      <meta property="og:description" content="Our costumized strategy makes crypto investing safer, easier, and more effective for you"/>
      <meta property="og:image" content="https://cdn.discordapp.com/attachments/987355942825894028/1033972993854033970/op-image-cfund.png"/>
      <meta property="og:url" content="https://cfund.asia"/>
      <meta property="og:type" content="website"/>

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="cfund.asia"/>
      <meta property="twitter:url" content="https://cfund.asia"/>
      <meta name="twitter:title" content="The Best Management Firm Any Crypto Investor Can Dream of"/>
      <meta name="twitter:description" content="Our costumized strategy makes crypto investing safer, easier, and more effective for you"/>
      <meta name="twitter:image" content="https://cdn.discordapp.com/attachments/987355942825894028/1033972993854033970/op-image-cfund.png"/>
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
    </div>
  )
}

export default IndexPage
