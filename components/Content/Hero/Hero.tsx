import React from 'react';
import Image from 'next/image';
import phone from '../../../assets/images/phone-planet.png';
import AppStoreBadge from '../../../assets/images/appstore.png';
import PlayStoreBadge from '../../../assets/images/playstore.png';
import bg from '../../../assets/images/bg-stardust.png'
import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
    VStack,
  } from '@chakra-ui/react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive'
import Running from './Running'

export default function Hero() {
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        backgroundSize: 'cover',
        height: '100vh', 
        width: 'stretch',
        maxWidth: '100%',
        minWidth: '0'
    }
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
      })
      const isTablet = useMediaQuery({ query: '(max-width: 1000px)' })
      
  return (
    <section style={styling}>
    <VStack 
    h={'stretch'}
    pt={'32px'}
    p={'0'}
    className='fontStyle' 
    w={'stretch'} 
    align='stretch'>
        <Container w={'100%'} h={'stretch'} maxW={'80rem'} flexShrink={'auto'}>
        <SimpleGrid minChildWidth='120px' w={'100%'} h={'stretch'} maxW={'80rem'}>
           <Container w={'100%'} h={'stretch'}>
            <h1 style={{ fontSize: '2.88rem', color: '#01E8AA', fontWeight: '900', lineHeight: '1', paddingTop: '90px', paddingBottom:'2rem', width: 'stretch', maxWidth: '80rem', height: 'hug content' }}>
                The Best Management Firm Any Crypto Investor Can Dream of
            </h1>
            <Text fontSize={'16px'} color={'#FFFFFF'} style={{ paddingBottom:'2rem', maxWidth: '80rem', height: 'hug content' }}>
                Our costumized strategy makes crypto investing safer, easier, and more effective for you
            </Text>
                <HStack alignItems={'center'} direction={{ base: 'column', md: 'row' }} cursor={'pointer'} spacing={6} style={{ paddingTop: '2rem', paddingBottom:'90px', width: 'stretch', maxWidth: '100%', height: 'hug content' }}>
                    <Box>
                    <Link href="#" target='_blank'>
                        <Image width={'186px'} height={'55px'} src={AppStoreBadge}/>
                    </Link>
                    </Box>
                    <Box>
                    <Link href="#" target='_blank'>
                        <Image width={'186px'} height={'55px'} src={PlayStoreBadge}/>
                    </Link>
                    </Box>
                </HStack>
            </Container>
            {isDesktopOrLaptop &&
            <VStack w={'stretch'} maxW={'100%'} h={'100%'} verticalAlign={'bottom'}>
            <Image
                style={{ width: 'stretch', height: '100%', maxWidth: '100%' }}
                alt={'Login Image'}
                objectFit={'cover'}
                src={phone}
            />
            </VStack>
            }
        </SimpleGrid>
        </Container>
        <Running />
    </VStack>
    </section>
  )
}
