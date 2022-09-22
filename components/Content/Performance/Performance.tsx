import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  Button,
  Box,
} from '@chakra-ui/react';
import chartNew from '../../../assets/images/chart-new.png'
import Image from 'next/image';
import Link from 'next/link';

export default function SplitWithImage() {
  const styling = {
    backgroundColor: '#011535',
    backgroundSize: 'cover',
}
  return (
    <Box style={styling}>
    <Container maxW={'80rem'} pt={'8rem'} pb={'8rem'} verticalAlign={'center'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Flex>
        <Image src={chartNew}/>
      </Flex>
        <Stack spacing={4} align={'left'} verticalAlign={'middle'} alignContent={'center'}>
          <Heading mt={'6rem'} mb={'2rem'} fontSize='2.88rem' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>Our Performance</Heading>
          <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
            Our advanced risk management strategy allowed us to be consistenly
            profitable during both uptrend and downtrend.
            Digital assets such can provide highly lucrative return, yet they are much
            more volatile and possess higher risk compared to traditional asset classes.
            CFund manages your capital with rigorous position sizing, advanced trading
            strategy, and a conservative stop loss.
          </Text>
          <Box w={'auto'}>
          <Link href='Login' target='_blank'><Button id='button-test2' color={'white'} fontSize='16px' backgroundColor={'#ffa520'} p={'24px'} fontFamily={'Poppins'}>See Performance Details</Button></Link>
          </Box>
        </Stack>
        
      </SimpleGrid>
    </Container>
    </Box>
  );
}