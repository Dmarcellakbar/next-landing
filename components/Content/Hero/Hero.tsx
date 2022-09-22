import React from 'react';
import Image from 'next/image';
import phone from '../../../assets/images/phone-planet.png';
import { Box, Container, GridItem, Heading, HStack, SimpleGrid,  Text, VStack, Wrap } from '@chakra-ui/react';
import AppStoreBadge from '../../../assets/images/ios.png';
import PlayStoreBadge from '../../../assets/images/android.png';
import bg from '../../../assets/images/bg-stardust.png'
import { useMediaQuery } from 'react-responsive'
import Running from './Running'
import Link from 'next/link';

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
    <Box style={styling}>
    <VStack 
    pt={'32px'}
    h={'stretch'}
    w={'stretch'} 
    position={'relative'}
    >
        <Container w={'100%'} h={'stretch'} maxW={'80rem'}
        display={'flex'}
        >
            <SimpleGrid 
            minChildWidth='120px' className="align-items-center"
            
            >
            <GridItem alignItems={'center'}
            display={'flex'}
            flex={'1'}
            >
                <Box>
                <Heading w={'stretch'} fontSize='2.88rem' color={'#01E8AA'} fontWeight={'700'} pt={'90px'} pb={'2rem'} lineHeight={'1.3'} fontFamily={'Poppins'}>
                The Best Management Firm Any Crypto Investor Can Dream of
                </Heading>
                <Text fontFamily={'Poppins'} fontSize='16px' color={'#FFFFFF6a'} >
                    Our costumized strategy makes crypto investing safer, easier, and more effective for you
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
                </Box>
            </GridItem>
            {isDesktopOrLaptop && 
                <GridItem 
                display={'flex'}
                flex={'1'}
                >  
                <Wrap style={{ position: 'absolute', display: 'flex', flex: '1', bottom: '50px' }}>
                        <Image  src={phone} />
                </Wrap>
                </GridItem>
            }

            </SimpleGrid>
        </Container>
        <Running />
      </VStack>
    </Box>
  )
}
