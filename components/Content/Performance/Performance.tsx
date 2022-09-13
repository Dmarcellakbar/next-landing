import React from 'react';
import Image from 'next/image';
import { Box, Text, VStack, Button, HStack, Container, SimpleGrid } from '@chakra-ui/react';
import chartNew from '../../../assets/images/chart-new.png'

export default function Performance() {
  const styling = {
    // backgroundImage: `url('${bg.src}')`,
    backgroundColor: '#011535',
    backgroundSize: 'cover',
    height: '100%', 
    width: 'stretch',
    maxWidth: '100%',
    minWidth: '0'
}
    return (
    <section style={styling}>
      <VStack 
      h={'stretch'}
      pt={'8rem'}
      pb={'8rem'}
      className='fontStyle' 
      w={'stretch'} 
      align='stretch'>
        <Container w={'100%'} h={'stretch'} maxW={'80rem'} flexShrink={'auto'} pt={'8rem'} pb={'8rem'}>
        <SimpleGrid columns={2} w={'100%'} h={'stretch'} maxW={'80rem'}>
           <Container w={'100%'} h={'stretch'}>
              <Box>
                <Image src={chartNew}/>
              </Box>
            </Container>

            <VStack w={'stretch'} maxW={'100%'} h={'100%'}>
            <Box>
              <br />
              <Text as={'b'} fontSize='2.88rem' color={'white'} lineHeight={'10'}>Our Performance</Text>
              <Text marginTop={10} marginBottom={10} fontSize='16px' color={'white'}>
                Our advanced risk management strategy allowed us to be consistenly
                profitable during both uptrend and downtrend.
                Digital assets such can provide highly lucrative return, yet they are much
                more volatile and possess higher risk compared to traditional asset classes.
                CFund manages your capital with rigorous position sizing, advanced trading
                strategy, and a conservative stop loss.
                </Text>
                <a href='/download' target='_blank'><Button color={'white'} fontSize='16px' backgroundColor={'#ffa520'} p={'24px'}>See Performance Details</Button></a>
            </Box>
            </VStack>
        </SimpleGrid>
        </Container>
    </VStack>
    </section>
  )
}
