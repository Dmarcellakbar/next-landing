import {
    Container,
    SimpleGrid,
    Flex,
    Heading,
    Text,
    Stack,
    Button,
    VStack,
    Box,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import bg from '../../../assets/images/bg-fee.png'
  import cycle from '../../../assets/images/cycle-ilustration.png';
  import { useMediaQuery } from 'react-responsive'

  export default function Terms() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 900px)'
      })
      const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
      
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        backgroundSize: 'cover',
    }
    return (
      <Box style={styling}>
      <Container maxW={'80rem'} pt={'8rem'} pb={'8rem'} verticalAlign={'center'}>
      {isDesktopOrLaptop &&
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        
          <Stack spacing={4} align={'left'} verticalAlign={'middle'} alignContent={'center'}>
            <Heading mt={'6rem'} mb={'2rem'} fontSize='2.88rem' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>
                Fee Structure & Terms 
            </Heading>
            <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
                The fee structure for CFUND portfolio management services consists of 2%
                management fee, which is deducted from the initial investment value, and 20% performance fee deducted from the profit made during the fund
                management process. In addition, CFund improses a locking period for the investor's fund, starting from quarterly basis.    
            </Text>
          </Stack>
        <Flex>
          <Image src={cycle}/>
        </Flex>
        </SimpleGrid>
        }

        {isMobile &&
        <VStack>
        <Flex>
          <Image src={cycle}/>
        </Flex>
          <Stack spacing={4} align={'left'} verticalAlign={'middle'} alignContent={'center'}>
            <Heading mt={'6rem'} mb={'2rem'} fontSize='2.88rem' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>
                Fee Structure & Terms 
            </Heading>
            <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
                The fee structure for CFUND portfolio management services consists of 2%
                management fee, which is deducted from the initial investment value, and 20% performance fee deducted from the profit made during the fund
                management process. In addition, CFund improses a locking period for the investor's fund, starting from quarterly basis.    
            </Text>
          </Stack>
        </VStack>
        }

      </Container>
      </Box>
    );
  }