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
import { useMediaQuery } from 'react-responsive'

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

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 750px)'
      })
    return (
      <section style={styling}>
        <Head>
          <link rel="shortcut icon" href="/logo-white.png" />
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
      <Container maxW={'80rem'} height={'100vh'} pt={'8rem'} pb={'8rem'} verticalAlign={'center'}>
        <VStack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          display={'flex'}
          >
          <Heading
            fontWeight={600}
            fontSize={'32px'}
            lineHeight={'110%'}>
            Login to your account
          </Heading>
          <Text color={'#FFF'} fontSize={'16px'}>
            For now, the user dashboard can only be accessed through the CFund application,
            which is available in several marketplaces
            </Text>
            <HStack spacing='10px' pb={'90px'} >
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
            {isDesktopOrLaptop && 
              <Wrap style={{ position: 'absolute', display: 'flex', flex: '1', bottom: '0', width: '17rem'}}>
                    <Image src={phone}/>
              </Wrap>
            }
        </VStack>
      </Container>
      </section>
    );
  }
  
  