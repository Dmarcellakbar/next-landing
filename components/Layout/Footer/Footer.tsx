import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    useColorModeValue,
    chakra,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import Logo from '../../../assets/images/logo-white.png'
  import Image from 'next/image';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { Link } from 'react-scroll'

  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <section className="section position-relative">
      <Box
        fontFamily={'Poppins'}
        pt={'10%'}
        pb={'10%'}
        bg={useColorModeValue('#011535', '#011535')}
        color={useColorModeValue('gray.100', 'gray.100')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
                <Box>
                <Image
                    width={'80%'}
                    height={'80%'}
                    src={Logo}
                />
                </Box>
            </Stack>
            <Stack align={'flex-start'}>
              <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
                <Text>Sitemap</Text>
              </div>
              <Box cursor={'pointer'}>
              <Link to="section1" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text fontSize={'16px'} style={{ textAlign:'center', color: 'white' }}>Home</Text>
              </Link>
              </Box>
              <Box cursor={'pointer'}>
              <Link to="section2" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text fontSize={'16px'}  style={{ textAlign:'center', color: 'white' }}>Performance</Text>
              </Link>
              </Box>
              <Box cursor={'pointer'}>
              <Link to="section3" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text fontSize={'16px'}  style={{ textAlign:'center', color: 'white' }}>How to</Text>
              </Link>
              </Box>
              <Box cursor={'pointer'}>
              <Link to="section4" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text  fontSize={'16px'} style={{ textAlign:'center', color: 'white' }}>Terms</Text>
              </Link>
              </Box>
              <Box cursor={'pointer'}>
              <Link to="section5" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%' }}>
                <Text fontSize={'16px'} style={{ textAlign:'center', color: 'white' }}>News</Text>
              </Link>
              </Box>
              <Box cursor={'pointer'}>
              <Link to="section6" smooth={true} style={{ backgroundColor:'transparent', marginRight: '5%'}}>
                <Text fontSize={'16px'} style={{ textAlign:'center', color: 'white' }}>FAQ</Text>
              </Link>
              </Box>
            </Stack>
            <Stack align={'flex-start'}>
            <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
                <Text>Disclaimer</Text>
              </div>
              <a href={'https://info.cfund.me/terms-and-conditions/'} >Terms & Conditions</a>
              <a href={'https://info.cfund.me/terms-and-conditions/'} >Privacy Policy</a>
              <a href={'https://info.cfund.me/how-to-referrals/'} >How to Referrals</a>
            </Stack>
            <Stack align={'flex-start'}>
            <div style={{ fontWeight: 'bold', fontSize: '24px' }}>
                <Text>Social Media</Text>
              </div>
              <Stack direction={'row'} spacing={6}>
                {/* <SocialButton label={'Twitter'} href={'#'}>
                    <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                    <FaYoutube />
                </SocialButton> */}
                <SocialButton label={'Instagram'} href={'https://www.instagram.com/cfundasia/'}>
                    <FaInstagram />
                </SocialButton>
            </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Text pt={6} fontSize={'sm'} textAlign={'center'} color={'grey'}>
            © 2022 PT. Cuma Untuk Anak Negeri. All rights reserved
          </Text>
        </Box>
      </Box>
      </section>
    );
  }