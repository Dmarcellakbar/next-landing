import React from 'react';
import Image from 'next/image';
// import tophud from '../../../assets/images/top-hud.svg';
// import bothud from '../../../assets/images/bot-hud.svg';
// import chart from '../../../assets/images/chart.png'
import { Box, Text, VStack, Button, Container, GridItem, SimpleGrid } from '@chakra-ui/react';
// import bg from '../../../assets/images/bg-stardust.png'
// import Chart from './Chart/Chart'
import chartNew from '../../../assets/images/chart-new.png'

export default function Performance() {
      const styling = {
        backgroundColor: '#011535',
        width:"stretch",
        height:"stretch",
        maxWidth: '100%',
        backgroundSize: 'cover',
        paddingTop: '8rem', paddingBottom:'8rem'
    }
    return (
    <section style={styling}>
      <Container>
        <SimpleGrid minChildWidth='120px' className="align-items-center">
          <GridItem>
            <Box>
              <Image src={chartNew}/>
            </Box>
          </GridItem>

          <GridItem>
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
          </GridItem>
        </SimpleGrid>
      </Container>
    </section>
  )
}
