import React from 'react';
import Image from 'next/image';
import phone from '../../../assets/images/phone-planet.png';
import { Box, Container, Flex, Grid, GridItem, Heading, HStack, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react';
import AppStoreBadge from '../../../assets/images/ios.png';
import PlayStoreBadge from '../../../assets/images/android.png';
import bg from '../../../assets/images/bg-stardust.png'
import { useMediaQuery } from 'react-responsive'
import Running from './Running'

export default function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 750px)'
      })
      const isMobile = useMediaQuery({ query: '(max-width: 800px)' })
      
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        width:"stretch",
        height:"100vh",
        maxWidth: '100%',
        backgroundSize: 'cover',
    }
  return (
    <section style={styling}>
    <VStack 
    pt={'32px'}
    h={'stretch'}
    w={'stretch'} >
        <Container w={'100%'} h={'stretch'} maxW={'80rem'}>
            <SimpleGrid minChildWidth='120px' className="align-items-center">
            <GridItem alignItems={'center'}>
                <div>
                <Heading w={'stretch'} fontSize='2.88rem' color={'#01E8AA'} fontWeight={'700'} pt={'90px'} pb={'2rem'} lineHeight={'1.3'} fontFamily={'Poppins'}>
                The Best Management Firm Any Crypto Investor Can Dream of
                </Heading>
                <Text fontSize='16px' color={'#FFFFFF6a'} pb={'2rem'}>
                    Our costumized strategy makes crypto investing safer, easier, and more effective for you
                    </Text>
                    <HStack spacing='10px' pb={'90px'} >
                        <Box>
                        <a href="/download" target='_blank'>
                            <Image width={'150%'} height={'50%'} src={AppStoreBadge}/>
                        </a>
                        </Box>
                        <Box>
                        <a href="/download" target='_blank'>
                            <Image width={'175%'} height={'75%'} src={PlayStoreBadge}/>
                        </a>
                        </Box>
                    </HStack>
                </div>
            </GridItem>
            {isDesktopOrLaptop && 
                <GridItem verticalAlign={'bottom'}>  
                        {/* <Image src={phone} className="img-fluid mx-auto d-block"/>   */}
                        <Image src={phone} className="img-fluid mx-auto d-block"/>
                </GridItem>
            }

            </SimpleGrid>
        </Container>
        <Running />
      </VStack>
    </section>
  )
}
