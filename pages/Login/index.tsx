import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    HStack,
    Box,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import AppStoreBadge from '../../assets/images/ios.png';
  import PlayStoreBadge from '../../assets/images/android.png';
  import phone from '../../assets/images/phone-planet.png';
import Navbar from '../../components/Layout/Navbar/Navbar';

  export default function CallToActionWithIllustration() {
    const styling = {
      backgroundColor: '#011535',
      backgroundSize: 'cover',
      color: '#FFF',
  }
    return (
      <section style={styling}>
        <Navbar/>
      <Container maxW={'80rem'} height={'100vh'} pt={'8rem'} pb={'8rem'} verticalAlign={'center'}>
        <Stack
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
            Login to your accounct
          </Heading>
          <Text color={'#FFF'} fontSize={'16px'}>
            For now, the user dashboard can only be accessed through the CFund application,
            which is available in several marketplaces
            </Text>
            <HStack spacing='10px' pb={'90px'} >
                <Box>
                <a href="https://apps.apple.com/sg/app/cfund/id1580696846?l=id" target='_blank'>
                    <Image width={'150%'} height={'50%'} src={AppStoreBadge}/>
                </a>
                </Box>
                <Box>
                <a href="https://play.google.com/store/apps/details?id=id.cfund.app&hl=in&gl=US" target='_blank'>
                    <Image width={'175%'} height={'75%'} src={PlayStoreBadge}/>
                </a>
                </Box>
            </HStack>
            <Flex style={{ position: 'absolute', display: 'flex', flex: '1', bottom: '0px', height: '40%', width: '60%'}}>
                    <Image src={phone} />
            </Flex>

        </Stack>
      </Container>
      </section>
    );
  }
  
  