import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    HStack,
    Box,
    Wrap,
    VStack,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import AppStoreBadge from '../assets/images/ios.png';
  import PlayStoreBadge from '../assets/images/android.png';
  import phone from '../assets/images/phone-planet.png';
import NavbarDefault from '../components/Layout/Navbar/NavbarDefault';
import Crisp from '../components/Chat/crisp';
import Head from 'next/head';
import Link from 'next/link'
import React, { useEffect }  from 'react';
import { motion, useAnimation } from "framer-motion";
import Particle from '../components/Animation/Particle';
import { useInView } from "react-intersection-observer";

  export default function CallToActionWithIllustration() {
    const styling = {
      backgroundColor: '#011535',
      backgroundSize: 'cover',
      color: '#FFF',
    }
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
      <section style={styling}>
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
        <div id="tsparticles">
         <Particle/>
         </div>
        <Link href="/">
          <Wrap>
            <NavbarDefault/>
          </Wrap>
        </Link>
        <Crisp/>
      <Container maxW={'80rem'} height={'100vh'} pt={'4rem'} verticalAlign={'center'}>
        <VStack
          textAlign={'center'}
          align={'center'}
          spacing={'4'}
          py={'4rem'}
          display={'flex'}
          >
          <Heading
            fontWeight={600}
            fontSize={'32px'}>
            Login to your account
          </Heading>
          <Text color={'#FFF'} fontSize={'16px'}>
            For now, the user dashboard can only be accessed through the CFund application,
            which is <br/> available in several marketplaces
            </Text>
            <HStack spacing='10px' pb={'30rem'} >
                <Box cursor={'pointer'}>
                <Link href="https://apps.apple.com/sg/app/cfund/id1580696846?l=id" target='_blank'>
                    <Image width={'150%'} height={'50%'} src={AppStoreBadge}/>
                </Link>
                </Box>
                <Box cursor={'pointer'}>
                <Link href="https://play.google.com/store/apps/details?id=id.cfund.app&hl=in&gl=US" target='_blank'>
                    <Image width={'175%'} height={'75%'} src={PlayStoreBadge}/>
                </Link>
                </Box>
            </HStack>
              <Wrap style={{ position: 'absolute', display: 'flex', flex: '1', bottom: '0', width: '30rem'}}>
                    <Image src={phone}/>
              </Wrap>
        </VStack>
      </Container>
      </section>
    );
  }
  
  