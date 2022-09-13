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
    <section style={styling} >
    <VStack 
    verticalAlign={'bottom'}
    h={'stretch'}
    pt={'32px'}
    pb={'0'}
    className='fontStyle' 
    w={'stretch'} >
        <Container w={'100%'} h={'100%'} maxW={'80rem'} verticalAlign={'text-bottom'}>
        <SimpleGrid minChildWidth='120px' >
           <Container w={'100%'} h={'100%'} alignContent={'center'}>
            <Heading size='lg' fontSize='2.88rem' color={'#01E8AA'} pt={'90px'} lineHeight={'1.2'}>
            The Best Management Firm Any Crypto Investor Can Dream of
            </Heading>
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
            <VStack w={'stretch'} maxW={'100%'} h={'100%'} verticalAlign={'text-bottom'} >
            <Image
                style={{ width: 'stretch', height: '100%', maxWidth: '100%', position: 'absolute', bottom: '0' }}
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
