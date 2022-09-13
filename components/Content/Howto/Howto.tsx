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
  import chartNew from '../../../assets/images/chart-new.png'
  import bg from '../../../assets/images/bg-how-to.png'
  import Image from 'next/image';
  import Identity from '../../../assets/images/identity.png';
  import Agreement from '../../../assets/images/agreement.png';
  import Aum from '../../../assets/images/aum-icon.png';
  
  export default function SplitWithImage() {
    const styling = {
        backgroundImage: `url('${bg.src}')`,
        backgroundSize: 'cover',
    }
    return (
      <section style={styling}>
      <Container maxW={'80rem'} pt={'8rem'} pb={'8rem'} verticalAlign={'center'}>
      <VStack spacing={2} textAlign="center" mb={'4rem'}>
        <Heading as="h1" color={'white'} fontSize="2.88rem" fontWeight={'bold'} fontFamily='Poppins'>
            Get into Digital Asset Market With Us!
        </Heading>
        <Text fontSize="32px" color={'white'} fontWeight={'bold'} fontFamily='Poppins' mb={'2rem'}>
            Onboarding process
        </Text>
      </VStack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} textAlign="center" > 
            <Box
            role={'group'}
            p={6}
            w={'100%'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            bg={'rgba(1, 38, 76, 0.5)'}
            >
                <Stack textAlign={'center'} spacing={4} align={'center'} verticalAlign={'middle'} alignContent={'center'}>
                    <Box>
                        <Image src={Identity} style={{ width: '15rem', maxWidth: '100%', height: 'auto' }}/>
                    </Box>
                    <Heading mt={'2rem'} mb={'2rem'} fontSize='20px' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>
                        Registration and Identification
                    </Heading>
                    <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
                    Prospective customer can contact us to have a
                    consultation whether investing in digital asset with
                    us aligns with their risk appetite, financial profile,
                    and investment objective.
                    One they are successfully evaulated and their
                    eligibility confirmed, we will provide them detailed
                    information about the investment.
                    </Text>
                </Stack>
            </Box>
            
            <Box
            role={'group'}
            p={6}
            w={'100%'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            bg={'rgba(1, 38, 76, 0.5)'}
            >
                <Stack textAlign={'center'} spacing={4} align={'center'} verticalAlign={'middle'} alignContent={'center'}>
                    <Box>
                        <Image src={Agreement} style={{ width: '15rem', maxWidth: '100%', height: 'auto' }}/>
                    </Box>
                    <Heading mt={'2rem'} mb={'2rem'} fontSize='20px' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>
                    Product Selection and Agreement
                    </Heading>
                    <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
                    The next step is formulate a contractual
                    agreement between CFund and the investor.
                    The investor may select the desired investment
                    product that fit their objective. They will also be
                    informed about the condition, performance objectives, as well as the risk involved.
                    finally, an agreement between CFund and the investor will be signed under a prepared contract.
                    Finally, the contract between the investor and ARK36 is prepared and signed.
                    </Text>
                </Stack>
            </Box>

            <Box
            role={'group'}
            p={6}
            w={'100%'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            bg={'rgba(1, 38, 76, 0.5)'}
            >
                <Stack textAlign={'center'} spacing={4} align={'center'} verticalAlign={'middle'} alignContent={'center'}>
                    <Box>
                        <Image src={Aum} style={{ width: '15rem', maxWidth: '100%', height: 'auto' }}/>
                    </Box>
                    <Heading mt={'2rem'} mb={'2rem'} fontSize='20px' color={'#FFF'} fontWeight={'700'} fontFamily={'Poppins'}>
                        Assets Under Management
                    </Heading>
                    <Text color={'white'} fontSize={'16px'} fontFamily={'Poppins'}>
                    Once all the paperwork is signed, the investor can deposit their investment. Deposits can be made in
                    fiat or cyptocurrencies. Hence, the fund management starts.
                    The investor will now recieve access to a periodic
                    report to keep track of their investment's performance.
                    </Text>
                </Stack>
            </Box>
          
        </SimpleGrid>
      </Container>
      </section>
    );
  }